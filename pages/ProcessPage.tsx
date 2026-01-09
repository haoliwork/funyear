
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ProcessStep from '../components/ProcessStep';
import Button from '../components/Button';
import { PROCESS_STEPS } from '../constants';
import { NavLink } from 'react-router-dom';

const ProcessPage: React.FC = () => {
  return (
    <div className="bg-white py-16"> {/* Changed bg-dark-bg to bg-white */}
      {/* Hero Section for Process */}
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
            專業策劃，安心交付
          </h1>
          <p className="text-xl md:text-2xl text-light-warm font-medium animate-fade-in-up delay-200">
            樂年六大標準流程，確保您的企業盛會從規劃到執行，全程透明、高效、完美。
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="container mx-auto py-16 px-4 relative">
        <SectionTitle
          subtitle="我們的承諾"
          title="樂年企業活動策劃六大標準流程"
          titleClassName="text-primary-red" // 將標題文字顏色改為酒紅色
        />
        <div className="relative">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStep key={step.stepNumber} step={step} isEven={index % 2 === 1} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-red py-16 px-4 text-center mt-12">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-light-warm leading-tight mb-6">
            讓每一步都精準到位
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            選擇樂年，您選擇的不僅是卓越的活動，更是一份無可取代的安心與信任。
          </p>
          <NavLink to="/contact">
            <Button variant="primary" className="min-w-[200px] py-3 px-8 text-lg">立即與我們聯繫</Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;