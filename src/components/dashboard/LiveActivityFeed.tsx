import { useState, useEffect } from 'react';

const activities = [
  {
    id: 1,
    action: '요청 승인됨',
    target: 'Brown 캐릭터 배너 디자인',
    time: '방금 전',
    icon: '✓',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    id: 2,
    action: '디자인 시작',
    target: 'LYP Premium UI 작업',
    time: '2분 전',
    icon: '✎',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    id: 3,
    action: '작업 완료',
    target: '일본팀 배너 제작',
    time: '5분 전',
    icon: '★',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    id: 4,
    action: '리뷰 진행중',
    target: 'Cony 이벤트 페이지',
    time: '8분 전',
    icon: '◉',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    id: 5,
    action: '긴급 요청',
    target: 'Sally 캐릭터 3종 배너',
    time: '12분 전',
    icon: '⚡',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    id: 6,
    action: '피드백 반영',
    target: 'LINE Game 프로모션',
    time: '15분 전',
    icon: '↻',
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
  },
  {
    id: 7,
    action: '최종 승인',
    target: 'Manga 신규 IP 소개',
    time: '18분 전',
    icon: '✓',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
];

export default function LiveActivityFeed() {
  const [visibleActivities, setVisibleActivities] = useState(activities.slice(0, 5));
  const [currentIndex, setCurrentIndex] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % activities.length;
        setVisibleActivities((current) => {
          const newActivities = [...current.slice(1), activities[next]];
          return newActivities;
        });
        return next;
      });
    }, 4000); // New activity every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-2xl font-bold text-gray-900">실시간 활동</h3>
          <span className="flex items-center gap-1.5 px-2.5 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
            <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse" />
            LIVE
          </span>
        </div>

        <div className="space-y-2">
          {visibleActivities.map((activity, index) => (
            <div
              key={`${activity.id}-${index}`}
              className="flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
              style={{
                animation: index === visibleActivities.length - 1 ? 'slideIn 0.5s ease-out' : 'none',
              }}
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${activity.bgColor}`}>
                <span className={`text-lg ${activity.color} font-bold`}>{activity.icon}</span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-gray-900">{activity.action}</span>
                  <span className="text-sm text-gray-600 truncate">{activity.target}</span>
                </div>
              </div>

              <div className="text-xs text-gray-500 font-medium whitespace-nowrap">
                {activity.time}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
