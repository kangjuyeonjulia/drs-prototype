import { Palette } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-white to-green-50 py-20">
      <div className="max-w-container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-text-primary mb-4">
          디자인이 필요하신가요?
        </h2>
        <p className="text-xl text-text-secondary mb-8">
          LINE 디자인 팀이 도와드립니다
        </p>
        <button className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
          <Palette size={24} />
          새 디자인 요청하기
        </button>
      </div>
    </section>
  );
}
