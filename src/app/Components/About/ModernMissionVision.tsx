"use client"
import React from 'react';
import Image from 'next/image';

const ModernMissionVision = () => {
    const values = [
        {
            icon: 'bi-lightbulb-fill',
            title: 'Innovation First',
            description: 'We stay ahead of digital trends, leveraging cutting-edge tools and creative strategies to keep your business competitive.',
            color: '#3F66EF'
        },
        {
            icon: 'bi-trophy-fill',
            title: 'Results Driven',
            description: 'Every campaign is built around measurable outcomes. We focus on metrics that matter: traffic, leads, conversions, and revenue.',
            color: '#EA7010'
        },
        {
            icon: 'bi-people-fill',
            title: 'Client Partnership',
            description: 'Your success is our success. We work as an extension of your team, invested in your long-term growth and achievement.',
            color: '#28a745'
        },
        {
            icon: 'bi-shield-check-fill',
            title: 'Transparency',
            description: 'Open communication and honest reporting. You\'ll always know exactly how your campaigns are performing and why.',
            color: '#6f42c1'
        }
    ];

    return (
        <section className="cs_about cs_style_1 position-relative overflow-hidden">
            <div className="container">
                {/* Mission & Vision */}
                <div className="row cs_gap_y_40 align-items-center mb-5">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="position-relative" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                            <Image 
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                                alt="Our mission and vision"
                                width={550}
                                height={350}
                                unoptimized={true}
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                            <div className="position-absolute" style={{
                                bottom: '0',
                                left: '0',
                                right: '0',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                padding: '30px',
                                color: 'white'
                            }}>
                                <h3 className="cs_fs_24 mb-2" style={{ textShadow: '0 2px 4px rgba(255,255,255,0.5)' }}>Our Foundation</h3>
                                <p className="mb-0 cs_fs_14">Built on integrity, driven by results, focused on your success.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
                        <div className="cs_section_heading cs_style_1 cs_mb_30">
                            <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_12" style={{ textShadow: '0 2px 4px rgba(255,255,255,0.5)' }}>
                                Our Foundation<span className="cs_shape_right"></span>
                            </p>
                            <h2 className="cs_fs_48 cs_mb_20">Mission, Vision & Values</h2>
                            <p className="cs_fs_16 cs_mb_30">
                                At AT Tech Global, we're more than just a digital marketing agency—we're your strategic partner in growth. Our mission is to empower businesses worldwide with innovative digital solutions that drive measurable success.
                            </p>
                        </div>
                        
                        <div className="row cs_gap_y_20">
                            <div className="col-md-6">
                                <div className="cs_card cs_style_2 cs_radius_15 cs_pt_30 cs_pb_30 cs_pl_25 cs_pr_25 h-100" style={{ background: 'linear-gradient(135deg, #3F66EF 0%, #2c52d4 100%)', color: 'white' }}>
                                    <div className="cs_icon_wrapper cs_mb_20" style={{
                                        width: '60px',
                                        height: '60px',
                                        background: 'rgba(255,255,255,0.2)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <i className="bi bi-bullseye cs_fs_28"></i>
                                    </div>
                                    <h3 className="cs_fs_22 cs_semibold cs_mb_10">Our Mission</h3>
                                    <p className="cs_fs_14 mb-0">
                                        To bridge the gap between businesses and their digital potential through strategic innovation, creative excellence, and unwavering commitment to measurable results.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cs_card cs_style_2 cs_radius_15 cs_pt_30 cs_pb_30 cs_pl_25 cs_pr_25 h-100" style={{ background: 'linear-gradient(135deg, #EA7010 0%, #d45a0a 100%)', color: 'white' }}>
                                    <div className="cs_icon_wrapper cs_mb_20" style={{
                                        width: '60px',
                                        height: '60px',
                                        background: 'rgba(255,255,255,0.2)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <i className="bi bi-eye-fill cs_fs_28"></i>
                                    </div>
                                    <h3 className="cs_fs_22 cs_semibold cs_mb_10">Our Vision</h3>
                                    <p className="cs_fs_14 mb-0">
                                        To become the world's most trusted digital marketing partner, recognized for transforming businesses and setting new standards of excellence in the industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Values */}
                <div className="row cs_gap_y_30 mt-5 pt-4">
                    <div className="col-12 text-center mb-4">
                        <h2 className="cs_fs_42 cs_mb_15">Our Core Values</h2>
                        <p className="cs_fs_18" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            These principles guide every decision we make and every campaign we launch
                        </p>
                    </div>
                    {values.map((value, index) => (
                        <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
                            <div className="cs_card cs_style_2 cs_radius_15 cs_pt_35 cs_pb_35 cs_pl_30 cs_pr_30 text-center h-100" style={{
                                border: `2px solid ${value.color}20`,
                                transition: 'all 0.3s ease',
                                background: 'white'
                            }} onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)';
                                e.currentTarget.style.borderColor = value.color;
                            }} onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'white';
                                e.currentTarget.style.borderColor = `${value.color}20`;
                            }}>
                                <div className="cs_icon_wrapper cs_mb_20" style={{
                                    width: '70px',
                                    height: '70px',
                                    background: `${value.color}15`,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className={`${value.icon} cs_fs_32`} style={{ color: value.color }}></i>
                                </div>
                                <h3 className="cs_fs_18 cs_semibold cs_mb_10" style={{ color: value.color }}>{value.title}</h3>
                                <p className="cs_fs_14 mb-0">{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ModernMissionVision;