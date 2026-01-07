"use client"
import React from 'react';
import Link from 'next/link';

const ModernWhyChooseUs = () => {
    const advantages = [
        {
            icon: 'bi-rocket-takeoff',
            title: 'Proven Track Record',
            description: 'Over 500 businesses transformed with measurable results. We don\'t just promise success—we deliver it with data to back it up.',
            highlight: '500+ Success Stories'
        },
        {
            icon: 'bi-stars',
            title: 'Award-Winning Team',
            description: 'Certified experts in SEO, PPC, social media, and web development. Our team stays ahead of industry trends to keep you competitive.',
            highlight: 'Industry Certified'
        },
        {
            icon: 'bi-graph-up-arrow',
            title: 'Data-Driven Strategy',
            description: 'Every decision is backed by analytics and insights. We track what matters and optimize continuously for maximum ROI.',
            highlight: '300% Average ROI'
        },
        {
            icon: 'bi-shield-lock',
            title: 'Transparent Partnership',
            description: 'Real-time reporting, clear communication, no hidden fees. You\'ll always know exactly what we\'re doing and why.',
            highlight: '100% Transparency'
        },
        {
            icon: 'bi-gear-wide-connected',
            title: 'Full-Service Agency',
            description: 'From strategy to execution, we handle everything. One partner for all your digital needs—SEO, PPC, social, content, and more.',
            highlight: 'One-Stop Solution'
        },
        {
            icon: 'bi-people-fill',
            title: 'Dedicated Support',
            description: 'Your success manager is always available. We\'re not just a vendor—we\'re your strategic partner invested in your growth.',
            highlight: 'Personalized Service'
        }
    ];

    return (
        <section className="cs_gray_bg_2 position-relative overflow-hidden">
            <div className="cs_height_100 cs_height_lg_80"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="cs_section_heading cs_style_1 text-center cs_mb_50">
                            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
                                <span className="cs_shape_right"></span>Why AT Tech Global<span className="cs_shape_right"></span>
                            </p>
                            <h2 className="cs_fs_48 cs_mb_20 wow fadeInUp">The AT Tech Global Advantage</h2>
                            <p className="cs_fs_18 cs_mb_0 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                We combine strategic insight, creative excellence, and technical expertise to deliver transformative digital solutions that drive real business growth.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row cs_gap_y_30">
                    {advantages.map((advantage, index) => (
                        <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
                            <div className="cs_card cs_style_2 cs_radius_15 h-100 position-relative overflow-hidden" style={{
                                padding: '40px 30px',
                                background: 'white',
                                border: '2px solid transparent',
                                transition: 'all 0.4s ease',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
                            }}>
                                {/* Gradient Overlay */}
                                <div className="position-absolute" style={{
                                    top: '0',
                                    left: '0',
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(135deg, #3F66EF 0%, #EA7010 100%)',
                                    opacity: '0',
                                    transition: 'opacity 0.4s ease',
                                    zIndex: '0'
                                }}></div>
                                
                                {/* Content */}
                                <div className="position-relative" style={{ zIndex: '1' }}>
                                    <div className="cs_icon_wrapper cs_mb_25" style={{
                                        width: '70px',
                                        height: '70px',
                                        background: '#F6F3FE',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.4s ease'
                                    }}>
                                        <i className={`${advantage.icon} cs_fs_32`} style={{ color: '#3F66EF', transition: 'color 0.4s ease' }}></i>
                                    </div>
                                    
                                    <h3 className="cs_fs_22 cs_semibold cs_mb_10" style={{ transition: 'color 0.4s ease' }}>
                                        {advantage.title}
                                    </h3>
                                    
                                    <p className="cs_fs_15 mb-3" style={{ lineHeight: '1.7', transition: 'color 0.4s ease' }}>
                                        {advantage.description}
                                    </p>
                                    
                                    <div className="cs_highlight_badge" style={{
                                        display: 'inline-block',
                                        padding: '6px 12px',
                                        background: '#F6F3FE',
                                        borderRadius: '20px',
                                        fontSize: '12px',
                                        fontWeight: '600',
                                        color: '#3F66EF',
                                        marginTop: '10px',
                                        transition: 'all 0.4s ease'
                                    }}>
                                        {advantage.highlight}
                                    </div>
                                </div>

                                {/* Hover Effects */}
                                <style jsx>{`
                                    .cs_card:hover {
                                        transform: translateY(-10px);
                                        box-shadow: 0 20px 50px rgba(63, 102, 239, 0.15) !important;
                                        border-color: #3F66EF;
                                    }
                                    .cs_card:hover .cs_icon_wrapper {
                                        background: white;
                                        transform: scale(1.1);
                                    }
                                    .cs_card:hover .cs_icon_wrapper i {
                                        color: #3F66EF;
                                    }
                                    .cs_card:hover .cs_highlight-badge {
                                        background: white;
                                        color: #3F66EF;
                                    }
                                    .cs_card:hover h3,
                                    .cs_card:hover p {
                                        color: white;
                                    }
                                    .cs_card:hover .position-absolute {
                                        opacity: 1;
                                    }
                                `}</style>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Benefits */}
                <div className="row cs_mt_50">
                    <div className="col-12">
                        <div className="cs_card cs_style_2 cs_radius_15 cs_pt_40 cs_pb_40 cs_pl_40 cs_pr_40" style={{
                            background: 'linear-gradient(135deg, #103b66 0%, #0a2a4a 100%)',
                            color: 'white'
                        }}>
                            <div className="row align-items-center">
                                <div className="col-lg-8">
                                    <h3 className="cs_fs_28 cs_mb_15">Ready to Transform Your Digital Presence?</h3>
                                    <p className="cs_fs_16 mb-0" style={{ opacity: '0.9' }}>
                                        Join hundreds of businesses that have chosen AT Tech Global as their strategic digital partner. Let's write your success story together.
                                    </p>
                                </div>
                                <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                                    <Link 
                                        href="/contact" 
                                        className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase"
                                        style={{ background: '#EA7010', borderColor: '#EA7010' }}
                                        aria-label="Start your digital transformation journey"
                                    >
                                        <span>Start Your Journey</span>
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs_height_100 cs_height_lg_80"></div>
        </section>
    );
};

export default ModernWhyChooseUs;