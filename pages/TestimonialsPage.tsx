
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';
import { TESTIMONIALS, PRIMARY_BG, BRAND_RED, ACCENT_GOLD, TEXT_LIGHT, TEXT_SECONDARY, CARD_BG, BORDER_COLOR } from '../constants';
import { NavLink } from 'react-router-dom';

const TestimonialsPage: React.FC = () => {
  return (
    <div className={`bg-primary-bg py-16`}>
      {/* Hero Section for Testimonials - 全新設計 */}
      <section
        className="relative py-32 flex items-center justify-center text-center px-4"
        style={{
          // 建議您下載此圖片或尋找更高品質的圖片，放置於 public/image/testimonials-hero.jpg，並將此處替換為 `url('/image/testimonials-hero.jpg')`
          backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* 深色漸層遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/[0.9] to-primary-bg/[0.4]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-accent-gold leading-tight mb-6 animate-fade-in-up">
            客戶口碑，信賴首選
          </h1>
          <p className="text-xl md:text-2xl text-text-light font-medium animate-fade-in-up animate-fade-in-up-delay-1">
            來自中大型企業的真實推薦，見證樂年的卓越與專業。
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="container mx-auto max-w-7xl py-32 px-4 animate-fade-in-up">
        <SectionTitle
          subtitle="信賴與肯定的聲音"
          title="企業客戶推薦與信任見證"
          titleClassName="text-text-light"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-red py-32 px-4 text-center mt-12 animate-fade-in-up">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-extrabold text-text-light leading-tight mb-6">
            您的滿意，是我們最大的動力
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-8">
            期待與您合作，為您的企業打造下一個口碑相傳的成功盛會。
          </p>
          <NavLink to="/contact">
            <Button variant="primary" className="min-w-[280px] py-4 text-xl">立即安排諮詢</Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;