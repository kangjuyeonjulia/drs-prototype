import { Home, FileText, Users, Settings, PlusCircle } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'requests', label: '요청 관리', icon: FileText },
    { id: 'team', label: '팀 관리', icon: Users },
    { id: 'settings', label: '설정', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">DRS</h1>
        <p className="text-xs text-gray-500 mt-1">Design Request System</p>
      </div>

      {/* New Request Button */}
      <div className="p-4">
        <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium py-3 px-4 rounded-lg transition-colors">
          <PlusCircle size={20} />
          새 요청 만들기
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-left"
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-primary font-bold">U</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-800 truncate">User</p>
            <p className="text-xs text-gray-500 truncate">user@linecorp.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
