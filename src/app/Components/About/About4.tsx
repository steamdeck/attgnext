import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About4 = () => {
    return (
        <>
            <style dangerouslySetInnerHTML={{__html: `
                .cs_about.cs_style_1 .cs_about_thumbnail > img {
                    height: auto !important;
                    object-fit: cover;
                }
            `}} />
            <section className="cs_about cs_style_1 position-relative overflow-hidden">
            <div className="cs_height_120 cs_height_lg_80"></div>
            <div className="container">
                <div className="row cs_gap_y_40 cs_tab_reverse">
                    <div className="col-lg-6">
                        <div className="cs_about_content">
                            <div className="cs_section_heading cs_style_1 cs_mb_28">
                                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                                    Our Story<span className="cs_shape_right"></span>
                                </p>
                                <h2 className="cs_fs_48 cs_mb_21 wow fadeInDown">Building Digital Excellence Since Day One</h2>
                                <p className="cs_section_heading_text mb-4">
                                    Founded with a vision to transform how businesses connect with their audiences in the digital age, we have grown from a small team of passionate marketers into a full-service digital agency trusted by businesses worldwide.
                                </p>
                                <p className="cs_section_heading_text mb-4">
                                    Our journey began with a simple belief: every business, regardless of size, deserves access to world-class digital marketing solutions. This philosophy has guided us through years of growth, innovation, and countless successful projects.
                                </p>
                                <p className="cs_section_heading_text mb-4">
                                    Today, we're proud to have helped hundreds of businesses achieve their digital goals, from startups making their first mark to established enterprises expanding their online presence. Our commitment to excellence, combined with our deep understanding of digital trends, has made us a preferred partner for businesses seeking sustainable growth.
                                </p>
                                <p className="cs_section_heading_text mb-0">
                                    As we look to the future, we remain dedicated to pushing boundaries, exploring new possibilities, and helping our clients stay ahead in an ever-evolving digital landscape. Your success story is our success story, and we're here to make it happen.
                                </p>
                            </div>
                            <ul className="cs_list cs_style_1 cs_medium cs_heading_color cs_mp_0 cs_mb_30">
                                <li>
                                    <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                                    <span className="cs_list_text">Comprehensive digital marketing solutions tailored to your needs</span>
                                </li>
                                <li>
                                    <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                                    <span className="cs_list_text">Expert team with proven track record of success</span>
                                </li>
                                <li>
                                    <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                                    <span className="cs_list_text">Cutting-edge tools and technologies for optimal results</span>
                                </li>
                                <li>
                                    <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                                    <span className="cs_list_text">Transparent reporting and regular performance updates</span>
                                </li>
                                <li>
                                    <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                                    <span className="cs_list_text">Dedicated support and ongoing optimization</span>
                                </li>
                            </ul>
                            <div className="cs_about_btn_group">
                                <Link href="/service" aria-label="View our services" className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase wow fadeInLeft"><span>Explore Services</span></Link>
                                <Link href="/contact" aria-label="Contact us" className="cs_btn cs_style_2 cs_fs_14 cs_bold text-uppercase wow fadeInLeft" style={{marginLeft: '15px'}}><span>Start Your Journey</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cs_about_thumbnail_wrapper wow fadeInUp">
                            <div className="cs_about_thumbnail position-relative">
                                <Image 
                                    src="https://uplynksolutions.com/wp-content/uploads/2023/05/It-soln2.jpeg" 
                                    alt="Our Team at Work" 
                                    width={260} 
                                    height={353}
                                    unoptimized={true}
                                />
                                <div className="cs_project_infobox_wrapper">
                                    <div className="cs_project_infobox cs_blue_bg">
                                        <h3 className="cs_fs_48 cs_white_color">500+</h3>
                                        <p className="cs_white_color mb-0">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cs_about_thumbnail position-relative">
                                <Image 
                                    src="https://uplynksolutions.com/wp-content/uploads/2023/05/It-soln2.jpeg" 
                                    alt="Digital Marketing Excellence" 
                                    width={269} 
                                    height={453}
                                    unoptimized={true}
                                />
                                <div className="cs_about_shape_3 position-absolute">
                                    <Image src="/assets/img/about_shape_1.svg" alt="img" width={99} height={86}   />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs_height_120 cs_height_lg_80"></div>
        </section>
        </>
    );
};

export default About4;

