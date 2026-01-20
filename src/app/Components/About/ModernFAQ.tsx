"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const ModernFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What makes AT Tech Global different from other digital marketing agencies?",
            answer: "We combine strategic insight with creative execution, backed by cutting-edge technology and a genuine commitment to your success. Unlike agencies that treat clients as numbers, we build partnerships—investing time to understand your unique business, industry challenges, and growth aspirations. Our holistic approach, transparent communication, and proven track record make us the trusted choice for businesses seeking transformative results."
        },
        {
            question: "How quickly can I expect to see measurable results?",
            answer: "Results vary by service and goals. PPC and social media campaigns often show initial traction within 2-4 weeks, while SEO is a longer-term investment typically showing significant improvement in 3-6 months. We set realistic expectations upfront, provide regular progress updates, and continuously optimize campaigns to accelerate your success timeline."
        },
        {
            question: "Can you work with my business size and budget?",
            answer: "Absolutely. We've successfully partnered with solo entrepreneurs, growing startups, mid-sized businesses, and enterprise corporations. Our flexible service packages and scalable solutions are designed to fit various budgets while maintaining the quality and attention to detail that defines our work. We believe every business deserves access to excellent digital marketing."
        },
        {
            question: "What industries do you specialize in?",
            answer: "Our diverse team brings experience across 25+ industries including technology, healthcare, e-commerce, finance, education, real estate, and more. We combine industry-specific knowledge with universal digital marketing principles, backed by certifications from Google, Facebook, HubSpot, and other leading platforms. Before starting any project, we conduct thorough industry and competitor research to ensure our strategies are perfectly tailored to your market."
        },
        {
            question: "Do you offer ongoing support after campaign launch?",
            answer: "Yes! Our partnership doesn't end at launch. We provide continuous monitoring, optimization, and strategic consultation to ensure your campaigns deliver sustained results. You'll have a dedicated account manager who's always available to answer questions, provide insights, and help you navigate the ever-changing digital landscape."
        },
        {
            question: "How do you measure and report success?",
            answer: "We provide comprehensive, real-time reporting through our client dashboard, tracking key performance indicators like traffic, leads, conversions, and ROI. Our reports include actionable insights and recommendations, not just data dumps. We believe in complete transparency—you'll always know exactly how your campaigns are performing and why."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="cs_gray_bg_2 position-relative overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="cs_section_heading cs_style_1 text-center cs_mb_50">
                            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
                                <span className="cs_shape_right"></span>Frequently Asked Questions<span className="cs_shape_right"></span>
                            </p>
                            <h2 className="cs_fs_48 cs_mb_20 wow fadeInUp">Your Questions Answered</h2>
                            <p className="cs_fs_18 cs_mb_0 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Everything you need to know about partnering with AT Tech Global
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="cs_accordion cs_style_1">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`cs_accordion_item cs_white_bg cs_radius_15 cs_mb_15 overflow-hidden ${activeIndex === index ? 'active' : ''}`}
                                    style={{
                                        border: activeIndex === index ? '2px solid #3F66EF' : '2px solid transparent',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <div
                                        className="cs_accordion_header cs_pt_25 cs_pb_25 cs_pl_30 cs_pr_30"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h3 className="cs_accordion_title cs_fs_18 cs_semibold mb-0" style={{ flex: '1', marginRight: '20px' }}>
                                                {faq.question}
                                            </h3>
                                            <div className="cs_accordion_icon cs_center" style={{
                                                width: '35px',
                                                height: '35px',
                                                background: activeIndex === index ? '#3F66EF' : '#F6F3FE',
                                                borderRadius: '50%',
                                                transition: 'all 0.3s ease',
                                                flexShrink: '0'
                                            }}>
                                                <i
                                                    className={`bi bi-${activeIndex === index ? 'dash-lg' : 'plus'} cs_fs_18`}
                                                    style={{ color: activeIndex === index ? 'white' : '#3F66EF' }}
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="cs_accordion_body cs_pl_30 cs_pr_30 cs_pb_25"
                                        style={{
                                            display: activeIndex === index ? 'block' : 'none',
                                            borderTop: '1px solid #F0F0F0',
                                            animation: activeIndex === index ? 'fadeIn 0.3s ease' : 'none'
                                        }}
                                    >
                                        <p className="cs_fs_16 mb-0" style={{ lineHeight: '1.7', color: '#555' }}>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center cs_mt_40">
                            <div className="cs_card cs_style_2 cs_radius_15 cs_pt_35 cs_pb_35 cs_pl_30 cs_pr_30" style={{
                                background: 'linear-gradient(135deg, #3F66EF 0%, #2c52d4 100%)',
                                color: 'white'
                            }}>
                                <h3 className="cs_fs_24 cs_mb_10">Still have questions?</h3>
                                <p className="cs_fs_16 mb-4" style={{ opacity: '0.9' }}>
                                    Our team is ready to help you get all the answers you need to make the right decision.
                                </p>
                                <Link
                                    href="/contact"
                                    className="cs_btn cs_style_2 cs_fs_14 cs_bold text-uppercase"
                                    style={{
                                        background: 'white',
                                        color: '#3F66EF',
                                        borderColor: 'white',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = '#3F66EF';
                                        e.currentTarget.style.color = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'white';
                                        e.currentTarget.style.color = '#3F66EF';
                                    }}
                                    aria-label="Contact us for more information"
                                >
                                    <span>Contact Us Today</span>
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
};

export default ModernFAQ;