import { Grid3x3, List as ListIcon, MessageCircle, Clock } from 'lucide-react';
import { useState } from 'react';
import Sidebar from './Sidebar';

const workItems = [
  {
    id: 1,
    title: "[Let's Get Rich] 260407 RO x LGR",
    status: '진행중',
    category: 'VX',
    date: '요청일: 2026.04.07',
    requester: { name: 'Sirichai Chin', initials: 'SC' },
    designer: { name: 'Phongamphai ...', initials: 'Ph' },
    dDay: 'D-10',
    comments: 0,
  },
  {
    id: 2,
    title: '[BE] FC_5/6月信用卡平台活動',
    status: '진행중',
    category: 'VX',
    date: '요청일: 2026.04.07',
    requester: { name: 'Wong Nicky', initials: 'WN' },
    designer: { name: 'Chen Li', initials: 'CL' },
    dDay: 'D-16',
    comments: 0,
  },
  {
    id: 3,
    title: 'LINE Bubble 2 External banners_May-July 2026',
    status: '진행중',
    category: 'VX',
    date: '요청일: 2026.04.07',
    requester: { name: 'Harmpattanakij ...', initials: 'Ha' },
    designer: { name: 'Phuwadet...', initials: 'Pu' },
    dDay: 'D-16',
    comments: 0,
  },
  {
    id: 4,
    title: 'LCM - Wuukie & Soya',
    status: '진행중',
    category: 'VX',
    date: '요청일: 2026.04.07',
    requester: { name: 'Fajarniani, Wula...', initials: 'FW' },
    designer: { name: 'Halim, Gabby T-...', initials: 'HG' },
    dDay: 'D-10',
    comments: 1,
  },
];

export default function WorkList() {
  const [activeTab, setActiveTab] = useState('진행중');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="flex h-full overflow-hidden bg-gray-50">
      {/* LNB - Left Navigation Bar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">업무/의뢰 리스트</h1>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">View 10</span>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${
                  viewMode === 'grid'
                    ? 'bg-primary/10 text-primary'
                    : 'bg-white border border-gray-300 text-gray-400 hover:bg-gray-50'
                }`}
              >
                <Grid3x3 size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${
                  viewMode === 'list'
                    ? 'bg-primary/10 text-primary'
                    : 'bg-white border border-gray-300 text-gray-400 hover:bg-gray-50'
                }`}
              >
                <ListIcon size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Content Area */}
          <div className="flex-1 overflow-y-auto">
            {/* Tabs */}
            <div className="bg-white border-b border-gray-200 px-6">
              <div className="flex items-center gap-1">
                {[
                  { key: '전체', count: 39890 },
                  { key: '신규요청', count: 245 },
                  { key: '진행중', count: 877 },
                  { key: '종료', count: 36800 },
                  { key: '반려', count: 1968 },
                  { key: 'My Work(1)', count: null },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-4 py-3 text-sm font-medium transition-colors ${
                      activeTab === tab.key
                        ? 'text-gray-900 border-b-2 border-gray-900'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.key}
                    {tab.count !== null && (
                      <span className="ml-1 text-xs text-gray-400">({tab.count.toLocaleString()})</span>
                    )}
                  </button>
                ))}
                <button className="ml-auto px-4 py-3 text-sm text-yellow-600 font-medium">
                  ⭐ 83
                </button>
              </div>
            </div>

            {/* Work Cards Grid */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {workItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg transition-all cursor-pointer group"
                  >
                    {/* Status and Category */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded">
                        {item.status}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                        {item.category}
                      </span>
                      <button className="ml-auto text-gray-300 hover:text-yellow-400 transition-colors">
                        ⭐
                      </button>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem] group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    {/* Date */}
                    <p className="text-sm text-gray-500 mb-4">{item.date}</p>

                    {/* People */}
                    <div className="flex items-center gap-4 mb-4">
                      {/* Requester */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-semibold text-blue-700">
                          {item.requester.initials}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-gray-500">요청자</p>
                          <p className="text-xs font-medium text-gray-900 truncate">
                            {item.requester.name}
                          </p>
                        </div>
                      </div>

                      {/* Designer */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-semibold text-purple-700">
                          {item.designer.initials}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-gray-500">담당자</p>
                          <p className="text-xs font-medium text-gray-900 truncate">
                            {item.designer.name}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {item.dDay}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle size={14} />
                        {item.comments}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Filter Panel */}
          <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto flex-shrink-0">
            <div className="p-6">
              <h3 className="text-base font-semibold text-gray-900 mb-4">상세 검색</h3>

              <div className="space-y-6">
                {/* Search */}
                <div>
                  <input
                    type="text"
                    placeholder="제목, 요청자, 팀으로 검색하기"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                {/* 카테고리 */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">카테고리</h4>
                  <div className="space-y-2">
                    {['VX', 'LDS', 'UI/Product', 'Character', 'Multimedia', 'Interaction', 'Design Communication', 'Space'].map((cat) => (
                      <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 담당팀 */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">담당팀</h4>
                  <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white">
                    <option>선택</option>
                    <option>VX Design Team</option>
                    <option>LDS Team</option>
                    <option>UI/Product Team</option>
                  </select>
                </div>

                {/* 담당자 */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">담당자</h4>
                  <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white">
                    <option>선택</option>
                  </select>
                </div>

                {/* 시작일 */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">시작일</h4>
                  <input
                    type="text"
                    placeholder="YYYY.MM.DD"
                    defaultValue="2026.03.09"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                {/* 종료일 */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">종료일</h4>
                  <input
                    type="text"
                    placeholder="YYYY.MM.DD"
                    defaultValue="2026.04.07"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                {/* Search Button */}
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  검색
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
