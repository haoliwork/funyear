
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import AdvantageCard from '../components/AdvantageCard';
import CaseCard from '../components/CaseCard';
import TrustedBy from '../components/TrustedBy';
import HighlightsGallery from '../components/HighlightsGallery';
import { CORE_ADVANTAGES, FEATURED_CASES, SERVICE_ITEMS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* 1. Hero Section */}
      <section
        className="relative min-h-[600px] md:min-h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/70 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-text-light animate-fade-in-up">
            樂年 FunYear
            <br />
            <span className="text-accent-gold">頂級企業盛會</span>
            策劃專家
          </h1>
          <p className="text-lg md:text-xl text-text-light font-medium mb-10 animate-fade-in-up animate-fade-in-up-delay-1">
            專注於尾牙、春酒與年度慶典，為您的企業打造無與倫比的榮耀時刻。
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up animate-fade-in-up-delay-2">
            <NavLink to="/contact">
              <Button variant="primary" className="w-full sm:w-auto px-10 py-3 text-lg">立即諮詢專案</Button>
            </NavLink>
            <NavLink to="/portfolio">
              <Button variant="outline" className="w-full sm:w-auto px-10 py-3 text-lg">查看成功案例</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* 2. 服務項目簡介 Section */}
      <section className="container mx-auto max-w-7xl py-20 px-4 animate-fade-in-up">
        <SectionTitle
          subtitle="一站式全方位服務"
          title="從概念到完美呈現：樂年的專業服務範疇"
          titleClassName="text-text-light"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_ITEMS.slice(0, 3).map((item, index) => (
            <div key={index} className={`bg-card-bg border border-border-color p-8 rounded-2xl shadow-xl 
                                        flex flex-col items-center text-center 
                                        transform transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.01] hover:shadow-2xl h-full`}>
              <div className="text-5xl mb-6 text-accent-gold">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-text-light mb-4">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed text-base flex-grow">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <NavLink to="/services">
            <Button variant="secondary" className="min-w-[260px] py-3 text-lg">了解更多服務項目</Button>
          </NavLink>
        </div>
      </section>

      {/* 3. 樂年核心優勢 (為何選擇我們) Section */}
      <section className="bg-card-bg py-20 px-4 animate-fade-in-up">
        <div className="container mx-auto max-w-7xl">
            <SectionTitle
              subtitle="我們的核心優勢"
              title="為何頂尖企業信賴樂年，成就卓越非凡"
              titleClassName="text-text-light"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CORE_ADVANTAGES.map((advantage, index) => (
                <AdvantageCard key={index} advantage={advantage} />
              ))}
            </div>
        </div>
      </section>
      
      {/* 4. 精選尾牙春酒案例 Section */}
      <section className="bg-brand-red py-20 px-4 animate-fade-in-up">
        <div className="container mx-auto max-w-7xl">
          <SectionTitle
            subtitle="榮耀時刻，品牌見證"
            title="樂年精選：頂級企業年度盛會案例"
            titleClassName="text-text-light"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_CASES.slice(0, 3).map((caseStudy) => (
              <NavLink key={caseStudy.id} to={`/portfolio/${caseStudy.id}`}>
                <CaseCard caseStudy={caseStudy} />
              </NavLink>
            ))}
          </div>
          <div className="text-center mt-16">
            <NavLink to="/portfolio">
              <Button variant="outline" className="min-w-[260px] py-3 text-lg">查看更多成功案例</Button>
            </NavLink>
          </div>
        </div>
      </section>
      
      {/* 5. 活動花絮 Section */}
      <div className="animate-fade-in-up">
        <HighlightsGallery />
      </div>

      {/* 6. Trusted By (Logo 牆) Section */}
      <div className="animate-fade-in-up">
        <TrustedBy />
      </div>

      {/* 7. 最後強力 CTA Section */}
      <section className="bg-brand-red py-20 px-4 text-center animate-fade-in-up">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-light leading-tight mb-6">
            立即啟動您的年度盛會，<br />讓樂年為您定義卓越！
          </h2>
          <p className="text-base md:text-lg text-text-secondary mb-8">
            我們是您值得信賴的夥伴，專注於打造無可比擬的企業慶典。
          </p>
          <NavLink to="/contact">
            <Button variant="primary" className="min-w-[260px] py-3 text-lg animate-fade-in-up animate-fade-in-up-delay-3">立即預約專屬諮詢</Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default HomePage;