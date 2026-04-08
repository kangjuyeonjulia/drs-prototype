import { useState, useEffect, useRef } from 'react';
import { Bell } from 'lucide-react';
import { notifications } from '../../data/dashboardData';

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed top-6 right-6 z-50" ref={dropdownRef}>
      {/* Bell Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        <Bell size={24} className="text-gray-700" />
        {notifications.length > 0 && (
          <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-96 bg-white rounded-xl shadow-2xl overflow-hidden animate-slide-up">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">알림</h3>
            <p className="text-sm text-gray-500">{notifications.length}개의 새 알림</p>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">👤</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">
                      <span className="font-semibold">{notification.user}</span>님이{' '}
                      {notification.action}
                    </p>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-1">
                      {notification.project}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
            <button className="text-sm text-primary hover:text-primary-dark font-medium">
              모든 알림 보기 →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
