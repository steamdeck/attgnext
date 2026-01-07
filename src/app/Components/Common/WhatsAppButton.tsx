"use client"
import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+919266812465"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        backgroundColor: 'transparent',
        borderRadius: '50%',
        padding: '0',
        boxShadow: 'none',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png"
        alt="WhatsApp"
        style={{ width: '60px', height: '60px' }}
      />
    </a>
  );
};

export default WhatsAppButton;