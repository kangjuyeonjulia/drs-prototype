import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface OsmoHeroProps {
  onNavigateToWorkList: () => void;
  onStageChange: (stage: number) => void;
  skipIntro: boolean;
}

export default function OsmoHero({ onNavigateToWorkList, onStageChange, skipIntro }: OsmoHeroProps) {
  const [stage, setStage] = useState(skipIntro ? 5 : 0);
  const [titleText, setTitleText] = useState('');
  const [subtitleText, setSubtitleText] = useState('');

  const fullTitle = 'Design That Moves';
  const fullSubtitle = 'From request to impact, designed for LINE';

  useEffect(() => {
    // If skipIntro, go directly to final stage
    if (skipIntro) {
      setStage(5);
      onStageChange(5);
      return;
    }

    // Stage 0 -> 1: Start typing main title (300ms)
    const timer1 = setTimeout(() => {
      setStage(1);
      onStageChange(1);
    }, 300);

    return () => clearTimeout(timer1);
  }, []);

  // Title typing effect
  useEffect(() => {
    if (stage !== 1 || skipIntro) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullTitle.length) {
        setTitleText(fullTitle.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Move to stage 2 after title complete
        setTimeout(() => {
          setStage(2);
          onStageChange(2);
        }, 500);
      }
    }, 100); // 100ms per character

    return () => clearInterval(typingInterval);
  }, [stage]);

  // Subtitle typing effect
  useEffect(() => {
    if (stage !== 2 || skipIntro) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullSubtitle.length) {
        setSubtitleText(fullSubtitle.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Move to stage 3 after subtitle complete
        setTimeout(() => {
          setStage(3);
          onStageChange(3);
        }, 1000);
      }
    }, 50); // 50ms per character (faster than title)

    return () => clearInterval(typingInterval);
  }, [stage]);

  // Hold and fade out
  useEffect(() => {
    if (stage !== 3 || skipIntro) return;

    const timer = setTimeout(() => {
      setStage(4);
      onStageChange(4);
    }, 1500);

    return () => clearTimeout(timer);
  }, [stage]);

  // Show video
  useEffect(() => {
    if (stage !== 4 || skipIntro) return;

    const timer = setTimeout(() => {
      setStage(5);
      onStageChange(5);
    }, 1000);

    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      {/* Background Video - Zoom in effect */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          stage >= 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
        }`}
      >
        {/* Fallback background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hello-friends.webp')" }}
        />

        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hello-friends.webp"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* White background */}
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-1000 ${
          stage >= 4 ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Intro Text - Typing Effect */}
      {stage < 4 && (
        <div
          className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-1000 ${
            stage >= 3 ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="flex flex-col items-center">
            {/* Main Title */}
            <div className="mb-6">
              <div
                className="text-7xl md:text-8xl font-bold text-gray-900 tracking-tight"
                style={{
                  minHeight: '6rem',
                  lineHeight: '1.2',
                }}
              >
                {titleText}
                {stage === 1 && (
                  <span className="inline-block w-1 h-20 bg-gray-900 ml-1 align-middle animate-pulse" />
                )}
              </div>
            </div>

            {/* Subtitle */}
            <div>
              <div
                className="text-xl md:text-2xl text-gray-600"
                style={{
                  minHeight: '2rem',
                }}
              >
                {subtitleText}
                {stage === 2 && (
                  <span className="inline-block w-0.5 h-6 bg-gray-600 ml-1 align-middle animate-pulse" />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Final Content - After video appears */}
      <div
        className={`relative z-10 max-w-5xl mx-auto text-center transition-all duration-1000 ${
          stage >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-none whitespace-nowrap">
          Design That Moves
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-16 max-w-2xl mx-auto leading-relaxed">
          From request to impact, designed for LINE
        </p>

        {/* CTA Button */}
        <button
          onClick={onNavigateToWorkList}
          className="group inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white font-medium px-10 py-5 rounded-full text-lg transition-all transform hover:scale-105"
        >
          Design Request
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </button>

      </div>
    </section>
  );
}
