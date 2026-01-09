
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import AdvantageCard from '../components/AdvantageCard';
import CaseCard from '../components/CaseCard';
import TestimonialCard from '../components/TestimonialCard';
import ImageDisplay from '../components/ImageDisplay'; // 導入 ImageDisplay 元件
import { CORE_ADVANTAGES, FEATURED_CASES, PROCESS_STEPS, TESTIMONIALS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden"
        style={{
          // 將背景圖片更新為本地 image 資料夾中名為 '新宴會英雄.jpg.jpg.jpg.png' 的圖片
          backgroundImage: `url('/image/新宴會英雄.jpg.jpg.jpg.png')`, // 使用用戶提供的新圖片
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-secondary-blue opacity-80 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-4xl mx-auto py-16">
          <h1 className="text-5xl md:text-7xl font-bold text-accent-gold leading-tight mb-6 animate-fade-in-up">
            打造每年最令人期待的尾牙春酒派對
          </h1>
          <p className="text-xl md:text-3xl text-light-warm font-medium mb-10 animate-fade-in-up delay-200">
            凝聚團隊｜犒賞有功｜年度儀式感
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-400">
            <NavLink to="/contact">
              <Button variant="primary" className="w-60">立即諮詢</Button>
            </NavLink>
            <NavLink to="/services">
              <Button variant="outline" className="w-60">查看方案</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Core Advantages Section */}
      <section className="container mx-auto py-16 px-4">
        <SectionTitle
          subtitle="我們的核心價值"
          title="為何選擇樂年，成就卓越活動"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_ADVANTAGES.map((advantage, index) => (
            <AdvantageCard key={index} advantage={advantage} />
          ))}
        </div>

        {/* ImageDisplay Component Example */}
        <div className="max-w-4xl mx-auto mt-16">
          <ImageDisplay
            src="https://picsum.photos/1200/600"
            alt="樂年活動策劃團隊"
            caption="樂年專業團隊，為您的活動提供無微不至的服務。"
            className="w-full"
            containerClassName="text-gray-900" // 將figcaption文字顏色調整為深色
          />
        </div>
      </section>

      {/* Featured Cases Section */}
      <section className="bg-primary-red-dark py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle
            subtitle="精彩回顧"
            title="精選尾牙春酒案例展示"
            titleClassName="text-white" // 將標題文字顏色改為白色
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_CASES.slice(0, 3).map((caseStudy, index) => (
              <CaseCard key={index} caseStudy={caseStudy} />
            ))}
          </div>
          <div className="text-center mt-12">
            <NavLink to="/portfolio">
              <Button variant="outline">查看更多成功案例</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Process Intro Section */}
      <section className="container mx-auto py-16 px-4">
        <SectionTitle
          subtitle="輕鬆策劃"
          title="樂年服務流程簡介"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROCESS_STEPS.slice(0, 3).map((step, index) => (
            <div key={index} className="bg-secondary-blue p-6 rounded-lg shadow-md text-center">
              <div className="text-accent-gold text-4xl font-bold mb-4">{step.stepNumber}</div>
              <h3 className="text-xl font-bold text-light-warm mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.description.substring(0, 50)}...</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <NavLink to="/process">
            <Button variant="secondary">了解完整服務流程</Button>
          </NavLink>
        </div>
      </section>

      {/* Client Testimonials Snippet */}
      <section className="bg-gray-100 py-16 px-4"> {/* Changed bg-dark-bg to bg-gray-100 */}
        <div className="container mx-auto">
          <SectionTitle
            subtitle="客戶心聲"
            title="客戶推薦短評"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
          <div className="text-center mt-12">
            <NavLink to="/testimonials">
              <Button variant="outline">閱讀更多客戶評價</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="bg-primary-red py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-light-warm leading-tight mb-8">
            讓樂年為您打造下一個企業傳奇！
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-10">
            無論是年度尾牙、溫馨春酒或榮耀慶功宴，我們都能提供最專業、最有質感的策劃與執行。立即與我們聯繫，讓您的企業盛會光芒萬丈！
          </p>
          <NavLink to="/contact">
            <Button variant="primary" className="min-w-[250px] py-4 px-10 text-xl">立即諮詢</Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default HomePage;