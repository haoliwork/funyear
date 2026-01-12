/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./{components,pages,App,index}.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0B1320', // 全站主背景色
        'brand-red': '#8B1C24', // 品牌主色 (皇家酒紅)
        'accent-gold': '#D4AF37', // 高級點綴金
        'text-light': '#F5F7FA', // 主要文字白
        'text-secondary': '#AAB0B7', // 次要文字灰
        'card-bg': '#0F172A', // 卡片背景色 (比主背景略淺)
        'border-color': '#1C2333', // 卡片邊框/分隔線
      },
      fontFamily: {
        'sans': ['Noto Sans TC', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
      },
      keyframes: { // 自定義動畫
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: { // 自定義動畫名稱，用於區塊進場淡入
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-up-delay-1': 'fadeInUp 0.6s ease-out 0.1s forwards',
        'fade-in-up-delay-2': 'fadeInUp 0.6s ease-out 0.2s forwards',
        'fade-in-up-delay-3': 'fadeInUp 0.6s ease-out 0.3s forwards',
        'fade-in-up-delay-4': 'fadeInUp 0.6s ease-out 0.4s forwards',
      }
    }
  },
  plugins: [],
}
