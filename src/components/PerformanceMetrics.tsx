
import React from 'react';

interface Metric {
  label: string;
  value: string;
}

interface PerformanceMetricsProps {
  title: string;
  metrics: Metric[];
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ title, metrics }) => {
  return (
    <div className="mt-4">
      <h3 className="text-xl text-jobspring-blue font-semibold mb-4">{title}</h3>
      
      <div className="space-y-3">
        {metrics.map((metric, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-800">{metric.label}</span>
            <div className="flex items-center">
              <span className="mr-2">:</span>
              <span className="text-jobspring-blue font-semibold">{metric.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceMetrics;
