
import React from 'react';
import { SectionTitleProps } from '../types'; // Import from types.ts
import { ACCENT_GOLD, TEXT_LIGHT, BRAND_RED } from '../constants'; // 引入新的顏色常量

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = '', titleClassName = '' }) => {
  return (
    <div className={`text-center mb-12 ${className}`}> {/* 減少 mb 間距 */}
      {subtitle && <p className={`text-accent-gold text-base mb-3 font-serif`}>{subtitle}</p>} {/* 副標顏色調整, 字級縮小 */}
      <h2 className={`text-3xl md:text-4xl font-extrabold leading-tight tracking-wide text-text-light ${titleClassName}`}> {/* 標題尺寸縮小 */}
        {title}
      </h2>
      <div className={`w-24 h-1 bg-accent-gold mx-auto mt-6 rounded-full`}></div> {/* 底線間距縮小 */}
    </div>
  );
};

export default SectionTitle;