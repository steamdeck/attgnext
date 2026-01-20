import React from 'react';

const MissionVisionValues = () => {
    const principles = [
        {
            title: "Our Mission",
            icon: "bi-bullseye",
            content: "To empower businesses worldwide by delivering innovative, results-driven digital marketing solutions that transform online presence into measurable success. We believe in creating authentic connections between brands and their audiences, fostering growth through strategy, creativity, and relentless dedication to excellence.",
            color: "#007bff"
        },
        {
            title: "Our Vision", 
            icon: "bi-eye-fill",
            content: "To become the world's most trusted digital marketing partner, recognized for driving transformative business growth and setting new standards in the industry. We envision a future where every business, regardless of size or location, has access to world-class digital expertise that unlocks their full potential.",
            color: "#28a745"
        },
        {
            title: "Our Values",
            icon: "bi-heart-fill", 
            content: "Integrity guides our every action. Innovation fuels our creativity. Excellence defines our deliverables. Collaboration strengthens our partnerships. Transparency builds trust. Accountability ensures results. These core values aren't just words—they're the foundation of how we work, how we serve, and how we grow together with our clients.",
            color: "#ffc107"
        }
    ];

    return (
        <section className="cs_about cs_style_1 position-relative overflow-hidden">
            <div className="cs_height_80 cs_height_lg_60"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="cs_section_heading cs_style_1 text-center cs_mb_50">
                            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20" style={{ textShadow: '0 2px 4px rgba(255,255,255,0.5)' }}>
                                <span className="cs_shape_right"></span>Our Foundation<span className="cs_shape_right"></span>
                            </p>
                            <h2 className="cs_fs_48 mb-0">Mission, Vision & Values That Drive Our Success</h2>
                        </div>
                    </div>
                </div>
                <div className="row cs_gap_y_30">
                    {principles.map((principle, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="cs_card cs_style_3 cs_white_bg cs_radius_15 cs_pt_40 cs_pb_40 cs_pl_30 cs_pr_30 text-center position-relative overflow-hidden h-100 cs_transition_4">
                                <div className="cs_card_icon cs_mb_25">
                                    <div className="cs_icon_wrapper cs_center cs_radius_50 cs_mb_20" style={{
                                        width: '80px',
                                        height: '80px',
                                        backgroundColor: principle.color + '20',
                                        margin: '0 auto'
                                    }}>
                                        <i className={`${principle.icon} cs_fs_35`} style={{color: principle.color}}></i>
                                    </div>
                                </div>
                                <div className="cs_card_content">
                                    <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_20" itemProp={index === 0 ? "mission" : index === 1 ? "description" : "values"}>
                                        {principle.title}
                                    </h3>
                                    <p className="cs_card_subtitle cs_fs_16 cs_line_height_26 mb-0">
                                        {principle.content}
                                    </p>
                                </div>
                                <div className="cs_card_shape position-absolute" style={{
                                    bottom: '-20px',
                                    right: '-20px',
                                    width: '100px',
                                    height: '100px',
                                    backgroundColor: principle.color + '10',
                                    borderRadius: '50%'
                                }}></div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Additional Company Information */}
                <div className="row cs_mt_50">
                    <div className="col-12">
                        <div className="cs_company_info cs_gray_bg_2 cs_radius_15 cs_pt_40 cs_pb_40 cs_pl_40 cs_pr_40 text-center">
                            <h3 className="cs_fs_28 cs_mb_20">Building Tomorrow's Success Today</h3>
                            <p className="cs_fs_16 cs_line_height_26 cs_mb_30">
                                Since 2020, AT Tech Global has been at the forefront of digital innovation, helping businesses transform their online presence into powerful growth engines. Our unwavering commitment to these principles has enabled us to build meaningful, lasting partnerships with over 500 clients across the globe. 
                                consistently delivering results that exceed expectations and drive sustainable business growth.
                            </p>
                            <div className="cs_company_metrics" style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '40px',
                                flexWrap: 'wrap'
                            }}>
                                <div className="cs_metric">
                                    <span className="cs_fs_24 cs_semibold cs_accent_color">500+</span>
                                    <p className="cs_fs_14 mb-0">Clients Served</p>
                                </div>
                                <div className="cs_metric">
                                    <span className="cs_fs_24 cs_semibold cs_accent_color">98%</span>
                                    <p className="cs_fs_14 mb-0">Satisfaction Rate</p>
                                </div>
                                <div className="cs_metric">
                                    <span className="cs_fs_24 cs_semibold cs_accent_color">300%</span>
                                    <p className="cs_fs_14 mb-0">Avg ROI Increase</p>
                                </div>
                                <div className="cs_metric">
                                    <span className="cs_fs_24 cs_semibold cs_accent_color">25+</span>
                                    <p className="cs_fs_14 mb-0">Countries Served</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs_height_80 cs_height_lg_60"></div>
        </section>
    );
};

export default MissionVisionValues;

