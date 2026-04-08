import { BarChart3, List, Settings, FileText, Save, HelpCircle } from 'lucide-react';

interface SidebarProps {
  onNewRequest?: () => void;
}

export default function Sidebar({ onNewRequest }: SidebarProps) {
  const menuSections = [
    {
      title: '업무 관리',
      items: [
        { id: 'worklist', label: '업무/의뢰 리스트', active: true },
        { id: 'dashboard', label: '대시보드', active: false },
        { id: 'management', label: 'Management', active: false },
      ],
    },
    {
      title: '디자인 의뢰서',
      items: [
        { id: 'vx', label: 'VX 디자인 의뢰' },
        { id: 'ui', label: 'UI 디자인 의뢰' },
        { id: 'multimedia', label: 'Multimedia 의뢰' },
        { id: 'character', label: '캐릭터 사용 의뢰' },
        { id: 'lds', label: 'LDS 의뢰' },
        { id: 'interaction', label: 'Interaction Design 의뢰' },
        { id: 'design-comm', label: 'Design Communication 의뢰' },
        { id: 'space', label: 'Space Design 의뢰' },
      ],
    },
    {
      title: '임시 저장',
      items: [{ id: 'temp', label: '임시 저장' }],
    },
    {
      title: '지원',
      items: [
        { id: 'faq', label: 'FAQ' },
        { id: 'help', label: '#help_drs' },
      ],
    },
  ];

  return (
    <aside className="w-56 bg-white border-r border-gray-200 h-full overflow-y-auto flex-shrink-0">
      <div className="p-4">
        {menuSections.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 mb-2 px-2">
              {section.title}
            </h3>
            <nav className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = item.active;
                return (
                  <button
                    key={item.id}
                    className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                      isActive
                        ? 'bg-primary text-white font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  );
}
