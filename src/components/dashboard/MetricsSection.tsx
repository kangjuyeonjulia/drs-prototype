import { useState, useEffect } from 'react';
import CountUpAnimation from './CountUpAnimation';

type Period = '7d' | '30d' | '6m';

interface MetricData {
  value: number;
  label: string;
  unit?: string;
  trend?: number | null;
  isDecimal?: boolean;
  highlight?: boolean;
}

const metricsByPeriod: Record<Period, MetricData[]> = {
  '7d': [
    { value: 186, label: 'Total Requests', unit: '', trend: null },
    { value: 52, label: 'Completed', unit: '', trend: null },
    { value: 2.1, label: 'Avg Response', unit: 'hrs', trend: -18, isDecimal: true },
    { value: 18, label: 'Active Now', unit: '', trend: null, highlight: true },
  ],
  '30d': [
    { value: 877, label: 'Total Requests', unit: '', trend: null },
    { value: 245, label: 'Completed', unit: '', trend: null },
    { value: 2.3, label: 'Avg Response', unit: 'hrs', trend: -15, isDecimal: true },
    { value: 23, label: 'Active Now', unit: '', trend: null, highlight: true },
  ],
  '6m': [
    { value: 4273, label: 'Total Requests', unit: '', trend: null },
    { value: 1189, label: 'Completed', unit: '', trend: null },
    { value: 2.7, label: 'Avg Response', unit: 'hrs', trend: -8, isDecimal: true },
    { value: 27, label: 'Active Now', unit: '', trend: null, highlight: true },
  ],
};

export default function MetricsSection() {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('30d');
  const [metrics, setMetrics] = useState(metricsByPeriod['30d']);

  useEffect(() => {
    setMetrics(metricsByPeriod[selectedPeriod]);
  }, [selectedPeriod]);

  const periods = [
    { key: '7d' as Period, label: '7일' },
    { key: '30d' as Period, label: '30일' },
    { key: '6m' as Period, label: '6개월' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-end gap-2 mb-8">
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {metrics.map((metric, index) => (
          <div
            key={`${metric.label}-${selectedPeriod}`}
            className="text-center"
          >
            <div className="flex items-baseline justify-center mb-4">
              <span className={`text-6xl font-bold tracking-tight ${
                metric.highlight ? 'text-primary' : 'text-gray-900'
              }`}>
                {metric.isDecimal ? (
                  metric.value.toFixed(1)
                ) : (
                  <CountUpAnimation end={metric.value} duration={2000 + index * 300} />
                )}
              </span>
              {metric.unit && (
                <span className="text-2xl text-gray-500 ml-1 font-medium">
                  {metric.unit}
                </span>
              )}
              {metric.trend !== null && metric.trend !== undefined && (
                <span className={`text-lg ml-2 font-semibold ${
                  metric.trend < 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.trend > 0 ? '↑' : '↓'}{Math.abs(metric.trend)}%
                </span>
              )}
            </div>
            <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
