import React from 'react';
import Image from 'next/image';

const CompanyTimeline = () => {
    const timelineEvents = [
        {
            year: "2020",
            title: "Company Founded",
            description: "AT Tech Global was established with a vision to democratize digital marketing for businesses of all sizes.",
            icon: "bi-rocket-takeoff-fill",
            highlight: true
        },
        {
            year: "2021",
            title: "First 100 Clients",
            description: "Reached our first milestone of 100 satisfied clients across various industries, establishing our reputation for excellence.",
            icon: "bi-people-fill",
            highlight: false
        },
        {
            year: "2022",
            title: "Service Expansion",
            description: "Expanded our service portfolio to include advanced SEO, social media marketing, and comprehensive web development solutions.",
            icon: "bi-graph-up-arrow",
            highlight: false
        },
        {
            year: "2023",
            title: "Global Recognition",
            description: "Received industry awards for innovation in digital marketing and achieved 98% client satisfaction rate.",
            icon: "bi-award-fill",
            highlight: true
        },
        {
            year: "2024",
            title: "500+ Success Stories",
            description: "Celebrated serving over 500 clients worldwide with an average ROI improvement of 300% across all campaigns.",
            icon: "bi-trophy-fill",
            highlight: false
        },
        {
            year: "2025",
            title: "Future Vision",
            description: "Continuing to innovate with AI-powered marketing solutions and expanding our global presence to serve more businesses.",
            icon: "bi-eye-fill",
            highlight: true
        }
    ];

    return (
        <section className="cs_about cs_style_1 position-relative">
            <div className="cs_height_60 cs_height_lg_50"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="cs_section_heading cs_style_1 text-center cs_mb_50">
                            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                                <span className="cs_shape_right"></span>Our Journey<span className="cs_shape_right"></span>
                            </p>
                            <h2 className="cs_fs_48 mb-0">Milestones That Define Our Growth</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="cs_timeline_wrapper position-relative">
                            {timelineEvents.map((event, index) => (
                                <div key={index} className={`cs_timeline_item ${index % 2 === 0 ? 'cs_timeline_left' : 'cs_timeline_right'} position-relative cs_mb_50`}>
                                    <div className={`cs_timeline_content cs_radius_10 cs_pt_30 cs_pb_30 cs_pl_30 cs_pr_30 position-relative ${event.highlight ? 'cs_primary_bg cs_white_color' : 'cs_white_bg'}`}>
                                        <div className="cs_timeline_icon_wrapper position-absolute">
                                            <div className={`cs_timeline_icon cs_center cs_radius_50 ${event.highlight ? 'cs_accent_bg cs_white_color' : 'cs_primary_bg cs_white_color'}`}>
                                                <i className={`${event.icon} cs_fs_20`}></i>
                                            </div>
                                        </div>
                                        <div className="cs_timeline_year cs_fs_14 cs_semibold cs_mb_10" style={{color: event.highlight ? '#ffffff' : '#007bff'}}>
                                            {event.year}
                                        </div>
                                        <h3 className={`cs_timeline_title cs_fs_22 cs_semibold cs_mb_15 ${event.highlight ? 'cs_white_color' : 'cs_heading_color'}`}>
                                            {event.title}
                                        </h3>
                                        <p className={`cs_timeline_description cs_fs_16 mb-0 ${event.highlight ? 'cs_white_color' : ''}`}>
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs_height_60 cs_height_lg_50"></div>
            
            <style jsx>{`
                .cs_timeline_wrapper::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: #007bff;
                    transform: translateX(-50%);
                }
                
                .cs_timeline_item {
                    width: 100%;
                }
                
                .cs_timeline_left .cs_timeline_content {
                    margin-right: 55%;
                }
                
                .cs_timeline_right .cs_timeline_content {
                    margin-left: 55%;
                }
                
                .cs_timeline_icon_wrapper {
                    right: -25px;
                    top: 30px;
                }
                
                .cs_timeline_right .cs_timeline_icon_wrapper {
                    left: -25px;
                    right: auto;
                }
                
                .cs_timeline_icon {
                    width: 50px;
                    height: 50px;
                    border: 3px solid #ffffff;
                }
                
                @media (max-width: 768px) {
                    .cs_timeline_wrapper::before {
                        left: 25px;
                    }
                    
                    .cs_timeline_left .cs_timeline_content,
                    .cs_timeline_right .cs_timeline_content {
                        margin-left: 60px;
                        margin-right: 0;
                    }
                    
                    .cs_timeline_icon_wrapper,
                    .cs_timeline_right .cs_timeline_icon_wrapper {
                        left: 0;
                        right: auto;
                    }
                }
            `}</style>
        </section>
    );
};

export default CompanyTimeline;