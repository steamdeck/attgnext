"use client"
import React, { useState } from 'react';
import PricingCard from '../Card/PricingCard';
import Image from 'next/image';

const Pricing1 = () => {

    const [isActive, setIsActive] = useState('monthly');

    return (
        <section className="cs_tabs cs_gray_bg_1 position-relative">
            <div className="cs_height_120 cs_height_lg_80"></div>
            <div className="container">
                <div className="cs_section_heading cs_style_1 text-center">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_center cs_accent_color cs_mb_20 wow fadeInDown">
                    <span className="cs_shape_right"></span>Pricing Plan<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_28 wow fadeInUp">Choose Your Perfect Pricing</h2>
                </div>
                <div className="cs_tab_links_wrapper cs_center position-relative wow fadeInUp" data-wow-delay="200ms">
                <ul className="cs_tab_links cs_fs_14 cs_style_1 cs_type_1 cs_mp_0">
                    <li className={` ${isActive === 'monthly' ? 'active' : ''}`} onClick={() => setIsActive('monthly')} ><a href="#monthly" aria-label="Tab button">Monthly</a></li>
                    <li className={` ${isActive === 'yearly' ? 'active' : ''}`} onClick={() => setIsActive('yearly')}><a href="#yearly" aria-label="Tab button">Yearly</a></li>
                </ul>
                <span className="cs_offer cs_fs-18 cs_medium cs_blue_color ms-3">Save 25%</span>
                </div>
                <div className="cs_height_60 cs_height_lg_50"></div>
                <div className="cs_tab_body position-relative z-1">
                <div className={`cs_tab ${isActive === 'monthly' ? 'active' : ''}`} id="monthly">
                    <div className="row cs_row_gap_30 cs_gap_y_30">

                    <div className="col-lg-4 wow fadeInDown">
                        <PricingCard
                            addclass="cs_pricing_table cs_style_1 cs_white_bg cs_radius_20"
                            name="Basic Plan"
                            content="Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et"
                            price="$129"
                            duration="/Par month"
                            featurelist={[
                                "Branding and design Identity",
                                "Web site Marketing Solutions",
                                "Unlimited Application Installation",
                                "24/7 system Monitoring",
                                "Dedicated IP Address",
                            ]}
                            btnname="get Started Now"
                            btnurl="/contact"
                        ></PricingCard>
                    </div>
                    
                    <div className="col-lg-4 wow fadeInDown" data-wow-delay="200ms">

                    <PricingCard
                            addclass="cs_pricing_table cs_style_1 cs_white_bg cs_radius_20 position-relative active"
                            name="Standard Plan"
                            content="Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et"
                            price="$250"
                            duration="/Par month"
                            featurelist={[
                                "Branding and design Identity",
                                "Web site Marketing Solutions",
                                "Unlimited Application Installation",
                                "24/7 system Monitoring",
                                "Dedicated IP Address",
                            ]}
                            btnname="get Started Now"
                            btnurl="/contact"
                        ></PricingCard>

                    </div>
                    <div className="col-lg-4 wow fadeInDown" data-wow-delay="400ms">

                    <PricingCard
                            addclass="cs_pricing_table cs_style_1 cs_white_bg cs_radius_20"
                            name="Premium Plan"
                            content="Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et"
                            price="$500"
                            duration="/Par month"
                            featurelist={[
                                "Branding and design Identity",
                                "Web site Marketing Solutions",
                                "Unlimited Application Installation",
                                "24/7 system Monitoring",
                                "Dedicated IP Address",
                            ]}
                            btnname="get Started Now"
                            btnurl="/contact"
                        ></PricingCard>

                    </div>
                    </div>
                </div>
                <div className={`cs_tab ${isActive === 'yearly' ? 'active' : ''}`} id="yearly">
                    <div className="row cs_row_gap_30 cs_gap_y_30">
                    <div className="col-lg-4">

                    <PricingCard
                            addclass="cs_pricing_table cs_style_1 cs_white_bg cs_radius_20"
                            name="Basic Plan"
                            content="Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et"
                            price="$450"
                            duration="/Par month"
                            featurelist={[
                                "Branding and design Identity",
                                "Web site Marketing Solutions",
                                "Unlimited Application Installation",
                                "24/7 system Monitoring",
                                "Dedicated IP Address",
                            ]}
                            btnname="get Started Now"
                            btnurl="/contact"
                        ></PricingCard>

                    </div>
                    <div className="col-lg-4">

                    <PricingCard
                            addclass="cs_pricing_table cs_style_1 cs_white_bg cs_radius_20 position-relative active"
                            name="Standard Plan"
                            content="Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et"
                            price="$250"
                            duration="/Par month"
                            featurelist={[
                                "Branding and design Identity",
                                "Web site Marketing Solutions",
                                "Unlimited Application Installation",
                                "24/7 system Monitoring",
                                "Dedicated IP Address",
                            ]}
                            btnname="get Started Now"
                            btnurl="/contact"
                        ></PricingCard>

                    </div>
                    <div className="col-lg-4">

                    <PricingCard
                            addclass="cs_pricing_table cs_style_1 cs_white_bg cs_radius_20"
                            name="Premium Plan"
                            content="Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et"
                            price="$500"
                            duration="/Par month"
                            featurelist={[
                                "Branding and design Identity",
                                "Web site Marketing Solutions",
                                "Unlimited Application Installation",
                                "24/7 system Monitoring",
                                "Dedicated IP Address",
                            ]}
                            btnname="get Started Now"
                            btnurl="/contact"
                        ></PricingCard>

                    </div>
                    </div>
                </div>
                </div>
                <div className="cs_pricing_shape_1 position-absolute">
                    <Image src="/assets/img/about_shape_3.svg" alt="img" width={98} height={98}   />
                </div>
                <div className="cs_pricing_shape_2 position-absolute">
                    <Image src="/assets/img/pricing_shape_1.svg" alt="img" width={35} height={37}   />
                </div>
                <div className="cs_pricing_shape_3 position-absolute">
                    <Image src="/assets/img/pricing_shape_2.svg" alt="img" width={37} height={37}   />
                </div>
                <div className="cs_pricing_shape_4 position-absolute">
                    <Image src="/assets/img/pricing_shape_3.svg" alt="img" width={158} height={157}   />
                </div>
            </div>
            <div className="cs_height_120 cs_height_lg_80"></div>
            </section>
    );
};

export default Pricing1;