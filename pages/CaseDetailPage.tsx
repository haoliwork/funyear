
import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { FEATURED_CASES, BRAND_RED, ACCENT_GOLD, TEXT_LIGHT, TEXT_SECONDARY, CARD_BG, BORDER_COLOR } from '../constants';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const CaseDetailPage: React.FC = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const caseStudy = FEATURED_CASES.find(c => c.id === caseId);

  if (!caseStudy) {
    return (
      <div className="text-center py-40 text-text-light">
        <h1 className="text-3xl">案例不存在</h1>
        <p className="mt-4">您所尋找的成功案例不存在或已被移除。</p>
        <NavLink to="/portfolio" className="mt-8 inline-block">
          <Button variant="primary">返回案例列表</Button>
        </NavLink>
      </div>
    );
  }

  return (
    <div className={`bg-primary-bg py-16`}>
      {/* Hero Section */}
      <section
        className="relative py-32 flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url('${caseStudy.imageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/[0.9] to-primary-bg/[0.4]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-accent-gold leading-tight mb-4 animate-fade-in-up">
            {caseStudy.name}
          </h1>
          <p className="text-lg md:text-xl text-text-light font-medium animate-fade-in-up animate-fade-in-up-delay-1">
            {caseStudy.subtitle}
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl py-20 px-4 animate-fade-in-up">
        {/* Overview Section */}
        <section className={`bg-card-bg border border-border-color p-8 md:p-12 rounded-2xl shadow-xl mb-16`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-base text-accent-gold font-semibold mb-2">產業類型</p>
              <p className="text-xl text-text-light">{caseStudy.industry}</p>
            </div>
            <div>
              <p className="text-base text-accent-gold font-semibold mb-2">活動人數</p>
              <p className="text-xl text-text-light">{caseStudy.attendees}</p>
            </div>
            <div>
              <p className="text-base text-accent-gold font-semibold mb-2">主題亮點</p>
              <p className="text-xl text-text-light">{caseStudy.theme}</p>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-text-light mb-4 border-l-4 border-accent-gold pl-4">專案挑戰</h2>
          <p className="text-text-secondary text-lg leading-relaxed">{caseStudy.challenge}</p>
        </section>

        {/* Solution Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-text-light mb-4 border-l-4 border-accent-gold pl-4">解決方案</h2>
          <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
            {caseStudy.solution.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-text-light mb-4 border-l-4 border-accent-gold pl-4">最終成效</h2>
          <ul className="list-disc list-inside space-y-3 text-text-secondary text-lg">
            {caseStudy.results.map((result, index) => (
              <li key={index} className="pl-2">{result}</li>
            ))}
          </ul>
        </section>

        {/* Gallery Section */}
        <section className="mb-16">
          <SectionTitle title="活動集錦" subtitle="精彩瞬間" titleClassName="text-text-light" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {caseStudy.galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img src={image} alt={`${caseStudy.name} gallery image ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110" />
              </div>
            ))}
          </div>
        </section>
        
        <div className="text-center mt-20">
          <NavLink to="/portfolio">
            <Button variant="outline">返回案例列表</Button>
          </NavLink>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-brand-red py-20 px-4 text-center mt-12 animate-fade-in-up">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-light leading-tight mb-6">
            打造您的專屬成功案例
          </h2>
          <p className="text-base md:text-lg text-text-secondary mb-8">
            立即與樂年聯繫，讓我們為您的企業策劃下一場無與倫比的年度盛會。
          </p>
          <NavLink to="/contact">
            <Button variant="primary" className="min-w-[260px] py-3 text-lg">立即預約諮詢</Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default CaseDetailPage;
