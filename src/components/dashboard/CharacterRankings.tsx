import { useState, useEffect } from 'react';

type Period = '7d' | '30d' | '6m';

interface CharacterRanking {
  name: string;
  emoji: string;
  count: number;
  rank: number;
}

const characterRankingsByPeriod: Record<Period, CharacterRanking[]> = {
  '7d': [
    { name: 'Cony', emoji: '🐰', count: 42, rank: 1 },
    { name: 'Brown', emoji: '🐻', count: 38, rank: 2 },
    { name: 'Sally', emoji: '🐥', count: 25, rank: 3 },
  ],
  '30d': [
    { name: 'Brown', emoji: '🐻', count: 180, rank: 1 },
    { name: 'Cony', emoji: '🐰', count: 145, rank: 2 },
    { name: 'Sally', emoji: '🐥', count: 98, rank: 3 },
  ],
  '6m': [
    { name: 'Brown', emoji: '🐻', count: 892, rank: 1 },
    { name: 'Sally', emoji: '🐥', count: 756, rank: 2 },
    { name: 'Cony', emoji: '🐰', count: 623, rank: 3 },
  ],
};

export default function CharacterRankings() {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('30d');
  const [rankings, setRankings] = useState(characterRankingsByPeriod['30d']);

  useEffect(() => {
    setRankings(characterRankingsByPeriod[selectedPeriod]);
  }, [selectedPeriod]);

  const periods = [
    { key: '7d' as Period, label: '7일' },
    { key: '30d' as Period, label: '30일' },
    { key: '6m' as Period, label: '6개월' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="relative mb-10">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          캐릭터 인기 순위
        </h2>
        <div className="absolute right-0 top-0 flex items-center gap-2">
          {periods.map((period) => (
            <button
              key={period.key}
              onClick={() => setSelectedPeriod(period.key)}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                selectedPeriod === period.key
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto relative" style={{ minHeight: '320px' }}>
        {rankings.map((character, index) => (
          <div
            key={character.name}
            className="group flex items-center justify-between py-5 border-b border-gray-200 hover:bg-gray-50 px-6 rounded-xl absolute w-full left-0"
            style={{
              top: `${index * 80}px`,
              transition: 'top 0.6s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.3s ease',
            }}
          >
            <div className="flex items-center gap-6">
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg transition-all duration-300 group-hover:scale-110 ${
                  character.rank === 1
                    ? 'bg-yellow-100 text-yellow-700'
                    : character.rank === 2
                    ? 'bg-gray-100 text-gray-700'
                    : 'bg-orange-100 text-orange-700'
                }`}
              >
                {character.rank}
              </div>

              <div className="text-xl font-semibold text-gray-900">
                {character.name}
              </div>
            </div>

            <div className="flex items-baseline gap-2">
              <div className="text-4xl font-bold text-gray-900">{character.count}</div>
              <div className="text-lg text-gray-500 font-medium">건</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
