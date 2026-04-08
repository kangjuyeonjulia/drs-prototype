import { useState, useEffect } from 'react';

const allProjects = [
  {
    id: 1,
    title: "[Let's Get Rich] 260407 RO x LGR",
    status: '진행중',
    category: 'VX',
    date: '요청일: 2026.04.07',
    requester: { name: 'Sirichai Chin', avatar: '👤' },
    designer: { name: 'Phongamphai ...', avatar: '👤' },
    dDay: 'D-10',
    comments: 0,
    timeAgo: '1시간 전',
  },
  {
    id: 2,
    title: '[BE] FC_5/6月信用卡平台活動',
    status: '진행중',
    category: 'VX',
    date: '요청일: 2026.04.07',
    requester: { name: 'Wong Nicky', avatar: '👤' },
    designer: { name: 'Tsai HsiangLan', avatar: '👤' },
    dDay: 'D-16',
    comments: 0,
    timeAgo: '4시간 전',
  },
  {
    id: 3,
    title: 'LINE Bubble 2 External banners_May-July 2026',
    status: '진행중',
    category: 'VX',
    date: '요청일: 2026.04.07',
    requester: { name: 'Harmpattanakij ...', avatar: '👤' },
    designer: { name: 'Phongamphai ...', avatar: '👤' },
    dDay: 'D-16',
    comments: 0,
    timeAgo: '4월 7일',
  },
  {
    id: 4,
    title: 'LCM - Wuukie & Soya',
    status: '진행중',
    category: 'VX',
    date: '요청일: 2026.04.07',
    requester: { name: 'Fajarniani, Wula...', avatar: '👤' },
    designer: { name: 'Halim, Gabby T-...', avatar: '👤' },
    dDay: 'D-10',
    comments: 1,
    timeAgo: '4월 6일',
  },
  {
    id: 5,
    title: 'Brown Character SNS Campaign',
    status: '진행중',
    category: 'Marketing',
    date: '요청일: 2026.04.08',
    requester: { name: 'Kim Minji', avatar: '👤' },
    designer: { name: 'Lee Junho', avatar: '👤' },
    dDay: 'D-5',
    comments: 2,
    timeAgo: '방금 전',
  },
  {
    id: 6,
    title: 'LINE MANGA New IP Design',
    status: '진행중',
    category: 'UX',
    date: '요청일: 2026.04.08',
    requester: { name: 'Tanaka Yuki', avatar: '👤' },
    designer: { name: 'Sato Kenji', avatar: '👤' },
    dDay: 'D-8',
    comments: 0,
    timeAgo: '30분 전',
  },
  {
    id: 7,
    title: 'Cony Sticker Pack Vol.12',
    status: '진행중',
    category: 'VX',
    date: '요청일: 2026.04.08',
    requester: { name: 'Park Sora', avatar: '👤' },
    designer: { name: 'Choi Yuna', avatar: '👤' },
    dDay: 'D-12',
    comments: 3,
    timeAgo: '2시간 전',
  },
  {
    id: 8,
    title: 'LYP Premium Event Page',
    status: '진행중',
    category: 'UX',
    date: '요청일: 2026.04.08',
    requester: { name: 'Chen Wei', avatar: '👤' },
    designer: { name: 'Wang Li', avatar: '👤' },
    dDay: 'D-7',
    comments: 1,
    timeAgo: '5시간 전',
  },
];

export default function OngoingProjects() {
  const [visibleProjects, setVisibleProjects] = useState(allProjects.slice(0, 4));
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => {
        const next = (prev + 1) % allProjects.length;
        const newProjects = [
          allProjects[next],
          allProjects[(next + 1) % allProjects.length],
          allProjects[(next + 2) % allProjects.length],
          allProjects[(next + 3) % allProjects.length],
        ];
        setVisibleProjects(newProjects);
        return next;
      });
    }, 5000); // Change projects every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-center gap-3 mb-12">
        <h2 className="text-5xl font-bold text-gray-900 text-center">Recent Requests</h2>
        <span className="flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full animate-pulse">
          <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping" />
          LIVE
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleProjects.map((project, index) => (
          <div
            key={`${project.id}-${startIndex}`}
            className={`bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-all cursor-pointer ${
              index === 0 ? 'animate-slide-up ring-2 ring-primary/20' : ''
            }`}
          >
            <div className="flex items-start gap-2 mb-3">
              <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded">
                {project.status}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                {project.category}
              </span>
              <span className="ml-auto text-xs text-gray-500 font-medium">
                {project.timeAgo}
              </span>
            </div>

            <h4 className="text-base font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">
              {project.title}
            </h4>

            <p className="text-sm text-gray-500 mb-4">{project.date}</p>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{project.requester.avatar}</span>
                <div>
                  <p className="text-xs text-gray-500">의뢰자</p>
                  <p className="text-xs font-medium text-gray-700 truncate">
                    {project.requester.name}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{project.designer.avatar}</span>
                <div>
                  <p className="text-xs text-gray-500">디자이너</p>
                  <p className="text-xs font-medium text-gray-700 truncate">
                    {project.designer.name}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <span>⏱</span> {project.dDay}
              </span>
              <span className="flex items-center gap-1">
                <span>💬</span> {project.comments}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
