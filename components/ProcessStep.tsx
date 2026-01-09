
import React from 'react';
import { ProcessStep as ProcessStepType } from '../types';

interface ProcessStepProps {
  step: ProcessStepType;
  isEven: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, isEven }) => {
  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-center ${isEven ? 'md:flex-row-reverse' : ''} my-8 md:my-12`}>
      <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-primary-red-dark hidden md:block"></div>
      <div className="absolute left-1/2 -translate-x-1/2 w-full h-1 bg-primary-red-dark block md:hidden -z-10"></div>


      <div className="w-full md:w-5/12 p-4 text-center md:text-left z-10">
        <div className="bg-secondary-blue p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
          <h3 className="text-2xl font-bold text-accent-gold mb-3">{step.title}</h3>
          <p className="text-gray-300 leading-relaxed">{step.description}</p>
        </div>
      </div>

      <div className="relative z-20 my-4 md:my-0">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-red border-4 border-accent-gold shadow-lg text-light-warm text-2xl font-bold">
          {step.stepNumber}
        </div>
      </div>

      <div className="w-full md:w-5/12 p-4 text-center md:text-right z-10">
        {/* Placeholder for content on the other side, or empty for alternating layout */}
      </div>
    </div>
  );
};

export default ProcessStep;
