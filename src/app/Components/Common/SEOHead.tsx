'use client'

import React from 'react'
import Head from 'next/head'
import { useFilePageMetadata } from '../../../hooks/useFilePageMetadata'

interface SEOHeadProps {
  route: string
  defaultTitle?: string
  defaultDescription?: string
  defaultKeywords?: string
  children?: React.ReactNode
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  route, 
  defaultTitle = 'AT Tech Global - Digital Agency',
  defaultDescription = 'AT Tech Global - Digital Agency in Gurugram',
  defaultKeywords = 'digital marketing, seo, web development',
  children 
}) => {
  const { metadata, loading } = useFilePageMetadata(route)

  // If metadata is loading or not found, use defaults
  if (loading || !metadata) {
    return (
      <Head>
        <title>{defaultTitle}</title>
        <meta name="description" content={defaultDescription} />
        <meta name="keywords" content={defaultKeywords} />
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={defaultDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultTitle} />
        <meta name="twitter:description" content={defaultDescription} />
        {children}
      </Head>
    )
  }

  // Use metadata from database
  const pageTitle = metadata.meta_title || metadata.title || defaultTitle
  const pageDescription = metadata.meta_description || defaultDescription
  const pageKeywords = metadata.keywords || defaultKeywords

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={metadata.og_title || pageTitle} />
      <meta property="og:description" content={metadata.og_description || pageDescription} />
      {metadata.og_image && <meta property="og:image" content={metadata.og_image} />}
      <meta property="og:type" content="website" />
      {metadata.canonical_url && <meta property="og:url" content={metadata.canonical_url} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.twitter_title || pageTitle} />
      <meta name="twitter:description" content={metadata.twitter_description || pageDescription} />
      {metadata.twitter_image && <meta name="twitter:image" content={metadata.twitter_image} />}

      {/* Robots */}
      <meta 
        name="robots" 
        content={`${metadata.robots_index ? 'index' : 'noindex'},${metadata.robots_follow ? 'follow' : 'nofollow'}`} 
      />

      {/* Canonical URL */}
      {metadata.canonical_url && <link rel="canonical" href={metadata.canonical_url} />}

      {children}
    </Head>
  )
}

export default SEOHead