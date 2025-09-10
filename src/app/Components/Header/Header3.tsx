"use client"
import { useEffect, useState } from 'react';
import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';
export default function Header3({ variant } : any ) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState<string>("");
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky('');
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  return (
    <div>
    <header
      className={`cs_site_header header_style_2 header_style_2_2 cs_style_1 header_sticky_style1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
    >

<div className="cs_top_header">
        <div className="container">
          <div className="cs_top_header_in">
            <div className="cs_top_header_left header-info">
            <ul className="cs_header_contact_list cs_mp_0 cs_white_color">
                <li>
                <i className="bi bi-envelope-fill"></i>
                  <a href="mailto:info@attechglobal.com" aria-label="Email link">info@attechglobal.com</a>
                </li>
                <li>
                <i className="bi bi-telephone-fill"></i>
                  <a href="tel:+919266812465" aria-label="Phone call link">+91 92668 12465</a>
                </li>
                <li>
                <i className="bi bi-geo-alt-fill"></i>
                  Palam Vihar, Gurugram, New Delhi, India
                </li>
              </ul>
            </div>
            <div className="cs_top_header_right">
            <div className="cs_header_social_links_wrap">
                <div className="cs_header_social_links top-header-social-icon">
                    <div className="cs_social_btns cs_style_1">
                    <a href="#" aria-label="Social link" className="cs_center">
                    <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="#" aria-label="Social link" className="cs_center">
                    <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" aria-label="Social link" className="cs_center">
                    <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" aria-label="Social link" className="cs_center">
                    <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 

      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
            <Link className="cs_site_branding" href="/">
                <Image src="/assets/img/logo-3.png" alt="img" width={160} height={45}   />
              </Link>
              </div>
              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
            </div>
            <div className="cs_main_header_right">
              <div className="header-btn d-flex align-items-center">
                <div className="main-button">
                <Link href="/contact" className='cs_btn cs_style_1 cs_fs_14 text-uppercase'>
                <span> Lets Talk </span></Link>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    </div>

  );
}
