import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhyChooseUs = () => {
    const features = [
        {
            title: "Proven Track Record",
            description: "Over 500 successful projects with measurable ROI improvements averaging 300% for our clients across various industries.",
            icon: "bi-trophy-fill",
            color: "#007bff"
        },
        {
            title: "Industry Expertise",
            description: "Our team holds certifications from Google, Facebook, HubSpot, and other leading platforms, ensuring cutting-edge strategies.",
            icon: "bi-award-fill",
            color: "#28a745"
        },
        {
            title: "Transparent Reporting",
            description: "Real-time dashboards and detailed monthly reports keep you informed about every aspect of your campaign performance.",
            icon: "bi-graph-up-arrow",
            color: "#ffc107"
        },
        {
            title: "Custom Solutions",
            description: "No cookie-cutter approaches. Every strategy is tailored specifically to your business goals, industry, and target audience.",
            icon: "bi-gear-fill",
            color: "#dc3545"
        },
        {
            title: "Dedicated Account Manager",
            description: "Your success is personal to us. Each client gets a dedicated account manager who knows your business inside and out.",
            icon: "bi-person-check-fill",
            color: "#6f42c1"
        },
        {
            title: "Cutting-Edge Technology",
            description: "We leverage the latest marketing automation tools, AI-powered analytics, and advanced tracking systems for optimal results.",
            icon: "bi-cpu-fill",
            color: "#fd7e14"
        }
    ];

    return (
        <section className="cs_gray_bg_2 position-relative">
            <div className="cs_height_60 cs_height_lg_50"></div>
            <div className="container">
                <div className="row cs_gap_y_40">
                    <div className="col-lg-6">
                        <div className="cs_section_heading cs_style_1 cs_mb_40">
                            <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                                Why Choose AT Tech Global<span className="cs_shape_right"></span>
                            </p>
                            <h2 className="cs_fs_48 cs_mb_20">What Sets Us Apart in Digital Marketing</h2>
                            <p className="cs_section_heading_text cs_mb_30">
                                In a crowded digital marketing landscape, we stand out through our commitment to excellence, 
                                innovation, and most importantly, your success. Here's what makes AT Tech Global the right 
                                choice for your digital transformation journey.
                            </p>
                            <p className="cs_section_heading_text cs_mb_30">
                                We don't just execute campaigns; we build partnerships. Our approach combines strategic thinking, 
                                creative excellence, and data-driven insights to deliver results that exceed expectations and 
                                drive sustainable business growth.
                            </p>
                            <div className="cs_about_btn_group">
                                <Link href="/service" aria-label="View our services" className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase">
                                    <span>Explore Our Services</span>
                                </Link>
                                <Link href="/contact" aria-label="Get a free consultation" className="cs_btn cs_style_2 cs_fs_14 cs_bold text-uppercase" style={{marginLeft: '15px'}}>
                                    <span>Get Free Consultation</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row cs_gap_y_20">
                            {features.map((feature, index) => (
                                <div key={index} className="col-md-6">
                                    <div className="cs_iconbox cs_style_1 cs_white_bg cs_radius_10 cs_pt_25 cs_pb_25 cs_pl_25 cs_pr_25 position-relative overflow-hidden h-100">
                                        <div className="cs_iconbox_icon cs_mb_20">
                                            <i className={`${feature.icon} cs_fs_35`} style={{color: feature.color}}></i>
                                        </div>
                                        <h3 className="cs_iconbox_title cs_fs_18 cs_semibold cs_mb_15">
                                            {feature.title}
                                        </h3>
                                        <p className="cs_iconbox_subtitle cs_fs_14 mb-0">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs_height_60 cs_height_lg_50"></div>
        </section>
    );
};

export default WhyChooseUs;