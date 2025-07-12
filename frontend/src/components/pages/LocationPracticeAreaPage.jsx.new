import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import OptimizedImage from '../OptimizedImage';
import { siteData } from '../../data/mockData';
import { MapPin, Phone, Calendar, Star, Award, Users, Scale, Clock, CheckCircle, Shield, Briefcase } from 'lucide-react';

const LocationPracticeAreaPage = () => {
  const [pageData, setPageData] = useState(null);

  // Comprehensive location data covering all service areas
  const locationData = {
    // ... (keep existing locationData object)
  };

  // Comprehensive practice area data with detailed content
  const practiceAreaData = {
    // ... (keep existing practiceAreaData object)
  };

  useEffect(() => {
    // Always use manual URL parsing for our hidden SEO pages
    const currentPath = window.location.pathname.substring(1); // Remove leading slash
    
    console.log('Parsing URL:', currentPath); // Debug log
    
    let parsedLocation = null;
    let parsedPracticeArea = null;
    
    // Check if this is a hidden SEO page by looking for known patterns
    const isHiddenSEOPage = currentPath.includes('-lawyer') || 
                           currentPath.includes('-attorney') || 
                           currentPath.includes('-law-firm') ||
                           currentPath.includes('-attorneys');
    
    if (!isHiddenSEOPage) {
      // Not a hidden SEO page, don't render anything
      return;
    }
    
    // Practice area aliases for URL parsing
    const practiceAreaAliases = {
      'divorce': 'divorce',
      'dui': 'dui-defense',
      'child-custody': 'child-custody',
      'traffic': 'traffic-defense',
      'reckless-driving': 'reckless-driving',
      'domestic-violence': 'domestic-violence',
      'assault': 'assault',
      'protective-order': 'protective-order',
      'drug-crime': 'drug-crime',
      'criminal-defense': 'criminal-defense',
      'family-law': 'family-law',
      'personal-injury': 'personal-injury'
    };
    
    // Parse different URL patterns
    if (currentPath.startsWith('tysons-corner-')) {
      parsedLocation = 'tysons-corner';
      const remaining = currentPath.replace('tysons-corner-', '').replace('-lawyer', '').replace('-attorney', '').replace('-attorneys', '');
      parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
    } else if (currentPath.startsWith('fairfax-county-')) {
      parsedLocation = 'fairfax-county';
      const remaining = currentPath.replace('fairfax-county-', '').replace('-lawyer', '').replace('-attorney', '').replace('-attorneys', '');
      parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
    } else if (currentPath.startsWith('arlington-')) {
      parsedLocation = 'arlington';
      const remaining = currentPath.replace('arlington-', '').replace('-lawyer', '').replace('-attorney', '').replace('-attorneys', '');
      parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
    } else if (currentPath.startsWith('mclean-')) {
      parsedLocation = 'mclean';
      const remaining = currentPath.replace('mclean-', '').replace('-lawyer', '').replace('-attorney', '').replace('-attorneys', '');
      parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
    } else if (currentPath.startsWith('vienna-')) {
      parsedLocation = 'vienna';
      const remaining = currentPath.replace('vienna-', '').replace('-lawyer', '').replace('-attorney', '').replace('-attorneys', '');
      parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
    } else if (currentPath.startsWith('falls-church-')) {
      parsedLocation = 'falls-church';
      const remaining = currentPath.replace('falls-church-', '').replace('-lawyer', '').replace('-attorney', '').replace('-attorneys', '');
      parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
    } else if (currentPath.startsWith('herndon-')) {
      parsedLocation = 'herndon';
      const remaining = currentPath.replace('herndon-', '').replace('-lawyer', '').replace('-attorney', '').replace('-attorneys', '');
      parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
    } else if (currentPath.startsWith('reston-')) {
      parsedLocation = 'reston';
      const remaining = currentPath.replace('reston-', '').replace('-lawyer', '').replace('-attorney', '').replace('-attorneys', '');
      parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
    } else if (currentPath.startsWith('virginia-')) {
      parsedLocation = 'virginia';
      const remaining = currentPath.replace('virginia-', '').replace('-lawyer', '').replace('-attorney', '').replace('-attorneys', '').replace('-law-firm', '');
      parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
    } else if (currentPath.startsWith('best-')) {
      // Handle "best-location-practice-attorneys" pattern
      const withoutBest = currentPath.replace('best-', '');
      if (withoutBest.includes('-attorneys')) {
        const withoutSuffix = withoutBest.replace('-attorneys', '');
        // Parse the remaining parts
        if (withoutSuffix.startsWith('tysons-corner-')) {
          parsedLocation = 'tysons-corner';
          const remaining = withoutSuffix.replace('tysons-corner-', '');
          parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
        } else if (withoutSuffix.startsWith('fairfax-county-')) {
          parsedLocation = 'fairfax-county';
          const remaining = withoutSuffix.replace('fairfax-county-', '');
          parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
        } else if (withoutSuffix.startsWith('arlington-')) {
          parsedLocation = 'arlington';
          const remaining = withoutSuffix.replace('arlington-', '');
          parsedPracticeArea = practiceAreaAliases[remaining] || remaining;
        }
      }
    }
    
    console.log('Parsed location:', parsedLocation); // Debug log
    console.log('Parsed practice area:', parsedPracticeArea); // Debug log
    
    const locationInfo = locationData[parsedLocation];
    const practiceInfo = practiceAreaData[parsedPracticeArea];

    if (locationInfo && practiceInfo) {
      // Determine page type based on URL pattern
      let pageType = 'lawyer';
      if (currentPath.includes('-attorney')) pageType = 'attorney';
      if (currentPath.includes('-law-firm')) pageType = 'law-firm';
      if (currentPath.includes('best-')) pageType = 'best';

      setPageData({
        location: locationInfo,
        practiceArea: practiceInfo,
        pageType,
        title: `${practiceInfo.displayName} in ${locationInfo.displayName}`,
        urlFriendlyTitle: pageType === 'best' ? 
          `Best ${locationInfo.name} ${practiceInfo.displayName}s` :
          `${locationInfo.name} ${practiceInfo.displayName}`,
        metaDescription: `Expert ${practiceInfo.name.toLowerCase()} ${pageType} in ${locationInfo.displayName}. 30+ years experience in ${locationInfo.courtInfo.jurisdiction} courts. Free consultation. Call (703) 522-7222.`,
        keywords: `${practiceInfo.name.toLowerCase()} ${pageType} ${locationInfo.displayName}, ${practiceInfo.name.toLowerCase()} lawyer ${locationInfo.name}, ${locationInfo.courtInfo.jurisdiction} ${practiceInfo.name.toLowerCase()}, ${locationInfo.name} legal help, best ${locationInfo.name} ${practiceInfo.name.toLowerCase()} ${pageType}`
      });
    } else {
      console.log('No matching data found for:', parsedLocation, parsedPracticeArea); // Debug log
    }
  }, []);

  if (!pageData) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-6">The requested page could not be found.</p>
          <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  // ... (keep rest of the component JSX)
};