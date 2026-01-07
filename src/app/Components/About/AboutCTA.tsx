import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutCTA = () => {
    return (
        <section className="cs_primary_bg position-relative overflow-hidden">
            <div className="cs_height_80 cs_height_lg_60"></div>
            <div className="container">
                <div className="row cs_gap_y_40 align-items-center">
                    <div className="col-lg-8">
                        <div className="cs_section_heading cs_style_1">
                            <h2 className="cs_fs_48 cs_white_color cs_mb_20">
                                Let's Write Your Success Story Together
                            </h2>
                            <p className="cs_white_color cs_fs_18 cs_mb_30">
                                Every great partnership begins with a conversation. Whether you're looking to boost your online visibility, 
                                drive more conversions, or completely transform your digital strategy—we're here to make it happen. 
                                Join hundreds of businesses who trust AT Tech Global to turn their digital aspirations into reality.
                            </p>
                            <ul className="cs_list cs_style_2 cs_white_color cs_mp_0 cs_mb_30">
                                <li>
                                    <span className="cs_list_icon cs_center">
                                        <i className="bi bi-check-lg"></i>
                                    </span>
                                    <span className="cs_list_text">Complimentary digital presence audit and consultation</span>
                                </li>
                                <li>
                                    <span className="cs_list_icon cs_center">
                                        <i className="bi bi-check-lg"></i>
                                    </span>
                                    <span className="cs_list_text">Personalized growth strategy tailored to your goals</span>
                                </li>
                                <li>
                                    <span className="cs_list_icon cs_center">
                                        <i className="bi bi-check-lg"></i>
                                    </span>
                                    <span className="cs_list_text">Flexible partnerships designed around your needs</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center">
                        <div className="cs_cta_content">
                            <div className="cs_cta_icon cs_mb_30">
                                <div className="cs_icon_wrapper cs_white_bg cs_center cs_radius_50" style={{
                                    width: '100px',
                                    height: '100px',
                                    margin: '0 auto'
                                }}>
                                    <i className="bi bi-telephone-fill cs_fs_35 cs_accent_color"></i>
                                </div>
                            </div>
                            <h3 className="cs_white_color cs_fs_24 cs_mb_15">Start Your Journey</h3>
                            <p className="cs_white_color cs_mb_25">
                                Connect with our strategy experts today
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row cs_mt_40">
                    <div className="col-12 text-center">
                        <div className="cs_cta_btn_group">
                            <Link 
                                href="/contact" 
                                className="cs_btn cs_style_2 cs_fs_14 cs_bold text-uppercase cs_mr_20"
                                aria-label="Get free consultation from AT Tech Global"
                            >
                                <span>Request Free Consultation</span>
                            </Link>
                            <Link 
                                href="/service" 
                                className="cs_btn cs_style_3 cs_fs_14 cs_bold text-uppercase"
                                aria-label="View AT Tech Global services"
                            >
                                <span>Explore Our Solutions</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs_height_80 cs_height_lg_60"></div>
            
            {/* Background Shapes */}
            <div className="cs_cta_shape_1 position-absolute" style={{
                top: '20px',
                right: '20px',
                opacity: '0.1'
            }}>
                <Image src="/assets/img/about_shape_3.svg" alt="shape" width={98} height={98} />
            </div>
            <div className="cs_cta_shape_2 position-absolute" style={{
                bottom: '20px',
                left: '20px',
                opacity: '0.1'
            }}>
                <Image src="/assets/img/about_shape_4.svg" alt="shape" width={119} height={178} />
            </div>
        </section>
    );
};

export default AboutCTA;