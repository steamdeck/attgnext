"use client"
import React from 'react';
import Image from 'next/image';
import BreadCumb from '../../Components/Common/BreadCumb';

const page = () => {
  const logos = [
    {img:'https://tiimg.tistatic.com/co_logo/35874189/maitri-original-food-products-v2.jpg'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCChgrMAgQA1h2O4vSS9TyoMouNRBh3D2MQ&s'},
    {img:'https://www.gopalnamkeen.com/front/assets/images/logo.png'},
    {img:'https://cdn.sologo.ai/23/12/28/db6bd7e65a3a5e7838859ac587010d57.jpeg?x-oss-process=image/resize,m_lfit,w_800,h_0/format,webp'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjL5JYw8NMQQlYq8B8tpugEyAyrv-xPaklsA&s'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb_1AiwBsKMSAr0Ow8CSKIzwerKkQXz1NUNg&s'},
  ];

  return (
    <div>
            <BreadCumb
                bgimg="https://placeholdr.ai/e8c47297-dfab-468c-b9db-e8189acd8d35/1024/412"
                Title="Project"
            ></BreadCumb>  
            <div className="position-relative z-2" style={{padding: '80px 0'}}>
              <div className="container">
                <div className="cs_section_heading cs_style_1 cs_type_2">
                  <p className="cs_section_subtitle cs_fs_20 cs_semibold cs_accent_color mb-0">OUR CLIENTS</p>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '30px',
                  marginTop: '40px'
                }}>
                  {logos.map((item, i) => (
                    <div 
                      key={i} 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                      }}
                    >
                      <Image 
                        src={item.img} 
                        alt="Client logo" 
                        width={280} 
                        height={90}
                        style={{objectFit: 'contain', maxWidth: '100%', height: 'auto'}}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>        
    </div>
  );
};

export default page;