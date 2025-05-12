
import React from 'react';

interface Step {
  label: string;
  active: boolean;
}

interface ProgressIndicatorProps {
  steps: Step[];
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ steps }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 flex justify-center">
            <span className={`text-sm ${step.active ? 'text-jobspring-blue font-semibold' : 'text-gray-600'}`}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
      <div className="relative">
        <div className="absolute top-0 left-0 h-2 bg-gray-200 w-full rounded-full"></div>
        <div 
          className="absolute top-0 left-0 h-2 bg-jobspring-blue rounded-full transition-all duration-300"
          style={{ 
            width: steps.findIndex(step => step.active) === 0 
              ? '33%' 
              : steps.findIndex(step => step.active) === 1 
                ? '66%' 
                : '100%' 
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
