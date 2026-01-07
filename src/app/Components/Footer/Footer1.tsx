import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer1 = () => {
    return (
<footer className="cs_footer cs_style_1 cs_bg_filed cs_heading_bg position-relative" data-src="assets/img/footer_bg_1.jpg">
      <div className="cs_footer_top position-relative z-1">
        <div className="container-fluid">
          <div className="cs_footer_content">
            <div className="cs_footer_top_content">
              <div className="wow fadeInLeft">Lets talk!</div>
              <Link href="/contact" className="cs_footer_top_img cs_radius_50 wow zoomIn">
              <Image src="https://4.imimg.com/data4/VN/FN/MY-3117232/laid-natural-white-paper.jpg" alt="img" width={128} height={128}   />
                <span className="cs_center">
                  <Image src="/assets/img/icons/arrow_right_2.svg" alt="img" width={54} height={56}   />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_main_footer cs_white_color_2 position-relative z-1">
        <div className="container-fluid">
          <div className="cs_footer_content cs_footer_row">
            <div className="cs_footer_widget cs_footer_text">
              <div className="cs_text_widget">
                <Image src="/assets/img/Untitled_design-removebg-preview.png" className="cs_mb_30 wow zoomIn" alt="img" width={110} height={38}   />
                <p className="cs_mb_37">AT Tech Global delivers digital solutions in web, app development, and marketing.</p>
              </div>
              <div className="cs_social_btns cs_style_1">
                <a href="https://www.facebook.com/attechglobal" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="cs_center cs_radius_50">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/in/attechglobal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="cs_center cs_radius_50">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/at_tech_global/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="cs_center cs_radius_50">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.threads.com/@at_tech_global" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="cs_center cs_radius_50">
                  <i className="bi bi-at"></i>
                </a>
                <a href="https://wa.me/447469369962" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="cs_center cs_radius_50">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
            <div className="cs_footer_links_wrapper">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_27 position-relative">Quick Links</h2>
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
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_27 position-relative">Our Services</h2>
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
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_27 position-relative">Contact Us</h2>
                <p className="cs_mb_24">IIIrd Floor, Block B, Ansal Corporate Plaza, T-444, Carterpuri Rd, Block C 2, Palam Vihar, Gurugram, Haryana 122017</p>
                <h3 className="cs_fs_16 cs_white_color cs_mb_10">Phone Call:</h3>
                <ul className="cs_footer_contact_list cs_mp_0">
                  <li>
                    <a href="tel:+447469369962" aria-label="Phone call link">+44 7469 369962</a>
                  </li>
                
                </ul>
              </div>
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_27 position-relative">Newsletter</h2>
                <p className="cs_mb_27">Sign up to seargin weekly newsletter to get the latest updates.</p>
                <div className="cs_footer_newsletter cs_style_1">
                  <form action="#" className="cs_footer_newsletter_form cs_radius_8">
                    <input type="text" placeholder="Enter Email Address" />
                    <button aria-label="Subscribe button" className="cs_btn cs_style_1 cs_center">
                    <span><i className="bi bi-send"></i></span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_white_color_2 position-relative z-1">
        <div className="container-fluid">
          <div className="cs_footer_bottom_in cs_footer_content">
            <div className="cs_footer_copyright">&copy; All Copyright 2025 by <a href="#" aria-label="Site link">AT Tech Global</a></div>
            <div>
              <ul className="cs_footer_menu cs_mp_0">
                <li><Link href="/terms-and-conditions" aria-label="Footer link">Terms & Conditions</Link></li>
                <li><Link href="/privacy-policy" aria-label="Footer link">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_shape_1 position-absolute">
        <Image src="/assets/img/footer_shape_1.svg" alt="img" width={148} height={556}   />
      </div>
      <div className="cs_footer_shape_2 position-absolute">
        <Image src="/assets/img/footer_shape_1.svg" alt="img" width={148} height={556}   />
      </div>
    </footer>
    );
};

export default Footer1;