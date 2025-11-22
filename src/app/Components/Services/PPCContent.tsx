"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FaqAccordion from '../Faq/FaqAccordion';

const PPCContent = () => {
  const faqItems = [
    {
      question: "How quickly can I see results from PPC advertising?",
      answer: "PPC campaigns can start driving traffic and leads within 24-48 hours of launch. Unlike SEO which takes months, PPC delivers immediate visibility and results. You can see clicks and conversions from day one."
    },
    {
      question: "What's the difference between Google Ads and Facebook Ads?",
      answer: "Google Ads targets people actively searching for your products on Google, while Facebook Ads targets people based on their interests and demographics. Both have their place - Google Ads is great for search intent, while Facebook Ads is excellent for brand awareness and retargeting."
    },
    {
      question: "How much should I budget for PPC advertising?",
      answer: "Budget depends on your industry, competition, and goals. We recommend starting with a minimum of $500-1000/month for Google Ads to see meaningful results. Most businesses see the best ROI with budgets between $2000-5000/month."
    },
    {
      question: "How do you measure PPC campaign success?",
      answer: "We track key metrics including click-through rate (CTR), cost per click (CPC), conversion rate, cost per conversion, return on ad spend (ROAS), and overall ROI. We provide detailed monthly reports with actionable insights."
    },
    {
      question: "Can PPC work for local businesses?",
      answer: "Absolutely! Local PPC is highly effective for businesses targeting customers in specific geographic areas. We use location targeting, local keywords, and Google Local Services Ads to drive foot traffic and local leads."
    },
    {
      question: "What happens if I stop running PPC campaigns?",
      answer: "When you pause or stop PPC campaigns, your traffic and leads from paid advertising will stop immediately. However, the traffic you've driven may convert later, and you can always restart campaigns when ready."
    },
    {
      question: "Do you manage landing pages for PPC campaigns?",
      answer: "Yes! We create and optimize landing pages specifically designed for PPC campaigns. A well-designed landing page can significantly improve conversion rates and reduce cost per acquisition."
    },
    {
      question: "How do you optimize PPC campaigns for better results?",
      answer: "We continuously optimize campaigns by refining keywords, improving ad copy, adjusting bids, testing new ad variations, optimizing landing pages, and refining targeting. We use A/B testing and data analysis to improve performance over time."
    },
    {
      question: "Can you help with remarketing campaigns?",
      answer: "Yes! Remarketing is one of the most effective PPC strategies. We create remarketing campaigns that target people who have visited your website but didn't convert, helping you bring them back and complete their purchase."
    },
    {
      question: "How do I get started with your PPC services?",
      answer: "Contact us for a free PPC audit and consultation. We'll analyze your current campaigns, discuss your goals, and recommend the best strategy and budget for your business. We can have your first campaign running within 48 hours."
    }
  ];
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
                  <span className="cs_shape_right"></span>Why Choose Our PPC Services<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_30">Get Immediate Visibility and Results</h2>
                <p className="cs_fs_18 cs_mb_30">
                  While SEO takes months to show results, PPC advertising delivers instant visibility. We help businesses 
                  get in front of their target audience right away, drive qualified traffic, and convert visitors into customers. 
                  Our team has managed 200+ PPC campaigns, generating millions in revenue for our clients.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_choose_content">
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/roi.svg" alt="ROI" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Proven ROI</h3>
                  <p className="cs_choose_subtitle">Average 300% ROI improvement for our clients within 3 months</p>
                </div>
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/traffic.svg" alt="Traffic" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Immediate Results</h3>
                  <p className="cs_choose_subtitle">Start driving qualified traffic and leads within 24-48 hours</p>
                </div>
                <div className="cs_choose_item">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/analytics.svg" alt="Analytics" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Data-Driven Optimization</h3>
                  <p className="cs_choose_subtitle">Continuous optimization based on real-time performance data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* PPC Platforms */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Our PPC Advertising Platforms<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">Complete PPC Management Across All Platforms</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_30">
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/ppc.svg" alt="Google Ads" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Google Ads</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Reach customers searching for your products on Google Search, Display, and YouTube networks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/ppc.svg" alt="Facebook Ads" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Facebook Ads</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Target your ideal customers on Facebook and Instagram with highly targeted ad campaigns.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/ppc.svg" alt="LinkedIn Ads" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">LinkedIn Ads</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Reach B2B audiences and professionals with targeted LinkedIn advertising campaigns.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/ppc.svg" alt="Microsoft Ads" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Microsoft Ads</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Expand your reach on Bing and Yahoo with cost-effective search advertising campaigns.
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
            <h2 className="cs_fs_48 mb-0">Our 6-Step PPC Campaign Process</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">01</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Campaign Audit</h3>
                <p className="cs_process_subtitle">We analyze your current campaigns, competitors, and market opportunities.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">02</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Strategy Development</h3>
                <p className="cs_process_subtitle">We create a comprehensive PPC strategy tailored to your goals and budget.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">03</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Ad Creation</h3>
                <p className="cs_process_subtitle">We create compelling ad copy and visuals that convert visitors into customers.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">04</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Campaign Setup</h3>
                <p className="cs_process_subtitle">We set up and launch campaigns with proper targeting and tracking.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">05</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Monitoring & Optimization</h3>
                <p className="cs_process_subtitle">We continuously monitor performance and optimize campaigns for better results.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">06</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Reporting & Insights</h3>
                <p className="cs_process_subtitle">We provide detailed reports with actionable insights and recommendations.</p>
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
                <h2 className="cs_fs_48 cs_mb_30">Why PPC Advertising Matters for Your Business</h2>
                <p className="cs_fs_18 cs_mb_30">
                  PPC advertising offers immediate results and precise targeting that other marketing channels can&apos;t match. 
                  Here&apos;s how our services can transform your business:
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_benefits_list">
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/visibility.svg" alt="Immediate Visibility" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Immediate Visibility</h4>
                    <p className="cs_benefit_desc">Get your ads in front of potential customers within hours, not months</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/leads.svg" alt="Qualified Leads" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Qualified Leads</h4>
                    <p className="cs_benefit_desc">Target people actively searching for your products or services</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/cost.svg" alt="Budget Control" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Complete Budget Control</h4>
                    <p className="cs_benefit_desc">Set your daily budget and only pay when people click on your ads</p>
                  </div>
                </div>
                <div className="cs_benefit_item">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/analytics.svg" alt="Measurable Results" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Measurable ROI</h4>
                    <p className="cs_benefit_desc">Track every click, conversion, and dollar spent with detailed analytics</p>
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
            <h2 className="cs_fs_48 mb-0">PPC Advertising FAQ</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <FaqAccordion items={faqItems} />
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
            <h2 className="cs_fs_48 mb-0">PPC Campaign Case Studies</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_white_bg cs_p_40" style={{ marginBottom: '30px', padding: '40px 30px' }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15">E-commerce Store Growth</h3>
                <p className="cs_case_challenge cs_mb_20">
                  <strong>Challenge:</strong> An online retailer needed to increase sales and compete with larger competitors in a competitive market.
                </p>
                <p className="cs_case_solution cs_mb_20">
                  <strong>Solution:</strong> We created comprehensive Google Ads campaigns with shopping ads, search ads, and display remarketing campaigns.
                </p>
                <div className="cs_case_results">
                  <strong>Results:</strong>
                  <ul className="cs_mt_10">
                    <li>400% increase in online sales within 3 months</li>
                    <li>250% improvement in ROI</li>
                    <li>60% reduction in cost per acquisition</li>
                    <li>180% increase in qualified website traffic</li>
                  </ul>
                </div>
                <div className="cs_case_timeline cs_mt_20">
                  <strong>Timeline:</strong> 3 months
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_white_bg cs_p_40" style={{ marginBottom: '30px', padding: '40px 30px' }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15">B2B Service Company</h3>
                <p className="cs_case_challenge cs_mb_20">
                  <strong>Challenge:</strong> A B2B service company wanted to generate more qualified leads and reduce their cost per lead.
                </p>
                <p className="cs_case_solution cs_mb_20">
                  <strong>Solution:</strong> We implemented LinkedIn Ads and Google Ads campaigns targeting decision-makers with highly targeted messaging.
                </p>
                <div className="cs_case_results">
                  <strong>Results:</strong>
                  <ul className="cs_mt_10">
                    <li>300% increase in qualified leads</li>
                    <li>50% reduction in cost per lead</li>
                    <li>200% improvement in conversion rate</li>
                    <li>350% increase in ROI</li>
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
              <h2 className="cs_fs_48 cs_fw_bold cs_mb_20 cs_white_color">Ready to Drive Immediate Results with PPC?</h2>
              <p className="cs_fs_18 cs_mb_30 cs_white_color">
                Stop waiting for organic traffic. Our PPC experts can help you get in front of your ideal customers 
                today and start driving qualified leads and sales immediately.
              </p>
              <div className="cs_btn_group cs_mb_40">
                <Link href="/contact" className="cs_btn cs_style_1 cs_fs_14 text-uppercase cs_white_bg cs_accent_color">
                  <span>Get Free PPC Audit</span>
                </Link>
                <Link href="tel:+919266812465" className="cs_btn cs_style_2 cs_fs_14 text-uppercase cs_white_color">
                  <span>Call +91 92668 12465</span>
                </Link>
              </div>
              <p className="cs_fs_16 cs_white_color">
                <strong>Free consultation • Immediate results • Proven ROI</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    </div>
  );
};

export default PPCContent;

