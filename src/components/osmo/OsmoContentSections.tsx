import { ArrowUpRight, Clock, Users, Zap } from 'lucide-react';

export default function OsmoContentSections() {
  return (
    <div className="bg-white">
      {/* Stats Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center md:text-left">
              <div className="text-7xl font-bold text-gray-900 mb-4">877</div>
              <div className="text-xl text-gray-600">진행중 요청</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-7xl font-bold text-gray-900 mb-4">245</div>
              <div className="text-xl text-gray-600">이번달 완료</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-7xl font-bold text-gray-900 mb-4">10일</div>
              <div className="text-xl text-gray-600">평균 처리시간</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold text-gray-900 mb-20">
            디자인이 필요한 순간,<br />
            우리가 있습니다
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature Card 1 */}
            <div className="group bg-white rounded-3xl p-12 hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-8">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">빠른 응답</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                평균 10일 이내에 모든 디자인 요청을 완료합니다. 긴급 요청도 대응 가능합니다.
              </p>
              <div className="flex items-center gap-2 text-gray-900 font-medium group-hover:gap-4 transition-all">
                더 알아보기
                <ArrowUpRight size={20} />
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="group bg-white rounded-3xl p-12 hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-8">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">전문 팀</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                LINE의 모든 디자인 요구사항을 처리하는 VX Design 전문 팀이 함께합니다.
              </p>
              <div className="flex items-center gap-2 text-gray-900 font-medium group-hover:gap-4 transition-all">
                팀 소개
                <ArrowUpRight size={20} />
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="group bg-white rounded-3xl p-12 hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-8">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">실시간 추적</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                프로젝트 진행 상황을 실시간으로 확인하고 피드백을 주고받을 수 있습니다.
              </p>
              <div className="flex items-center gap-2 text-gray-900 font-medium group-hover:gap-4 transition-all">
                시작하기
                <ArrowUpRight size={20} />
              </div>
            </div>

            {/* Feature Card 4 - CTA Card */}
            <div className="group bg-gray-900 rounded-3xl p-12 hover:bg-gray-800 transition-all duration-500 cursor-pointer flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  지금 바로<br />
                  시작하세요
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  새로운 디자인 요청을 생성하고 LINE 디자인 팀과 협업을 시작하세요.
                </p>
              </div>
              <div className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all text-xl">
                새 요청 만들기
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character Rankings - Osmo Style */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold text-gray-900 mb-20">
            가장 사랑받는 캐릭터
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Brown', emoji: '🐻', count: 180, rank: '01' },
              { name: 'Cony', emoji: '🐰', count: 145, rank: '02' },
              { name: 'Sally', emoji: '🐥', count: 98, rank: '03' },
            ].map((character) => (
              <div
                key={character.name}
                className="group relative bg-gray-50 rounded-3xl p-12 hover:bg-gray-900 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Rank Number Background */}
                <div className="absolute top-8 right-8 text-9xl font-bold text-gray-200 group-hover:text-gray-800 transition-colors">
                  {character.rank}
                </div>

                <div className="relative z-10">
                  <div className="text-8xl mb-6">{character.emoji}</div>
                  <h3 className="text-4xl font-bold text-gray-900 group-hover:text-white transition-colors mb-3">
                    {character.name}
                  </h3>
                  <div className="text-6xl font-bold text-gray-900 group-hover:text-white transition-colors">
                    {character.count}
                    <span className="text-2xl text-gray-600 group-hover:text-gray-300 ml-2">건</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-gray-500">
            LINE FRIENDS 캐릭터 기준 · 최근 30일
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-7xl font-bold text-white mb-8">
            Ready to start?
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            LINE 디자인 팀과 함께 프로젝트를 시작하세요
          </p>
          <button className="group inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-12 py-6 rounded-full text-xl transition-all transform hover:scale-105">
            새 디자인 요청하기
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
          </button>
        </div>
      </section>
    </div>
  );
}
