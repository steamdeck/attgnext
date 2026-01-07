import React from 'react';
import Image from 'next/image';

const CompanyStats = () => {
    const stats = [
        {
            number: "500+",
            label: "Happy Clients",
            description: "Businesses transformed through our digital marketing expertise",
            icon: "bi-people-fill"
        },
        {
            number: "1000+",
            label: "Projects Completed",
            description: "Successful campaigns and websites delivered on time",
            icon: "bi-check-circle-fill"
        },
        {
            number: "98%",
            label: "Client Satisfaction",
            description: "Clients who continue working with us year after year",
            icon: "bi-heart-fill"
        },
        {
            number: "24/7",
            label: "Support Available",
            description: "Round-the-clock assistance for all your digital needs",
            icon: "bi-headset"
        }
    ];

    return (
        <section className="cs_primary_bg position-relative overflow-hidden">
            <div className="cs_height_60 cs_height_lg_50"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="cs_section_heading cs_style_1 text-center cs_mb_50">
                            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_white_color cs_mb_20">
                                <span className="cs_shape_right"></span>Our Achievements<span className="cs_shape_right"></span>
                            </p>
                            <h2 className="cs_fs_48 cs_white_color mb-0">Numbers That Speak Our Success</h2>
                        </div>
                    </div>
                </div>
                <div className="row cs_gap_y_30">
                    {stats.map((stat, index) => (
                        <div key={index} className="col-lg-3 col-md-6">
                            <div className="cs_counter cs_style_1 text-center cs_white_bg cs_radius_10 cs_pt_40 cs_pb_40 cs_pl_30 cs_pr_30 position-relative overflow-hidden">
                                <div className="cs_counter_icon cs_mb_25">
                                    <i className={`${stat.icon} cs_fs_48 cs_accent_color`}></i>
                                </div>
                                <div className="cs_counter_number cs_fs_48 cs_semibold cs_heading_color cs_mb_10">
                                    {stat.number}
                                </div>
                                <h3 className="cs_counter_title cs_fs_18 cs_semibold cs_heading_color cs_mb_15">
                                    {stat.label}
                                </h3>
                                <p className="cs_counter_subtitle cs_fs_14 mb-0">
                                    {stat.description}
                                </p>
                                <div className="cs_counter_shape position-absolute">
                                    <Image src="/assets/img/about_shape_3.svg" alt="shape" width={98} height={98} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="cs_height_60 cs_height_lg_50"></div>
        </section>
    );
};

export default CompanyStats;