import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Project3 = () => {

    const chooseContent = [
        {img:'/assets/img/project_3.jpg', title:'The rise of design', content1:'Advertising', content2:'UI/UX'},
        {img:'/assets/img/project_4.jpg', title:'The evolution of UX', content1:'Branding', content2:'UI/UX'},
        {img:'/assets/img/project_5.jpg', title:'Beyond the screen', content1:'Creative Studio', content2:'UI/UX'},
        {img:'/assets/img/project_6.jpg', title:'Building brand authority', content1:'Design', content2:'UI/UX'},
      ]; 

    return (
<section className="position-relative overflow-hidden">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center">
          <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_center cs_mb_20 wow fadeInDown">
            <span className="cs_shape_left"></span>our complete projects<span className="cs_shape_right"></span>
          </p>
          <h2 className="cs_fs_48 cs_mb_21 wow fadeInUp">Explore Latest Case Studies</h2>
        </div>
        <div className="cs_height_60 cs_height_lg_50"></div>
        <div className="cs_cards_wrapper_2 position-relative z-1">
        {chooseContent.map((item, i) => (
          <div key={i} className="cs_card cs_style_5 wow fadeInLeft">
            <Link href="/project/project-details" aria-label="Click to view case study details" className="cs_card_thumbnail cs_center cs_radius_15 cs_mb_20 position-relative overflow-hidden">
              <img src={item.img} alt="Project image" />
              <span className="cs_card_btn cs_radius_50 cs_accent_color position-absolute">
                <span>
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4327 4.39844C13.5851 4.24606 13.7917 4.16046 14.0072 4.16046C14.2227 4.16046 14.4294 4.24606 14.5817 4.39844L21.476 11.2927C21.6284 11.4451 21.714 11.6518 21.714 11.8673C21.714 12.0827 21.6284 12.2894 21.476 12.4418L14.5817 19.3361C14.4294 19.4884 14.2227 19.574 14.0072 19.574C13.7917 19.574 13.5851 19.4884 13.4327 19.3361C13.2803 19.1837 13.1947 18.977 13.1947 18.7615C13.1947 18.5461 13.2803 18.3394 13.4327 18.187L19.7524 11.8673L13.4327 5.54749C13.2803 5.39511 13.1947 5.18845 13.1947 4.97296C13.1947 4.75747 13.2803 4.55081 13.4327 4.39844Z" fill="currentColor"/>
                    <path d="M21.7136 11.8671C21.7135 12.0824 21.6279 12.2889 21.4756 12.4411C21.3234 12.5934 21.1169 12.679 20.9016 12.6791L1.40148 12.6791C1.29244 12.683 1.18373 12.6648 1.08186 12.6257C0.979982 12.5867 0.887021 12.5275 0.808518 12.4517C0.730015 12.3759 0.667579 12.2851 0.624937 12.1847C0.582294 12.0842 0.560317 11.9762 0.560317 11.8671C0.560318 11.758 0.582295 11.65 0.624938 11.5496C0.667581 11.4491 0.730016 11.3583 0.808518 11.2825C0.887021 11.2068 0.979983 11.1476 1.08186 11.1085C1.18373 11.0694 1.29244 11.0513 1.40148 11.0551L20.9008 11.0544C21.0076 11.0543 21.1133 11.0753 21.2119 11.1161C21.3105 11.157 21.4001 11.2168 21.4756 11.2923C21.5511 11.3678 21.611 11.4574 21.6518 11.556C21.6926 11.6547 21.7136 11.7604 21.7136 11.8671Z" fill="currentColor"/>
                  </svg>
                </span>
                <span className="cs_fs_14 cs_white_color">View Details</span>
              </span>
            </Link>
            <div className="cs_card_info">
              <h3 className="cs_fs_30 cs_semibold cs_mb_11">
                <Link href="/project/project-details" aria-label="Click to view case study details">{item.title}</Link>
              </h3>
              <ul className="cs_category_list cs_mp_0">
                <li>{item.content1}</li>
                <li>{item.content2}</li>
              </ul>
            </div>
          </div>
          ))}

        </div>
        <div className="cs_case_shape_2 position-absolute">
           <Image src="/assets/img/case_shape_2.svg" alt="img" width={455} height={1274}   />
        </div>
        <div className="cs_case_shape_3 position-absolute">
           <Image src="/assets/img/case_shape_3.svg" alt="img" width={250} height={392}   />
        </div>
        <div className="cs_case_shape_4 position-absolute">
           <Image src="/assets/img/case_shape_4.svg" alt="img" width={503} height={1302}   />
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default Project3;