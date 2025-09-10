"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Image from 'next/image';
import Link from 'next/link';

const Brand3 = () => {

    const chooseContent = [
        {img:'/assets/img/brand_11.svg'},
        {img:'/assets/img/brand_12.svg'},
        {img:'/assets/img/brand_13.svg'},
        {img:'/assets/img/brand_14.svg'},
        {img:'/assets/img/brand_15.svg'},                
        {img:'/assets/img/brand_16.svg'},                
        {img:'/assets/img/brand_17.svg'},                
        {img:'/assets/img/brand_18.svg'},                
      ]; 

          useEffect(() => {
              loadBackgroudImages();
          }, []);

    return (
        <section className="cs_about cs_style_2 cs_gray_bg_1 position-relative overflow-hidden">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          
          <div className="cs_center cs_mb_30">
            <p className="cs_section_subtitle cs_fs_24 cs_heading_color mb-0 wow fadeInDown">Trusted Partners</p>
          </div>
          <div className="cs_horizontal_slider_wrapper p-0">
            <div className="cs_horizontal_slider_in">
              <div className="cs_brands_list cs_type_4">
              {chooseContent.map((item, i) => (
                <div key={i} className="cs_brand">
                  <img src={item.img} alt="Brand logo" />
                </div>
            ))}

              </div>
              <div className="cs_brands_list cs_type_4">

              {chooseContent.map((item, i) => (
                <div key={i} className="cs_brand">
                  <img src={item.img} alt="Brand logo" />
                </div>
            ))}

              </div>
            </div>
          </div>
          <div className="cs_height_120 cs_height_lg_80"></div>
         
          <div className="row cs_gap_y_40 position-relative z-1">
            <div className="col-xl-6 wow fadeInLeft">
              <div className="cs_about_thumbnail_wrapper cs_full_screen_left position-relative" data-background="/assets/img/about_bg.png">
                <div className="cs_about_thumbnail">
                  <Image src="/assets/img/about_img_4.png" alt="img" width={738} height={669}   />
                </div>
                <div className="cs_userbox cs_white_bg cs_radius_10 position-absolute">
                  <h3 className="cs_fs_36 cs_mb_2">10k+</h3>
                  <p className="cs_fs_24 cs_medium mb-0">Active User</p>
                </div>
                <div className="cs_sales_report position-absolute">
                  <Image src="/assets/img/sales_report.png" alt="img" width={198} height={167}   />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="cs_about_text_wrapper cs_full_screen_right">
                <div className="cs_about_text">
                  <div className="cs_section_heading cs_style_1 cs_mb_34">
                    <p className="cs_section_subtitle cs_fs-18 cs_medium cs_accent_color wow fadeInDown">
                      About Our Company<span className="cs_shape_right"></span>
                    </p>
                    <h2 className="cs_fs_48 mb-0 wow fadeInUp">Empower Your Business With Innovation</h2>
                  </div>
                  <p className="cs_mb_32">There are many variations of passages of Lorem available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going</p>
                  <div className="cs_features_wrapper">
                    <div className="cs_iconbox cs_style_1">
                      <span className="cs_iconbox_icon cs_center cs_blue_bg cs_radius_50">
                        <Image src="/assets/img/icons/react.svg" alt="img" width={24} height={24}   />
                      </span>
                      <div className="cs_iconbox_info">
                        <h3 className="cs_fs_16 cs_semibold cs_mb_4">Successful marketing campaigns</h3>
                      </div>
                    </div>
                    <div className="cs_iconbox cs_style_1">
                      <span className="cs_iconbox_icon cs_center cs_blue_bg cs_radius_50">
                        <Image src="/assets/img/icons/technology.svg" alt="img" width={24} height={24}   />
                      </span>
                      <div className="cs_iconbox_info">
                        <h3 className="cs_fs_16 cs_semibold cs_mb_4">Average increase in website traffic</h3>
                      </div>
                    </div>
                  </div>
                  <div className="cs_quote_text">
                    <Image src="/assets/img/icons/quote_3.svg" alt="img" width={25} height={18}   />
                    <blockquote>let’s get in touch and have discussion the solution we offer </blockquote>
                  </div>
                  <div className="cs_btn_group">
                    <Link href="/about" aria-label="Click to visit about us page" className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase wow fadeInLeft"><span>MORE ABOUT US</span></Link>
                    <div className="cs_avatar cs_style_1 wow fadeInRight">
                      <div className="cs_avatar_icon cs_radius_50">
                        <Image src="/assets/img/avatar_6.jpg" alt="img" width={60} height={58}   />
                      </div>
                      <div className="cs_avatar_info">
                        <h3 className="cs_fs_20 cs_medium mb-0">Ronald Richards</h3>
                        <p className="mb-0">Co, Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_about_shape_1 position-absolute">
          </div>
          <div className="cs_about_shape_2 position-absolute">
          </div>
          <div className="cs_about_shape_3 position-absolute">
            <Image src="/assets/img/user_desk.png" alt="img" width={210} height={214}   />
          </div>
        </div>
      </section>
    );
};

export default Brand3;