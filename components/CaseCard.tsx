
import React from 'react';
import { CaseStudy } from '../types';
import { CARD_BG, BORDER_COLOR, ACCENT_GOLD, TEXT_LIGHT, TEXT_SECONDARY } from '../constants'; // 引入新的顏色常量

interface CaseCardProps {
  caseStudy: CaseStudy;
}

const CaseCard: React.FC<CaseCardProps> = ({ caseStudy }) => {
  return (
    // 卡片背景、邊框、圓角、陰影、過渡動畫調整
    <div className={`bg-card-bg border border-border-color rounded-2xl shadow-xl overflow-hidden 
                    transform transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.01] hover:shadow-2xl`}>
      <img src={caseStudy.imageUrl} alt={caseStudy.name} className="w-full h-56 object-cover object-center" /> {/* 圖片高度調整 */}
      <div className="p-8"> {/* 內距調整 */}
        {/* 標題顏色與大小調整 */}
        <h3 className={`text-2xl font-semibold text-accent-gold mb-4`}>{caseStudy.name}</h3>
        {/* 內文顏色調整 */}
        <p className={`text-text-secondary mb-2`}>
          <span className={`font-medium text-text-light mr-2`}>產業類型:</span> {caseStudy.industry}
        </p>
        <p className={`text-text-secondary mb-2`}>
          <span className={`font-medium text-text-light mr-2`}>活動人數:</span> {caseStudy.attendees}
        </p>
        <p className={`text-text-secondary mb-2`}>
          <span className={`font-medium text-text-light mr-2`}>主題亮點:</span> {caseStudy.theme}
        </p>
        <p className={`text-text-secondary`}>
          <span className={`font-medium text-text-light mr-2`}>成功成效:</span> {caseStudy.outcome}
        </p>
      </div>
    </div>
  );
};

export default CaseCard;