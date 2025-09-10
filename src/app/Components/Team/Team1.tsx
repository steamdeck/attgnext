import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Team1 = () => {

    const teamContent = [
        {img:'/assets/img/team_1.jpg', name:'Esther howard', content:'Mid-Level Developer',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_2.jpg', name:'Leslie Alexander', content:'Founder & CEO',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_3.jpg', name:'Theresa Web', content:'Merchandiser',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_4.jpg', name:'Floyd Miles', content:'Senior Developer',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
      ];

    return (
        <section className="cs_gray_bg_1 position-relative">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_center cs_mb_20 wow fadeInDown">
              <span className="cs_shape_left"></span>Our Team<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 cs_mb_21 wow fadeInUp">Our Professional Experts</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_30 position-relative z-1">

          {teamContent.map((item, i) => (
            <div key={i} className="col-lg-3 col-sm-6 wow fadeInDown">
              <div className="cs_team cs_style_1 position-relative">
                <div className="cs_team_thumbnail cs_radius_15 position-relative">
                  <Image src={item.img} alt="img" width={264} height={342}   />
                  <div className="cs_social_links cs_radius_8 position-absolute">
                    <Link href={item.instagram} aria-label="Social button" className="cs_social_link cs_center cs_radius_4">
                    <i className="bi bi-instagram"></i></Link>
                    <Link href={item.facebook} aria-label="Social button" className="cs_social_link cs_center cs_radius_4">
                    <i className="bi bi-facebook"></i></Link>
                    <Link href={item.twitter} aria-label="Social button" className="cs_social_link cs_center cs_radius_4">
                    <i className="bi bi-twitter-x"></i></Link>
                    <Link href={item.linkedin} aria-label="Social button" className="cs_social_link cs_center cs_radius_4">
                    <i className="bi bi-linkedin"></i></Link>
                  </div>
                </div>
                <div className="cs_tean_info cs_radius_8 text-center">
                  <h3 className="cs_fs_24 text-capitalize mb-0"><Link href="/team/team-details" aria-label="Team details page link">{item.name}</Link></h3>
                  <p className="mb-0">{item.content}</p>
                </div>
              </div>
            </div>
            ))}

          </div>
          <div className="cs_team_shape_1 position-absolute"></div>
          <div className="cs_team_shape_2 position-absolute">
            <Image src="/assets/img/team_shape_1.svg" alt="img" width={264} height={573}   />
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default Team1;