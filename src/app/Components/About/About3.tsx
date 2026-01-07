'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About3 = () => {
    const advantages = [
        {
            icon: 'bi-rocket-takeoff',
            title: 'Strategic Thinking',
            description: 'We don\'t just execute tactics—we craft comprehensive strategies. Every campaign is built on thorough market analysis, competitor research, and a deep understanding of your business objectives and target audience behavior.',
            color: '#007bff',
            gradient: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)'
        },
        {
            icon: 'bi-palette-fill',
            title: 'Creative Excellence',
            description: 'Creativity is at the heart of everything we do. From stunning visual designs to compelling copy, we create experiences that capture attention, inspire action, and leave lasting impressions on your audience.',
            color: '#28a745',
            gradient: 'linear-gradient(135deg, #28a745 0%, #1e7e34 100%)'
        },
        {
            icon: 'bi-bullseye',
            title: 'Results-Oriented Focus',
            description: 'At the end of the day, results matter. We set clear KPIs, track performance meticulously, and continuously optimize campaigns to ensure you achieve measurable growth, higher conversions, and exceptional ROI.',
            color: '#ffc107',
            gradient: 'linear-gradient(135deg, #ffc107 0%, #ff9800 100%)'
        },
        {
            icon: 'bi-broadcast',
            title: 'Multi-Channel Expertise',
            description: 'From search engines to social platforms, email to mobile apps—we master every digital channel. Our integrated approach ensures your brand message is consistent, impactful, and reaches customers wherever they are.',
            color: '#dc3545',
            gradient: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)'
        },
        {
            icon: 'bi-person-hearts',
            title: 'Personalized Partnership',
            description: 'You\'re not just a client—you\'re our partner. We invest time to understand your business inside out, providing tailored solutions, dedicated account management, and strategic guidance that aligns with your vision.',
            color: '#6f42c1',
            gradient: 'linear-gradient(135deg, #6f42c1 0%, #5a32a3 100%)'
        },
        {
            icon: 'bi-graph-up',
            title: 'Scalable Solutions',
            description: 'Whether you\'re launching your first campaign or managing enterprise-level operations, our flexible solutions scale with your growth. We adapt and evolve alongside your business, ensuring continued success at every stage.',
            color: '#17a2b8',
            gradient: 'linear-gradient(135deg, #17a2b8 0%, #138496 100%)'
        }
    ];

    return (
        <section className="cs_gray_bg_2 position-relative overflow-hidden">
            <div className="cs_height_80 cs_height_lg_60"></div>
            <div className="container">
                <div className="cs_section_heading cs_style_1 text-center cs_mb_50">
                    <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
                        <span className="cs_shape_right"></span>What Makes Us Different<span className="cs_shape_right"></span>
                    </p>
                    <h2 className="cs_fs_48 cs_mb_20 wow fadeInUp">The AT Tech Global Advantage</h2>
                    <p className="cs_fs_18 cs_mb_0 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px', margin: '0 auto'}}>
                        We combine strategic insight, creative excellence, and technical expertise to deliver 
                        transformative digital solutions that drive real business growth.
                    </p>
                </div>
                <div className="cs_height_40 cs_height_lg_30"></div>
                <div className="row cs_row_gap_30 cs_gap_y_30">
                    {advantages.map((advantage, index) => (
                        <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
                            <div className="cs_advantage_card cs_white_bg cs_radius_15 position-relative overflow-hidden h-100" style={{
                                padding: '40px 30px',
                                transition: 'all 0.4s ease',
                                border: '2px solid transparent',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
                            }}>
                                {/* Gradient Overlay on Hover */}
                                <div className="cs_card_overlay position-absolute" style={{
                                    top: '0',
                                    left: '0',
                                    width: '100%',
                                    height: '100%',
                                    background: advantage.gradient,
                                    opacity: '0',
                                    transition: 'opacity 0.4s ease',
                                    zIndex: '0'
                                }}></div>
                                
                                {/* Content */}
                                <div className="cs_card_content_inner position-relative" style={{zIndex: '1'}}>
                                    <div className="cs_icon_wrapper cs_mb_25" style={{
                                        width: '80px',
                                        height: '80px',
                                        background: `${advantage.color}15`,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.4s ease'
                                    }}>
                                        <i className={`${advantage.icon} cs_fs_32`} style={{color: advantage.color, transition: 'color 0.4s ease'}}></i>
                                    </div>
                                    <h3 className="cs_fs_22 cs_semibold cs_mb_15 cs_card_title" style={{transition: 'color 0.4s ease'}}>
                                        {advantage.title}
                                    </h3>
                                    <p className="cs_fs_16 mb-0 cs_card_text" style={{lineHeight: '1.7', transition: 'color 0.4s ease'}}>
                                        {advantage.description}
                                    </p>
                                </div>

                                {/* Decorative Element */}
                                <div className="cs_card_decoration position-absolute" style={{
                                    bottom: '-30px',
                                    right: '-30px',
                                    width: '100px',
                                    height: '100px',
                                    background: `${advantage.color}10`,
                                    borderRadius: '50%',
                                    transition: 'all 0.4s ease'
                                }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="cs_height_80 cs_height_lg_60"></div>
            
            {/* Add hover effects via style tag */}
            <style jsx>{`
                .cs_advantage_card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 50px rgba(0,0,0,0.15) !important;
                }
                .cs_advantage_card:hover .cs_card_overlay {
                    opacity: 1;
                }
                .cs_advantage_card:hover .cs_card_title,
                .cs_advantage_card:hover .cs_card_text {
                    color: #ffffff !important;
                }
                .cs_advantage_card:hover .cs_icon_wrapper {
                    background: rgba(255,255,255,0.2) !important;
                }
                .cs_advantage_card:hover .cs_icon_wrapper i {
                    color: #ffffff !important;
                }
                .cs_advantage_card:hover .cs_card_decoration {
                    transform: scale(1.5);
                    opacity: 0.3;
                }
            `}</style>
        </section>
    );
};

export default About3;

