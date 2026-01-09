
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseClasses = 'font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg';
  let variantClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses = 'bg-accent-gold text-secondary-blue hover:bg-opacity-90';
      break;
    case 'secondary':
      variantClasses = 'bg-primary-red text-light-warm hover:bg-primary-red-dark';
      break;
    case 'outline':
      variantClasses = 'border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-secondary-blue';
      break;
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
