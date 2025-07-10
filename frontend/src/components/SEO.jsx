import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage, 
  ogType = 'website',
  schemaData 
}) => {
  const defaultTitle = "Briglia Hundley® - Premier Law Firm in Tysons Corner, Virginia";
  const defaultDescription = "Tier 1 ranked, award-winning law firm delivering superior client service and innovative legal strategies in Virginia, DC, and Maryland. Expert attorneys since 1993.";
  const defaultKeywords = "law firm, attorneys, lawyers, Tysons Corner, Virginia, criminal defense, civil litigation, corporate law, family law, personal injury, real estate, estate planning, Briglia Hundley";
  
  const siteTitle = title ? `${title} | Briglia Hundley®` : defaultTitle;
  const siteDescription = description || defaultDescription;
  const siteKeywords = keywords || defaultKeywords;
  const siteCanonical = canonical || "https://brigliahundley.com/";
  const siteOgImage = ogImage || "/briglia-hundley-logo.svg";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={siteCanonical} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteOgImage} />
      
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
    </Helmet>
  );
};

export default SEO;