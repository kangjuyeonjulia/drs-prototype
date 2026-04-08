import { useState, useEffect } from 'react';

interface FlipCounterProps {
  value: number;
  duration?: number;
}

export default function FlipCounter({ value, duration = 2000 }: FlipCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const step = Math.ceil(value / (duration / 100)); // Change number every 100ms

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (progress < 1) {
        setIsFlipping(true);
        setDisplayValue((prev) => {
          const next = prev + step;
          return next > value ? value : next;
        });
      } else {
        setDisplayValue(value);
        setIsFlipping(false);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [value, duration]);

  const digits = displayValue.toString().padStart(3, '0').split('');

  return (
    <div className="inline-flex gap-1">
      {digits.map((digit, index) => (
        <div
          key={index}
          className="relative w-10 h-14 bg-gray-900 rounded overflow-hidden"
          style={{ perspective: '200px' }}
        >
          {/* Top Half */}
          <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden bg-gray-900">
            <div className="absolute inset-0 flex items-start justify-center pt-2">
              <span className="text-3xl font-bold text-white">{digit}</span>
            </div>
          </div>

          {/* Bottom Half */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden bg-gray-800">
            <div className="absolute inset-0 flex items-end justify-center pb-2">
              <span className="text-3xl font-bold text-white">{digit}</span>
            </div>
          </div>

          {/* Flipping Animation */}
          {isFlipping && (
            <div
              className="absolute top-0 left-0 right-0 h-1/2 bg-gray-700 origin-bottom animate-flip"
              style={{
                transformStyle: 'preserve-3d',
                animation: 'flipDown 0.2s ease-in-out',
              }}
            >
              <div className="absolute inset-0 flex items-start justify-center pt-2">
                <span className="text-3xl font-bold text-white">{digit}</span>
              </div>
            </div>
          )}

          {/* Split Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black/30 z-10" />
        </div>
      ))}
    </div>
  );
}
