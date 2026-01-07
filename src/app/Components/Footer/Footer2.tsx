"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';
import Image from 'next/image';

const Footer2 = () => {

        useEffect(() => {
            // Only run on client side after component mounts
            if (typeof window !== 'undefined') {
                loadBackgroudImages();
            }
        }, []);

    return (
        <footer className="cs_footer cs_style_1 cs_type_1 cs_bg_filed cs_heading_bg" data-background="/assets/img/footer_bg_3.jpg">
        <div className="container">
          <div className="cs_footer_top">
            <div className="cs_footer_top_content_list">
              <div className="cs_brand wow zoomIn">
                 <Image src="/assets/img/logo-3.png" alt="img" width={110} height={38}   />
              </div>
              <div className="cs_iconbox_wrapper">
                <div className="cs_iconbox cs_style_4">
                  <span className="cs_iconbox_icon cs_center cs_white_bg cs_accent_color cs_radius_50">
                  <i className="bi bi-geo-alt-fill"></i>
                  </span>
                  <div className="cs_iconbox_info">
                    <p className="cs_iconbox_subtitle cs_fs_14 cs_white_color_2 cs_mb_1">Office location</p>
                    <p className="cs_iconbox_title cs_fs_20 cs_bold cs_white_color mb-0">IIIrd Floor, Block B, Ansal Corporate Plaza, T-444, Carterpuri Rd, Block C 2, Palam Vihar, Gurugram, Haryana 122017</p>
                  </div>
                </div>
                <div className="cs_iconbox cs_style_4">
                  <span className="cs_iconbox_icon cs_center cs_white_bg cs_accent_color cs_radius_50">
                  <i className="bi bi-envelope-fill"></i>
                  </span>
                  <div className="cs_iconbox_info">
                    <p className="cs_iconbox_subtitle cs_fs_14 cs_white_color_2 cs_mb_1">send email</p>
                    <a href="mailto:info@attechglobal.com" aria-label="Send email link" className="cs_iconbox_title cs_fs_20 cs_bold cs_white_color">info@attechglobal.com</a>
                  </div>
                </div>
                <div className="cs_iconbox cs_style_4">
                  <span className="cs_iconbox_icon cs_center cs_white_bg cs_accent_color cs_radius_50">
                  <i className="bi bi-telephone-fill"></i>
                  </span>
                  <div className="cs_iconbox_info">
                    <p className="cs_iconbox_subtitle cs_fs_14 cs_white_color_2 cs_mb_1">call emergency</p>
                    <a href="tel:+447469369962" aria-label="Phone call button" className="cs_iconbox_title cs_fs_20 cs_bold cs_white_color">+44 7469 369962</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_main_footer cs_white_color_2">
            <div className="cs_footer_row">
              <div className="cs_footer_widget cs_footer_text">
                <div className="cs_text_widget">
                  <h2 className="cs_footer_widget_title cs_fs_18 cs_semibold cs_white_color cs_mb_27 position-relative">About Company</h2>
                  <p className="cs_mb_30">Nullam interdum libero vitae pretium aliquam donec nibh purus laoreet in ullamcorper vel malesuada sit amet enim.</p>
                </div>
                <div className="cs_social_btns cs_style_1">
                <a href="#" aria-label="Social link" className="cs_center cs_radius_50">
                <i className="bi bi-facebook"></i>
                </a>
                <a href="#" aria-label="Social link" className="cs_center cs_radius_50">
                <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#" aria-label="Social link" className="cs_center cs_radius_50">
                <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" aria-label="Social link" className="cs_center cs_radius_50">
                <i className="bi bi-instagram"></i>
                </a>
                </div>
              </div>
              <div className="cs_footer_links_wrapper">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_18 cs_semibold cs_white_color cs_mb_27 position-relative">Quick Links</h2>
                  <ul className="cs_footer_menu cs_mp_0">
                  <li><Link href="/about" aria-label="Page link">About AT Tech Global</Link></li>
                  <li><Link href="/service" aria-label="Page link">Our Services</Link></li>
                  <li><Link href="/project" aria-label="Page link">Projects</Link></li>
                  <li><Link href="/blog" aria-label="Page link">Blog</Link></li>
                  <li><Link href="/faq" aria-label="Page link">FAQ</Link></li>
                  <li><Link href="/contact" aria-label="Page link">Contact Us</Link></li>
                  </ul>
                </div>
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_18 cs_semibold cs_white_color cs_mb_27 position-relative">Our Services</h2>
                  <ul className="cs_footer_menu cs_mp_0">
                    <li><Link href="/service/digital-marketing" aria-label="Page link">Digital Marketing</Link></li>
                    <li><Link href="/service/seo" aria-label="Page link">SEO Services</Link></li>
                    <li><Link href="/service/web-development" aria-label="Page link">Web Development</Link></li>
                    <li><Link href="/service/mobile-application" aria-label="Page link">Mobile Application</Link></li>
                    <li><Link href="/service/ppc" aria-label="Page link">PPC Advertising</Link></li>
                    <li><Link href="/service/smm" aria-label="Page link">Social Media Marketing</Link></li>
                    <li><Link href="/service/email-marketing" aria-label="Page link">Email Marketing</Link></li>
                  </ul>
                </div>
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_18 cs_semibold cs_white_color cs_mb_27 position-relative">Instagram</h2>
                  <div className="cs_img_gallery">
                    <a href="https://www.instagram.com/" target="_blank" aria-label="Click to visit instagram" className="cs_instagram_thumb cs_center cs_radius_10">
                    <Image src="/assets/img/instagram_img_1.jpg" alt="img" width={81} height={81}   />
                    <span className="cs_instagram_icon cs_center cs_white_color position-absolute">
                    <i className="bi bi-instagram"></i></span>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" aria-label="Click to visit instagram" className="cs_instagram_thumb cs_center cs_radius_10">
                    <Image src="/assets/img/instagram_img_2.jpg" alt="img" width={81} height={81}   />
                    <span className="cs_instagram_icon cs_center cs_white_color position-absolute">
                    <i className="bi bi-instagram"></i></span>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" aria-label="Click to visit instagram" className="cs_instagram_thumb cs_center cs_radius_10">
                    <Image src="/assets/img/instagram_img_3.jpg" alt="img" width={81} height={81}   />
                    <span className="cs_instagram_icon cs_center cs_white_color position-absolute">
                    <i className="bi bi-instagram"></i></span>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" aria-label="Click to visit instagram" className="cs_instagram_thumb cs_center cs_radius_10">
                    <Image src="/assets/img/instagram_img_4.jpg" alt="img" width={81} height={81}   />
                    <span className="cs_instagram_icon cs_center cs_white_color position-absolute">
                    <i className="bi bi-instagram"></i></span>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" aria-label="Click to visit instagram" className="cs_instagram_thumb cs_center cs_radius_10">
                      <Image src="/assets/img/instagram_img_5.jpg" alt="img" width={81} height={81}   />
                    <span className="cs_instagram_icon cs_center cs_white_color position-absolute">
                    <i className="bi bi-instagram"></i></span>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" aria-label="Click to visit instagram" className="cs_instagram_thumb cs_center cs_radius_10">
                      <Image src="/assets/img/instagram_img_6.jpg" alt="img" width={81} height={81}   />
                    <span className="cs_instagram_icon cs_center cs_white_color position-absolute">
                    <i className="bi bi-instagram"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_footer_bottom cs_white_color_2">
            <div className="container-fluid">
              <div className="cs_footer_bottom_in cs_footer_content">
                <div className="cs_footer_copyright">&copy; All Copyright 2025 by
                  <a href="#" aria-label="Site link"> AT Tech Global</a>
                </div>
                <div>
                  <ul className="cs_footer_menu cs_mp_0">
                    <li><Link href="/terms-and-conditions" aria-label="Footer link">Terms & Conditions</Link></li>
                    <li><Link href="/privacy-policy" aria-label="Footer link">Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer2;