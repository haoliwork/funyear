
import React from 'react';
import { TEXT_SECONDARY } from '../constants'; // 引入新的顏色常量

interface ImageDisplayProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string; // Additional classes for the img tag
  containerClassName?: string; // Classes for the wrapping div (if caption exists)
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ src, alt, caption, className = '', containerClassName = '' }) => {
  const imageClasses = `max-w-full h-auto rounded-lg shadow-md ${className}`;

  if (caption) {
    return (
      <figure className={`my-8 ${containerClassName}`}>
        <img src={src} alt={alt} className={imageClasses} loading="lazy" />
        {/* Caption 文字顏色調整 */}
        <figcaption className={`text-center text-text-secondary text-sm mt-2`}>{caption}</figcaption>
      </figure>
    );
  }

  return (
    <img src={src} alt={alt} className={`my-8 ${imageClasses}`} loading="lazy" />
  );
};

export default ImageDisplay;