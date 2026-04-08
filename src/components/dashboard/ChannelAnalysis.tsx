import { useState, useEffect } from 'react';
import { channelData } from '../../data/dashboardData';

export default function ChannelAnalysis() {
  const { online, offline } = channelData;
  const total = online.count + offline.count;
  const [rotation, setRotation] = useState(0);

  // Slow rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Calculate SVG circle segments
  const circumference = 2 * Math.PI * 40; // radius = 40
  const onlineSegment = (online.percentage / 100) * circumference;
  const offlineSegment = (offline.percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">온라인 / 오프라인 비중</h3>

      <div className="flex flex-col items-center">
        {/* Donut Chart */}
        <div className="relative w-48 h-48 mb-6">
          <svg
            viewBox="0 0 100 100"
            className="transform -rotate-90"
            style={{ transform: `rotate(${-90 + rotation}deg)`, transition: 'transform 0.05s linear' }}
          >
            {/* Online Segment (Blue) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="10"
              strokeDasharray={`${onlineSegment} ${circumference}`}
              className="transition-all duration-1000"
            />
            {/* Offline Segment (Gray) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#9CA3AF"
              strokeWidth="10"
              strokeDasharray={`${offlineSegment} ${circumference}`}
              strokeDashoffset={`-${onlineSegment}`}
              className="transition-all duration-1000"
            />
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl font-bold text-gray-800">{total}</div>
            <div className="text-xs text-gray-500 mt-0.5">전체 요청</div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
            <div>
              <div className="text-xs font-medium text-gray-700">온라인</div>
              <div className="text-lg font-bold text-gray-800">{online.count}건</div>
              <div className="text-xs text-gray-500">{online.percentage}%</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-400 animate-pulse" />
            <div>
              <div className="text-xs font-medium text-gray-700">오프라인</div>
              <div className="text-lg font-bold text-gray-800">{offline.count}건</div>
              <div className="text-xs text-gray-500">{offline.percentage}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
