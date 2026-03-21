"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const ModernMissionVision = dynamic(() => import('../About/ModernMissionVision'), { ssr: false });
const ModernFAQ = dynamic(() => import('../About/ModernFAQ'), { ssr: false });

const AboutClientComponents = () => {
  return (
    <>
      <ModernMissionVision />
      <ModernFAQ />
    </>
  );
};

export default AboutClientComponents;
