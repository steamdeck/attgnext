import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About3 = () => {
    return (
        <section className="cs_gray_bg_2 position-relative">
            <div className="cs_height_40 cs_height_lg_30"></div>
            <div className="container">
                <div className="cs_section_heading cs_style_1 text-center">
                    <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                        <span className="cs_shape_right"></span>Our Expertise & Approach<span className="cs_shape_right"></span>
                    </p>
                    <h2 className="cs_fs_48 mb-0">Why Businesses Choose Us</h2>
                </div>
                <div className="cs_height_30 cs_height_lg_20"></div>
                <div className="row cs_row_gap_30 cs_gap_y_30">
                    <div className="col-lg-4 col-md-6">
                        <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                            <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                                <i className="bi bi-graph-up-arrow" style={{fontSize: '35px', color: '#007bff'}}></i>
                            </span>
                            <div className="cs_card_content">
                                <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Data-Driven Strategies</h3>
                                <p className="cs_card_subtitle cs_mb_22">
                                    We leverage advanced analytics and market research to create strategies backed by real data, ensuring every decision is informed and every campaign is optimized for maximum ROI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                            <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                                <i className="bi bi-people-fill" style={{fontSize: '35px', color: '#007bff'}}></i>
                            </span>
                            <div className="cs_card_content">
                                <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Experienced Team</h3>
                                <p className="cs_card_subtitle cs_mb_22">
                                    Our team consists of industry veterans, certified professionals, and creative minds who bring years of combined experience in digital marketing, web development, and business strategy.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                            <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                                <i className="bi bi-lightning-charge-fill" style={{fontSize: '35px', color: '#007bff'}}></i>
                            </span>
                            <div className="cs_card_content">
                                <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Innovation First</h3>
                                <p className="cs_card_subtitle cs_mb_22">
                                    We stay ahead of industry trends and continuously adopt the latest technologies and methodologies to ensure our clients always have a competitive edge in the digital marketplace.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                            <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                                <i className="bi bi-shield-check" style={{fontSize: '35px', color: '#007bff'}}></i>
                            </span>
                            <div className="cs_card_content">
                                <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Proven Results</h3>
                                <p className="cs_card_subtitle cs_mb_22">
                                    With hundreds of successful projects under our belt, we have a track record of delivering measurable results that drive business growth, increase revenue, and enhance brand reputation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                            <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                                <i className="bi bi-heart-fill" style={{fontSize: '35px', color: '#007bff'}}></i>
                            </span>
                            <div className="cs_card_content">
                                <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Client-Centric Approach</h3>
                                <p className="cs_card_subtitle cs_mb_22">
                                    Your success is our priority. We take the time to understand your business, goals, and challenges, creating customized solutions that align perfectly with your vision and objectives.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                            <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                                <i className="bi bi-clock-history" style={{fontSize: '35px', color: '#007bff'}}></i>
                            </span>
                            <div className="cs_card_content">
                                <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">24/7 Support</h3>
                                <p className="cs_card_subtitle cs_mb_22">
                                    We provide round-the-clock support and maintenance services, ensuring your digital presence is always running smoothly and any issues are resolved quickly and efficiently.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs_height_40 cs_height_lg_30"></div>
        </section>
    );
};

export default About3;

