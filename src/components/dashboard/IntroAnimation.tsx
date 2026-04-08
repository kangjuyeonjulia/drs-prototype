import { useState, useEffect } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 0 -> 1: Show title (0.5s)
    const timer1 = setTimeout(() => setStage(1), 300);

    // Stage 1 -> 2: Show subtitle (1.2s)
    const timer2 = setTimeout(() => setStage(2), 1200);

    // Stage 2 -> 3: Fade out (3s)
    const timer3 = setTimeout(() => setStage(3), 3000);

    // Stage 3: Complete (4s)
    const timer4 = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-white flex items-center justify-center transition-opacity duration-1000 ${
        stage === 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        {/* Title */}
        <h1
          className={`text-7xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            stage >= 1 && stage < 3
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          Design That Moves
        </h1>

        {/* Subtitle */}
        <p
          className={`text-2xl text-gray-600 transition-all duration-1000 ${
            stage >= 2 && stage < 3
              ? 'opacity-100 translate-y-0 delay-200'
              : 'opacity-0 translate-y-10'
          }`}
        >
          From request to impact
        </p>

        {/* Decorative Line */}
        <div
          className={`mx-auto mt-8 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-1000 ${
            stage >= 2 && stage < 3 ? 'w-96 opacity-100 delay-400' : 'w-0 opacity-0'
          }`}
        />
      </div>
    </div>
  );
}
