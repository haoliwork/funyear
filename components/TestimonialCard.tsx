
import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-secondary-blue p-8 rounded-lg shadow-xl flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl h-full">
      <img
        src={testimonial.avatarUrl}
        alt={testimonial.client}
        className="w-20 h-20 rounded-full object-cover mb-6 border-4 border-accent-gold shadow-md"
      />
      <p className="text-light-warm text-lg italic mb-6 leading-relaxed">
        「{testimonial.quote}」
      </p>
      <div className="border-t border-gray-700 w-24 mx-auto pt-4">
        <p className="font-bold text-accent-gold text-xl">{testimonial.client}</p>
        <p className="text-gray-400 text-md">{testimonial.company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
