import { useState, useEffect } from 'react';
import { Bell, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { notifications as initialNotifications } from '../../data/dashboardData';

const allNotifications = [
  ...initialNotifications,
  {
    id: 5,
    user: '이승호',
    action: '파일을 업로드했습니다',
    project: 'VX Design Component Library',
    time: '방금 전',
  },
  {
    id: 6,
    user: 'Halim Gabby',
    action: '프로젝트를 시작했습니다',
    project: 'LCM Character Design',
    time: '1분 전',
  },
  {
    id: 7,
    user: '최연서',
    action: '리뷰를 요청했습니다',
    project: 'UI Animation Prototype',
    time: '2분 전',
  },
];

export default function NotificationCards() {
  const [visibleNotifications, setVisibleNotifications] = useState(initialNotifications);

  useEffect(() => {
    let currentIndex = initialNotifications.length;

    const interval = setInterval(() => {
      if (currentIndex < allNotifications.length) {
        setVisibleNotifications((prev) => {
          const newNotif = allNotifications[currentIndex];
          return [newNotif, ...prev.slice(0, 3)];
        });
        currentIndex++;
      } else {
        // Reset and loop
        currentIndex = 0;
        setVisibleNotifications(initialNotifications);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getIcon = (action: string) => {
    if (action.includes('댓글')) return MessageCircle;
    if (action.includes('승인') || action.includes('완료')) return CheckCircle;
    return AlertCircle;
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <Bell size={24} className="text-gray-900 animate-pulse" />
        <h3 className="text-2xl font-bold text-gray-900">실시간 알림</h3>
        <span className="ml-auto px-2 py-0.5 bg-red-100 text-red-600 text-xs font-semibold rounded-full animate-pulse">
          {visibleNotifications.length} NEW
        </span>
      </div>

      <div className="space-y-2">
        {visibleNotifications.map((notification, index) => {
          const Icon = getIcon(notification.action);
          return (
            <div
              key={`${notification.id}-${index}`}
              className={`flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all cursor-pointer group ${
                index === 0 ? 'animate-slide-up ring-2 ring-primary/20' : ''
              }`}
            >
              {/* Icon */}
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Icon size={14} className="text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-800">
                  <span className="font-bold text-gray-900">{notification.user}</span>님이{' '}
                  {notification.action}
                </p>
                <p className="text-xs text-gray-600 mt-0.5 truncate">
                  {notification.project}
                </p>
                <p className="text-[10px] text-gray-400 mt-1">{notification.time}</p>
              </div>

              {/* Badge */}
              {index === 0 && (
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 animate-pulse" />
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
