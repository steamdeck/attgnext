"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// Higher-order component for dynamic imports with loading fallback
export function withDynamicImport<T extends object>(
  importFunc: () => Promise<{ default: ComponentType<T> }>,
  fallback?: ComponentType
) {
  return dynamic(importFunc, {
    loading: fallback ? () => React.createElement(fallback) : () => <div>Loading...</div>,
    ssr: false, // Disable SSR for better performance on client-side heavy components
  });
}

// Pre-configured dynamic imports for heavy components with better loading strategies
export const DynamicProject1 = dynamic(() => import('../Project/Project1'), {
  loading: () => <div className="cs_height_120 cs_height_lg_80 d-flex align-items-center justify-content-center"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>,
  ssr: false,
});

export const DynamicServices1 = dynamic(() => import('../Services/Services1'), {
  loading: () => <div className="cs_height_120 cs_height_lg_80 d-flex align-items-center justify-content-center"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>,
  ssr: false,
});

export const DynamicTestimonial1 = dynamic(() => import('../Testimonial/Testimonial1'), {
  loading: () => <div className="cs_height_120 cs_height_lg_80 d-flex align-items-center justify-content-center"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>,
  ssr: false,
});

export const DynamicTeam1 = dynamic(() => import('../Team/Team1'), {
  loading: () => <div className="cs_height_120 cs_height_lg_80 d-flex align-items-center justify-content-center"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>,
  ssr: false,
});

export const DynamicBlog1 = dynamic(() => import('../Blog/Blog1'), {
  loading: () => <div className="cs_height_120 cs_height_lg_80 d-flex align-items-center justify-content-center"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>,
  ssr: false,
});
