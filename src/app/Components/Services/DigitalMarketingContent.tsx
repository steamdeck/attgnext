"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FaqAccordion from '../Faq/FaqAccordion';

const DigitalMarketingContent = () => {
  const faqItems = [
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "Results vary by channel and strategy. PPC campaigns can show immediate results, while SEO typically takes 3-6 months to show significant improvements. We provide detailed timelines during strategy development."
    },
    {
      question: "What's included in your digital marketing services?",
      answer: "Our services include SEO, PPC advertising, social media marketing, email marketing, content creation, analytics tracking, and monthly reporting. Specific services vary by package."
    },
    {
      question: "How do you measure the success of digital marketing campaigns?",
      answer: "We track key metrics including website traffic, lead generation, conversion rates, ROI, and engagement rates. We provide detailed monthly reports with actionable insights."
    },
    {
      question: "Do you work with businesses in all industries?",
      answer: "Yes, we have experience working with businesses across various industries including healthcare, e-commerce, professional services, technology, and more."
    },
    {
      question: "What's the difference between SEO and PPC?",
      answer: <><Link href="/service/seo">SEO</Link> focuses on improving organic search rankings over time, while <Link href="/service/ppc">PPC</Link> provides immediate visibility through paid advertisements. Both strategies work together for comprehensive digital marketing.</>
    },
    {
      question: "How much should I budget for digital marketing?",
      answer: <>{`Budget depends on your business size, goals, and competition. We recommend allocating 7-10% of your revenue to digital marketing for optimal results. Check our `}<Link href="/pricing">pricing page</Link>{` for package details.`}</>
    },
    {
      question: "Do you provide social media content creation?",
      answer: <>{`Yes, we create engaging social media content including posts, graphics, videos, and stories tailored to your brand and audience across all platforms. Learn more about our `}<Link href="/service/smm">social media marketing services</Link>.</>
    },
    {
      question: "Can you help with local SEO for my business?",
      answer: <>{`Absolutely! We specialize in local SEO strategies including Google My Business optimization, local citations, and location-based content to help you rank in local searches. Our `}<Link href="/service/seo">SEO services</Link>{` include comprehensive local SEO strategies.`}</>
    },
    {
      question: "What reporting do you provide?",
      answer: "We provide detailed monthly reports including performance metrics, campaign results, recommendations, and insights. Reports are customized based on your package and goals."
    },
    {
      question: "How do I get started with your digital marketing services?",
      answer: "Contact us for a free consultation where we'll analyze your current digital presence, discuss your goals, and recommend the best strategy and package for your business."
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
                  <span className="cs_shape_right"></span>Why Choose Our Digital Marketing Services<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_30">Data-Driven Marketing That Delivers Results</h2>
                <p className="cs_fs_18 cs_mb_30">
                  At AT Tech Global, we combine creativity with data-driven strategies to create digital marketing 
                  campaigns that deliver measurable ROI. Our team has helped 300+ businesses increase their 
                  online presence and drive sustainable growth.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_choose_content">
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/analytics.svg" alt="Analytics" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Data-Driven Approach</h3>
                  <p className="cs_choose_subtitle">Every campaign is backed by comprehensive analytics and performance tracking</p>
                </div>
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/roi.svg" alt="ROI" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Proven ROI</h3>
                  <p className="cs_choose_subtitle">Average 250% ROI improvement for our clients within 6 months</p>
                </div>
                <div className="cs_choose_item">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/strategy.svg" alt="Strategy" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Comprehensive Strategy</h3>
                  <p className="cs_choose_subtitle">Multi-channel approach covering all aspects of digital marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Marketing Channels */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Our Digital Marketing Channels<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">Complete Digital Marketing Solutions</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_30">
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/seo.svg" alt="SEO" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">
                    <Link href="/service/seo">SEO Services</Link>
                  </h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Improve your search rankings and drive organic traffic with our comprehensive SEO strategies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/ppc.svg" alt="PPC" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">
                    <Link href="/service/ppc">PPC Advertising</Link>
                  </h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Get immediate results with targeted pay-per-click campaigns on Google and social platforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/social.svg" alt="Social Media" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">
                    <Link href="/service/smm">Social Media Marketing</Link>
                  </h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Build your brand and engage with your audience across all major social media platforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/email.svg" alt="Email Marketing" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">
                    <Link href="/service/email-marketing">Email Marketing</Link>
                  </h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Nurture leads and retain customers with personalized email marketing campaigns.
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
            <h2 className="cs_fs_48 mb-0">Our 6-Step Digital Marketing Process</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">01</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Audit & Analysis</h3>
                <p className="cs_process_subtitle">We analyze your current digital presence, competitors, and market opportunities.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">02</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Strategy Development</h3>
                <p className="cs_process_subtitle">We create a comprehensive digital marketing strategy tailored to your goals.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">03</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Campaign Setup</h3>
                <p className="cs_process_subtitle">We set up and optimize all marketing channels and campaigns.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">04</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Content Creation</h3>
                <p className="cs_process_subtitle">We create engaging content that resonates with your target audience.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">05</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Launch & Monitor</h3>
                <p className="cs_process_subtitle">We launch campaigns and continuously monitor performance metrics.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">06</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Optimize & Scale</h3>
                <p className="cs_process_subtitle">We optimize campaigns based on data and scale successful strategies.</p>
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
                <h2 className="cs_fs_48 cs_mb_30">Why Digital Marketing Matters for Your Business</h2>
                <p className="cs_fs_18 cs_mb_30">
                  Digital marketing is essential for modern businesses. Here&apos;s how our services can transform your business:
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
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Increased Brand Visibility</h4>
                    <p className="cs_benefit_desc">Reach more potential customers across multiple digital channels</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/leads.svg" alt="Lead Generation" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Higher Lead Generation</h4>
                    <p className="cs_benefit_desc">Generate qualified leads through targeted marketing campaigns</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/cost.svg" alt="Cost Effective" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Cost-Effective Marketing</h4>
                    <p className="cs_benefit_desc">Lower cost per acquisition compared to traditional marketing methods</p>
                  </div>
                </div>
                <div className="cs_benefit_item">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/analytics.svg" alt="Measurable Results" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Measurable Results</h4>
                    <p className="cs_benefit_desc">Track and measure every aspect of your marketing performance</p>
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
            <h2 className="cs_fs_48 mb-0">Digital Marketing FAQ</h2>
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
      <section className="cs_gray_bg_2">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Success Stories<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">Digital Marketing Case Studies</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_p_40" style={{ 
                marginBottom: '30px', 
                padding: '40px 30px',
                background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                color: '#333333',
                boxShadow: '0 10px 30px rgba(168, 237, 234, 0.3)'
              }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15" style={{ color: '#1a1a1a' }}>E-commerce Store Growth</h3>
                <p className="cs_case_challenge cs_mb_20" style={{ color: '#444444' }}>
                  <strong style={{ color: '#1a1a1a' }}>Challenge:</strong> An online retailer needed to increase brand awareness and drive more qualified traffic to their website.
                </p>
                <p className="cs_case_solution cs_mb_20" style={{ color: '#444444' }}>
                  <strong style={{ color: '#1a1a1a' }}>Solution:</strong> We implemented a comprehensive digital marketing strategy including <Link href="/service/seo" style={{ color: '#0066cc' }}>SEO</Link>, <Link href="/service/ppc" style={{ color: '#0066cc' }}>PPC</Link>, and <Link href="/service/smm" style={{ color: '#0066cc' }}>social media marketing</Link>.
                </p>
                <div className="cs_case_results" style={{ color: '#444444' }}>
                  <strong style={{ color: '#1a1a1a' }}>Results:</strong>
                  <ul className="cs_mt_10" style={{ color: '#444444' }}>
                    <li>400% increase in organic traffic</li>
                    <li>250% improvement in conversion rate</li>
                    <li>180% increase in online sales</li>
                  </ul>
                </div>
                <div className="cs_case_timeline cs_mt_20" style={{ color: '#444444' }}>
                  <strong style={{ color: '#1a1a1a' }}>Timeline:</strong> 6 months
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_p_40" style={{ 
                marginBottom: '30px', 
                padding: '40px 30px',
                background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
                color: '#333333',
                boxShadow: '0 10px 30px rgba(255, 154, 158, 0.3)'
              }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15" style={{ color: '#1a1a1a' }}>Local Service Business</h3>
                <p className="cs_case_challenge cs_mb_20" style={{ color: '#444444' }}>
                  <strong style={{ color: '#1a1a1a' }}>Challenge:</strong> A local service business wanted to dominate local search results and generate more leads.
                </p>
                <p className="cs_case_solution cs_mb_20" style={{ color: '#444444' }}>
                  <strong style={{ color: '#1a1a1a' }}>Solution:</strong> We focused on <Link href="/service/seo" style={{ color: '#0066cc' }}>local SEO</Link>, Google My Business optimization, and targeted <Link href="/service/ppc" style={{ color: '#0066cc' }}>PPC campaigns</Link>.
                </p>
                <div className="cs_case_results" style={{ color: '#444444' }}>
                  <strong style={{ color: '#1a1a1a' }}>Results:</strong>
                  <ul className="cs_mt_10" style={{ color: '#444444' }}>
                    <li>Top 3 rankings for 15+ local keywords</li>
                    <li>300% increase in local leads</li>
                    <li>150% improvement in phone calls</li>
                  </ul>
                </div>
                <div className="cs_case_timeline cs_mt_20" style={{ color: '#444444' }}>
                  <strong style={{ color: '#1a1a1a' }}>Timeline:</strong> 4 months
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
              <h2 className="cs_fs_48 cs_fw_bold cs_mb_20 cs_white_color">Ready to Transform Your Digital Presence?</h2>
              <p className="cs_fs_18 cs_mb_30 cs_white_color">
                Don&apos;t let your competitors get ahead. Our digital marketing experts can help you 
                dominate your market and drive sustainable business growth.
              </p>
              <div className="cs_btn_group cs_mb_40">
                <Link href="/contact" className="cs_btn cs_style_1 cs_fs_14 text-uppercase cs_white_bg cs_accent_color">
                  <span>Get Free Marketing Audit</span>
                </Link>
                <Link href="/pricing" className="cs_btn cs_style_2 cs_fs_14 text-uppercase cs_white_color">
                  <span>View Pricing</span>
                </Link>
                <Link href="tel:+919266812465" className="cs_btn cs_style_2 cs_fs_14 text-uppercase cs_white_color">
                  <span>Call +91 92668 12465</span>
                </Link>
              </div>
              <p className="cs_fs_16 cs_white_color cs_mb_20">
                <strong>Free consultation • Custom strategy • Guaranteed results</strong>
              </p>
              <p className="cs_fs_14 cs_white_color">
                Explore our <Link href="/service" className="cs_white_color" style={{textDecoration: 'underline'}}>complete service portfolio</Link> or visit our <Link href="/faq" className="cs_white_color" style={{textDecoration: 'underline'}}>FAQ page</Link> for more information.
              </p>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    </div>
  );
};

export default DigitalMarketingContent;
