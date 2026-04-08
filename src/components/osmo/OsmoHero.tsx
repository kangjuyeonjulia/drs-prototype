import { ArrowRight } from 'lucide-react';

export default function OsmoHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-8xl md:text-9xl font-bold text-gray-900 mb-8 tracking-tight leading-none">
          Design That
          <br />
          Moves
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
          From request to impact, designed for LINE
        </p>

        {/* CTA Button */}
        <button className="group inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white font-medium px-10 py-5 rounded-full text-lg transition-all transform hover:scale-105">
          시작하기
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-2 bg-gray-400 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
