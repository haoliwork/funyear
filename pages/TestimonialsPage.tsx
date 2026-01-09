
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';
import { TESTIMONIALS } from '../constants';
import { NavLink } from 'react-router-dom';

const TestimonialsPage: React.FC = () => {
  return (
    <div className="bg-white py-16"> {/* Changed bg-dark-bg to bg-white */}
      {/* Hero Section for Testimonials */}
      <section
        className="relative py-24 flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url('/image/新宴會英雄.jpg.jpg.jpg.png')`, // 使用指定的新Hero圖片
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // 增加視差滾動效果
        }}
      >
        <div className="absolute inset-0 bg-primary-red-dark opacity-80 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-accent-gold leading-tight mb-4 animate-fade-in-up">
            客戶口碑，信賴首選
          </h1>
          <p className="text-xl md:text-2xl text-light-warm font-medium animate-fade-in-up delay-200">
            來自中大型企業的真實推薦，見證樂年的卓越與專業。
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="container mx-auto py-16 px-4">
        <SectionTitle
          subtitle="信賴與肯定的聲音"
          title="企業客戶推薦與信任見證"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-blue py-16 px-4 text-center mt-12">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-light-warm leading-tight mb-6">
            您的滿意，是我們最大的動力
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            期待與您合作，為您的企業打造下一個口碑相傳的成功盛會。
          </p>
          <NavLink to="/contact">
            <Button variant="primary" className="min-w-[200px] py-3 px-8 text-lg">立即安排諮詢</Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;