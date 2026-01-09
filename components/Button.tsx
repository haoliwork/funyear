
import React from 'react';
import { PRIMARY_BG, BRAND_RED, ACCENT_GOLD, TEXT_LIGHT, BORDER_COLOR } from '../constants'; // 引入新的顏色常量

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-red'; // 增加 outline-red variant
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  // 基礎樣式：大顆、圓角、陰影、過渡動畫
  const baseClasses = 'font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg';
  let variantClasses = '';

  switch (variant) {
    case 'primary': // 金色漸層主按鈕
      variantClasses = 'bg-gradient-to-br from-[#F1D27A] to-accent-gold text-primary-bg hover:shadow-xl';
      break;
    case 'secondary': // 酒紅背景按鈕
      variantClasses = 'bg-brand-red text-text-light hover:bg-opacity-90 hover:shadow-xl';
      break;
    case 'outline': // 金色描邊按鈕
      variantClasses = `border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary-bg hover:shadow-xl`;
      break;
    case 'outline-red': // 酒紅描邊按鈕
      variantClasses = `border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-text-light hover:shadow-xl`;
      break;
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;