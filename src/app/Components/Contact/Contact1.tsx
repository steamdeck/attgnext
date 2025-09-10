import Image from 'next/image';
import React from 'react';

const Contact1 = () => {
    return (
<section className="position-relative overflow-hidden">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container position-relative">
        <div className="row cs_gap_y_40">
          <div className="col-lg-6 order-lg-2">
            <div className="cs_contact_thumbnail wow fadeInRight">
               <Image src="/assets/img/contact_img_1.png" alt="img" width={699} height={632}   />
              <div className="cs_contact_ellipse_1 position-absolute z-0"></div>
              <div className="cs_contact_ellipse_2 position-absolute z-0"></div>
              <div className="cs_contact_ellipse_3 position-absolute z-0"></div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1 position-relative z-2">
            <div className="cs_contact_info_wrapper">
            <div className="cs_section_heading cs_style_1">
              <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">Get In Touch Now<span className="cs_shape_right"></span>
              </p>
              <h2 className="cs_fs_48 cs_mb_20 wow fadeInUp">Feel Free To Contact Us</h2>
              <p className="cs_section_heading_text mb-0 wow fadeInUp" data-wow-delay="200ms">Our comprehensive suite of digital marketing services </p>
            </div>
            <div className="cs_height_32 cs_height_lg_30"></div>
            <form className="cs_contact_form row cs_row_gap_30 cs_gap_y_24 position-relative z-2">
              <div className="col-md-6">
                <input type="text" name="name" className="cs_form_field cs_radius_8" placeholder="Full name" />
              </div>
              <div className="col-md-6">
                <input type="email" name="email" className="cs_form_field cs_radius_8" placeholder="Email Address" />
              </div>
              <div className="col-md-12">
                <select name="service" className="cs_form_field cs_custom_select cs_radius_8">
                  <option value="choose-service">Type Of Service</option>
                  <option value="uiux-design">UI/UX Design</option>
                  <option value="graphics_design">Graphics Design</option>
                  <option value="photography">Photography</option>
                  <option value="web-dev">Web Development</option>
                  <option value="app-dev">App Development</option>
                </select>
              </div>
              <div className="col-md-12">
                <textarea name="message" rows={3} className="cs_form_field cs_radius_8" placeholder="Write Your Message"></textarea>
              </div>
              <div className="col-md-12">
                <button type="submit" aria-label="Submit button" className="cs_btn cs_style_1 cs_fs_14 cs_semibold cs_white_color text-uppercase"><span>Submit now</span></button>
              </div>
            </form>
            </div>
            <div className="cs_height_120 cs_height_lg_80"></div>
          </div>
        </div>
        </div>
        <div className="cs_contact_shape_1 position-absolute z-0">
          <Image src="/assets/img/contact_shape_1.svg" alt="img" width={219} height={573}   />
        </div>
        <div className="cs_contact_shape_3 position-absolute z-0">
          <Image src="/assets/img/star_shape_1.svg" alt="img" width={26} height={37}   />
        </div>
        <div className="cs_contact_shape_4 position-absolute z-0">
          <Image src="/assets/img/star_shape_1.svg" alt="img" width={26} height={37}   />
        </div>
        <div className="cs_contact_shape_5 position-absolute z-0">
          <Image src="/assets/img/star_shape_1.svg" alt="img" width={26} height={37}   />
        </div>
        <div className="cs_contact_shape_6 position-absolute z-0">
          <Image src="/assets/img/star_shape_1.svg" alt="img" width={26} height={37}   />
        </div>
        <div className="cs_contact_shape_7 position-absolute z-0">
          <Image src="/assets/img/star_shape_1.svg" alt="img" width={26} height={37}   />
        </div>
        <div className="cs_contact_shape_8 position-absolute z-0">
          <Image src="/assets/img/circle_1.svg" alt="img" width={93} height={93}   />
        </div>
        <div className="cs_contact_shape_9 position-absolute z-0">
          <Image src="/assets/img/circle_1.svg" alt="img" width={93} height={93}   />
        </div>
    </section>
    );
};

export default Contact1;