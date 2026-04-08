import { Activity, CheckCircle, Clock } from 'lucide-react';
import type { Metrics } from '../types';

interface MetricsCardsProps {
  metrics: Metrics;
}

export default function MetricsCards({ metrics }: MetricsCardsProps) {
  const cards = [
    {
      icon: Activity,
      label: '진행중',
      value: `${metrics.inProgress}건`,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: CheckCircle,
      label: '완료',
      value: `${metrics.completed}건`,
      color: 'text-primary',
      bgColor: 'bg-green-50',
    },
    {
      icon: Clock,
      label: '평균',
      value: `${metrics.averageDays}일`,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-container mx-auto px-6">
        <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-2">
          📊 이번달 현황
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-lg ${card.bgColor} mb-4`}>
                <card.icon size={28} className={card.color} />
              </div>
              <div className="text-3xl font-bold text-text-primary mb-2">
                {card.value}
              </div>
              <div className="text-text-secondary">{card.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
