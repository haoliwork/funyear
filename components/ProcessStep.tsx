
import React from 'react';
import { ProcessStep as ProcessStepType } from '../types';
import { BRAND_RED, ACCENT_GOLD, TEXT_LIGHT, TEXT_SECONDARY, CARD_BG, BORDER_COLOR } from '../constants'; // 引入新的顏色常量

interface ProcessStepProps {
  step: ProcessStepType;
  isEven: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, isEven }) => {
  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-center ${isEven ? 'md:flex-row-reverse' : ''} my-12 md:my-16`}> {/* 間距調整 */}
      {/* 垂直時間線顏色調整 */}
      <div className={`absolute left-1/2 -translate-x-1/2 w-1 h-full bg-border-color hidden md:block`}></div>
      {/* 水平時間線顏色調整 */}
      <div className={`absolute left-1/2 -translate-x-1/2 w-full h-1 bg-border-color block md:hidden -z-10`}></div>


      <div className="w-full md:w-5/12 p-4 text-center md:text-left z-10">
        {/* 卡片背景、邊框、圓角、陰影、過渡動畫調整 */}
        <div className={`bg-card-bg border border-border-color p-8 rounded-2xl shadow-xl 
                        transform transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.01] hover:shadow-2xl`}>
          {/* 標題顏色與大小調整 */}
          <h3 className={`text-2xl font-semibold text-accent-gold mb-3`}>{step.title}</h3>
          {/* 內文顏色調整 */}
          <p className={`text-text-secondary leading-relaxed`}>{step.description}</p>
        </div>
      </div>

      <div className="relative z-20 my-4 md:my-0">
        {/* 步驟數字圓圈顏色、邊框、陰影、文字顏色調整 */}
        <div className={`flex items-center justify-center w-20 h-20 rounded-full bg-brand-red border-4 border-accent-gold shadow-lg 
                        text-text-light text-3xl font-bold`}>
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