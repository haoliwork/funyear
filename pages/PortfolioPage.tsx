
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import CaseCard from '../components/CaseCard';
import Button from '../components/Button';
import { FEATURED_CASES } from '../constants';
import { NavLink } from 'react-router-dom';

const PortfolioPage: React.FC = () => {
  return (
    <div className="bg-white py-16"> {/* Changed bg-dark-bg to bg-white */}
      {/* Hero Section for Portfolio */}
      <section
        className="relative py-24 flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url('/image/新宴會英雄.jpg.jpg.jpg.png')`, // 使用指定的新Hero圖片
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // 增加視差滾動效果
        }}
      >
        <div className="absolute inset-0 bg-primary-red opacity-80 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-accent-gold leading-tight mb-4 animate-fade-in-up">
            見證精彩，樂年案例
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-medium animate-fade-in-up delay-200">
            我們為各行各業中大型企業，成功打造無數令人難忘的年度盛會。
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="container mx-auto py-16 px-4">
        <SectionTitle
          subtitle="我們引以為傲的成果"
          title="精選企業尾牙、春酒與慶功宴案例"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_CASES.map((caseStudy, index) => (
            <CaseCard key={index} caseStudy={caseStudy} />
          ))}
          {/* Add more cases if needed, extending the FEATURED_CASES array */}
          <CaseCard caseStudy={{
            name: '領航科技尾牙晚宴',
            industry: '資訊軟體',
            attendees: '700人',
            theme: '元宇宙探索之旅',
            outcome: '運用VR/AR技術打造沉浸式體驗，完美結合科技與娛樂，員工參與度極高。',
            imageUrl: 'https://picsum.photos/600/400?random=8'
          }} />
          <CaseCard caseStudy={{
            name: '恆星藥廠春酒',
            industry: '生物科技',
            attendees: '400人',
            theme: '生命之光：健康未來',
            outcome: '以生命科學為主題，結合藝術裝置與健康餐飲，彰顯企業理念與人文關懷。',
            imageUrl: 'https://picsum.photos/600/400?random=9'
          }} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-blue py-16 px-4 text-center mt-12">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-accent-gold leading-tight mb-6">
            您的下一個成功案例，由樂年打造
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            從發想、策劃到執行，樂年期待與您攜手，創造專屬的企業高光時刻。
          </p>
          <NavLink to="/contact">
            <Button variant="primary" className="min-w-[200px] py-3 px-8 text-lg">立即預約諮詢</Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;