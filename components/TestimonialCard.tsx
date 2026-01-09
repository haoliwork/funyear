
import React from 'react';
import { Testimonial } from '../types';
import { CARD_BG, BORDER_COLOR, ACCENT_GOLD, TEXT_LIGHT, TEXT_SECONDARY } from '../constants'; // 引入新的顏色常量

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    // 卡片背景、邊框、圓角、陰影、過渡動畫調整
    <div className={`bg-card-bg border border-border-color p-8 rounded-2xl shadow-xl 
                    flex flex-col items-center text-center 
                    transform transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.01] hover:shadow-2xl h-full`}>
      {/* 頭像邊框顏色調整 */}
      <img
        src={testimonial.avatarUrl}
        alt={testimonial.client}
        className={`w-24 h-24 rounded-full object-cover mb-6 border-4 border-accent-gold shadow-md`}
      />
      {/* 引言文字顏色與大小調整 */}
      <p className={`text-text-light text-lg italic mb-6 leading-relaxed flex-grow`}>
        「{testimonial.quote}」
      </p>
      <div className={`border-t border-border-color w-24 mx-auto pt-4`}> {/* 分隔線顏色調整 */}
        {/* 客戶名稱顏色與大小調整 */}
        <p className={`font-semibold text-accent-gold text-xl`}>{testimonial.client}</p>
        {/* 公司名稱顏色與大小調整 */}
        <p className={`text-text-secondary text-md`}>{testimonial.company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;