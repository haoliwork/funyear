
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
import { SEO_DATA } from './constants';

// Helper component to update SEO based on route
const SEOUpdater: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    let currentSEO = SEO_DATA.home; // Default to home SEO

    if (location.pathname === '/services') {
      currentSEO = SEO_DATA.services;
    } else if (location.pathname === '/portfolio') {
      currentSEO = SEO_DATA.portfolio;
    } else if (location.pathname === '/process') {
      currentSEO = SEO_DATA.process;
    } else if (location.pathname === '/testimonials') {
      currentSEO = SEO_DATA.testimonials;
    } else if (location.pathname === '/contact') {
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
      <div className="flex flex-col min-h-screen bg-white text-gray-900"> {/* Changed bg-dark-bg to bg-white and text-gray-100 to text-gray-900 */}
        <Navbar />
        <main className="flex-grow pt-20"> {/* Adjust pt to be slightly more than navbar height */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
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