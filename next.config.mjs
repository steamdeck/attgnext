/** @type {import('next').NextConfig} */
// Check if building for cPanel static export
const isCPanelExport = process.env.CPANEL_EXPORT === 'true';

const nextConfig = {
  // Static export for cPanel, normal build for API routes
  ...(isCPanelExport ? { output: 'export' } : {}),
  // trailingSlash for cPanel, false for Vercel/API routes
  trailingSlash: isCPanelExport ? true : false,
  images: {
    // Must be unoptimized for static export
    unoptimized: isCPanelExport ? true : false,
    domains: ['www.freeiconspng.com', 'www.appsflyer.com', 'placeholdr.ai', 'd1nhio0ox7pgb.cloudfront.net', 'thispersonnotexist.org', '4.imimg.com', 'sociology.plus', 'uplynksolutions.com', 'tiimg.tistatic.com', 'encrypted-tbn0.gstatic.com', 'images.seeklogo.com', 'cdn.sologo.ai'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thispersonnotexist.org',
        port: '',
        pathname: '/downloadimage/**',
      },
      {
        protocol: 'https',
        hostname: 'www.freeiconspng.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.appsflyer.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placeholdr.ai',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd1nhio0ox7pgb.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '4.imimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sociology.plus',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'uplynksolutions.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tiimg.tistatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.seeklogo.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sologo.ai',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Remove optimizePackageImports while diagnosing Vercel build issue
    scrollRestoration: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
