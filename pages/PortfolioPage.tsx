
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
        className="relative py-32 flex items-center justify-center text-center px-4"
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
          <h1 className="text-5xl md:text-6xl font-extrabold text-accent-gold leading-tight mb-6 animate-fade-in-up">
            見證精彩，樂年卓越案例
          </h1>
          <p className="text-xl md:text-2xl text-text-light font-medium animate-fade-in-up animate-fade-in-up-delay-1">
            我們為各行各業頂尖企業，成功打造無數令人難忘的年度盛會。
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="container mx-auto max-w-7xl py-32 px-4 animate-fade-in-up">
        <SectionTitle
          subtitle="我們引以為傲的成果"
          title="精選企業尾牙、春酒與慶功宴案例"
          titleClassName="text-text-light"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {FEATURED_CASES.map((caseStudy, index) => (
            <CaseCard key={index} caseStudy={caseStudy} />
          ))}
          {/* Add more cases if needed, extending the FEATURED_CASES array */}
          <CaseCard caseStudy={{
            name: '領航科技 | 元宇宙探索尾牙',
            industry: '資訊軟體',
            attendees: '700人',
            theme: '元宇宙探索之旅：鏈結未來',
            outcome: '運用VR/AR技術打造沉浸式體驗，完美結合科技與娛樂，員工參與度極高，展現企業創新力。',
            imageUrl: 'https://picsum.photos/600/400?random=8'
          }} />
          <CaseCard caseStudy={{
            name: '恆星藥廠 | 生命之光春酒',
            industry: '生物科技',
            attendees: '400人',
            theme: '生命之光：健康永續未來',
            outcome: '以生命科學為主題，結合藝術裝置與健康餐飲，彰顯企業理念與人文關懷，營造溫馨而專業的氛圍。',
            imageUrl: 'https://picsum.photos/600/400?random=9'
          }} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-red py-32 px-4 text-center mt-12 animate-fade-in-up">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-extrabold text-text-light leading-tight mb-6">
            您的下一個成功案例，由樂年打造
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-8">
            從策略發想、精準策劃到完美執行，樂年期待與您攜手，創造專屬的企業高光時刻。
          </p>
          <NavLink to="/contact">
            <Button variant="primary" className="min-w-[280px] py-4 text-xl">立即預約諮詢</Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;