
import React from 'react';
import { CoreAdvantage } from '../types';

interface AdvantageCardProps {
  advantage: CoreAdvantage;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ advantage }) => {
  return (
    <div className="bg-secondary-blue p-8 rounded-lg shadow-xl text-center flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl h-full">
      <div className="text-5xl mb-4 text-accent-gold">{advantage.icon}</div>
      <h3 className="text-2xl font-bold text-light-warm mb-3">{advantage.title}</h3>
      <p className="text-gray-300 leading-relaxed flex-grow">{advantage.description}</p>
    </div>
  );
};

export default AdvantageCard;
