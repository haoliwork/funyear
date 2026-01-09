
import React from 'react';
import { SectionTitleProps } from '../types'; // Import from types.ts

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = '', titleClassName = '' }) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {subtitle && <p className="text-accent-gold text-lg mb-2 font-serif">{subtitle}</p>}
      <h2 className={`text-4xl md:text-5xl font-bold leading-tight tracking-wide ${titleClassName || 'text-primary-red'}`}>
        {title}
      </h2>
      <div className="w-24 h-1 bg-accent-gold mx-auto mt-6 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;