
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import AdvantageCard from '../components/AdvantageCard';
import CaseCard from '../components/CaseCard';
import TestimonialCard from '../components/TestimonialCard';
import ImageDisplay from '../components/ImageDisplay';
import { CORE_ADVANTAGES, FEATURED_CASES, PROCESS_STEPS, SERVICE_ITEMS, TESTIMONIALS, ACCENT_GOLD, BRAND_RED, PRIMARY_BG, TEXT_LIGHT, TEXT_SECONDARY, CARD_BG, BORDER_COLOR } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section - 全新設計與調整 */}
      <section
        className="relative min-h-[700px] md:min-h-[85vh] flex items-center px-4 overflow-hidden" // 調整區塊高度
        style={{
          // 已更新為豪華企業尾牙晚宴主題的Placeholder圖片URL。
          // 建議您下載此圖片或尋找更高品質的圖片，放置於 public/image/corporate-party-hero.jpg，並將此處替換為 `url('/image/corporate-party-hero.jpg')`
          backgroundImage: `url('https://images.unsplash.com/photo-1549488344-93e115c5457f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* 深色漸層遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-bg/[0.9] to-primary-bg/[0.4]"></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start text-left py-16">
          <div className="md:w-1/2 lg:w-[45%] pr-0 md:pr-12 text-center md:text-left"> {/* 調整文字區塊寬度 */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-text-light animate-fade-in-up"> {/* 縮小標題文字 */}
              樂年：為您的企業
              <span className="text-accent-gold ml-3">年度盛會</span>
              <br />
              策劃無與倫比的
              <span className="text-accent-gold ml-3">尾牙</span>
              與
              <span className="text-accent-gold ml-3">春酒</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary font-medium mb-10 animate-fade-in-up animate-fade-in-up-delay-1">
              凝聚卓越，慶祝豐碩，打造專屬年度儀式感
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up animate-fade-in-up-delay-2">
              <NavLink to="/contact">
                <Button variant="primary" className="w-72 py-4 text-xl">立即諮詢專案</Button>
              </NavLink>
              <NavLink to="/portfolio">
                <Button variant="outline" className="w-72 py-4 text-xl">查看成功案例</Button>
              </NavLink>
            </div>
          </div>
          {/* 右側視覺空間留給背景圖展現 */}
        </div>
      </section>

      {/* 樂年核心優勢 Section */}
      <section className="container mx-auto max-w-7xl py-32 px-4 animate-fade-in-up">
        <SectionTitle
          subtitle="我們的核心優勢"
          title="為何頂尖企業信賴樂年，成就卓越非凡"
          titleClassName="text-text-light"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CORE_ADVANTAGES.map((advantage, index) => (
            <AdvantageCard key={index} advantage={advantage} />
          ))}
        </div>
      </section>

      {/* 精選尾牙春酒案例 Section */}
      <section className="bg-brand-red py-32 px-4 animate-fade-in-up">
        <div className="container mx-auto max-w-7xl">
          <SectionTitle
            subtitle="榮耀時刻，品牌見證"
            title="樂年精選：頂級企業年度盛會案例"
            titleClassName="text-text-light"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {FEATURED_CASES.slice(0, 3).map((caseStudy, index) => (
              <CaseCard key={index} caseStudy={caseStudy} />
            ))}
          </div>
          <div className="text-center mt-20">
            <NavLink to="/portfolio">
              <Button variant="outline" className="min-w-[280px] py-4 text-xl">查看更多成功案例</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* 服務項目簡介 Section */}
      <section className="container mx-auto max-w-7xl py-32 px-4 animate-fade-in-up">
        <SectionTitle
          subtitle="一站式全方位服務"
          title="從概念到完美呈現：樂年的專業服務範疇"
          titleClassName="text-text-light"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICE_ITEMS.slice(0, 3).map((item, index) => ( // 僅顯示前三項作為簡介
            <div key={index} className={`bg-card-bg border border-border-color p-8 rounded-2xl shadow-xl 
                                        flex flex-col items-center text-center 
                                        transform transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.01] hover:shadow-2xl h-full`}>
              <div className="text-5xl mb-6 text-accent-gold">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-text-light mb-4">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed text-lg flex-grow">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-20">
          <NavLink to="/services">
            <Button variant="secondary" className="min-w-[280px] py-4 text-xl">了解更多服務項目</Button>
          </NavLink>
        </div>
      </section>

      {/* 服務流程 Section */}
      <section className="bg-primary-bg py-32 px-4 animate-fade-in-up">
        <div className="container mx-auto max-w-7xl">
          <SectionTitle
            subtitle="透明高效，安心交付"
            title="樂年六大專屬策劃流程，成就您的完美盛會"
            titleClassName="text-text-light"
          />
          <div className="relative">
            {PROCESS_STEPS.slice(0, 3).map((step, index) => ( // 僅顯示前三項作為簡介
              <div key={step.stepNumber} className={`relative flex flex-col md:flex-row items-center justify-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} my-12 md:my-16`}>
                <div className="w-full md:w-5/12 p-4 text-center md:text-left z-10">
                  <div className={`bg-card-bg border border-border-color p-8 rounded-2xl shadow-xl 
                                transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl`}>
                    <h3 className="text-2xl font-semibold text-accent-gold mb-3">{step.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{step.description}</p>
                  </div>
                </div>
                <div className="relative z-20 my-4 md:my-0">
                  <div className={`flex items-center justify-center w-20 h-20 rounded-full bg-brand-red border-4 border-accent-gold shadow-lg 
                                  text-text-light text-3xl font-bold`}>
                    {step.stepNumber}
                  </div>
                </div>
                <div className="w-full md:w-5/12 p-4 text-center md:text-right z-10"></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-20">
            <NavLink to="/process">
              <Button variant="outline-red" className="min-w-[280px] py-4 text-xl">了解完整服務流程</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* 客戶評價 Section */}
      <section className="container mx-auto max-w-7xl py-32 px-4 animate-fade-in-up">
        <SectionTitle
          subtitle="信賴與肯定的真實見證"
          title="來自頂尖企業的誠摯推薦"
          titleClassName="text-text-light"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        <div className="text-center mt-20">
          <NavLink to="/testimonials">
            <Button variant="outline" className="min-w-[280px] py-4 text-xl">閱讀更多客戶評價</Button>
          </NavLink>
        </div>
      </section>

      {/* 最後強力 CTA Section */}
      <section className="bg-brand-red py-32 px-4 text-center animate-fade-in-up">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-extrabold text-text-light leading-tight mb-8">
            立即啟動您的年度盛會，<br />讓樂年為您定義卓越！
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-12">
            我們是您值得信賴的夥伴，專注於打造無可比擬的企業慶典。
          </p>
          <NavLink to="/contact">
            <Button variant="primary" className="min-w-[300px] py-5 px-12 text-2xl animate-fade-in-up animate-fade-in-up-delay-3">立即預約專屬諮詢</Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default HomePage;