
import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-secondary-blue bg-opacity-95 shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <RouterNavLink to="/" className="text-accent-gold text-3xl font-bold font-serif tracking-wider">
          樂年 FunYear
        </RouterNavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <RouterNavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-300 ${
                  isActive ? 'text-accent-gold' : 'text-gray-200 hover:text-accent-gold'
                }`
              }
            >
              {link.name}
            </RouterNavLink>
          ))}
          <RouterNavLink to="/contact">
            <Button variant="primary">立即諮詢</Button>
          </RouterNavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-200 focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-secondary-blue bg-opacity-95 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <RouterNavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-xl font-medium transition-colors duration-300 ${
                  isActive ? 'text-accent-gold' : 'text-gray-200 hover:text-accent-gold'
                }`
              }
              onClick={toggleMenu}
            >
              {link.name}
            </RouterNavLink>
          ))}
          <RouterNavLink to="/contact" onClick={toggleMenu}>
            <Button variant="primary" className="w-full">立即諮詢</Button>
          </RouterNavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
