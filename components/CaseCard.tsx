
import React from 'react';
import { CaseStudy } from '../types';

interface CaseCardProps {
  caseStudy: CaseStudy;
}

const CaseCard: React.FC<CaseCardProps> = ({ caseStudy }) => {
  return (
    <div className="bg-secondary-blue rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <img src={caseStudy.imageUrl} alt={caseStudy.name} className="w-full h-48 object-cover object-center" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-accent-gold mb-3">{caseStudy.name}</h3>
        <p className="text-gray-300 mb-2">
          <span className="font-semibold text-light-warm">產業類型:</span> {caseStudy.industry}
        </p>
        <p className="text-gray-300 mb-2">
          <span className="font-semibold text-light-warm">活動人數:</span> {caseStudy.attendees}
        </p>
        <p className="text-gray-300 mb-2">
          <span className="font-semibold text-light-warm">活動主題與亮點:</span> {caseStudy.theme}
        </p>
        <p className="text-gray-300">
          <span className="font-semibold text-light-warm">成效描述:</span> {caseStudy.outcome}
        </p>
      </div>
    </div>
  );
};

export default CaseCard;
