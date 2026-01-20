"use client"
import React from 'react';
import Image from 'next/image';

const ModernTimeline = () => {
    const timeline = [
        {
            year: '2020',
            title: 'Founded with a Vision',
            description: 'AT Tech Global was born from a simple idea: make digital marketing accessible, transparent, and results-driven for businesses of all sizes.',
            icon: 'bi-rocket-takeoff',
            color: '#3F66EF'
        },
        {
            year: '2021',
            title: 'First 100 Clients',
            description: 'Our commitment to results and client satisfaction helped us rapidly grow, serving our first 100 businesses across multiple industries.',
            icon: 'bi-people-fill',
            color: '#EA7010'
        },
        {
            year: '2022',
            title: 'Service Expansion',
            description: 'Expanded our offerings to include comprehensive web development, advanced analytics, and enterprise-level solutions.',
            icon: 'bi-grid-3x3-gap-fill',
            color: '#28a745'
        },
        {
            year: '2023',
            title: 'Industry Recognition',
            description: 'Achieved 98% client satisfaction rate and became a trusted partner for businesses seeking transformative digital growth.',
            icon: 'bi-trophy-fill',
            color: '#6f42c1'
        },
        {
            year: '2024',
            title: '500+ Success Stories',
            description: 'Celebrated over 500 businesses transformed, with average ROI increases of 300% across all campaigns.',
            icon: 'bi-star-fill',
            color: '#EA7010'
        },
        {
            year: '2025',
            title: 'Future Forward',
            description: 'Continuing to innovate with AI-driven strategies, cutting-edge automation, and next-generation digital solutions.',
            icon: 'bi-lightning-charge-fill',
            color: '#3F66EF'
        }
    ];

    return (
        <section className="cs_about cs_style_1 position-relative overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="cs_section_heading cs_style_1 text-center cs_mb_50">
                            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
                                <span className="cs_shape_right"></span>Our Journey<span className="cs_shape_right"></span>
                            </p>
                            <h2 className="cs_fs_48 cs_mb_20 wow fadeInUp">The AT Tech Global Story</h2>
                            <p className="cs_fs_18 cs_mb_0 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                From humble beginnings to becoming a trusted digital partner for hundreds of businesses worldwide
                            </p>
                        </div>
                    </div>
                </div>

                {/* Timeline Desktop */}
                <div className="d-none d-lg-block">
                    <div className="position-relative" style={{ padding: '40px 0' }}>
                        {/* Vertical Line */}
                        <div className="position-absolute" style={{
                            left: '50%',
                            top: '0',
                            bottom: '0',
                            width: '2px',
                            background: 'linear-gradient(to bottom, #3F66EF, #EA7010)',
                            transform: 'translateX(-50%)',
                            opacity: '0.3'
                        }}></div>

                        <div className="row cs_gap_y_40">
                            {timeline.map((item, index) => (
                                <div key={index} className="col-12">
                                    <div className={`row align-items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                                        <div className="col-lg-6">
                                            <div className={`wow ${index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}`} data-wow-delay={`${index * 0.1}s`}>
                                                <div className="cs_card cs_style_2 cs_radius_15 cs_pt_30 cs_pb_30 cs_pl_35 cs_pr-35" style={{
                                                    background: 'white',
                                                    borderLeft: `4px solid ${item.color}`,
                                                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                                    transition: 'all 0.3s ease'
                                                }}>
                                                    <div className="d-flex align-items-center mb-3">
                                                        <span className="cs_fs_14 cs_semibold" style={{
                                                            color: item.color,
                                                            background: `${item.color}15`,
                                                            padding: '6px 12px',
                                                            borderRadius: '20px'
                                                        }}>
                                                            {item.year}
                                                        </span>
                                                    </div>
                                                    <h3 className="cs_fs_22 cs_semibold cs_mb_10">{item.title}</h3>
                                                    <p className="cs_fs_15 mb-0" style={{ lineHeight: '1.7' }}>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Timeline Mobile */}
                <div className="d-lg-none">
                    <div className="position-relative" style={{ padding: '20px 0' }}>
                        {/* Vertical Line */}
                        <div className="position-absolute" style={{
                            left: '20px',
                            top: '0',
                            bottom: '0',
                            width: '2px',
                            background: 'linear-gradient(to bottom, #3F66EF, #EA7010)',
                            opacity: '0.3'
                        }}></div>

                        {timeline.map((item, index) => (
                            <div key={index} className="mb-4 wow fadeInUp" data-wow-delay={`${index * 0.1}s`} style={{ paddingLeft: '40px' }}>
                                <div className="position-absolute" style={{
                                    left: '11px',
                                    top: '15px',
                                    width: '20px',
                                    height: '20px',
                                    background: item.color,
                                    borderRadius: '50%',
                                    border: '3px solid white',
                                    boxShadow: '0 0 0 2px ' + item.color
                                }}></div>
                                
                                <div className="cs_card cs_style_2 cs_radius_10 cs_pt_20 cs_pb_20 cs_pl_20 cs_pr_20" style={{
                                    background: 'white',
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                                }}>
                                    <span className="cs_fs_12 cs_semibold mb-2 d-inline-block" style={{
                                        color: item.color,
                                        background: `${item.color}15`,
                                        padding: '4px 10px',
                                        borderRadius: '15px'
                                    }}>
                                        {item.year}
                                    </span>
                                    <h3 className="cs_fs_18 cs_semibold cs_mb_8">{item.title}</h3>
                                    <p className="cs_fs_14 mb-0">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Company Stats */}
                <div className="row cs_mt_50">
                    <div className="col-12">
                        <div className="cs_card cs_style_2 cs_radius_15 cs_pt_40 cs_pb-40" style={{
                            background: 'linear-gradient(135deg, #F6F3FE 0%, #fff 100%)',
                            border: '2px solid #3F66EF20'
                        }}>
                            <div className="row text-center cs_gap_y_30">
                                <div className="col-md-3 col-6">
                                    <div className="cs_counter_wrapper">
                                        <h3 className="cs_fs_36 cs_accent_color cs_bold mb-1">500+</h3>
                                        <p className="cs_fs_14 mb-0">Clients Served</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="cs_counter_wrapper">
                                        <h3 className="cs_fs_36 cs_accent_color cs_bold mb-1">98%</h3>
                                        <p className="cs_fs_14 mb-0">Satisfaction Rate</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="cs_counter_wrapper">
                                        <h3 className="cs_fs_36 cs_accent_color cs_bold mb-1">300%</h3>
                                        <p className="cs_fs_14 mb-0">Average ROI</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="cs_counter_wrapper">
                                        <h3 className="cs_fs_36 cs_accent_color cs_bold mb-1">25+</h3>
                                        <p className="cs_fs_14 mb-0">Industries</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ModernTimeline;