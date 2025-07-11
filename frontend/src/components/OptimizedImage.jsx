import React, { useState, useEffect, useRef } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  fallback = null, 
  loading = 'lazy',
  quality = 75,
  width,
  height,
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === 'lazy' && imgRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { 
          threshold: 0.1,
          rootMargin: '50px 0px 50px 0px'
        }
      );
      
      observer.observe(imgRef.current);
      return () => observer.disconnect();
    } else if (loading === 'eager') {
      setIsInView(true);
    }
  }, [loading]);

  // Optimize image URL
  const optimizeImageUrl = (url) => {
    if (!url) return null;
    
    // For external URLs, add optimization parameters
    if (url.includes('unsplash.com')) {
      const params = new URLSearchParams();
      if (width) params.set('w', width);
      if (height) params.set('h', height);
      params.set('fit', 'crop');
      params.set('crop', 'entropy');
      params.set('auto', 'format');
      params.set('q', quality);
      return `${url}&${params.toString()}`;
    }
    
    if (url.includes('pexels.com')) {
      const params = new URLSearchParams();
      params.set('auto', 'compress');
      params.set('cs', 'tinysrgb');
      if (width) params.set('w', width);
      if (height) params.set('h', height);
      return `${url}?${params.toString()}`;
    }
    
    // For data URLs or local files, use as-is
    if (url.startsWith('data:') || url.startsWith('/')) {
      return url;
    }
    
    return url;
  };

  useEffect(() => {
    if (src && (isInView || loading === 'eager')) {
      const optimizedSrc = optimizeImageUrl(src);
      setImageSrc(optimizedSrc);
    }
  }, [src, quality, width, height, isInView, loading]);

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const handleError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  // Show fallback if error or no src
  if (imageError || !src) {
    return fallback || (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`} {...props}>
        <div className="text-gray-400 text-sm">Image unavailable</div>
      </div>
    );
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} {...props}>
      {/* Loading placeholder */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
      
      {/* Actual image */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={loading}
          decoding="async"
          style={{
            filter: imageLoaded ? 'none' : 'blur(5px)',
          }}
        />
      )}
    </div>
  );
};