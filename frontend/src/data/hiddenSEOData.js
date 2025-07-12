// Hidden SEO Empire - Location + Practice Area Combinations
// This data structure powers the hidden SEO content strategy

export const hiddenSEOData = {
  // All target locations for SEO empire
  locations: [
    // Primary high-value locations
    { slug: 'tysons-corner', name: 'Tysons Corner', priority: 'high' },
    { slug: 'fairfax-county', name: 'Fairfax County', priority: 'high' },
    { slug: 'arlington', name: 'Arlington', priority: 'high' },
    { slug: 'mclean', name: 'McLean', priority: 'high' },
    
    // Secondary locations
    { slug: 'vienna', name: 'Vienna', priority: 'medium' },
    { slug: 'falls-church', name: 'Falls Church', priority: 'medium' },
    { slug: 'herndon', name: 'Herndon', priority: 'medium' },
    { slug: 'reston', name: 'Reston', priority: 'medium' },
    { slug: 'great-falls', name: 'Great Falls', priority: 'medium' },
    
    // Additional coverage areas
    { slug: 'oakton', name: 'Oakton', priority: 'low' },
    { slug: 'burke', name: 'Burke', priority: 'low' },
    { slug: 'springfield', name: 'Springfield', priority: 'low' },
    { slug: 'annandale', name: 'Annandale', priority: 'low' },
    { slug: 'centreville', name: 'Centreville', priority: 'low' },
    { slug: 'manassas', name: 'Manassas', priority: 'low' },
    { slug: 'woodbridge', name: 'Woodbridge', priority: 'low' },
    { slug: 'alexandria', name: 'Alexandria', priority: 'medium' },
    { slug: 'prince-william-county', name: 'Prince William County', priority: 'medium' },
    { slug: 'loudoun-county', name: 'Loudoun County', priority: 'medium' },
    
    // State-wide coverage
    { slug: 'virginia', name: 'Virginia', priority: 'high' }
  ],

  // Practice areas optimized for SEO
  practiceAreas: [
    // High-value practice areas
    { slug: 'criminal-defense', name: 'Criminal Defense', priority: 'high', searchVolume: 'high' },
    { slug: 'family-law', name: 'Family Law', priority: 'high', searchVolume: 'high' },
    { slug: 'personal-injury', name: 'Personal Injury', priority: 'high', searchVolume: 'high' },
    { slug: 'dui-defense', name: 'DUI Defense', priority: 'high', searchVolume: 'high' },
    { slug: 'traffic-defense', name: 'Traffic Defense', priority: 'high', searchVolume: 'medium' },
    
    // Medium-value practice areas
    { slug: 'divorce', name: 'Divorce', priority: 'medium', searchVolume: 'high' },
    { slug: 'child-custody', name: 'Child Custody', priority: 'medium', searchVolume: 'medium' },
    { slug: 'domestic-violence', name: 'Domestic Violence', priority: 'medium', searchVolume: 'medium' },
    { slug: 'reckless-driving', name: 'Reckless Driving', priority: 'medium', searchVolume: 'medium' },
    { slug: 'drug-crimes', name: 'Drug Crimes', priority: 'medium', searchVolume: 'medium' },
    
    // Specialized areas
    { slug: 'business-law', name: 'Business Law', priority: 'low', searchVolume: 'low' },
    { slug: 'employment-law', name: 'Employment Law', priority: 'low', searchVolume: 'low' },
    { slug: 'estate-planning', name: 'Estate Planning', priority: 'low', searchVolume: 'low' },
    { slug: 'real-estate-law', name: 'Real Estate Law', priority: 'low', searchVolume: 'low' },
    
    // Specific criminal charges (May Law style)
    { slug: 'assault-and-battery', name: 'Assault and Battery', priority: 'medium', searchVolume: 'medium' },
    { slug: 'theft-charges', name: 'Theft Charges', priority: 'medium', searchVolume: 'medium' },
    { slug: 'white-collar-crimes', name: 'White Collar Crimes', priority: 'medium', searchVolume: 'low' },
    { slug: 'weapons-charges', name: 'Weapons Charges', priority: 'medium', searchVolume: 'low' },
    { slug: 'sex-crimes', name: 'Sex Crimes', priority: 'medium', searchVolume: 'low' },
    
    // Traffic-specific
    { slug: 'speeding-tickets', name: 'Speeding Tickets', priority: 'medium', searchVolume: 'high' },
    { slug: 'driving-on-suspended-license', name: 'Driving on Suspended License', priority: 'medium', searchVolume: 'medium' },
    
    // Family law specific
    { slug: 'child-support', name: 'Child Support', priority: 'medium', searchVolume: 'medium' },
    { slug: 'spousal-support', name: 'Spousal Support', priority: 'medium', searchVolume: 'low' },
    { slug: 'protective-orders', name: 'Protective Orders', priority: 'medium', searchVolume: 'medium' },
    { slug: 'restraining-orders', name: 'Restraining Orders', priority: 'medium', searchVolume: 'medium' }
  ],

  // URL patterns for different page types
  urlPatterns: [
    { pattern: ':location-:practiceArea-lawyer', priority: 'high' },
    { pattern: ':location-:practiceArea-attorney', priority: 'high' },
    { pattern: ':location-:practiceArea-law-firm', priority: 'medium' },
    { pattern: 'best-:location-:practiceArea-attorneys', priority: 'medium' },
    { pattern: ':location-:practiceArea-defense-lawyer', priority: 'medium' },
    { pattern: ':practiceArea-lawyer-:location', priority: 'low' }
  ],

  // Generate all URL combinations
  generateHiddenURLs: function() {
    const urls = [];
    
    // Filter by priority for initial rollout
    const highPriorityLocations = this.locations.filter(loc => loc.priority === 'high');
    const highPriorityPracticeAreas = this.practiceAreas.filter(pa => pa.priority === 'high');
    
    // Generate high-priority combinations first
    highPriorityLocations.forEach(location => {
      highPriorityPracticeAreas.forEach(practiceArea => {
        // Primary URL pattern
        urls.push({
          url: `/${location.slug}-${practiceArea.slug}-lawyer`,
          location: location.slug,
          practiceArea: practiceArea.slug,
          priority: 'high',
          title: `${practiceArea.name} Lawyer in ${location.name}, VA | Briglia Hundley®`,
          metaDescription: `Expert ${practiceArea.name.toLowerCase()} lawyer in ${location.name}, VA. 30+ years experience. Free consultation. Call (703) 522-7222.`
        });
        
        // Attorney variation
        urls.push({
          url: `/${location.slug}-${practiceArea.slug}-attorney`,
          location: location.slug,
          practiceArea: practiceArea.slug,
          priority: 'high',
          title: `${practiceArea.name} Attorney in ${location.name}, VA | Briglia Hundley®`,
          metaDescription: `Experienced ${practiceArea.name.toLowerCase()} attorney in ${location.name}, VA. AV-rated law firm. Call (703) 522-7222.`
        });
        
        // Best attorneys variation
        urls.push({
          url: `/best-${location.slug}-${practiceArea.slug}-attorneys`,
          location: location.slug,
          practiceArea: practiceArea.slug,
          priority: 'medium',
          title: `Best ${practiceArea.name} Attorneys in ${location.name}, VA | Briglia Hundley®`,
          metaDescription: `Top-rated ${practiceArea.name.toLowerCase()} attorneys in ${location.name}, VA. Best Lawyers & Super Lawyers recognized. Call (703) 522-7222.`
        });
      });
    });
    
    return urls;
  },

  // Get initial 50 URLs for Phase 1
  getPhase1URLs: function() {
    return this.generateHiddenURLs().slice(0, 50);
  },

  // Get all URLs for complete SEO empire
  getAllURLs: function() {
    const urls = [];
    
    this.locations.forEach(location => {
      this.practiceAreas.forEach(practiceArea => {
        // Generate multiple URL patterns for each combination
        this.urlPatterns.forEach(pattern => {
          const url = pattern.pattern
            .replace(':location', location.slug)
            .replace(':practiceArea', practiceArea.slug);
          
          urls.push({
            url: `/${url}`,
            location: location.slug,
            practiceArea: practiceArea.slug,
            priority: this.calculatePriority(location.priority, practiceArea.priority),
            title: this.generateTitle(location.name, practiceArea.name, pattern.pattern),
            metaDescription: this.generateMetaDescription(location.name, practiceArea.name)
          });
        });
      });
    });
    
    return urls;
  },

  // Helper functions
  calculatePriority: function(locationPriority, practiceAreaPriority) {
    if (locationPriority === 'high' && practiceAreaPriority === 'high') return 'high';
    if (locationPriority === 'high' || practiceAreaPriority === 'high') return 'medium';
    return 'low';
  },

  generateTitle: function(locationName, practiceAreaName, pattern) {
    if (pattern.includes('best-')) {
      return `Best ${practiceAreaName} Attorneys in ${locationName}, VA | Briglia Hundley®`;
    }
    if (pattern.includes('-attorney')) {
      return `${practiceAreaName} Attorney in ${locationName}, VA | Briglia Hundley®`;
    }
    if (pattern.includes('-law-firm')) {
      return `${practiceAreaName} Law Firm in ${locationName}, VA | Briglia Hundley®`;
    }
    return `${practiceAreaName} Lawyer in ${locationName}, VA | Briglia Hundley®`;
  },

  generateMetaDescription: function(locationName, practiceAreaName) {
    return `Expert ${practiceAreaName.toLowerCase()} representation in ${locationName}, VA. 30+ years experience. AV-rated attorneys. Free consultation. Call (703) 522-7222.`;
  }
};

// Export for use in sitemap generation
export default hiddenSEOData;