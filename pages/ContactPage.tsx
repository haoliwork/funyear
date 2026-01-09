
import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import InputGroup from '../components/InputGroup';
import Button from '../components/Button';
import { CONTACT_FORM_FIELDS, CONTACT_PAGE_TEXT, FOOTER_CONTACT } from '../constants';

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
    <div className="bg-white py-16"> {/* Changed bg-dark-bg to bg-white */}
      {/* Hero Section for Contact */}
      <section
        className="relative py-24 flex items-center justify-center text-center px-4"
        style={{
          // 將背景圖片更新為本地 image 資料夾中名為 '新宴會英雄.jpg.jpg.jpg.png' 的圖片
          backgroundImage: `url('/image/新宴會英雄.jpg.jpg.jpg.png')`, // 使用指定的新Hero圖片
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // 增加視差滾動效果
        }}
      >
        <div className="absolute inset-0 bg-secondary-blue opacity-80 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-accent-gold leading-tight mb-4 animate-fade-in-up">
            立即諮詢，專屬服務
          </h1>
          <p className="text-xl md:text-2xl text-light-warm font-medium animate-fade-in-up delay-200">
            填寫表單，讓我們為您的企業盛會量身打造完美企劃。
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto py-16 px-4">
        <SectionTitle
          subtitle="開啟卓越盛會的第一步"
          title="企業活動詢價表單"
        />
        <div className="max-w-3xl mx-auto bg-secondary-blue p-8 md:p-12 rounded-lg shadow-xl">
          <p className="text-light-warm text-lg mb-8 leading-relaxed">
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
              <Button type="submit" variant="primary" className="min-w-[200px] py-3 px-8 text-lg">
                {CONTACT_PAGE_TEXT.button}
              </Button>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <h3 className="text-2xl font-bold text-accent-gold mb-4">或直接聯繫我們</h3>
            <p className="text-light-warm text-lg mb-2">電子郵件: <a href={`mailto:${FOOTER_CONTACT.email}`} className="hover:text-accent-gold">{FOOTER_CONTACT.email}</a></p>
            <p className="text-light-warm text-lg">電話: <a href={`tel:${FOOTER_CONTACT.phone}`} className="hover:text-accent-gold">{FOOTER_CONTACT.phone}</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;