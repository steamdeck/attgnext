import Image from 'next/image';
import React from 'react';

const Contact3 = () => {
    return (
        <div>
  <div className="cs_height_120 cs_height_lg_80"></div>
    <div className="container-fluid">
      <div className="cs_contact_content">
        <div className="row cs_gap_y_30">
          <div className="col-xl-5 col-lg-6 wow fadeInLeft">
            <div className="cs_contact_desc cs_radius_30">
              <p className="cs_location_subtitle cs_fs_14 cs_bold cs_blue_color text-uppercase mb-0">
                <span></span> Work With Us
              </p>
              <h2 className="cs_location_title cs_fs_36 cs_semibold cs_mb_13">Let’s working together</h2>
              <p className="cs_contact_text cs_mb_22">Thank you for your interest in Attach Web Agency. We are excited to hear from you and discuss...</p>
              <ul className="cs_contact_info_list cs_type_1 cs_mp_0">
                <li>
                  <div className="cs_iconbox cs_style_6">
                    <span className="cs_iconbox_icon cs_center cs_radius_50 position-relative">
                      <Image src="/assets/img/icons/head_phone.svg" alt="img" width={26} height={27}   />
                    </span>
                    <div className="cs_iconbox_info">
                      <p className="cs_mb_1">Call Us For Query</p>
                      <a href="tel:+919266812465" aria-label="Phone call button">+91 92668 12465</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="cs_iconbox cs_style_6">
                    <span className="cs_iconbox_icon cs_center cs_radius_50 position-relative">
                      <Image src="/assets/img/icons/email_2.svg" alt="img" width={26} height={27}   />
                    </span>
                    <div className="cs_iconbox_info">
                      <p className="cs_mb_1">Email Anytime</p>
                      <a href="mailTo:info@attechglobal.com" aria-label="Click to send email">info@attechglobal.com</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="cs_iconbox cs_style_6">
                    <span className="cs_iconbox_icon cs_center cs_radius_50 position-relative">
                      <Image src="/assets/img/icons/location.svg" alt="img" width={26} height={27}   />
                    </span>
                    <div className="cs_iconbox_info">
                      <p className="cs_mb_1">Visit Our Office</p>
                      <p className="cs_fs_18 cs_semibold cs_heading_color mb-0">15 Maniel Lane, Front Line Berlin</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="cs_contact_form_wrapper cs_type_2 cs_radius_30">
              <form className="cs_contact_form cs_type_2 row cs_gap_y_20">
                <div className="col-md-6">
                  <input type="text" name="name" className="cs_form_field cs_radius_8 cs_gray_bg_1" placeholder="Your name*" required />
                </div>
                <div className="col-md-6">
                  <input type="email" name="email" className="cs_form_field cs_radius_8 cs_gray_bg_1" placeholder="Email address*" required />
                </div>
                <div className="col-md-6">
                  <input type="text" name="phone" className="cs_form_field cs_radius_8 cs_gray_bg_1" placeholder="Phone number*" required />
                </div>
                <div className="col-md-6">
                  <input type="text" name="service" className="cs_form_field cs_radius_8 cs_gray_bg_1" placeholder="Select service*" required />
                </div>
                <div className="col-md-12">
                  <textarea name="message" rows={7} className="cs_form_field cs_radius_20 cs_gray_bg_1" placeholder="Write a message*" required></textarea>
                </div>
                <div className="col-md-12">
                  <button type="submit" aria-label="Submit button" className="cs_btn cs_style_1 cs_fs_14 cs_semibold cs_white_color text-capitalize wow fadeInUp"><span>Submit Message</span></button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_80"></div>
        <div className="cs_location_map cs_radius_30 wow fadeInDown">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.26002815957!2d-74.14431223360049!3d40.69728463486588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1738564592874!5m2!1sen!2sbd"  loading="lazy"></iframe>
        </div>
      </div>
    </div>
    <div className="cs_height_120 cs_height_lg_80"></div>           
        </div>
    );
};

export default Contact3;