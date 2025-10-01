import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SEOContent = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="cs_heading_bg">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="cs_fs_48 cs_fw_bold cs_mb_20 wow fadeInUp">
                SEO Services That Dominate Search Rankings
              </h1>
              <p className="cs_fs_18 cs_mb_30 wow fadeInUp">
                Boost your online visibility and drive organic traffic with our comprehensive SEO services. 
                We help businesses rank higher on Google and attract more qualified customers.
              </p>
              <div className="cs_btn_group cs_mb_40 wow fadeInUp">
                <Link href="/contact" className="cs_btn cs_style_1 cs_fs_14 text-uppercase">
                  <span>Get Free SEO Audit</span>
                </Link>
                <Link href="/project" className="cs_btn cs_style_2 cs_fs_14 text-uppercase">
                  <span>View SEO Results</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Service Overview */}
      <section className="cs_gray_bg_2">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_section_heading cs_style_1">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                  <span className="cs_shape_right"></span>Why Choose Our SEO Services<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_30">Proven SEO Strategies That Deliver Results</h2>
                <p className="cs_fs_18 cs_mb_30">
                  At Digitom, we specialize in white-hat SEO techniques that improve your search rankings 
                  and drive sustainable organic traffic. Our team has helped 200+ businesses achieve 
                  top 3 rankings for their target keywords.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_choose_content">
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/ranking.svg" alt="Higher Rankings" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Higher Search Rankings</h3>
                  <p className="cs_choose_subtitle">Average 300% improvement in search rankings within 6 months</p>
                </div>
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/traffic.svg" alt="Organic Traffic" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Increased Organic Traffic</h3>
                  <p className="cs_choose_subtitle">Average 250% increase in organic traffic for our clients</p>
                </div>
                <div className="cs_choose_item">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/white-hat.svg" alt="White Hat SEO" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">White-Hat Techniques</h3>
                  <p className="cs_choose_subtitle">Ethical SEO practices that build long-term, sustainable results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* SEO Services */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Our SEO Services<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">Comprehensive SEO Solutions</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_30">
            <div className="col-lg-4 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/on-page.svg" alt="On-Page SEO" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">On-Page SEO</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Optimize your website's content, structure, and technical elements for better search rankings.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/off-page.svg" alt="Off-Page SEO" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Off-Page SEO</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Build high-quality backlinks and improve your website's authority and credibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/technical.svg" alt="Technical SEO" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Technical SEO</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Optimize your website's technical aspects including speed, mobile-friendliness, and crawlability.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/local.svg" alt="Local SEO" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Local SEO</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Dominate local search results and attract customers in your geographic area.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/content.svg" alt="Content SEO" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Content SEO</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Create SEO-optimized content that ranks well and engages your target audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/ecommerce.svg" alt="E-commerce SEO" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">E-commerce SEO</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Specialized SEO strategies for online stores to increase product visibility and sales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* SEO Process */}
      <section className="cs_gray_bg_2">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Our SEO Process<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">How We Improve Your Search Rankings</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">01</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">SEO Audit</h3>
                <p className="cs_process_subtitle">Comprehensive analysis of your current SEO performance and opportunities.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">02</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Keyword Research</h3>
                <p className="cs_process_subtitle">Identify high-value keywords that your target audience is searching for.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">03</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Strategy Development</h3>
                <p className="cs_process_subtitle">Create a customized SEO strategy based on your business goals and competition.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">04</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Implementation</h3>
                <p className="cs_process_subtitle">Execute on-page, off-page, and technical SEO optimizations.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">05</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Monitoring</h3>
                <p className="cs_process_subtitle">Track performance metrics and adjust strategies based on results.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">06</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Optimization</h3>
                <p className="cs_process_subtitle">Continuously optimize and scale successful strategies for better results.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* SEO Benefits */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_section_heading cs_style_1">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                  <span className="cs_shape_right"></span>SEO Benefits<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_30">Why SEO is Essential for Your Business</h2>
                <p className="cs_fs_18 cs_mb_30">
                  Search Engine Optimization is crucial for modern businesses. Here's how our SEO services 
                  can transform your online presence and drive sustainable growth.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_benefits_list">
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/visibility.svg" alt="Increased Visibility" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Increased Online Visibility</h4>
                    <p className="cs_benefit_desc">Rank higher in search results and get discovered by more potential customers</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/traffic.svg" alt="Organic Traffic" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Higher Quality Traffic</h4>
                    <p className="cs_benefit_desc">Attract visitors who are actively searching for your products or services</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/cost.svg" alt="Cost Effective" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Cost-Effective Marketing</h4>
                    <p className="cs_benefit_desc">Lower cost per acquisition compared to paid advertising campaigns</p>
                  </div>
                </div>
                <div className="cs_benefit_item">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/trust.svg" alt="Trust & Credibility" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Enhanced Credibility</h4>
                    <p className="cs_benefit_desc">Higher search rankings build trust and credibility with potential customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>


      {/* FAQ Section */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Frequently Asked Questions<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">SEO Services FAQ</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="cs_faq_wrap">
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How long does it take to see SEO results?
                  </div>
                  <div className="cs_faq_answer">
                    SEO is a long-term strategy. You can expect to see initial improvements in 3-6 months, with significant results typically appearing in 6-12 months. The timeline depends on your current website state and competition level.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What's the difference between on-page and off-page SEO?
                  </div>
                  <div className="cs_faq_answer">
                    On-page SEO involves optimizing elements on your website (content, meta tags, structure), while off-page SEO focuses on external factors like backlinks, social signals, and online reputation.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Do you guarantee first page rankings?
                  </div>
                  <div className="cs_faq_answer">
                    While we can't guarantee specific rankings (Google's algorithm is constantly changing), we guarantee our best efforts using proven white-hat techniques. We focus on improving your overall search visibility and organic traffic.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How do you choose keywords to target?
                  </div>
                  <div className="cs_faq_answer">
                    We conduct comprehensive keyword research considering search volume, competition level, relevance to your business, and commercial intent. We focus on keywords that will drive qualified traffic and conversions.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What's included in your SEO reporting?
                  </div>
                  <div className="cs_faq_answer">
                    Our reports include keyword rankings, organic traffic growth, backlink acquisition, technical SEO improvements, and actionable recommendations. Reports are customized based on your package level.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Do you work with businesses in all industries?
                  </div>
                  <div className="cs_faq_answer">
                    Yes, we have experience working with businesses across various industries including healthcare, legal, e-commerce, professional services, and more. Each industry requires a tailored SEO approach.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How much should I budget for SEO services?
                  </div>
                  <div className="cs_faq_answer">
                    SEO budgets vary based on business size, competition, and goals. We recommend allocating 5-10% of your marketing budget to SEO. Our packages start at $999/month for local businesses.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What's the difference between local and national SEO?
                  </div>
                  <div className="cs_faq_answer">
                    Local SEO targets customers in your geographic area using location-based keywords and Google My Business optimization. National SEO targets broader audiences across the country or globally.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Do you provide content creation services?
                  </div>
                  <div className="cs_faq_answer">
                    Yes, we offer SEO-optimized content creation as part of our higher-tier packages. This includes blog posts, service pages, and other content designed to rank well and engage your audience.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How do you measure SEO success?
                  </div>
                  <div className="cs_faq_answer">
                    We track key metrics including organic traffic growth, keyword rankings, conversion rates, and ROI. Success is measured by improvements in these metrics over time.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Can you help with technical SEO issues?
                  </div>
                  <div className="cs_faq_answer">
                    Absolutely! We provide comprehensive technical SEO services including site speed optimization, mobile-friendliness, crawlability improvements, and fixing technical issues that impact rankings.
                  </div>
                </div>
                <div className="cs_faq_item">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What happens if I stop SEO services?
                  </div>
                  <div className="cs_faq_answer">
                    SEO requires ongoing effort to maintain and improve rankings. If you stop SEO services, your rankings may decline over time as competitors continue optimizing and Google's algorithm evolves.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Case Studies */}
      <section className="cs_gray_bg_2">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Success Stories<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">SEO Case Studies</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_white_bg cs_p_40">
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15">Local Law Firm SEO</h3>
                <p className="cs_case_challenge cs_mb_20">
                  <strong>Challenge:</strong> A local law firm was struggling to rank for competitive legal keywords and attract clients online.
                </p>
                <p className="cs_case_solution cs_mb_20">
                  <strong>Solution:</strong> We implemented a comprehensive local SEO strategy including Google My Business optimization, local citations, and content marketing.
                </p>
                <div className="cs_case_results">
                  <strong>Results:</strong>
                  <ul className="cs_mt_10">
                    <li>Top 3 rankings for 12+ local keywords</li>
                    <li>400% increase in organic traffic</li>
                    <li>250% increase in qualified leads</li>
                  </ul>
                </div>
                <div className="cs_case_timeline cs_mt_20">
                  <strong>Timeline:</strong> 8 months
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_white_bg cs_p_40">
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15">E-commerce Store SEO</h3>
                <p className="cs_case_challenge cs_mb_20">
                  <strong>Challenge:</strong> An online retailer needed to improve product visibility and compete with larger e-commerce sites.
                </p>
                <p className="cs_case_solution cs_mb_20">
                  <strong>Solution:</strong> We focused on e-commerce SEO including product page optimization, category structure, and technical SEO improvements.
                </p>
                <div className="cs_case_results">
                  <strong>Results:</strong>
                  <ul className="cs_mt_10">
                    <li>300% increase in organic product page traffic</li>
                    <li>180% improvement in conversion rate</li>
                    <li>Top 5 rankings for 25+ product keywords</li>
                  </ul>
                </div>
                <div className="cs_case_timeline cs_mt_20">
                  <strong>Timeline:</strong> 6 months
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
              <h2 className="cs_fs_48 cs_fw_bold cs_mb_20 cs_white_color">Ready to Dominate Search Rankings?</h2>
              <p className="cs_fs_18 cs_mb_30 cs_white_color">
                Don't let your competitors outrank you. Our SEO experts can help you achieve 
                top search rankings and drive sustainable organic traffic to your website.
              </p>
              <div className="cs_btn_group cs_mb_40">
                <Link href="/contact" className="cs_btn cs_style_1 cs_fs_14 text-uppercase cs_white_bg cs_accent_color">
                  <span>Get Free SEO Audit</span>
                </Link>
                <Link href="tel:+1234567890" className="cs_btn cs_style_2 cs_fs_14 text-uppercase cs_white_color">
                  <span>Call (123) 456-7890</span>
                </Link>
              </div>
              <p className="cs_fs_16 cs_white_color">
                <strong>Free audit • Custom strategy • Guaranteed improvements</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    </div>
  );
};

export default SEOContent;
