"use client";
import dynamic from 'next/dynamic';

const WhatsAppButton = dynamic(() => import('../Common/WhatsAppButton'), { ssr: false });

const ClientWhatsAppButton = () => {
  return <WhatsAppButton />;
};

export default ClientWhatsAppButton;
