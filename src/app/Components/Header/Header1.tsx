"use client"
import { useEffect, useState, useCallback } from 'react';
import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';

export default function Header1({ variant } : any ) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState<string>("");
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
      setIsSticky('cs-gescout_sticky'); // Scrolling down
    } else if (currentScrollPos !== 0) {
      setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
    } else {
      setIsSticky('');
    }
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    let ticking = false;
    
    const optimizedScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

    return () => {
      window.removeEventListener('scroll', optimizedScrollHandler);
    };
  }, [handleScroll]);

  return (
    <div>
    <header
      className={`cs_site_header header_style_2 header_style_2_0 cs_style_1 header_sticky_style1 ${
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
            <Image src="/assets/img/logo-3.png" alt="img" width={110} height={450}   />
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
