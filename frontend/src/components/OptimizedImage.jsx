import React, { useState, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  fallback = null, 
  loading = 'lazy',
  quality = 75,
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Handle different image sources
    if (src) {
      // For external URLs, use as-is
      if (src.startsWith('http') || src.startsWith('data:')) {
        setImageSrc(src);
      } else {
        // For local images, add optimization parameters
        const optimizedSrc = src.includes('?') 
          ? `${src}&q=${quality}` 
          : `${src}?q=${quality}`;
        setImageSrc(optimizedSrc);
      }
    }
  }, [src, quality]);

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const handleError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  if (imageError && fallback) {
    return fallback;
  }

  return (
    <div className={`relative ${className}`}>
      {imageSrc && (
        <>
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
          )}
          
          {/* Actual image */}
          <img
            src={imageSrc}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            loading={loading}
            className={`${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            {...props}
          />
        </>
      )}
    </div>
  );
};

export default OptimizedImage;