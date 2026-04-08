export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col overflow-y-auto">
      {/* Navigation */}
      <nav className="flex-1 py-4 pt-6">
        {/* 업무 관리 */}
        <div className="mb-6">
          <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            업무 관리
          </h3>
          <ul className="space-y-0.5">
            <li>
              <button className="w-full px-4 py-2 text-sm font-medium text-left bg-primary text-white hover:bg-primary-dark transition-colors">
                의뢰/리스트 요청
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 text-sm font-medium text-left text-gray-700 hover:bg-gray-50 transition-colors">
                대시보드
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 text-sm font-medium text-left text-gray-700 hover:bg-gray-50 transition-colors">
                Management
              </button>
            </li>
          </ul>
        </div>

        {/* 디자인 의뢰서 */}
        <div className="mb-6">
          <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            디자인 의뢰서
          </h3>
          <ul className="space-y-0.5">
            <li>
              <button className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 transition-colors">
                VX 디자인 의뢰
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 transition-colors">
                UI 디자인 의뢰
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 transition-colors">
                Multimedia 의뢰
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 transition-colors">
                게시판 사용 의뢰
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 transition-colors">
                LDS 의뢰
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 transition-colors">
                Interaction Design 의뢰
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 transition-colors">
                Design Communication 의뢰
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 transition-colors">
                Space Design 의뢰
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 transition-colors">
                일시 저장
              </button>
            </li>
          </ul>
        </div>

        {/* 지원 */}
        <div className="mb-6">
          <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            지원
          </h3>
          <ul className="space-y-0.5">
            <li>
              <button className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 transition-colors">
                FAQ
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 transition-colors">
                #help_ds
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
