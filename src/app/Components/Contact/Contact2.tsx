import Image from 'next/image';
import React from 'react';

const Contact2 = () => {
    return (
        <section className="cs_gray_bg_1 position-relative">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_contact_thumbnail_2 z-0">
            <Image src="/assets/img/contact_img_2.jpg" alt="img" width={717} height={576}   />
          </div>
          <div className="row cs_gap_y_30 position-relative z-1">
            <div className="col-lg-5">
              <div className="cs_section_heading cs_style_1">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">Let’s Contact<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 mb-0 wow fadeInUp">Let’s Discuss About the Project</h2>
              </div>
              <div className="cs_height_60 cs_height_lg_50"></div>
              <ul className="cs_contact_info_list cs_mp_0">
                <li>
                  <div className="cs_iconbox cs_style_3 wow fadeInDown">
                    <span className="cs_iconbox_icon cs_center cs_white_color cs_radius_50">
                    <i className="bi bi-telephone-fill"></i>
                    </span>
                    <div className="cs_iconbox_info">
                      <a href="tel:+919266812465" aria-label="Phone call button">+91 92668 12465</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="cs_iconbox cs_style_3 wow fadeInDown" data-wow-delay="200ms">
                    <span className="cs_iconbox_icon cs_center cs_white_color cs_radius_50">
                    <i className="bi bi-envelope-fill"></i>
                    </span>
                    <div className="cs_iconbox_info">
                      <a href="mailto:info@attechglobal.com" aria-label="Click to send email">info@attechglobal.com</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="cs_iconbox cs_style_3 wow fadeInDown" data-wow-delay="400ms">
                    <span className="cs_iconbox_icon cs_center cs_white_color cs_radius_50">
                    <i className="bi bi-geo-alt-fill"></i>
                    </span>
                    <div className="cs_iconbox_info">
                      <p className="mb-0">IIIrd Floor, Block B, Ansal Corporate Plaza, T-444, Carterpuri Rd, Block C 2, Palam Vihar, Gurugram, Haryana 122017</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-7 offset-xl-1">
              <div className="cs_contact_form_wrapper cs_white_bg cs_radius_15">
                <h2 className="cs_fs_30">How May We Help You!</h2>
                <form className="cs_contact_form cs_type_1 row cs_row_gap_20 cs_gap_y_16">
                  <div className="col-md-6">
                    <label htmlFor="name">Full name*</label>
                    <input type="text" name="name" id="name" className="cs_form_field cs_radius_8 cs_gray_bg_1" placeholder="Full name" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email">Email Address*</label>
                    <input type="email" name="email" id="email" className="cs_form_field cs_radius_8 cs_gray_bg_1" placeholder="Email Address" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="service">Type Of Service*</label>
                    <select name="service" id="service" className="cs_form_field cs_radius_8 cs_gray_bg_1 cs_custom_select">
                      <option value="choose-service">Type Of Service</option>
                      <option value="uiux-design">UI/UX Design</option>
                      <option value="graphics-design">Graphics Design</option>
                      <option value="email-marketing">Email Marketing</option>
                      <option value="whatsapp-marketing">Whatsapp Marketing</option>
                      <option value="sms-marketing">SMS Marketing</option>
                      <option value="social-media-management">Social Media Management</option>
                      <option value="website-promotion">Website Promotion</option>
                      <option value="seo">SEO</option>
                      <option value="web-dev">Web Development</option>
                      <option value="app-dev">App Development</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="date">Select Date*</label>
                    <input type="date" name="date" id="date" className="cs_form_field cs_radius_8 cs_gray_bg_1" /> 
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="message">Message*</label>
                    <textarea name="message" rows={4} id="message" className="cs_form_field cs_radius_8 cs_gray_bg_1" placeholder="Write Your Message"></textarea>
                  </div>
                  <div className="col-md-12">
                    <button type="submit" aria-label="Submit button" className="cs_btn cs_style_1 cs_fs_14 cs_semibold cs_white_color text-uppercase wow fadeInUp"><span>Submit now</span></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="cs_contact_shape_8 position-absolute z-0">
           <Image src="/assets/img/circle_1.svg" alt="img" width={93} height={93}   />
          </div>
          <div className="cs_contact_shape_9 position-absolute z-0">
            <Image src="/assets/img/circle_1.svg" alt="img" width={93} height={93}   />
          </div>
        </div>

        <div className="cs_text_slider position-relative">
          <div className="cs_horizontal_slider_wrapper">
            <div className="cs_horizontal_slider_in">
              <div className="cs_brands_list cs_type_3">AT Tech Global Services</div>
              <div className="cs_brands_list cs_type_3">AT Tech Global Services</div>
            </div>
          </div>
        </div>

        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default Contact2;