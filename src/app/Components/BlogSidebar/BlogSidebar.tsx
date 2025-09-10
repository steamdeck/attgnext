import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogSidebar = () => {

    const chooseContent = [
        {img:'/assets/img/post_9.jpg', title:'There are many variations of passages of available', content:'Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci malesuada the sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum mauris id nunc molestie tincidunt erat gravida. Nullam dui libero, mollis ac quam et, venenatis.'},
        {img:'/assets/img/post_10.jpg', title:'There are many variations of passages of available', content:'Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci malesuada the sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum mauris id nunc molestie tincidunt erat gravida. Nullam dui libero, mollis ac quam et, venenatis.'},
        {img:'/assets/img/post_11.jpg', title:'There are many variations of passages of available', content:'Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci malesuada the sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum mauris id nunc molestie tincidunt erat gravida. Nullam dui libero, mollis ac quam et, venenatis.'},
      ]; 

    return (
<section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_row_gap_30 cs_gap_y_60">
          <aside className="col-xl-4 col-lg-5">
            <div className="cs_sidebar cs_style_1 cs_type_1">
              <div className="cs_sidebar_widget cs_gray_bg_1 cs_radius_10 wow fadeInDown">
                <h3 className="cs_sidebar_widget_title cs_fs_22 cs_mb_22">Search</h3>
                <form action="#" className="cs_search cs_white_bg position-relative">
                  <input type="text" placeholder="Search here" />
                  <button className="cs_search_button cs_center cs_blue_bg cs_white_color">
                  <i className="bi bi-search"></i></button>
                </form>
              </div>
              <div className="cs_sidebar_widget cs_gray_bg_1 cs_radius_10 wow fadeInDown">
                <h3 className="cs_sidebar_widget_title cs_fs_22 cs_mb_22">Categories</h3>
                <ul className="cs_service_category_list cs_medium cs_mp_0">
                  <li><a href="#"><span>Pay-Per-Click (PPC)</span> <span> (7)</span></a></li>
                  <li><a href="#"><span>Social Media Marketing</span> <span> (4)</span></a></li>
                  <li><a href="#"><span>Email Marketing</span> <span> (5)</span></a></li>
                  <li><a href="#"><span>Electrotherapy</span> <span> (3)</span></a></li>
                  <li><a href="#"><span>Affiliate Marketing</span> <span> (6)</span></a>
                  </li>
                </ul>
              </div>
              <div className="cs_sidebar_widget cs_gray_bg_1 cs_radius_10 wow fadeInDown">
                <h3 className="cs_sidebar_widget_title cs_fs_22 cs_mb_22">Recent Posts</h3>
                <div className="cs_recent_post_wrapper">
                  <div className="cs_recent_post">
                    <a className="cs_recent_post_thumb cs_radius_10" href="#" aria-label="Click to read post">
                      <Image src="/assets/img/latest_post_1.jpg" alt="img" width={80} height={80}   />
                    </a>
                    <div className="cs_recent_post_right">
                      <div className="cs_post_meta cs_fs_14 cs_blue_color cs_mb_9">
                        <i className="fa-solid fa-calendar-alt"></i>17 Mar, 2024
                      </div>
                      <h3 className="cs_fs_16 cs_bold mb-0">
                        <a href="#" aria-label="Click to read post">There are many vario ns of passages of</a>
                      </h3>
                    </div>
                  </div>
                  <div className="cs_recent_post">
                    <a className="cs_recent_post_thumb cs_radius_10" href="#" aria-label="Click to read post">
                      <Image src="/assets/img/latest_post_2.jpg" alt="img" width={80} height={80}   />
                    </a>
                    <div className="cs_recent_post_right">
                      <div className="cs_post_meta cs_fs_14 cs_blue_color cs_mb_9">
                        <i className="fa-solid fa-calendar-alt"></i>14 Dec, 2024
                      </div>
                      <h3 className="cs_fs_16 cs_bold mb-0">
                        <a href="#" aria-label="Click to read post">There are many vario ns of passages of</a>
                      </h3>
                    </div>
                  </div>
                  <div className="cs_recent_post">
                    <a className="cs_recent_post_thumb cs_radius_10" href="#" aria-label="Click to read post">
                      <Image src="/assets/img/latest_post_3.jpg" alt="img" width={80} height={80}   />
                    </a>
                    <div className="cs_recent_post_right">
                      <div className="cs_post_meta cs_fs_14 cs_blue_color cs_mb_9">
                        <i className="fa-solid fa-calendar-alt"></i>27 Feb, 2024
                      </div>
                      <h3 className="cs_fs_16 cs_bold mb-0">
                        <a href="#" aria-label="Click to read post">There are many vario ns of passages of</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs_sidebar_widget cs_gray_bg_1 cs_radius_10 wow fadeInDown">
                <div className="cs_sidebar_tags">
                  <h3 className="cs_sidebar_widget_title cs_fs_22 cs_mb_22">Tags</h3>
                  <div className="cs_tags_links cs_fs_14 cs_heading_color">
                    <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">Marketing</a>
                    <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">Agency</a>
                    <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">Search Engine</a>
                    <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">Influencer</a>
                    <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">Advertising</a>
                    <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">Branding</a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="col-xl-8 col-lg-7">
            <div className="row cs_gap_y_30">
            {chooseContent.map((item, i) => (
              <div key={i} className="col-12">
                <div className="cs_post cs_style_1 cs_type_2 cs_radius_10 wow fadeInRight">
                  <Link href="/blog/blog-details" aria-label="Click to read post" className="cs_post_thumbnail cs_radius_8 cs_mb_26 position-relative">
                  <Image src={item.img} alt="img" width={692} height={419}   />
                  <span className="cs_posted_by cs_blue_bg cs_white_color cs_radius_5 text-center position-absolute">
                  <span className="cs_fs_24 cs_bold">15</span>
                  <span className="cs_fs_14">July</span>
                  </span>
                  </Link>
                  <div className="cs_post_content">
                    <div className="cs_post_meta_wrapper cs_fs_14 cs_medium cs_mb_11">
                      <div className="cs_post_meta">
                        <span className="cs_blue_color">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5442 5.19275C14.5442 7.69093 12.4996 9.7355 10.0014 9.7355C7.50329 9.7355 5.45872 7.69093 5.45872 5.19275C5.45872 2.69457 7.50326 0.65 10.0014 0.65C12.4996 0.65 14.5442 2.69458 14.5442 5.19275Z" stroke="currentColor" strokeWidth="1.3"></path>
                            <path d="M18.265 14.6706C18.1058 14.9458 17.9247 15.2073 17.7176 15.4766L17.7174 15.4765L17.7095 15.4873C17.421 15.8788 17.0852 16.2373 16.7301 16.5924C16.4332 16.8892 16.0939 17.186 15.7574 17.4385C14.0801 18.6911 12.0628 19.3499 9.97879 19.3499C7.89901 19.3499 5.88571 18.6938 4.21041 17.4461C3.84652 17.1504 3.51432 16.8792 3.22751 16.5924L3.22054 16.5854L3.21337 16.5787C2.85728 16.2436 2.54303 15.8877 2.2481 15.4874L2.24812 15.4873L2.24478 15.4829C2.06257 15.24 1.87385 14.9756 1.71984 14.7169C1.83683 14.4559 1.98519 14.1847 2.14586 13.9526L2.14597 13.9527L2.15349 13.9413C3.07049 12.5556 4.5377 11.6388 6.16707 11.4148L6.18665 11.4121L6.20603 11.4082C6.23151 11.4031 6.29559 11.4117 6.34612 11.4496L6.34611 11.4496L6.35012 11.4525C7.41715 12.2401 8.68694 12.6453 10.0014 12.6453C11.3159 12.6453 12.5857 12.2401 13.6528 11.4525L13.6528 11.4525L13.6568 11.4496C13.6722 11.438 13.741 11.408 13.8498 11.4167C15.4695 11.6435 16.9128 12.5568 17.8531 13.9468L17.853 13.9469L17.857 13.9526C18.0172 14.1839 18.1563 14.4231 18.265 14.6706Z" stroke="currentColor" strokeWidth="1.3"></path>
                          </svg>
                        </span>
                        <span>By Admin</span>
                      </div>
                      <div className="cs_post_meta">
                        <span className="cs_blue_color">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_235_1708)">
                              <path d="M18.752 14.443C20.6847 11.7314 20.3893 8.01637 17.7495 5.59641C16.5434 4.49074 15.0057 3.80242 13.3448 3.6102C13.3344 3.59727 13.3236 3.58479 13.3122 3.57277C11.8673 2.0718 9.79133 1.21094 7.61672 1.21094C3.47848 1.21094 0 4.29426 0 8.24219C0 9.62637 0.429961 10.9533 1.24672 12.0993L0.105742 15.6815C0.0706615 15.7916 0.0689221 15.9096 0.100743 16.0207C0.132563 16.1318 0.196522 16.231 0.284576 16.3058C0.37263 16.3807 0.480845 16.4278 0.595611 16.4413C0.710377 16.4548 0.826568 16.434 0.92957 16.3816L4.39937 14.6173C5.11195 14.9241 5.86758 15.1255 6.65008 15.2171C8.15953 16.8044 10.2467 17.6172 12.382 17.6172C13.492 17.6172 14.598 17.391 15.5992 16.961L19.0692 18.7254C19.1514 18.7673 19.2424 18.7891 19.3346 18.7891C19.73 18.7891 20.0135 18.4037 19.893 18.0253L18.752 14.443ZM4.63586 13.4383C4.5549 13.3999 4.46621 13.3805 4.37659 13.3817C4.28697 13.3829 4.19883 13.4047 4.11895 13.4453L1.64758 14.702L2.45461 12.1681C2.48356 12.0773 2.48989 11.9807 2.47305 11.8869C2.45622 11.793 2.41673 11.7047 2.35801 11.6295C1.58199 10.6362 1.1718 9.46488 1.1718 8.24219C1.1718 5.01133 4.06297 2.38281 7.61672 2.38281C9.04781 2.38281 10.4255 2.81637 11.543 3.59711C7.77945 3.97555 4.76531 6.91516 4.76531 10.5859C4.76531 11.7277 5.05797 12.8268 5.60973 13.8116C5.276 13.7123 4.95042 13.5876 4.63586 13.4383ZM15.8798 15.789C15.7999 15.7484 15.7118 15.7267 15.6222 15.7254C15.5325 15.7242 15.4438 15.7436 15.3629 15.7821C14.4494 16.216 13.4187 16.4453 12.382 16.4453C8.82828 16.4453 5.93711 13.8168 5.93711 10.5859C5.93711 7.35508 8.82828 4.72656 12.382 4.72656C15.9358 4.72656 18.827 7.35508 18.827 10.5859C18.827 11.8086 18.4168 12.9799 17.6407 13.9732C17.582 14.0484 17.5425 14.1367 17.5257 14.2306C17.5089 14.3244 17.5152 14.421 17.5441 14.5118L18.3511 17.0457L15.8798 15.789Z" fill="currentColor"/>
                              <path d="M10 11.1719C10.3236 11.1719 10.5859 10.9095 10.5859 10.5859C10.5859 10.2623 10.3236 10 10 10C9.6764 10 9.41406 10.2623 9.41406 10.5859C9.41406 10.9095 9.6764 11.1719 10 11.1719Z" fill="currentColor"/>
                              <path d="M12.3438 11.1719C12.6674 11.1719 12.9297 10.9095 12.9297 10.5859C12.9297 10.2623 12.6674 10 12.3438 10C12.0201 10 11.7578 10.2623 11.7578 10.5859C11.7578 10.9095 12.0201 11.1719 12.3438 11.1719Z" fill="currentColor"/>
                              <path d="M14.6875 11.1719C15.0111 11.1719 15.2734 10.9095 15.2734 10.5859C15.2734 10.2623 15.0111 10 14.6875 10C14.3639 10 14.1016 10.2623 14.1016 10.5859C14.1016 10.9095 14.3639 11.1719 14.6875 11.1719Z" fill="currentColor"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_235_17082">
                                <rect width="20" height="20" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span>0 Comments</span>
                      </div>
                    </div>
                    <h3 className="cs_post_title cs_fs_24 cs_mb_14">
                      <Link href="/blog/blog-details" aria-label="Click to read post">{item.title}</Link>
                    </h3>
                    <p className="cs_post_subtitle cs_mb_23">{item.content}</p>
                    <Link href="/blog/blog-details" aria-label="Click to read post" className="cs_post_btn cs_fs_14 cs_semibold cs_radius_5">
                      <span>Read More</span>
                      <span>
                        <svg width="23" height="23" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.4327 4.39844C13.5851 4.24606 13.7917 4.16046 14.0072 4.16046C14.2227 4.16046 14.4294 4.24606 14.5817 4.39844L21.476 11.2927C21.6284 11.4451 21.714 11.6518 21.714 11.8673C21.714 12.0827 21.6284 12.2894 21.476 12.4418L14.5817 19.3361C14.4294 19.4884 14.2227 19.574 14.0072 19.574C13.7917 19.574 13.5851 19.4884 13.4327 19.3361C13.2803 19.1837 13.1947 18.977 13.1947 18.7615C13.1947 18.5461 13.2803 18.3394 13.4327 18.187L19.7524 11.8673L13.4327 5.54749C13.2803 5.39511 13.1947 5.18845 13.1947 4.97296C13.1947 4.75747 13.2803 4.55081 13.4327 4.39844Z" fill="currentColor"></path>
                          <path d="M21.7136 11.8671C21.7135 12.0824 21.6279 12.2889 21.4756 12.4411C21.3234 12.5934 21.1169 12.679 20.9016 12.6791L1.40148 12.6791C1.29244 12.683 1.18373 12.6648 1.08186 12.6257C0.979982 12.5867 0.887021 12.5275 0.808518 12.4517C0.730015 12.3759 0.667579 12.2851 0.624937 12.1847C0.582294 12.0842 0.560317 11.9762 0.560317 11.8671C0.560318 11.758 0.582295 11.65 0.624938 11.5496C0.667581 11.4491 0.730016 11.3583 0.808518 11.2825C0.887021 11.2068 0.979983 11.1476 1.08186 11.1085C1.18373 11.0694 1.29244 11.0513 1.40148 11.0551L20.9008 11.0544C21.0076 11.0543 21.1133 11.0753 21.2119 11.1161C21.3105 11.157 21.4001 11.2168 21.4756 11.2923C21.5511 11.3678 21.611 11.4574 21.6518 11.556C21.6926 11.6547 21.7136 11.7604 21.7136 11.8671Z" fill="currentColor"></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              ))}


            </div>

          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default BlogSidebar;