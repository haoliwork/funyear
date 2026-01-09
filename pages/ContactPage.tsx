
import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import InputGroup from '../components/InputGroup';
import Button from '../components/Button';
import { CONTACT_FORM_FIELDS, CONTACT_PAGE_TEXT, FOOTER_CONTACT, PRIMARY_BG, BRAND_RED, ACCENT_GOLD, TEXT_LIGHT, TEXT_SECONDARY, CARD_BG, BORDER_COLOR } from '../constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phoneNumber: '',
    email: '',
    eventDate: '',
    attendees: '',
    budget: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('您的詢價已送出，感謝您的填寫！我們的專業顧問將盡快與您聯繫。');
    // Here you would typically send the data to a backend API
    // Reset form after submission
    setFormData({
      companyName: '',
      contactPerson: '',
      phoneNumber: '',
      email: '',
      eventDate: '',
      attendees: '',
      budget: '',
      description: '',
    });
  };

  return (
    <div className={`bg-primary-bg py-16`}>
      {/* Hero Section for Contact - 全新設計 */}
      <section
        className="relative py-32 flex items-center justify-center text-center px-4"
        style={{
          // 建議您下載此圖片或尋找更高品質的圖片，放置於 public/image/contact-hero.jpg，並將此處替換為 `url('/image/contact-hero.jpg')`
          backgroundImage: `url('https://images.unsplash.com/photo-1581092580497-c3d25c86dc18?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* 深色漸層遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/[0.9] to-primary-bg/[0.4]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-accent-gold leading-tight mb-6 animate-fade-in-up">
            立即諮詢，專屬服務
          </h1>
          <p className="text-xl md:text-2xl text-text-light font-medium animate-fade-in-up animate-fade-in-up-delay-1">
            填寫表單，讓我們為您的企業盛會量身打造完美企劃。
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto max-w-7xl py-32 px-4 animate-fade-in-up">
        <SectionTitle
          subtitle="開啟卓越盛會的第一步"
          title="企業活動詢價表單"
          titleClassName="text-text-light"
        />
        <div className={`max-w-3xl mx-auto bg-card-bg border border-border-color p-8 md:p-12 rounded-2xl shadow-xl`}>
          <p className={`text-text-secondary text-lg mb-8 leading-relaxed`}>
            {CONTACT_PAGE_TEXT.description}
          </p>
          <form onSubmit={handleSubmit}>
            {CONTACT_FORM_FIELDS.map((field, index) => (
              <InputGroup
                key={index}
                field={field}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
              />
            ))}
            <div className="text-center mt-8">
              <Button type="submit" variant="primary" className="min-w-[280px] py-4 text-xl">
                {CONTACT_PAGE_TEXT.button}
              </Button>
            </div>
          </form>

          <div className={`mt-12 pt-8 border-t border-border-color text-center`}>
            <h3 className={`text-2xl font-semibold text-accent-gold mb-4`}>或直接聯繫我們</h3>
            <p className={`text-text-light text-lg mb-2`}>電子郵件: <a href={`mailto:${FOOTER_CONTACT.email}`} className="hover:text-accent-gold">{FOOTER_CONTACT.email}</a></p>
            <p className={`text-text-light text-lg`}>電話: <a href={`tel:${FOOTER_CONTACT.phone}`} className="hover:text-accent-gold">{FOOTER_CONTACT.phone}</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;