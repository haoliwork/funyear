
import React from 'react';
import { CoreAdvantage } from '../types';
import { CARD_BG, BORDER_COLOR, ACCENT_GOLD, TEXT_LIGHT, TEXT_SECONDARY } from '../constants'; // 引入新的顏色常量

interface AdvantageCardProps {
  advantage: CoreAdvantage;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ advantage }) => {
  return (
    // 卡片背景、邊框、圓角、陰影、過渡動畫調整
    <div className={`bg-card-bg border border-border-color p-8 rounded-2xl shadow-xl 
                    text-center flex flex-col items-center 
                    transform transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.01] hover:shadow-2xl h-full`}>
      {/* Icon 顏色與大小調整 */}
      <div className={`text-5xl mb-6 text-accent-gold`}>{advantage.icon}</div>
      {/* 標題顏色與大小調整 */}
      <h3 className={`text-2xl font-semibold text-text-light mb-4`}>{advantage.title}</h3>
      {/* 內文顏色調整 */}
      <p className={`text-text-secondary leading-relaxed flex-grow`}>{advantage.description}</p>
    </div>
  );
};

export default AdvantageCard;