"use client"
import { useEffect, useState, useRef } from 'react';
import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';
export default function Header4({ variant } : any ) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState<string>("");
  const prevScrollPosRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPosRef.current) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky('');
      }
      prevScrollPosRef.current = currentScrollPos; // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, []); // Empty dependency array - effect only runs once

  return (
    <div>
    <header
      className={`cs_site_header header_style_2 header_style_2_3 cs_style_1 header_sticky_style1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
    >
      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
            <Link className="cs_site_branding" href="/">
            <Image src="/assets/img/logo-3.png" alt="img" width={110} height={45}   />
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
                <div className="cs_social_btns cs_style_1" style={{marginLeft: '16px'}}>
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
                  <a href="https://wa.me/919266812465" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="cs_center cs_radius_50">
                    <i className="bi bi-whatsapp"></i>
                  </a>
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
