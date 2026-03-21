import { Metadata } from 'next'
import { getMetadata } from '@/lib/jsonDatabase'
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils'

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/project')
  if (metadata) {
    return convertToNextJsMetadata(metadata)
  }
  return {
    title: 'Our Projects | AT Tech Global',
    description: 'Explore the diverse range of digital marketing and web development projects successfully completed by AT Tech Global.',
    keywords: 'digital marketing projects, web development projects, AT Tech Global portfolio',
  }
}

import React from 'react';
import Image from 'next/image';
import BreadCumb from '../../Components/Common/BreadCumb';
import SEOHead from '../../Components/Common/SEOHead';
import ClientProjectLogos from '../../Components/Project/ClientProjectLogos';

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

  return (
    <>
      <SEOHead route="/project" />
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
                  <h2 className="cs_fs_48 cs_mb_21 wow fadeInUp">Explore Our Projects</h2>
                  <p className="cs_section_heading_text mb-0 wow fadeInUp" data-wow-delay="200ms">Our comprehensive suite of digital marketing services is designed to <br/> elevate your brands visibility.</p>
                </div>
                <div style={{marginTop: '60px'}}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                  }}>
                    {latestWorkImages.map((item, i) => (
                      <div 
                        key={i} 
                        className="cs_card cs_style_1 cs_center position-relative"
                        style={{
                          display: 'block',
                          position: 'relative',
                          overflow: 'hidden',
                          borderRadius: '8px'
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <ClientProjectLogos />
    </div>
    </>
  );
};

export default page;