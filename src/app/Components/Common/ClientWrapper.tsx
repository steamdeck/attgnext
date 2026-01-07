"use client"
import WhatsAppButton from './WhatsAppButton';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <WhatsAppButton />
    </>
  );
}