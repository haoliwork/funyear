
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { SERVICE_ITEMS, BRAND_RED, ACCENT_GOLD, PRIMARY_BG, TEXT_LIGHT, TEXT_SECONDARY, CARD_BG, BORDER_COLOR } from '../constants';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <div className={`bg-primary-bg py-16`}>
      {/* Hero Section for Services - 全新設計 */}
      <section
        className="relative py-28 flex items-center justify-center text-center px-4" // 縮小 py
        style={{
          // 建議您下載此圖片或尋找更高品質的圖片，放置於 public/image/services-hero.jpg，並將此處替換為 `url('/image/services-hero.jpg')`
          backgroundImage: `url('https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* 深色漸層遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/[0.9] to-primary-bg/[0.4]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-accent-gold leading-tight mb-6 animate-fade-in-up"> {/* 縮小標題 */}
            樂年專業服務，成就卓越
          </h1>
          <p className="text-lg md:text-xl text-text-light font-medium animate-fade-in-up animate-fade-in-up-delay-1"> {/* 縮小內文 */}
            樂年提供一站式、全方位的企業年度盛會策劃服務，確保您的活動從理念到執行都無懈可擊。
          </p>
        </div>
      </section>

      {/* Service Items List */}
      <section className="container mx-auto max-w-7xl py-20 px-4 animate-fade-in-up"> {/* 縮小 py */}
        <SectionTitle
          subtitle="我們能為您做什麼？"
          title="全方位企業活動策劃服務"
          titleClassName="text-text-light"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* 縮小 gap */}
          {SERVICE_ITEMS.map((item, index) => (
            <div key={index} className={`bg-card-bg border border-border-color p-8 rounded-2xl shadow-xl 
                                        flex flex-col items-center text-center 
                                        transform transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.01] hover:shadow-2xl h-full`}>
              <div className="text-5xl mb-6 text-accent-gold">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-text-light mb-4">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed text-base flex-grow">{item.description}</p> {/* 縮小內文 */}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-red py-20 px-4 text-center mt-12 animate-fade-in-up"> {/* 縮小 py */}
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-light leading-tight mb-6"> {/* 縮小標題 */}
            讓專業為您的企業活動加冕
          </h2>
          <p className="text-base md:text-lg text-text-secondary mb-8"> {/* 縮小內文 */}
            立即諮詢樂年，我們將為您量身打造專屬的年度盛會企劃方案。
          </p>
          <NavLink to="/contact">
            <Button variant="primary" className="min-w-[260px] py-3 text-lg">立即諮詢專案</Button> {/* 縮小按鈕 */}
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;