import { Grid3x3, List, Search } from 'lucide-react';
import { useState } from 'react';
import Sidebar from './Sidebar';

const workItems = [
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
  },
  {
    id: 5,
    title: 'VX Design Request Example',
    status: '진행중',
    category: 'VX',
    date: '요청일: 2026.04.06',
    requester: { name: 'Kim Min-ji', avatar: '👤' },
    designer: { name: 'Lee Seung-ho', avatar: '👤' },
    dDay: 'D-8',
    comments: 2,
  },
  {
    id: 6,
    title: 'UI Component Library Update',
    status: '진행중',
    category: 'UI',
    date: '요청일: 2026.04.05',
    requester: { name: 'Park Ji-won', avatar: '👤' },
    designer: { name: 'Choi Yeon-seo', avatar: '👤' },
    dDay: 'D-12',
    comments: 3,
  },
];

export default function WorkList() {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="flex h-full overflow-hidden">
      {/* LNB - Left Navigation Bar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800">업무/의뢰 리스트</h2>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                {showFilters ? '필터 숨기기' : '필터 보기'}
              </button>
              <span className="text-sm text-gray-600">View 10</span>
              <button className="p-2 border border-gray-300 rounded bg-white hover:bg-gray-50">
                <Grid3x3 size={20} className="text-primary" />
              </button>
              <button className="p-2 border border-gray-300 rounded bg-white hover:bg-gray-50">
                <List size={20} className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 mb-6 border-b border-gray-200">
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:border-b-2 hover:border-gray-400">
              전체<span className="ml-1 text-xs text-gray-400">(39890)</span>
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:border-b-2 hover:border-gray-400">
              신규<span className="ml-1 text-xs text-gray-400">(245)</span>
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-gray-800 border-b-2 border-gray-800">
              진행중<span className="ml-1 text-xs">(877)</span>
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:border-b-2 hover:border-gray-400">
              종료<span className="ml-1 text-xs text-gray-400">(36800)</span>
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:border-b-2 hover:border-gray-400">
              반려<span className="ml-1 text-xs text-gray-400">(1968)</span>
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:border-b-2 hover:border-gray-400">
              My Work<span className="ml-1 text-xs text-gray-400">(1)</span>
            </button>
            <button className="ml-auto px-4 py-2 text-sm text-yellow-600">
              ⭐ 83
            </button>
          </div>

          {/* Work Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-start gap-2 mb-3">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded">
                    {item.status}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                    {item.category}
                  </span>
                  <button className="ml-auto text-gray-400 hover:text-yellow-500">⭐</button>
                </div>

                <h3 className="text-base font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mb-4">{item.date}</p>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{item.requester.avatar}</span>
                    <div>
                      <p className="text-xs text-gray-500">의뢰자</p>
                      <p className="text-xs font-medium text-gray-700 truncate">
                        {item.requester.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{item.designer.avatar}</span>
                    <div>
                      <p className="text-xs text-gray-500">디자이너</p>
                      <p className="text-xs font-medium text-gray-700 truncate">
                        {item.designer.name}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <span>⏱</span> {item.dDay}
                  </span>
                  <span className="flex items-center gap-1">
                    <span>💬</span> {item.comments}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Filter Panel */}
        {showFilters && (
          <div className="w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto flex-shrink-0">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">상세 검색</h3>

            <div className="space-y-6">
              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="제목, 요청자, 팀으로 검색하기"
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Search size={18} className="absolute right-3 top-2.5 text-gray-400" />
              </div>

              {/* Category */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">카테고리</h4>
                <div className="space-y-2">
                  {['VX', 'LDS', 'Multimedia', 'Design Communication', 'Space'].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                      <span className="text-sm text-gray-700">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">정렬순</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="status"
                      className="text-primary focus:ring-primary"
                      defaultChecked
                    />
                    <span className="text-sm text-gray-700">담당 상태</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="status" className="text-primary focus:ring-primary" />
                    <span className="text-sm text-gray-700">최신순</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="status" className="text-primary focus:ring-primary" />
                    <span className="text-sm text-gray-700">마감일순</span>
                  </label>
                </div>
              </div>

              {/* Department */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">담당팀</h4>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>선택</option>
                  <option>VX Design Team</option>
                  <option>UI Design Team</option>
                  <option>Multimedia Team</option>
                </select>
              </div>

              {/* Date Range */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">시작일</h4>
                <input
                  type="date"
                  defaultValue="2026-03-09"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">종료일</h4>
                <input
                  type="date"
                  defaultValue="2026-04-07"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Search Button */}
              <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors">
                검색
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
