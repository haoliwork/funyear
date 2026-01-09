
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { SERVICE_ITEMS } from '../constants';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white py-16"> {/* Changed bg-dark-bg to bg-white */}
      {/* Hero Section for Services */}
      <section
        className="relative py-24 flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url('/image/新宴會英雄.jpg.jpg.jpg.png')`, // 使用指定的新Hero圖片
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // 增加視差滾動效果
        }}
      >
        <div className="absolute inset-0 bg-secondary-blue opacity-80 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-accent-gold leading-tight mb-4 animate-fade-in-up">
            專業服務，成就卓越
          </h1>
          <p className="text-xl md:text-2xl text-light-warm font-medium animate-fade-in-up delay-200">
            樂年提供一站式、全方位的企業年度盛會策劃服務，確保您的活動從理念到執行都無懈可擊。
          </p>
        </div>
      </section>

      {/* Service Items List */}
      <section className="container mx-auto py-16 px-4">
        <SectionTitle
          subtitle="我們能為您做什麼？"
          title="全方位企業活動策劃服務"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICE_ITEMS.map((item, index) => (
            <div key={index} className="bg-secondary-blue p-8 rounded-lg shadow-xl flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl h-full">
              <div className="text-5xl mb-6 text-accent-gold">{item.icon}</div>
              <h3 className="text-3xl font-bold text-light-warm mb-4">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed text-lg flex-grow">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-red py-16 px-4 text-center mt-12">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-light-warm leading-tight mb-6">
            讓專業為您的企業活動加冕
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            立即諮詢樂年，我們將為您量身打造專屬的年度盛會企劃方案。
          </p>
          <NavLink to="/contact">
            <Button variant="primary" className="min-w-[200px] py-3 px-8 text-lg">立即諮詢專案</Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;