import { Globe, User } from 'lucide-react';

interface HeaderProps {
  activeView: 'dashboard' | 'worklist';
  onViewChange: (view: 'dashboard' | 'worklist') => void;
}

export default function Header({ activeView, onViewChange }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-semibold text-gray-800">
          Design Request System
        </h1>

        {/* Center Toggle */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-3">
          <button
            onClick={() => onViewChange('dashboard')}
            className={`text-sm font-medium transition-colors ${
              activeView === 'dashboard' ? 'text-gray-800' : 'text-gray-400'
            }`}
          >
            Live on DRS
          </button>

          <div className="relative w-14 h-7 bg-gray-800 rounded-full cursor-pointer transition-colors">
            <div
              className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                activeView === 'worklist' ? 'translate-x-7' : 'translate-x-0.5'
              }`}
              onClick={() => onViewChange(activeView === 'dashboard' ? 'worklist' : 'dashboard')}
            />
          </div>

          <button
            onClick={() => onViewChange('worklist')}
            className={`text-sm font-medium transition-colors ${
              activeView === 'worklist' ? 'text-gray-800' : 'text-gray-400'
            }`}
          >
            Work List
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            <Globe size={20} />
            <span className="text-sm">KR</span>
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <User size={20} className="text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}
