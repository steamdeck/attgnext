"use client"
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FaqAccordionProps {
  items: FAQItem[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(0); // First item open by default

  const handleItemClick = (index: number) => {
    if (index === openItemIndex) {
      setOpenItemIndex(null); // Close if already open
    } else {
      setOpenItemIndex(index); // Open clicked item
    }
  };

  return (
    <div className="cs_faq_wrap">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`cs_faq_item ${index === items.length - 1 ? '' : 'cs_mb_20'}`}
        >
          <div 
            className={`cs_faq_question cs_fs_18 cs_semibold cs_mb_10 ${openItemIndex === index ? 'active' : ''}`}
            onClick={() => handleItemClick(index)}
            style={{ 
              cursor: 'pointer', 
              userSelect: 'none',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span>{item.question}</span>
            <span className="cs_faq_toggle" style={{ marginLeft: '15px', flexShrink: 0 }}>
              <i className={`bi ${openItemIndex === index ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
            </span>
          </div>
          <div 
            className={`cs_faq_answer ${openItemIndex === index ? 'active' : ''}`}
            style={{ 
              maxHeight: openItemIndex === index ? '1000px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out',
              opacity: openItemIndex === index ? 1 : 0
            }}
          >
            {item.answer}
          </div>
        </div>
      ))}
      <style jsx>{`
        .cs_faq_question.active {
          color: var(--blue-color, #134CB3);
        }
        .cs_faq_toggle i {
          transition: transform 0.3s ease;
        }
        .cs_faq_question.active .cs_faq_toggle i {
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
};

export default FaqAccordion;

