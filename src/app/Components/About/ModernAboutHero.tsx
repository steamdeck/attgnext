"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const ModernAboutHero = () => {
    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="cs_hero cs_style_2 position-relative overflow-hidden">
            <div className="container">
                <div className="row cs_gap_y_40 align-items-center">
                    <div className="col-lg-6">
                        <div className="cs_hero_text_wrapper">
                            <div className="cs_section_heading cs_style_1 cs_mb_30">
                                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_12 wow fadeInDown">
                                    About AT Tech Global<span className="cs_shape_right"></span>
                                </p>
                                <h1 className="cs_fs_48 cs_mb_20 wow fadeInUp">
                                    Transforming Businesses Through Digital Excellence
                                </h1>
                                <p className="cs_fs_18 cs_mb_0 wow fadeInUp" data-wow-delay="0.2s">
                                    Since 2020, we've been at the forefront of digital innovation, helping businesses worldwide achieve remarkable growth through strategic marketing, creative solutions, and unwavering commitment to results.
                                </p>
                            </div>
                            
                            <div className="cs_hero_stats cs_mb_40 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="d-flex flex-wrap gap-4">
                                    <div className="cs_counter_wrapper cs_type_1">
                                        <h3 className="cs_fs_36 cs_accent_color cs_bold mb-0">500+</h3>
                                        <p className="mb-0">Happy Clients</p>
                                    </div>
                                    <div className="cs_counter_wrapper cs_type_1">
                                        <h3 className="cs_fs_36 cs_accent_color cs_bold mb-0">98%</h3>
                                        <p className="mb-0">Success Rate</p>
                                    </div>
                                    <div className="cs_counter_wrapper cs_type_1">
                                        <h3 className="cs_fs_36 cs_accent_color cs_bold mb-0">25+</h3>
                                        <p className="mb-0">Industries</p>
                                    </div>
                                </div>
                            </div>

                            <div className="cs_about_btn_group wow fadeInUp" data-wow-delay="0.4s">
                                <Link 
                                    href="/service" 
                                    className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase"
                                    aria-label="Explore our services"
                                >
                                    <span>Our Services</span>
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </Link>
                                <Link 
                                    href="/contact" 
                                    className="cs_btn cs_style_2 cs_fs_14 cs_bold text-uppercase"
                                    aria-label="Get in touch with us"
                                >
                                    <span>Get Started</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cs_hero_thumbnail position-relative wow fadeInUp" data-wow-delay="0.5s">
                            <div className="position-relative" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                                <Image 
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                                    alt="AT Tech Global team collaborating on digital projects"
                                    width={600}
                                    height={450}
                                    priority
                                    unoptimized={true}
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                            
                            {/* Floating Badge */}
                            <div className="position-absolute" style={{
                                bottom: '30px',
                                right: '30px',
                                background: 'linear-gradient(135deg, #EA7010 0%, #FF8C42 100%)',
                                padding: '20px 25px',
                                borderRadius: '15px',
                                boxShadow: '0 15px 40px rgba(234, 112, 16, 0.3)',
                                zIndex: '2',
                                maxWidth: '200px'
                            }}>
                                <div className="text-center">
                                    <h4 className="cs_fs_24 cs_white_color cs_bold mb-0">4.9/5</h4>
                                    <p className="cs_white_color cs_fs_14 mb-0 mt-1">Client Rating</p>
                                    <div className="cs_rating mt-2" style={{ color: '#FFD700', fontSize: '12px' }}>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="position-absolute" style={{
                                top: '-20px',
                                left: '-20px',
                                width: '120px',
                                height: '120px',
                                background: 'linear-gradient(135deg, rgba(63, 102, 239, 0.1) 0%, rgba(63, 102, 239, 0.05) 100%)',
                                borderRadius: '50%',
                                zIndex: '-1'
                            }}></div>
                            
                            <div className="position-absolute" style={{
                                top: '40px',
                                right: '-30px',
                                width: '80px',
                                height: '80px',
                                background: 'linear-gradient(135deg, rgba(234, 112, 16, 0.1) 0%, rgba(234, 112, 16, 0.05) 100%)',
                                borderRadius: '50%',
                                zIndex: '-1'
                            }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs_height_100 cs_height_lg_80"></div>
        </section>
    );
};

export default ModernAboutHero;