import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function SEO({ 
  title = "Inovexa Technology | Enterprise IT Infrastructure & Networking Solutions", 
  description = "Inovexa Technology is Bangladesh's leading provider of next-generation IT infrastructure, enterprise networking, and datacenter solutions.", 
  keywords = "Inovexa, IT infrastructure, networking, servers, Dhaka, Bangladesh, Huawei, Cisco, Dell, 10G Lan card, datacenter solutions",
  image = "https://images.unsplash.com/photo-1558489106-2d6ec42da696?auto=format&fit=crop&q=80",
  url = "https://inovexabd.com"
}: SEOProps) {
  const siteTitle = title.includes('Inovexa') ? title : `${title} | Inovexa Technology`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Inovexa Technology" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical Link */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
