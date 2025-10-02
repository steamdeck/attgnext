/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' to support API routes
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
    domains: ['www.freeiconspng.com', 'www.appsflyer.com', 'placeholdr.ai'],
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
    optimizePackageImports: ['bootstrap', 'bootstrap-icons', 'react-slick', 'slick-carousel'],
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
