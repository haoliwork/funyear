import React from 'react';
import { CLIENT_LOGOS, SELLING_POINTS, ACCENT_GOLD, TEXT_LIGHT, TEXT_SECONDARY, CARD_BG, BORDER_COLOR, PRIMARY_BG } from '../constants';

const TrustedBy: React.FC = () => {
  return (
    <section className={`bg-primary-bg py-20 px-4`}>
      <div className="container mx-auto max-w-7xl text-center">
        <p className="text-sm text-text-secondary tracking-[0.2em] uppercase mb-4 font-semibold">
          Trusted by Industry Leaders
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-light mb-4">
          已服務超過 <span className="text-accent-gold">500+</span> 企業客戶
        </h2>
        <p className="max-w-3xl mx-auto text-text-secondary mb-12">
          累積超過 10+ 年活動執行經驗，深得眾多知名品牌長期信賴。
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 mb-12">
          {CLIENT_LOGOS.map((logo, index) => (
            <div
              key={index}
              className="bg-card-bg border border-border-color rounded-lg p-6 flex items-center justify-center h-24
                         transform transition-all duration-300 hover:scale-105 hover:bg-border-color"
            >
              <span className="text-text-secondary font-bold text-lg text-center">{logo}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8 text-text-light">
          {SELLING_POINTS.map((point, index) => (
            <div key={index} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
