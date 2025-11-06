import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SMMContent = () => {
  return (
    <div>
      {/* Service Overview */}
      <section className="cs_gray_bg_2">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_section_heading cs_style_1">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                  <span className="cs_shape_right"></span>Why Choose Our Social Media Marketing Services<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_30">Engage Your Audience and Grow Your Brand</h2>
                <p className="cs_fs_18 cs_mb_30">
                  In today&apos;s digital world, social media is where your customers are. We help businesses create 
                  authentic connections, build engaged communities, and turn followers into loyal customers. Our 
                  team has managed 150+ social media accounts, generating millions of impressions and thousands of 
                  conversions.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_choose_content">
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/engagement.svg" alt="Engagement" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Increased Engagement</h3>
                  <p className="cs_choose_subtitle">Average 400% increase in engagement rates across all platforms</p>
                </div>
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/followers.svg" alt="Followers" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Organic Growth</h3>
                  <p className="cs_choose_subtitle">Average 300% increase in followers and brand awareness</p>
                </div>
                <div className="cs_choose_item">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/analytics.svg" alt="Analytics" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Data-Driven Strategy</h3>
                  <p className="cs_choose_subtitle">Real-time analytics and insights to optimize your social media performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Social Media Platforms */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Our Social Media Platforms<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">Complete Social Media Management</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_30">
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/social.svg" alt="Facebook" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Facebook Marketing</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Build your community and drive engagement with strategic Facebook content and advertising.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/social.svg" alt="Instagram" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Instagram Marketing</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Showcase your brand visually with stunning posts, stories, reels, and IGTV content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/social.svg" alt="LinkedIn" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">LinkedIn Marketing</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Establish thought leadership and connect with B2B audiences through professional content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/social.svg" alt="Twitter" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Twitter/X Marketing</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Engage in real-time conversations and build your brand voice with strategic Twitter campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Our Process */}
      <section className="cs_gray_bg_2">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>How We Work<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">Our 5-Step Social Media Marketing Process</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">01</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Strategy & Planning</h3>
                <p className="cs_process_subtitle">We analyze your brand, audience, and competitors to create a custom social media strategy.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">02</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Content Creation</h3>
                <p className="cs_process_subtitle">We create engaging, on-brand content including posts, stories, videos, and graphics.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">03</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Scheduling & Publishing</h3>
                <p className="cs_process_subtitle">We schedule and publish content at optimal times for maximum engagement.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">04</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Community Management</h3>
                <p className="cs_process_subtitle">We engage with your audience, respond to comments, and build relationships.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">05</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Analytics & Optimization</h3>
                <p className="cs_process_subtitle">We track performance, analyze data, and continuously optimize your strategy.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Benefits Section */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_section_heading cs_style_1">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                  <span className="cs_shape_right"></span>Business Benefits<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_30">Why Social Media Marketing Matters</h2>
                <p className="cs_fs_18 cs_mb_30">
                  Social media marketing is no longer optional—it&apos;s essential for business growth. Here&apos;s how 
                  our services can transform your business:
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_benefits_list">
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/visibility.svg" alt="Brand Visibility" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Enhanced Brand Awareness</h4>
                    <p className="cs_benefit_desc">Reach millions of potential customers and increase your brand visibility</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/leads.svg" alt="Lead Generation" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Lead Generation</h4>
                    <p className="cs_benefit_desc">Convert social media followers into qualified leads and customers</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/customer.svg" alt="Customer Engagement" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Customer Engagement</h4>
                    <p className="cs_benefit_desc">Build meaningful relationships with your audience through interactive content</p>
                  </div>
                </div>
                <div className="cs_benefit_item">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/analytics.svg" alt="Measurable Results" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Measurable ROI</h4>
                    <p className="cs_benefit_desc">Track every metric from engagement to conversions and measure your success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* FAQ Section */}
      <section className="cs_gray_bg_2">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Frequently Asked Questions<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">Social Media Marketing FAQ</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="cs_faq_wrap">
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Which social media platforms should my business be on?
                  </div>
                  <div className="cs_faq_answer">
                    The best platforms depend on your target audience and business type. We help you identify where your customers are most active and create platform-specific strategies. Common choices include Facebook, Instagram, LinkedIn, Twitter/X, and TikTok.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How often should I post on social media?
                  </div>
                  <div className="cs_faq_answer">
                    Posting frequency varies by platform. Generally, we recommend 3-5 posts per week for Facebook, daily posts for Instagram, and 1-2 posts per day for Twitter/X. We create a content calendar tailored to your industry and audience.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What&apos;s included in your social media management services?
                  </div>
                  <div className="cs_faq_answer">
                    Our services include content creation, post scheduling, community management, engagement, social media advertising, analytics reporting, and strategy optimization. Specific services vary by package.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How do you measure social media success?
                  </div>
                  <div className="cs_faq_answer">
                    We track key metrics including engagement rate, follower growth, reach, impressions, clicks, conversions, and ROI. We provide monthly reports with detailed analytics and actionable insights.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Do you create all the content, or do I need to provide it?
                  </div>
                  <div className="cs_faq_answer">
                    We handle everything! Our team creates all content including copy, graphics, videos, and images. We work with your brand guidelines to ensure all content aligns with your brand voice and style.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How long does it take to see results from social media marketing?
                  </div>
                  <div className="cs_faq_answer">
                    While some results like increased engagement can be seen within 2-4 weeks, significant growth typically takes 3-6 months. We focus on building authentic engagement which leads to long-term sustainable growth.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What&apos;s the difference between organic and paid social media?
                  </div>
                  <div className="cs_faq_answer">
                    Organic social media involves free content and engagement, while paid social media uses advertising budgets to promote content. We recommend a combination of both for maximum reach and results.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Can you help with social media advertising?
                  </div>
                  <div className="cs_faq_answer">
                    Yes! We create and manage paid social media campaigns on Facebook, Instagram, LinkedIn, and Twitter/X. We optimize ad spend, target the right audiences, and track conversions to maximize ROI.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How do you handle negative comments or reviews?
                  </div>
                  <div className="cs_faq_answer">
                    We have a comprehensive community management strategy that includes monitoring, responding professionally, and addressing concerns promptly. We turn negative situations into opportunities to showcase excellent customer service.
                  </div>
                </div>
                <div className="cs_faq_item">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How do I get started with your social media marketing services?
                  </div>
                  <div className="cs_faq_answer">
                    Contact us for a free consultation where we&apos;ll analyze your current social media presence, discuss your goals, and recommend the best strategy and package for your business.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Case Studies */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Success Stories<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">Social Media Marketing Case Studies</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_white_bg cs_p_40" style={{ marginBottom: '30px', padding: '40px 30px' }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15">E-commerce Fashion Brand</h3>
                <p className="cs_case_challenge cs_mb_20">
                  <strong>Challenge:</strong> A fashion retailer needed to increase brand awareness and drive online sales through social media.
                </p>
                <p className="cs_case_solution cs_mb_20">
                  <strong>Solution:</strong> We created a comprehensive Instagram and Facebook strategy with visually appealing content, influencer partnerships, and targeted advertising campaigns.
                </p>
                <div className="cs_case_results">
                  <strong>Results:</strong>
                  <ul className="cs_mt_10">
                    <li>500% increase in Instagram followers in 6 months</li>
                    <li>350% increase in engagement rate</li>
                    <li>200% increase in online sales from social media</li>
                    <li>150% increase in website traffic from social platforms</li>
                  </ul>
                </div>
                <div className="cs_case_timeline cs_mt_20">
                  <strong>Timeline:</strong> 6 months
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_white_bg cs_p_40" style={{ marginBottom: '30px', padding: '40px 30px' }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15">B2B SaaS Company</h3>
                <p className="cs_case_challenge cs_mb_20">
                  <strong>Challenge:</strong> A B2B SaaS company wanted to establish thought leadership and generate quality leads through LinkedIn.
                </p>
                <p className="cs_case_solution cs_mb_20">
                  <strong>Solution:</strong> We developed a LinkedIn content strategy focused on industry insights, case studies, and professional networking.
                </p>
                <div className="cs_case_results">
                  <strong>Results:</strong>
                  <ul className="cs_mt_10">
                    <li>300% increase in LinkedIn followers</li>
                    <li>250% increase in engagement on LinkedIn posts</li>
                    <li>180% increase in qualified leads from social media</li>
                    <li>120% increase in brand mentions and shares</li>
                  </ul>
                </div>
                <div className="cs_case_timeline cs_mt_20">
                  <strong>Timeline:</strong> 4 months
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Call to Action */}
      <section className="cs_blue_bg cs_white_color">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="cs_fs_48 cs_fw_bold cs_mb_20 cs_white_color">Ready to Grow Your Social Media Presence?</h2>
              <p className="cs_fs_18 cs_mb_30 cs_white_color">
                Don&apos;t let your competitors dominate social media. Our social media marketing experts can help you 
                build an engaged community, increase brand awareness, and drive real business results.
              </p>
              <div className="cs_btn_group cs_mb_40">
                <Link href="/contact" className="cs_btn cs_style_1 cs_fs_14 text-uppercase cs_white_bg cs_accent_color">
                  <span>Get Free Social Media Audit</span>
                </Link>
                <Link href="tel:+919266812465" className="cs_btn cs_style_2 cs_fs_14 text-uppercase cs_white_color">
                  <span>Call +91 92668 12465</span>
                </Link>
              </div>
              <p className="cs_fs_16 cs_white_color">
                <strong>Free consultation • Custom strategy • Proven results</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    </div>
  );
};

export default SMMContent;

