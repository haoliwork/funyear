
import React from 'react';

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
        <figcaption className="text-center text-gray-600 text-sm mt-2">{caption}</figcaption>
      </figure>
    );
  }

  return (
    <img src={src} alt={alt} className={`my-8 ${imageClasses}`} loading="lazy" />
  );
};

export default ImageDisplay;
