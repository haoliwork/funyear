
import React from 'react';
import { FOOTER_COPYRIGHT, FOOTER_CONTACT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-blue py-12 mt-16 text-gray-300">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-accent-gold text-2xl font-bold font-serif mb-4">樂年 FunYear</h3>
            <p className="text-sm">您的企業年度盛會策劃專家。</p>
          </div>

          <div className="flex flex-col items-center md:items-center">
            <h4 className="text-lg font-semibold text-light-warm mb-4">聯絡我們</h4>
            <p className="text-sm">電子郵件: <a href={`mailto:${FOOTER_CONTACT.email}`} className="hover:text-accent-gold transition-colors duration-300">{FOOTER_CONTACT.email}</a></p>
            <p className="text-sm">電話: <a href={`tel:${FOOTER_CONTACT.phone}`} className="hover:text-accent-gold transition-colors duration-300">{FOOTER_CONTACT.phone}</a></p>
            <p className="text-sm">地址: {FOOTER_CONTACT.address}</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-lg font-semibold text-light-warm mb-4">追蹤我們</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent-gold transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-gold transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.455 1.458A.538.538 0 0012 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11a.538.538 0 00-.455.195zM15.424 17.518a.936.936 0 01-1.326.082l-2.028-1.74a.896.896 0 00-1.228.026l-2.027 1.74a.936.936 0 01-1.326-.082.937.937 0 01.082-1.326l2.027-1.74a.896.896 0 00.026-1.228L7.54 11.458a.937.937 0 011.326-.082l2.028 1.74a.896.896 0 001.228-.026l2.027-1.74a.936.936 0 011.326.082.937.937 0 01-.082 1.326l-2.027 1.74a.896.896 0 00-.026 1.228l2.027 1.74a.937.937 0 01-.082 1.326zM12 4.5a.5.5 0 01.5.5v2a.5.5 0 01-1 0V5a.5.5 0 01.5-.5zM6 12a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm10.5 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-center text-sm">{FOOTER_COPYRIGHT}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
