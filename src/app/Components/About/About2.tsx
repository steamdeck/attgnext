import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About2 = () => {
    return (
        <section className="cs_about cs_style_1 cs_type_1 position-relative">
        <div className="cs_height_40 cs_height_lg_30"></div>
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-5 wow fadeInLeft">
              <div className="cs_about_thumbnail">
                 <Image 
                   src="https://uplynksolutions.com/wp-content/uploads/2023/05/It-soln2.jpeg" 
                   alt="About Us - Digital Marketing Agency" 
                   width={564} 
                   height={524}
                   unoptimized={true}
                 />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="cs_about_content">
                <div className="cs_section_heading cs_style_1 cs_mb_20">
                  <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_12 wow fadeInDown">
                    About Our Company<span className="cs_shape_right"></span>
                  </p>
                  <h2 className="cs_fs_48 cs_mb_15 wow fadeInUp">We're a Strategic Digital Marketing Agency Transforming Businesses</h2>
                  <p className="cs_section_heading_text mb-3 wow fadeInUp" data-wow-delay="200ms">
                    We are a forward-thinking digital marketing agency dedicated to helping businesses thrive in the digital landscape. With years of experience and a passion for innovation, we combine strategic thinking, creative excellence, and data-driven insights to deliver exceptional results for our clients.
                  </p>
                  <p className="cs_section_heading_text mb-3 wow fadeInUp" data-wow-delay="300ms">
                    Our team of experts specializes in creating comprehensive digital marketing strategies that drive growth, increase brand visibility, and maximize return on investment. We work across the entire customer journey, from initial awareness to conversion and retention, ensuring every touchpoint is optimized for success.
                  </p>
                  <p className="cs_section_heading_text mb-0 wow fadeInUp" data-wow-delay="400ms">
                    Whether you're an e-commerce brand looking to scale, a startup seeking market presence, or an established business aiming to expand your digital footprint, we have the expertise and tools to help you achieve your goals. Explore our <Link href="/service" className="cs_accent_color" style={{textDecoration: 'underline'}}>comprehensive services</Link> or view our <Link href="/project" className="cs_accent_color" style={{textDecoration: 'underline'}}>successful projects</Link> to see how we've helped businesses like yours succeed.
                  </p>
                </div>
                <div className="cs_features_wrapper cs_mb_20">
                  <div className="cs_feature_item" style={{ marginBottom: '20px' }}>
                    <h3 className="cs_fs_24 cs_mb_3">Our Mission</h3>
                    <p className="cs_fs_18 mb-0">To empower businesses of all sizes with cutting-edge digital marketing solutions that drive measurable growth, enhance brand visibility, and create lasting customer relationships. We believe in transparency, innovation, and delivering value that exceeds expectations.</p>
                  </div>
                  <div className="cs_feature_item" style={{ marginBottom: '20px' }}>
                    <h3 className="cs_fs_24 cs_mb_3">Our Vision</h3>
                    <p className="cs_fs_18 mb-0">To be the leading digital marketing agency recognized for transforming businesses through strategic vision, creative excellence, and data-driven results. We envision a future where every business can leverage the power of digital marketing to achieve extraordinary success.</p>
                  </div>
                  <div className="cs_feature_item" style={{ marginBottom: '0' }}>
                    <h3 className="cs_fs_24 cs_mb_3">Our Values</h3>
                    <p className="cs_fs_18 mb-0">Integrity, innovation, and client success are at the core of everything we do. We foster a culture of continuous learning, collaboration, and excellence, ensuring we stay ahead of industry trends and deliver solutions that make a real difference.</p>
                  </div>
                </div>
                <div className="cs_about_btn_group">
                  <Link href="/service" aria-label="View our services" className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase wow fadeInLeft"><span>Our Services</span></Link>
                  <Link href="/contact" aria-label="Contact us" className="cs_btn cs_style_2 cs_fs_14 cs_bold text-uppercase wow fadeInLeft" style={{marginLeft: '15px'}}><span>Get In Touch</span></Link>
                  <div className="cs_client_info_wrapper wow fadeInRight">
                    <div className="cs_client_info_header cs_mb_1">
                      <span className="cs_fs_20 cs_semibold">(6k+) Highest rated</span>
                    </div>
                    <div className="cs_client_review_content">
                      <div className="cs_client_thumb">
                        <Image src="/assets/img/upwork.svg" alt="img" width={73} height={22}   />
                      </div>
                      <div className="cs_rating" data-rating="4.5">
                        <div className="cs_rating_percentage"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_40 cs_height_lg_30"></div>
      </section>
    );
};

export default About2;