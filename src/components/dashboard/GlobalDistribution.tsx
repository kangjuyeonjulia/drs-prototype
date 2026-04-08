import { useState, useEffect, useRef } from 'react';

type Period = '7d' | '30d' | '6m';

interface CountryData {
  country: string;
  flag: string;
  count: number;
  percentage: number;
}

const countryDataByPeriod: Record<Period, CountryData[]> = {
  '7d': [
    { country: '한국', flag: '🇰🇷', count: 95, percentage: 51 },
    { country: '일본', flag: '🇯🇵', count: 60, percentage: 32 },
    { country: '대만', flag: '🇹🇼', count: 19, percentage: 10 },
    { country: '태국', flag: '🇹🇭', count: 12, percentage: 7 },
  ],
  '30d': [
    { country: '한국', flag: '🇰🇷', count: 450, percentage: 51 },
    { country: '일본', flag: '🇯🇵', count: 280, percentage: 32 },
    { country: '대만', flag: '🇹🇼', count: 90, percentage: 10 },
    { country: '태국', flag: '🇹🇭', count: 57, percentage: 7 },
  ],
  '6m': [
    { country: '한국', flag: '🇰🇷', count: 2180, percentage: 51 },
    { country: '일본', flag: '🇯🇵', count: 1370, percentage: 32 },
    { country: '대만', flag: '🇹🇼', count: 425, percentage: 10 },
    { country: '태국', flag: '🇹🇭', count: 298, percentage: 7 },
  ],
};

export default function GlobalDistribution() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('30d');
  const [countryData, setCountryData] = useState(countryDataByPeriod['30d']);
  const [animatedValues, setAnimatedValues] = useState(countryData.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Update country data when period changes
  useEffect(() => {
    setCountryData(countryDataByPeriod[selectedPeriod]);
  }, [selectedPeriod]);

  // Animate bars when data changes
  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 1500; // 1.5 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setAnimatedValues(
        countryData.map((country) => country.percentage * easeOutQuart)
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Set final values
        setAnimatedValues(countryData.map((country) => country.percentage));
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, countryData]);

  const periods = [
    { key: '7d', label: '7일' },
    { key: '30d', label: '30일' },
    { key: '6m', label: '6개월' },
  ] as const;

  return (
    <div ref={sectionRef} className="bg-white rounded-3xl p-8 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">국가별 요청 현황</h2>
        <div className="flex items-center gap-2">
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
      <div className="space-y-4">
        {countryData.map((country, index) => (
          <div
            key={index}
            className="group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xl">{country.flag}</span>
                <span className="text-sm font-medium text-gray-700">
                  {country.country}
                </span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-gray-800">{country.count}건</div>
                <div className="text-xs text-gray-500">{country.percentage}%</div>
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-primary-dark h-full rounded-full transition-all duration-75 ease-linear"
                style={{
                  width: `${isVisible ? animatedValues[index] || country.percentage : 0}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
