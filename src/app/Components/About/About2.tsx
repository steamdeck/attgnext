import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About2 = () => {
    return (
        <>
            {/* SEO-optimized structured data for About section */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "AT Tech Global",
                            "description": "Leading digital marketing agency specializing in SEO, social media marketing, web development, and comprehensive digital solutions for businesses worldwide.",
                            "url": "https://attechglobal.com",
                            "foundingDate": "2020",
                            "numberOfEmployees": "50-100",
                            "slogan": "Transforming Businesses Through Digital Excellence"
                        }
                    })
                }}
            />
            
            {/* Hero Stats Bar */}
            <section className="cs_stats_bar cs_primary_bg">
                <div className="container">
                    <div className="cs_height_20"></div>
                    <div className="row text-center">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="cs_stat_item">
                                <h3 className="cs_fs_48 cs_white_color cs_mb_5 cs_bold">500+</h3>
                                <p className="cs_white_color cs_fs_16 mb-0">Happy Clients</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="cs_stat_item">
                                <h3 className="cs_fs_48 cs_white_color cs_mb_5 cs_bold">98%</h3>
                                <p className="cs_white_color cs_fs_16 mb-0">Satisfaction Rate</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="cs_stat_item">
                                <h3 className="cs_fs_48 cs_white_color cs_mb_5 cs_bold">5+</h3>
                                <p className="cs_white_color cs_fs_16 mb-0">Years Experience</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="cs_stat_item">
                                <h3 className="cs_fs_48 cs_white_color cs_mb_5 cs_bold">25+</h3>
                                <p className="cs_white_color cs_fs_16 mb-0">Industries Served</p>
                            </div>
                        </div>
                    </div>
                    <div className="cs_height_20"></div>
                </div>
            </section>

            <section className="cs_about cs_style_1 cs_type_1 position-relative" itemScope itemType="https://schema.org/Organization">
                <div className="cs_height_80 cs_height_lg_60"></div>
                <div className="container">
                    <div className="row cs_gap_y_40 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="cs_about_thumbnail_group position-relative">
                                <div className="cs_main_thumbnail cs_radius_15 overflow-hidden" style={{boxShadow: '0 20px 60px rgba(0,123,255,0.15)'}}>
                                    <Image 
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=600&q=80" 
                                        alt="AT Tech Global Digital Marketing Team - Professional digital marketing experts collaborating" 
                                        width={700} 
                                        height={600}
                                        priority
                                        unoptimized={true}
                                        itemProp="image"
                                        style={{width: '100%', height: 'auto'}}
                                    />
                                </div>
                                {/* Floating Badge */}
                                <div className="cs_floating_badge position-absolute" style={{
                                    bottom: '30px',
                                    right: '30px',
                                    background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
                                    padding: '25px 30px',
                                    borderRadius: '15px',
                                    boxShadow: '0 15px 40px rgba(0,123,255,0.3)',
                                    zIndex: '2'
                                }}>
                                    <div className="text-center">
                                        <h4 className="cs_fs_36 cs_white_color cs_bold mb-0">4.9/5</h4>
                                        <p className="cs_white_color cs_fs_14 mb-0">Client Rating</p>
                                        <div className="cs_rating mt-2" style={{color: '#ffc107'}}>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-half"></i>
                                        </div>
                                    </div>
                                </div>
                                {/* Decorative Shape */}
                                <div className="cs_shape_decoration position-absolute" style={{
                                    top: '-20px',
                                    left: '-20px',
                                    width: '150px',
                                    height: '150px',
                                    background: 'linear-gradient(135deg, rgba(255,71,130,0.1) 0%, rgba(255,71,130,0.05) 100%)',
                                    borderRadius: '50%',
                                    zIndex: '-1'
                                }}></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="cs_about_content">
                                <div className="cs_section_heading cs_style_1 cs_mb_20">
                                    <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_12 wow fadeInDown">
                                        About AT Tech Global<span className="cs_shape_right"></span>
                                    </p>
                                    <h1 className="cs_fs_48 cs_mb_15 wow fadeInUp" itemProp="name">
                                        Your Trusted Partner in Digital Growth and Innovation
                                    </h1>
                                    <div itemProp="description">
                                        <p className="cs_section_heading_text mb-3 wow fadeInUp" data-wow-delay="200ms">
                                            Welcome to <strong>AT Tech Global</strong>, where digital dreams become tangible success stories. Born from a passion to bridge the gap between businesses and their online potential, we've dedicated ourselves to mastering the art and science of digital marketing since 2020. Every strategy we craft, every campaign we launch, and every result we deliver stems from one core belief: your success is our purpose.
                                        </p>
                                        <p className="cs_section_heading_text mb-3 wow fadeInUp" data-wow-delay="300ms">
                                            We understand that behind every business decision is a dream—a vision of growth, impact, and lasting legacy. That's why our approach goes beyond generic solutions. With a diverse team of strategists, creative thinkers, technical experts, and certified professionals, we immerse ourselves in understanding your unique challenges, aspirations, and market dynamics. The result? Customized digital experiences that resonate with your audience and drive meaningful engagement.
                                        </p>
                                        <p className="cs_section_heading_text mb-3 wow fadeInUp" data-wow-delay="400ms">
                                            From innovative <strong>SEO strategies</strong> that elevate your search visibility, to compelling <strong>social media campaigns</strong> that build communities, cutting-edge <strong>web development</strong> that captures attention, and data-driven <strong>PPC advertising</strong> that converts—we deliver results that matter. Our track record speaks volumes: over 500 businesses transformed, countless success stories written, and a relentless commitment to staying ahead of digital trends.
                                        </p>
                                        <p className="cs_section_heading_text mb-0 wow fadeInUp" data-wow-delay="500ms">
                                            Whether you're a startup taking your first digital steps or an established enterprise seeking to amplify your online dominance, we're here to turn possibilities into realities. Let's embark on this journey together—where innovation meets results, and your vision meets our expertise. Discover our <Link href="/service" className="cs_accent_color" style={{textDecoration: 'underline'}} title="Digital Marketing Services">full range of services</Link> or explore <Link href="/project" className="cs_accent_color" style={{textDecoration: 'underline'}} title="Client Success Stories">how we've helped businesses like yours</Link> achieve extraordinary growth.
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Key Benefits List */}
                                <div className="cs_about_features cs_mb_30">
                                    <ul className="cs_list cs_style_1 cs_medium cs_heading_color cs_mp_0">
                                        <li>
                                            <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                                            <span className="cs_list_text"><strong>Strategy-First Approach:</strong> Every campaign begins with deep research and strategic planning</span>
                                        </li>
                                        <li>
                                            <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                                            <span className="cs_list_text"><strong>Transparent Communication:</strong> Real-time reporting and open dialogue at every stage</span>
                                        </li>
                                        <li>
                                            <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                                            <span className="cs_list_text"><strong>Continuous Innovation:</strong> Leveraging cutting-edge tools and emerging trends</span>
                                        </li>
                                        <li>
                                            <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                                            <span className="cs_list_text"><strong>Dedicated Partnership:</strong> Your success is our commitment, today and tomorrow</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="cs_about_btn_group">
                                    <div className="cs_btn_wrapper d-flex flex-wrap gap-3 align-items-center">
                                        <Link 
                                            href="/service" 
                                            aria-label="Explore AT Tech Global digital marketing services" 
                                            className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase wow fadeInLeft"
                                            title="View Our Digital Marketing Services"
                                        >
                                            <span>Our Services</span>
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </Link>
                                        <Link 
                                            href="/contact" 
                                            aria-label="Contact AT Tech Global for free consultation" 
                                            className="cs_btn cs_style_2 cs_fs_14 cs_bold text-uppercase wow fadeInLeft" 
                                            data-wow-delay="0.2s"
                                            title="Get Free Digital Marketing Consultation"
                                        >
                                            <span>Free Consultation</span>
                                            <i className="bi bi-telephone-fill ms-2"></i>
                                        </Link>
                                    </div>
                                    
                                    <div className="cs_client_info_wrapper wow fadeInRight" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                                        <div className="cs_client_info_header cs_mb_1">
                                            <span className="cs_fs_20 cs_semibold">
                                                <span itemProp="ratingValue">4.9</span>/5 Rating • 
                                                <span itemProp="reviewCount">500+</span> Reviews
                                            </span>
                                            <meta itemProp="bestRating" content="5" />
                                        </div>
                                        <div className="cs_client_review_content">
                                            <div className="cs_client_thumb">
                                                <Image src="/assets/img/upwork.svg" alt="Upwork Top Rated Agency" width={73} height={22} />
                                            </div>
                                            <div className="cs_rating" data-rating="4.9">
                                                <div className="cs_rating_percentage" style={{width: '98%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs_height_60 cs_height_lg_50"></div>
            </section>
        </>
    );
};

export default About2;