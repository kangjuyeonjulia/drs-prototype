import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

const characters = [
  {
    name: 'Brown',
    image: '/images/brown.png',
    label: '브라운',
    description: '든든하고 믿음직한',
    color: 'from-amber-100 to-amber-200',
    details: {
      personality: '성실하고 책임감이 강한 곰. 항상 친구들을 위해 최선을 다하며, 든든한 리더십을 발휘합니다.',
      features: ['리더십', '책임감', '신뢰성', '따뜻함'],
    },
  },
  {
    name: 'Cony',
    image: '/images/cony.png',
    label: '코니',
    description: '사랑스럽고 귀여운',
    color: 'from-pink-100 to-pink-200',
    details: {
      personality: '귀엽고 발랄한 토끼. 긍정적인 에너지로 주변을 밝게 만들며, 사랑스러운 매력이 넘칩니다.',
      features: ['사랑스러움', '긍정적', '발랄함', '친근함'],
    },
  },
  {
    name: 'Sally',
    image: '/images/sally.png',
    label: '샐리',
    description: '발랄하고 긍정적인',
    color: 'from-yellow-100 to-yellow-200',
    details: {
      personality: '활기차고 명랑한 병아리. 항상 웃음을 잃지 않으며, 주변에 긍정적인 영향을 줍니다.',
      features: ['발랄함', '긍정', '에너지', '명랑함'],
    },
  },
  {
    name: 'Kensaku',
    image: '/images/kensaku.png',
    label: '켄사쿠',
    description: '지적이고 호기심 많은',
    color: 'from-blue-100 to-blue-200',
    details: {
      personality: '똑똑하고 탐구심이 강한 로봇 강아지. 새로운 것을 배우는 것을 좋아하며, 항상 궁금한 것이 많습니다.',
      features: ['지적', '호기심', '탐구심', '혁신'],
    },
  },
  {
    name: 'Engine',
    image: '/images/engine.png',
    label: '엔진',
    description: '활동적이고 열정적인',
    color: 'from-red-100 to-red-200',
    details: {
      personality: '에너지가 넘치고 열정적인 캐릭터. 항상 움직이며 도전을 즐기고, 주변에 활력을 불어넣습니다.',
      features: ['열정', '활동적', '도전', '에너지'],
    },
  },
];

export default function CharacterCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<typeof characters[0] | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.8;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Triple the characters array for seamless loop
  const duplicatedCharacters = [...characters, ...characters, ...characters];

  return (
    <div className="overflow-hidden">
      <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">
        Say Hello to the Characters
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedCharacters.map((character, index) => (
          <div
            key={`${character.name}-${index}`}
            onClick={() => setSelectedCharacter(character)}
            className="flex-shrink-0 w-44 group cursor-pointer"
          >
            <div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 hover:shadow-md">
              <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <div className="text-base font-medium text-gray-700">{character.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        LINE FRIENDS 캐릭터 · 클릭하면 상세 정보를 볼 수 있습니다
      </div>

      {/* Modal */}
      {selectedCharacter && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedCharacter(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCharacter(null)}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-600" />
            </button>

            {/* Content */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div
                  className={`bg-gradient-to-br ${selectedCharacter.color} rounded-2xl p-6`}
                >
                  <img
                    src={selectedCharacter.image}
                    alt={selectedCharacter.name}
                    className="w-48 h-48 object-contain"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  {selectedCharacter.label}
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  {selectedCharacter.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-gray-700 mb-2">성격</h4>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {selectedCharacter.details.personality}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-700 mb-2">특징</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCharacter.details.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
