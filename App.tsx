
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ProcessPage from './pages/ProcessPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import CaseDetailPage from './pages/CaseDetailPage'; // Import the new page
import { SEO_DATA, FEATURED_CASES, PRIMARY_BG, TEXT_SECONDARY } from './constants'; // 引入新的顏色常量

// Helper component to update SEO based on route
const SEOUpdater: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    let currentSEO = SEO_DATA.home; // Default to home SEO
    const pathname = location.pathname;

    const portfolioMatch = pathname.match(/^\/portfolio\/([^/]+)/);

    if (portfolioMatch) {
      const caseId = portfolioMatch[1];
      const caseData = FEATURED_CASES.find(c => c.id === caseId);
      if (caseData) {
        currentSEO = {
          title: `樂年 | 成功案例 - ${caseData.name}`,
          metaDescription: `深入了解樂年為 ${caseData.industry} 的 ${caseData.name} 專案，如何透過 ${caseData.theme} 主題，達成 ${caseData.outcome}`
        };
      }
    } else if (pathname === '/services') {
      currentSEO = SEO_DATA.services;
    } else if (pathname === '/portfolio') {
      currentSEO = SEO_DATA.portfolio;
    } else if (pathname === '/process') {
      currentSEO = SEO_DATA.process;
    } else if (pathname === '/testimonials') {
      currentSEO = SEO_DATA.testimonials;
    } else if (pathname === '/contact') {
      currentSEO = SEO_DATA.contact;
    }
    // For other paths or unmatched, it remains home SEO

    document.title = currentSEO.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', currentSEO.metaDescription);
  }, [location.pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <SEOUpdater />
      {/* 全域背景色與文字色調整 */}
      <div className={`flex flex-col min-h-screen bg-primary-bg text-text-secondary`}>
        <Navbar />
        <main className="flex-grow pt-20"> {/* Adjust pt to be slightly more than navbar height */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:caseId" element={<CaseDetailPage />} /> {/* Add new route */}
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Add a catch-all route for 404 if desired */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;