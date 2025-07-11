import React, { useEffect } from 'react';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage, 
  ogType = 'website',
  schemaData,
  breadcrumbs = []
}) => {
  const defaultTitle = "Briglia Hundley® - Premier Law Firm in Tysons Corner, Virginia";
  const defaultDescription = "Tier 1 ranked, award-winning law firm delivering superior client service and innovative legal strategies in Virginia, DC, and Maryland. Expert attorneys since 1993.";
  const defaultKeywords = "law firm, attorneys, lawyers, Tysons Corner, Virginia, criminal defense, civil litigation, corporate law, family law, personal injury, real estate, estate planning, Briglia Hundley";
  
  const siteTitle = title ? `${title} | Briglia Hundley®` : defaultTitle;
  const siteDescription = description || defaultDescription;
  const siteKeywords = keywords || defaultKeywords;
  const siteCanonical = canonical || "https://brigliahundley.com/";
  const siteOgImage = ogImage || "/bhlogo.png";

  // Update meta tags directly in the DOM
  const updateMetaTag = (name, content, property = false) => {
    const selector = property ? `meta[property='${name}']` : `meta[name='${name}']`;
    let tag = document.querySelector(selector);
    if (!tag) {
      tag = document.createElement('meta');
      if (property) {
        tag.setAttribute('property', name);
      } else {
        tag.setAttribute('name', name);
      }
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  const updateLinkTag = (rel, href) => {
    let tag = document.querySelector(`link[rel='${rel}']`);
    if (!tag) {
      tag = document.createElement('link');
      tag.setAttribute('rel', rel);
      document.head.appendChild(tag);
    }
    tag.setAttribute('href', href);
  };

  useEffect(() => {
    // Update document title
    document.title = siteTitle;

    // Update basic meta tags
    updateMetaTag('description', siteDescription);
    updateMetaTag('keywords', siteKeywords);
    updateMetaTag('author', 'Briglia Hundley PC');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('geo.region', 'US-VA');
    updateMetaTag('geo.placename', 'Tysons Corner, Virginia');
    updateMetaTag('geo.position', '38.9187;-77.2411');
    updateMetaTag('ICBM', '38.9187, -77.2411');

    // Update Open Graph tags
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', siteCanonical, true);
    updateMetaTag('og:title', siteTitle, true);
    updateMetaTag('og:description', siteDescription, true);
    updateMetaTag('og:image', siteOgImage, true);
    updateMetaTag('og:site_name', 'Briglia Hundley PC', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:url', siteCanonical, true);
    updateMetaTag('twitter:title', siteTitle, true);
    updateMetaTag('twitter:description', siteDescription, true);
    updateMetaTag('twitter:image', siteOgImage, true);

    // Update canonical URL
    updateLinkTag('canonical', siteCanonical);

  }, [siteTitle, siteDescription, siteKeywords, siteCanonical, siteOgImage, ogType]);

  // Enhanced structured data with breadcrumbs
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://brigliahundley.com${crumb.url}`
    }))
  } : null;

  // Update structured data
  useEffect(() => {
    if (schemaData || breadcrumbSchema) {
      // Remove existing schema scripts
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => {
        if (script.innerHTML.includes('"@type": "Person"') || 
            script.innerHTML.includes('"@type": "BlogPosting"') || 
            script.innerHTML.includes('"@type": "BreadcrumbList"')) {
          script.remove();
        }
      });

      // Add new schema data
      if (schemaData) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify(schemaData);
        document.head.appendChild(script);
      }

      // Add breadcrumb schema
      if (breadcrumbSchema) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify(breadcrumbSchema);
        document.head.appendChild(script);
      }
    }
  }, [schemaData, breadcrumbSchema]);

  return null; // This component doesn't render anything visible
};

export default SEO;
};

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Briglia Hundley PC" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="geo.region" content="US-VA" />
      <meta name="geo.placename" content="Tysons Corner, Virginia" />
      <meta name="geo.position" content="38.9187;-77.2411" />
      <meta name="ICBM" content="38.9187, -77.2411" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={siteCanonical} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteOgImage} />
      <meta property="og:site_name" content="Briglia Hundley PC" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteCanonical} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={siteOgImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={siteCanonical} />
      
      {/* Schema.org structured data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
      
      {/* Breadcrumb structured data */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;