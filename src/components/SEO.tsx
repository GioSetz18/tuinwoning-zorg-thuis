import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Tuinwoning.nl - Zorgzame woningen dichtbij familie',
  description = 'Duurzame en comfortabele tuinwoningen die generaties samenbrengen. Ontdek onze mantelzorgwoningen en vraag een brochure aan.',
  canonicalUrl = 'https://tuinwoning.nl',
  ogType = 'website',
  ogImage = '/lovable-uploads/c99f486b-83e0-462a-b9b4-22536804f75c.png',
}) => {
  // JSON-LD schema with LocalBusiness + Product combined
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Tuinwoning.nl",
      "image": canonicalUrl + ogImage,
      "url": canonicalUrl,
      "telephone": "+31123456789",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Voorbeeldstraat 123",
        "addressLocality": "Amsterdam",
        "postalCode": "1234 AB",
        "addressCountry": "NL"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:00",
          "closes": "14:00"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Tuinwoning Zorg Thuis",
      "description": "Comfortabele en toegankelijke mantelzorgwoning in uw tuin. Volledig ingericht, snel geleverd.",
      "brand": { "@type": "Brand", "name": "Tuinwoning Zorg Thuis" },
      "url": canonicalUrl,
      "image": canonicalUrl + ogImage,
      "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "price": "49900",
        "availability": "https://schema.org/InStock"
      }
    }
  ];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Structured Data / Schema.org for LocalBusiness and Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Helmet>
  );
};

export default SEO;
