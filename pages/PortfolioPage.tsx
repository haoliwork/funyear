
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import CaseCard from '../components/CaseCard';
import Button from '../components/Button';
import { FEATURED_CASES, PRIMARY_BG, BRAND_RED, ACCENT_GOLD, TEXT_LIGHT, TEXT_SECONDARY, CARD_BG, BORDER_COLOR } from '../constants';
import { NavLink } from 'react-router-dom';

const PortfolioPage: React.FC = () => {
  return (
    <div className={`bg-primary-bg py-16`}>
      {/* Hero Section for Portfolio - 全新設計 */}
      <section
        className="relative py-28 flex items-center justify-center text-center px-4" // 縮小 py
        style={{
          // 建議您下載此圖片或尋找更高品質的圖片，放置於 public/image/portfolio-hero.jpg，並將此處替換為 `url('/image/portfolio-hero.jpg')`
          backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* 深色漸層遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/[0.9] to-primary-bg/[0.4]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-accent-gold leading-tight mb-6 animate-fade-in-up"> {/* 縮小標題 */}
            見證精彩，樂年卓越案例
          </h1>
          <p className="text-lg md:text-xl text-text-light font-medium animate-fade-in-up animate-fade-in-up-delay-1"> {/* 縮小內文 */}
            我們為各行各業頂尖企業，成功打造無數令人難忘的年度盛會。
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="container mx-auto max-w-7xl py-20 px-4 animate-fade-in-up"> {/* 縮小 py */}
        <SectionTitle
          subtitle="我們引以為傲的成果"
          title="精選企業尾牙、春酒與慶功宴案例"
          titleClassName="text-text-light"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* 縮小 gap */}
          {FEATURED_CASES.map((caseStudy) => (
            <NavLink key={caseStudy.id} to={`/portfolio/${caseStudy.id}`}>
              <CaseCard caseStudy={caseStudy} />
            </NavLink>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-red py-20 px-4 text-center mt-12 animate-fade-in-up"> {/* 縮小 py */}
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-light leading-tight mb-6"> {/* 縮小標題 */}
            您的下一個成功案例，由樂年打造
          </h2>
          <p className="text-base md:text-lg text-text-secondary mb-8"> {/* 縮小內文 */}
            從策略發想、精準策劃到完美執行，樂年期待與您攜手，創造專屬的企業高光時刻。
          </p>
          <NavLink to="/contact">
            <Button variant="primary" className="min-w-[260px] py-3 text-lg">立即預約諮詢</Button> {/* 縮小按鈕 */}
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;