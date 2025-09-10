"use client"
import React, { useEffect, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import VideoModal from '../VideoModal/VideoModal';
import Link from 'next/link';
import Image from 'next/image';

const HeroBanner1 = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    const [iframeSrc, setIframeSrc] = useState('about:blank');
    const [toggle, setToggle] = useState(false);
  
    const handelClick = () => {
      setIframeSrc("https://www.youtube.com/embed/HC-tgFdIcB0");
      setToggle(!toggle);
    };
    const handelClose = () => {
      setIframeSrc('about:blank');
      setToggle(!toggle);
    };   

    return (
        <section className="cs_hero cs_style_1 cs_bg_filled position-relative" data-background="/assets/img/hero_bg_1.jpg">
        <div className="container">
          <div className="cs_hero_content">
            <div className="cs_hero_thumbnail wow fadeInLeft">
              <Image src="/assets/img/hero_img_1.jpg" alt="img" width={916} height={473}   />
              <span className="position-absolute">
                <svg width="83" height="96" viewBox="0 0 83 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.9704 1.64006C19.3977 4.70328 10.4726 11.8488 5.15838 21.5047C-0.155859 31.1606 -1.42395 42.5361 1.63307 53.1287C3.75858 60.5162 7.89482 67.1651 13.5786 72.3307L10.8044 96L34.176 82.4964C40.4542 83.6367 46.9108 83.3022 53.038 81.5192C58.2733 80.0012 63.1589 77.4649 67.4157 74.055C71.6726 70.6452 75.2173 66.4287 77.8476 61.6463C80.4778 56.8638 82.142 51.6092 82.7451 46.1823C83.3482 40.7555 82.8785 35.2628 81.3626 30.0178C79.8489 24.7732 77.3186 19.8787 73.9164 15.614C70.5142 11.3493 66.3067 7.79784 61.5342 5.16259C56.7618 2.52734 51.5179 0.859898 46.1021 0.255493C40.6863 -0.348912 35.2047 0.121562 29.9704 1.64006Z" fill="#FF4782"/>
                  <path d="M64.872 30.9841C62.5604 26.1256 56.7373 22.7043 51.1036 24.4722C45.0658 26.3673 42.7542 33.4643 42.5016 34.2782V35.2067C42.5016 34.9015 42.5016 34.5835 42.5016 34.2782C42.2489 33.4643 39.9753 26.3673 33.8995 24.4722C28.2659 22.7043 22.4428 26.1256 20.1312 30.9841C15.9123 39.8872 24.7796 50.8506 25.7901 52.097C27.8591 54.6373 30.413 56.734 33.3007 58.2632C36.1885 59.7924 39.3515 60.723 42.6026 61H42.7795H43.0068C49.3665 60.2873 55.1947 57.0906 59.2383 52.097C60.1857 50.7743 69.0909 39.849 64.872 30.9841Z" fill="white"/>
                </svg>
              </span>
            </div>
            <div className="cs_hero_text position-relative">
              <div className="cs_hero_shape_1 position-absolute">
                <Image src="/assets/img/star_shape.svg" alt="img" width={35} height={39}   />
              </div>
              <p className="cs_hero_subtitle cs_accent_color cs_semibold">Best Of Your Growth, Our Mission</p>
              <h1 className="cs_hero_title cs_extra_bold wow fadeInDown">Digital  Marketing <span className="cs_accent_color cs_semibold">Solutions.</span></h1>
              <div className="cs_hero_text_wrapper">
                <p className="cs_hero_text cs_medium wow fadeInRight">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even</p>
                <div className="cs_hero_feature_wrapper">
                  <Link href="/about" className="cs_totating_logo cs_heading_bg cs_radius_50 position-relative wow zoomIn">
                  <Image src="/assets/img/circular_text.svg" alt="img" width={94} height={94}   />
                    <div className="cs_logo_arrow cs_center">
                      <Image src="/assets/img/icons/arrow_right.svg" alt="img" width={23} height={23}   />
                    </div>
                  </Link>
                  <div className="cs_sales_info_wrapper cs_heading_color">
                    <Image src="/assets/img/icons/growth_balance.svg" alt="img" width={40} height={40}   />
                    <div className="cs_sales_info">
                      <h3 className="cs_fs_20 mb-0">85%</h3>
                      <p className="cs_fs_14 mb-0">Sales Growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_hero_sidebar">
            <div className="cs_top_content">
              <div className="cs_clients_info">
                <a onClick={handelClick} aria-label="Play video button" className="cs_video cs_style_1 cs_video_open cs_center cs_radius_50 cs_mb_20 wow zoomIn">
                  <Image src="/assets/img/video_bg_1.jpg" alt="img" className="cs_video_bg" width={120} height={120}   />
                  <Image src="/assets/img/icons/player_1.svg" alt="img" className="position-relative z-1" width={34} height={34}   />
                </a>
                <div className="cs_clients_heading cs_mb_10">
                  <Image src="/assets/img/icons/user_1.svg" alt="img" width={19} height={19}   />
                  <h3 className="cs_fs_20 mb-0">3k+ <span className="cs_fs_14 cs_medium">Satisfied client</span></h3>
                </div>
                <Image src="/assets/img/users-group.png" alt="img" width={176} height={40}   />
              </div>
            </div>
            <div className="cs_bottom_content wow fadeInUp">
              <div className="cs_market_info">
                <div className="cs_value_graph">
                  <div className="cs_round_progress_wrap">
                    <div className="cs_round_progress_in">
                      <div className="cs_round_progress_number cs_fs_14 cs_bold cs_heading_color">
                        <span data-count-to="81" className="odometer"></span>81%
                      </div>
                    </div>
                    <div className="cs_round_progress">
                      <svg className="cs_round_progress_percentage" viewBox="0 0 100 100" width="163" height="163" data-percent="81">
                        <circle cx="50" cy="50" r="40"></circle>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="cs_value_info">
                  <p className="cs_fs_14 cs_medium cs_heading_color mb-0">Market value</p>
                  <h3 className="cs_fs_18 mb-0">$23,53.00</h3>
                </div>
              </div>
            </div>
            <div className="cs_social_links wow fadeInRight">
              <a href="#" aria-label="Social link">
              <span className="cs_social_text">Facebook</span>
              <span className="cs_social_icon cs_heading_bg cs_center cs_accent_color cs_radius_50"><i className="bi bi-facebook"></i></span>
              </a>
              <a href="#" aria-label="Social link">
              <span className="cs_social_text">Instagram</span>
              <span className="cs_social_icon cs_heading_bg cs_center cs_accent_color cs_radius_50"><i className="bi bi-instagram"></i></span>
              </a>
              <a href="#" aria-label="Social link">
              <span className="cs_social_text">LinkedIn</span>
              <span className="cs_social_icon cs_heading_bg cs_center cs_accent_color cs_radius_50"><i className="bi bi-linkedin"></i></span>
              </a>
              <a href="#" aria-label="Social link">
              <span className="cs_social_text">Twitter</span>
              <span className="cs_social_icon cs_heading_bg cs_center cs_accent_color cs_radius_50"><i className="bi bi-twitter-x"></i></span>
              </a>
              <a href="#" aria-label="Social link">
              <span className="cs_social_text">YouTube</span>
              <span className="cs_social_icon cs_heading_bg cs_center cs_accent_color cs_radius_50"><i className="bi bi-youtube"></i></span>
              </a>
            </div>
          </div>
        </div>

        <VideoModal
            isTrue={toggle}
            iframeSrc={iframeSrc}
            handelClose={handelClose}        
        ></VideoModal>

      </section>
    );
};

export default HeroBanner1;