"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BreadCumb from '../../Components/Common/BreadCumb';

const page = () => {
  // Images from homepage Latest Work section (Project1)
  const latestWorkImages = [
    {img:'/assets/img/logo4.jpg'},
    {img:'/assets/img/logo6.jpg'},
    {img:'/assets/img/logo5.jpg'},
    {img:'/assets/img/logo2.webp'},
    {img:'/assets/img/logo1.webp'},
    {img:'/assets/img/logo3.jpg'},
  ];

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
            
            {/* Latest Work Section */}
            <div className="position-relative z-2" style={{padding: '80px 0'}}>
              <div className="container">
                <div className="cs_section_heading cs_style_1 text-center">
                  <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_center cs_mb_20 wow fadeInDown">
                    <span className="cs_shape_left"></span>Latest Work<span className="cs_shape_right"></span>
                  </p>
                  <h2 className="cs_fs_48 cs_mb_21 wow fadeInUp">Explore Our Project</h2>
                  <p className="cs_section_heading_text mb-0 wow fadeInUp" data-wow-delay="200ms">Our comprehensive suite of digital marketing services is designed to <br/> elevate your brands visibility.</p>
                </div>
                <div style={{marginTop: '60px'}}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                  }}>
                    {latestWorkImages.map((item, i) => (
                      <Link 
                        key={i} 
                        href="/project/project-details" 
                        aria-label="Case study details page link"
                        className="cs_card cs_style_1 cs_center position-relative"
                        style={{
                          display: 'block',
                          position: 'relative',
                          overflow: 'hidden',
                          borderRadius: '8px',
                          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                          textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-5px)';
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                          const btn = e.currentTarget.querySelector('.cs_card_btn') as HTMLElement;
                          if (btn) btn.style.opacity = '1';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                          const btn = e.currentTarget.querySelector('.cs_card_btn') as HTMLElement;
                          if (btn) btn.style.opacity = '0';
                        }}
                      >
                        <Image 
                          src={item.img} 
                          alt="Project Image" 
                          width={300} 
                          height={200}
                          priority={i < 3}
                          style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                            borderRadius: '8px'
                          }}
                        />
                        <span 
                          className="cs_card_btn cs_center position-absolute"
                          style={{
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '50px',
                            height: '50px',
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            pointerEvents: 'none'
                          }}
                        >
                          <Image src="/assets/img/icons/arrow_right.svg" alt="img" width={23} height={23} />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Our Clients Section */}
            <div className="position-relative z-2" style={{padding: '80px 0', backgroundColor: '#f8f9fa'}}>
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