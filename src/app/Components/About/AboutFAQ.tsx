import React from 'react';
import Link from 'next/link';

const AboutFAQ = () => {
    const faqs = [
        {
            question: "What sets AT Tech Global apart in the digital marketing industry?",
            answer: "We blend strategic insight with creative execution, backed by cutting-edge technology and a genuine commitment to your success. Unlike agencies that treat clients as numbers, we build partnerships—investing time to understand your unique business, industry challenges, and growth aspirations. Our holistic approach, transparent communication, and proven track record make us the trusted choice for businesses seeking transformative results."
        },
        {
            question: "How quickly can I expect to see measurable results from your services?",
            answer: "Results vary by service and goals. PPC and social media campaigns often show initial traction within 2-4 weeks, while SEO is a longer-term investment typically showing significant improvement in 3-6 months. We set realistic expectations upfront, provide regular progress updates, and continuously optimize campaigns to accelerate your success timeline."
        },
        {
            question: "Can AT Tech Global work with my business size and budget?",
            answer: "Absolutely. We've successfully partnered with solo entrepreneurs, growing startups, mid-sized businesses, and enterprise corporations. Our flexible service packages and scalable solutions are designed to fit various budgets while maintaining the quality and attention to detail that defines our work. We believe every business deserves access to excellent digital marketing."
        },
        {
            question: "What makes your team qualified to handle my industry's unique challenges?",
            answer: "Our diverse team brings experience across 25+ industries including technology, healthcare, e-commerce, finance, education, real estate, and more. We combine industry-specific knowledge with universal digital marketing principles, backed by certifications from Google, Facebook, HubSpot, and other leading platforms. Before starting any project, we conduct thorough industry and competitor research to ensure our strategies are perfectly tailored to your market."
        }
    ];

    return (
        <section className="cs_gray_bg_2 position-relative overflow-hidden">
            <div className="cs_height_80 cs_height_lg_60"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="cs_section_heading cs_style_1 text-center cs_mb_50">
                            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                                <span className="cs_shape_right"></span>Frequently Asked Questions<span className="cs_shape_right"></span>
                            </p>
                            <h2 className="cs_fs_48 mb-0">Your Questions Answered</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="cs_accordion cs_style_1">
                            {faqs.map((faq, index) => (
                                <div key={index} className="cs_accordion_item cs_white_bg cs_radius_10 cs_mb_20 overflow-hidden">
                                    <div className="cs_accordion_header cs_pt_25 cs_pb_25 cs_pl_30 cs_pr_30">
                                        <h3 className="cs_accordion_title cs_fs_18 cs_semibold mb-0">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <div className="cs_accordion_body cs_pl_30 cs_pr_30 cs_pb_25">
                                        <p className="cs_fs_16 mb-0">{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center cs_mt_40">
                            <p className="cs_fs_16 cs_mb_20">
                                Still have questions? Our team is ready to help!
                            </p>
                            <Link 
                                href="/contact" 
                                className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase"
                                aria-label="Contact AT Tech Global for more information"
                            >
                                <span>Contact Us Today</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs_height_80 cs_height_lg_60"></div>
        </section>
    );
};

export default AboutFAQ;