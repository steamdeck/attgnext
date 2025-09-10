"use client"
import React, { useState } from 'react';
import PricingCard2 from '../Card/PricingCard2';

const Pricing2 = () => {

     const [isActive, setIsActive] = useState('monthly');

    return (
        <section className="cs_tabs position-relative">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1 align-items-center">
            <div className="cs_section_heading_left">
              <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
                Pricing Plan<span className="cs_shape_right"></span>
              </p>
              <h2 className="cs_fs_48 cs_mb_28 text-capitalize wow fadeInUp">We’ve Offered the best <br/> pricing for you</h2>
            </div>
            <div className="cs_section_heading_right wow fadeInRight">
              <ul className="cs_tab_links cs_style_1 cs_fs_14 cs_mp_0">
                <li className={` ${isActive === 'monthly' ? 'active' : ''}`} onClick={() => setIsActive('monthly')} ><a href="#monthly" aria-label="Tab button">Monthly</a></li>
                <li className={` ${isActive === 'yearly' ? 'active' : ''}`} onClick={() => setIsActive('yearly')}><a href="#yearly" aria-label="Tab button">Yearly</a></li>
              </ul>
            </div>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="cs_tab_body">
            <div className={`cs_tab ${isActive === 'monthly' ? 'active' : ''}`} id="monthly">
              <div className="row cs_row_gap_30 cs_gap_y_30">

                <div className="col-lg-4 wow fadeInDown">

                <PricingCard2
                    addclass="cs_pricing_table cs_style_1 cs_type_1 cs_white_bg cs_radius_20 position-relative"
                    name="Basic Plan"
                    content1="Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et"
                    content2="Up to 10 users + 1.99 per user"
                    price="$149"
                    duration="Par month"
                    featurelist={[
                        "Branding and design Identity",
                        "Web site Marketing Solutions",
                        "Unlimited Application Installation",
                        "24/7 system Monitoring",
                        "Dedicated IP Address",
                    ]}
                    btnname="choose Plan"
                    btnurl="/contact"                    
                ></PricingCard2>

                </div>
                <div className="col-lg-4 wow fadeInDown" data-wow-delay="200ms">

                <PricingCard2
                    addclass="cs_pricing_table cs_style_1 cs_type_1 cs_white_bg cs_radius_20 position-relative active"
                    name="Most Popular"
                    content1="Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et"
                    content2="Up to 10 users + 1.99 per user"
                    price="$179"
                    duration="Par month"
                    featurelist={[
                        "Branding and design Identity",
                        "Web site Marketing Solutions",
                        "Unlimited Application Installation",
                        "24/7 system Monitoring",
                        "Dedicated IP Address",
                    ]}
                    btnname="choose Plan"
                    btnurl="/contact"                    
                ></PricingCard2>

                </div>
                <div className="col-lg-4 wow fadeInDown" data-wow-delay="400ms">

                <PricingCard2
                    addclass="cs_pricing_table cs_style_1 cs_type_1 cs_white_bg cs_radius_20 position-relative"
                    name="Premium Plan"
                    content1="Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et"
                    content2="Up to 10 users + 1.99 per user"
                    price="$199"
                    duration="Par month"
                    featurelist={[
                        "Branding and design Identity",
                        "Web site Marketing Solutions",
                        "Unlimited Application Installation",
                        "24/7 system Monitoring",
                        "Dedicated IP Address",
                    ]}
                    btnname="choose Plan"
                    btnurl="/contact"                    
                ></PricingCard2>

                </div>
              </div>
            </div>
            <div className={`cs_tab ${isActive === 'yearly' ? 'active' : ''}`} id="yearly">
              <div className="row cs_row_gap_30 cs_gap_y_30">
                <div className="col-lg-4">

                <PricingCard2
                    addclass="cs_pricing_table cs_style_1 cs_type_1 cs_white_bg cs_radius_20 position-relative"
                    name="Basic Plan"
                    content1="Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et"
                    content2="Up to 10 users + 1.99 per user"
                    price="$449"
                    duration="Par month"
                    featurelist={[
                        "Branding and design Identity",
                        "Web site Marketing Solutions",
                        "Unlimited Application Installation",
                        "24/7 system Monitoring",
                        "Dedicated IP Address",
                    ]}
                    btnname="choose Plan"
                    btnurl="/contact"                    
                ></PricingCard2>

                </div>
                <div className="col-lg-4">
                <PricingCard2
                    addclass="cs_pricing_table cs_style_1 cs_type_1 cs_white_bg cs_radius_20 position-relative active"
                    name="Most Popular"
                    content1="Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et"
                    content2="Up to 10 users + 1.99 per user"
                    price="$579"
                    duration="Par month"
                    featurelist={[
                        "Branding and design Identity",
                        "Web site Marketing Solutions",
                        "Unlimited Application Installation",
                        "24/7 system Monitoring",
                        "Dedicated IP Address",
                    ]}
                    btnname="choose Plan"
                    btnurl="/contact"                    
                ></PricingCard2>

                </div>
                <div className="col-lg-4">
                <PricingCard2
                    addclass="cs_pricing_table cs_style_1 cs_type_1 cs_white_bg cs_radius_20 position-relative"
                    name="Premium Plan"
                    content1="Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et"
                    content2="Up to 10 users + 1.99 per user"
                    price="$699"
                    duration="Par month"
                    featurelist={[
                        "Branding and design Identity",
                        "Web site Marketing Solutions",
                        "Unlimited Application Installation",
                        "24/7 system Monitoring",
                        "Dedicated IP Address",
                    ]}
                    btnname="choose Plan"
                    btnurl="/contact"                    
                ></PricingCard2>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default Pricing2;