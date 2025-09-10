import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Team3 = () => {

    const teamContent = [
        {img:'/assets/img/team_5.jpg', name:'Esther howard', content:'Mid-Level Developer',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_6.jpg', name:'Leslie Alexander', content:'Founder & CEO',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_7.jpg', name:'Theresa Web', content:'Merchandiser',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_9.jpg', name:'Esther howard', content:'Merchandiser',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_10.jpg', name:'Theresa Web', content:'Merchandiser',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_11.jpg', name:'Leslie Alexander', content:'Merchandiser',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
      ];

    return (
        <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_30">

          {teamContent.map((item, i) => (
          <div key={i} className="col-lg-4 wow fadeInDown">
            <div className="cs_team cs_style_2 cs_white_bg cs_radius_20 position-relative">
              <Link href="/team/team-details" aria-label="Click to visit team details" className="cs_team_thumbnail cs_radius_20">
              <Image src={item.img} alt="img" width={330} height={366}   />
              </Link>
              <div className="cs_social_links cs_radius_8 position-absolute">
                <Link href={item.instagram} aria-label="Social button" className="cs_social_link cs_center cs_radius_50">
                <i className="bi bi-instagram"></i>
                </Link>
                <Link href={item.facebook} aria-label="Social button" className="cs_social_link cs_center cs_radius_50">
                <i className="bi bi-facebook"></i>
                </Link>
                <Link href={item.twitter} aria-label="Social button" className="cs_social_link cs_center cs_radius_50">
                <i className="bi bi-twitter-x"></i>
                </Link>
                <Link href={item.linkedin} aria-label="Social button" className="cs_social_link cs_center cs_radius_50">
                <i className="bi bi-linkedin"></i>
                </Link>
                <a href="#" aria-label="Social button" className="cs_social_link cs_share cs_center cs_radius_50">
                <i className="bi bi-share"></i>
                </a>
              </div>
              <div className="cs_tean_info">
                <h3 className="cs_fs_22 cs_semibold text-capitalize cs_mb_2">
                  <Link href="/team/team-details" aria-label="Click to visit team details">{item.name}</Link>
                </h3>
                <p className="mb-0">{item.content}</p>
              </div>
            </div>
          </div>
        ))}

          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default Team3;