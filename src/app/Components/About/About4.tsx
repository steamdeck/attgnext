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
            <div className="cs_height_80 cs_height_lg_60"></div>
            <div className="container">
                <div className="row cs_gap_y_40 cs_tab_reverse">
                    <div className="col-lg-6">
                        <div className="cs_about_content">
                            <div className="cs_section_heading cs_style_1 cs_mb_20">
                                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_12">
                                    Our Story<span className="cs_shape_right"></span>
                                </p>
                                <h2 className="cs_fs_48 cs_mb_15 wow fadeInDown">From Vision to Reality: The Journey That Shaped Us</h2>
                                <p className="cs_section_heading_text mb-3">
                                    Every great story has a beginning, and ours started with a simple yet powerful realization: businesses everywhere were struggling to navigate the complex, ever-changing world of digital marketing. Traditional agencies offered cookie-cutter solutions, while genuine expertise remained out of reach for most. We knew there had to be a better way.
                                </p>
                                <p className="cs_section_heading_text mb-3">
                                    Founded in 2020 by a team of digital enthusiasts and business strategists, AT Tech Global emerged not just as another agency, but as a movement to democratize digital excellence. Our founders brought together decades of combined experience from Fortune 500 companies, innovative startups, and everything in between. But more than credentials, they brought a shared passion: making transformative digital marketing accessible to every business with a dream.
                                </p>
                                <p className="cs_section_heading_text mb-3">
                                    The early days were humbling. We didn't just want clients—we wanted partners who believed in our vision. We invested countless hours understanding different industries, experimenting with emerging technologies, and perfecting our craft. Each success taught us something new; every challenge made us stronger. Today, we stand proud as a trusted partner to over 500 businesses worldwide, but we haven't forgotten our roots.
                                </p>
                                <p className="cs_section_heading_text mb-0">
                                    What drives us now is what drove us then: the belief that when businesses succeed online, they create jobs, build communities, and change lives. Your growth fuels our passion. Your challenges inspire our innovation. Your success stories become our legacy. This isn't just business for us—it's our purpose, our commitment, and our promise to you.
                                </p>
                            </div>
                            <ul className="cs_list cs_style_1 cs_medium cs_heading_color cs_mp_0 cs_mb_30">
                                <li>
                                    <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                                    <span className="cs_list_text">Full-spectrum digital marketing covering all channels and touchpoints</span>
                                </li>
                                <li>
                                    <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                                    <span className="cs_list_text">Industry-certified professionals with proven expertise and credentials</span>
                                </li>
                                <li>
                                    <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                                    <span className="cs_list_text">Advanced technology stack for analytics, automation, and optimization</span>
                                </li>
                                <li>
                                    <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                                    <span className="cs_list_text">Transparent metrics and detailed reporting with actionable insights</span>
                                </li>
                                <li>
                                    <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                                    <span className="cs_list_text">Continuous support, optimization, and strategic consultation</span>
                                </li>
                            </ul>
                            <div className="cs_about_btn_group" style={{ marginTop: '20px' }}>
                                <Link href="/service" aria-label="View our services" className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase wow fadeInLeft"><span>Discover Our Services</span></Link>
                                <Link href="/contact" aria-label="Contact us" className="cs_btn cs_style_2 cs_fs_14 cs_bold text-uppercase wow fadeInLeft" style={{marginLeft: '15px'}}><span>Partner With Us</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cs_about_thumbnail_wrapper wow fadeInUp">
                            <div className="cs_about_thumbnail position-relative">
                                <Image 
                                    src="https://www.cardinaldigitalmarketing.com/wp-content/uploads/2020/10/iStock-1206796363-scaled-1-2256x1200.jpg" 
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
                                    src="https://vanguard-x.com/wp-content/uploads/2023/06/Mask-group-2.png" 
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
            <div className="cs_height_80 cs_height_lg_60"></div>
        </section>
        </>
    );
};

export default About4;

