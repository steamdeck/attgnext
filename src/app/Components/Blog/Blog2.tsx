import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog2 = () => {

    const chooseContent = [
        {img:'/assets/img/post_3.jpg', title:'Web Design', content:'Business strategy for marketing system'},
        {img:'/assets/img/post_4.jpg', title:'Technology', content:'Why is Supply Chain Visibility So Important?'},
        {img:'/assets/img/post_5.jpg', title:'Marketing', content:'Discover a better way of redefining company'},
      ]; 

    return (
<section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center">
          <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_blue_color cs_center cs_mb_20 wow fadeInDown">
            <span className="cs_shape_left"></span>Latest News<span className="cs_shape_right"></span>
          </p>
          <h2 className="cs_fs_48 mb-0 wow fadeInUp">Latest our News and Blog</h2>
        </div>
        <div className="cs_height_60 cs_height_lg_50"></div>
        <div className="row cs_row_gap_30 cs_gap_y_30">
        {chooseContent.map((item, i) => (
          <div key={i} className="col-lg-4 wow fadeInUp">
            <article className="cs_post cs_style_2 position-relative">
              <Link href="/blog/blog-details" aria-label="Click to read post" className="cs_post_thumbnail cs_radius_15 position-relative">
              <Image src={item.img} alt="img" width={362} height={342}   />
              <span className="cs_posted_by cs_center cs_blue_bg cs_fs_20 cs_bold cs_white_color text-center position-absolute">
              30 July</span>
              </Link>
              <div className="cs_post_content cs_gray_bg_1">
                <div className="cs_post_meta cs_fs_14 cs_blue_color cs_mb_4">
                  <span>{item.title}</span>
                </div>
                <h3 className="cs_post_title cs_fs_20 cs_mb_18">
                  <Link href="/blog/blog-details" aria-label="Click to read post">{item.content}</Link>
                </h3>
                <Link href="/blog/blog-details" aria-label="Click to read post" className="cs_post_btn cs_fs_18 cs_semibold text-uppercase">
                  <span>Read More</span>
                  <span className="cs_blue_color">
                    <svg width="23" height="23" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.4327 4.39844C13.5851 4.24606 13.7917 4.16046 14.0072 4.16046C14.2227 4.16046 14.4294 4.24606 14.5817 4.39844L21.476 11.2927C21.6284 11.4451 21.714 11.6518 21.714 11.8673C21.714 12.0827 21.6284 12.2894 21.476 12.4418L14.5817 19.3361C14.4294 19.4884 14.2227 19.574 14.0072 19.574C13.7917 19.574 13.5851 19.4884 13.4327 19.3361C13.2803 19.1837 13.1947 18.977 13.1947 18.7615C13.1947 18.5461 13.2803 18.3394 13.4327 18.187L19.7524 11.8673L13.4327 5.54749C13.2803 5.39511 13.1947 5.18845 13.1947 4.97296C13.1947 4.75747 13.2803 4.55081 13.4327 4.39844Z" fill="currentColor"/>
                      <path d="M21.7136 11.8671C21.7135 12.0824 21.6279 12.2889 21.4756 12.4411C21.3234 12.5934 21.1169 12.679 20.9016 12.6791L1.40148 12.6791C1.29244 12.683 1.18373 12.6648 1.08186 12.6257C0.979982 12.5867 0.887021 12.5275 0.808518 12.4517C0.730015 12.3759 0.667579 12.2851 0.624937 12.1847C0.582294 12.0842 0.560317 11.9762 0.560317 11.8671C0.560318 11.758 0.582295 11.65 0.624938 11.5496C0.667581 11.4491 0.730016 11.3583 0.808518 11.2825C0.887021 11.2068 0.979983 11.1476 1.08186 11.1085C1.18373 11.0694 1.29244 11.0513 1.40148 11.0551L20.9008 11.0544C21.0076 11.0543 21.1133 11.0753 21.2119 11.1161C21.3105 11.157 21.4001 11.2168 21.4756 11.2923C21.5511 11.3678 21.611 11.4574 21.6518 11.556C21.6926 11.6547 21.7136 11.7604 21.7136 11.8671Z" fill="currentColor"/>
                    </svg>
                  </span>
                </Link>
              </div>
            </article>
          </div>
          ))}


        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default Blog2;