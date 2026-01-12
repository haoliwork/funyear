
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ProcessStep from '../components/ProcessStep';
import Button from '../components/Button';
import { PROCESS_STEPS, PRIMARY_BG, BRAND_RED, ACCENT_GOLD, TEXT_LIGHT, TEXT_SECONDARY, CARD_BG, BORDER_COLOR } from '../constants';
import { NavLink } from 'react-router-dom';

const ProcessPage: React.FC = () => {
  return (
    <div className={`bg-primary-bg py-16`}>
      {/* Hero Section for Process - 全新設計 */}
      <section
        className="relative py-28 flex items-center justify-center text-center px-4" // 縮小 py
        style={{
          // 建議您下載此圖片或尋找更高品質的圖片，放置於 public/image/process-hero.jpg，並將此處替換為 `url('/image/process-hero.jpg')`
          backgroundImage: `url('https://images.unsplash.com/photo-1556761175-57738bdf05a3?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* 深色漸層遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/[0.9] to-primary-bg/[0.4]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-accent-gold leading-tight mb-6 animate-fade-in-up"> {/* 縮小標題 */}
            專業策劃，安心交付
          </h1>
          <p className="text-lg md:text-xl text-text-light font-medium animate-fade-in-up animate-fade-in-up-delay-1"> {/* 縮小內文 */}
            樂年六大標準流程，確保您的企業盛會從規劃到執行，全程透明、高效、完美。
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="container mx-auto max-w-7xl py-20 px-4 relative animate-fade-in-up"> {/* 縮小 py */}
        <SectionTitle
          subtitle="我們的承諾"
          title="樂年企業活動策劃六大標準流程"
          titleClassName="text-text-light"
        />
        <div className="relative">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStep key={step.stepNumber} step={step} isEven={index % 2 === 1} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-red py-20 px-4 text-center mt-12 animate-fade-in-up"> {/* 縮小 py */}
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-light leading-tight mb-6"> {/* 縮小標題 */}
            讓每一步都精準到位
          </h2>
          <p className="text-base md:text-lg text-text-secondary mb-8"> {/* 縮小內文 */}
            選擇樂年，您選擇的不僅是卓越的活動，更是一份無可取代的安心與信任。
          </p>
          <NavLink to="/contact">
            <Button variant="primary" className="min-w-[260px] py-3 text-lg">立即與我們聯繫</Button> {/* 縮小按鈕 */}
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;