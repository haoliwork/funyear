
import React from 'react';
import { SectionTitleProps } from '../types'; // Import from types.ts
import { ACCENT_GOLD, TEXT_LIGHT, BRAND_RED } from '../constants'; // 引入新的顏色常量

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = '', titleClassName = '' }) => {
  return (
    <div className={`text-center mb-16 ${className}`}> {/* 增加 mb 間距 */}
      {subtitle && <p className={`text-accent-gold text-lg mb-3 font-serif`}>{subtitle}</p>} {/* 副標顏色調整 */}
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide text-text-light ${titleClassName}`}> {/* 標題尺寸、粗體、顏色調整 */}
        {title}
      </h2>
      <div className={`w-24 h-1 bg-accent-gold mx-auto mt-8 rounded-full`}></div> {/* 底線顏色、粗細、間距調整 */}
    </div>
  );
};

export default SectionTitle;