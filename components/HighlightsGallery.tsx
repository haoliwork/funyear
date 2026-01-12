import React from 'react';
import SectionTitle from './SectionTitle';
import { HIGHLIGHTS_IMAGES } from '../constants';

const HighlightsGallery: React.FC = () => {
  return (
    <section className="bg-primary-bg py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle
          subtitle="捕捉每一刻的非凡"
          title="活動花絮：見證盛會的精彩瞬間"
          titleClassName="text-text-light"
        />
        {/* Updated grid for uniform image sizes. Removed complex spanning logic. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HIGHLIGHTS_IMAGES.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg group h-64" // Set a fixed height for uniformity
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsGallery;