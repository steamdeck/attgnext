import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EmailMarketingContent = () => {
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
                  <span className="cs_shape_right"></span>Why Choose Our Email Marketing Services<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_30">Build Strong Customer Relationships and Drive Sales</h2>
                <p className="cs_fs_18 cs_mb_30">
                  Email marketing remains one of the most effective digital marketing channels, delivering exceptional ROI 
                  and direct customer engagement. We help businesses build meaningful relationships with their audience, 
                  nurture leads, and drive conversions through strategic email campaigns. Our team has managed 500+ 
                  email campaigns, generating millions in revenue for our clients.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_choose_content">
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/roi.svg" alt="ROI" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Exceptional ROI</h3>
                  <p className="cs_choose_subtitle">Average ROI of $42 for every $1 spent on email marketing campaigns</p>
                </div>
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/engagement.svg" alt="Engagement" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">High Engagement</h3>
                  <p className="cs_choose_subtitle">Average 25% open rate and 4% click-through rate across all campaigns</p>
                </div>
                <div className="cs_choose_item">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/automation.svg" alt="Automation" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Automated Workflows</h3>
                  <p className="cs_choose_subtitle">Automated email sequences that nurture leads and convert customers 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Email Marketing Types */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Our Email Marketing Services<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">Complete Email Marketing Solutions</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_30">
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/email.svg" alt="Newsletter" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Newsletter Campaigns</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Regular newsletters that keep your audience engaged and informed about your products and services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/automation.svg" alt="Automation" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Email Automation</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Automated welcome series, abandoned cart emails, and nurture sequences that convert leads into customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/segmentation.svg" alt="Segmentation" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">List Segmentation</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Targeted campaigns for specific customer segments based on behavior, preferences, and purchase history.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/template.svg" alt="Templates" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Email Design</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Beautiful, responsive email templates that look great on all devices and drive engagement.
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
            <h2 className="cs_fs_48 mb-0">Our 6-Step Email Marketing Process</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">01</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Strategy & Planning</h3>
                <p className="cs_process_subtitle">We analyze your audience, goals, and create a comprehensive email marketing strategy.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">02</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">List Building</h3>
                <p className="cs_process_subtitle">We help you grow your email list with opt-in forms, lead magnets, and landing pages.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">03</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Segmentation</h3>
                <p className="cs_process_subtitle">We segment your email list based on demographics, behavior, and preferences.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">04</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Email Design</h3>
                <p className="cs_process_subtitle">We create beautiful, responsive email templates that reflect your brand identity.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">05</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Campaign Execution</h3>
                <p className="cs_process_subtitle">We launch and manage your email campaigns with proper timing and personalization.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">06</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Analysis & Optimization</h3>
                <p className="cs_process_subtitle">We analyze performance metrics and continuously optimize campaigns for better results.</p>
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
                <h2 className="cs_fs_48 cs_mb_30">Why Email Marketing Matters for Your Business</h2>
                <p className="cs_fs_18 cs_mb_30">
                  Email marketing offers direct communication with your customers and the highest ROI of any digital marketing channel. 
                  Here&apos;s how our email marketing services can transform your business:
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_benefits_list">
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/roi.svg" alt="High ROI" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Highest ROI</h4>
                    <p className="cs_benefit_desc">Email marketing delivers an average ROI of $42 for every $1 spent</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/engagement.svg" alt="Direct Communication" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Direct Customer Communication</h4>
                    <p className="cs_benefit_desc">Reach your customers directly in their inbox with personalized messages</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/automation.svg" alt="Automation" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">24/7 Automation</h4>
                    <p className="cs_benefit_desc">Automated email sequences work around the clock to nurture leads and convert customers</p>
                  </div>
                </div>
                <div className="cs_benefit_item">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/analytics.svg" alt="Measurable Results" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Measurable Results</h4>
                    <p className="cs_benefit_desc">Track opens, clicks, conversions, and revenue with detailed analytics and reporting</p>
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
            <h2 className="cs_fs_48 mb-0">Email Marketing FAQ</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="cs_faq_wrap">
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Why is email marketing still relevant in 2024?
                  </div>
                  <div className="cs_faq_answer">
                    Email marketing remains one of the most effective digital marketing channels with the highest ROI. 
                    With over 4 billion email users worldwide, email provides direct access to your customers&apos; inboxes. 
                    It offers personalization, automation, and measurable results that social media and other channels can&apos;t match.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How do I build an email list?
                  </div>
                  <div className="cs_faq_answer">
                    We help you build your email list through multiple strategies including opt-in forms on your website, 
                    lead magnets (free downloads, guides, discounts), landing pages, social media campaigns, and in-store sign-ups. 
                    We focus on building a quality list of engaged subscribers who want to hear from you.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What&apos;s a good email open rate?
                  </div>
                  <div className="cs_faq_answer">
                    Industry average open rates vary by industry, but generally range from 15-25%. Our clients typically 
                    see 20-30% open rates through proper segmentation, personalization, and optimal send times. We continuously 
                    optimize subject lines and email content to improve open rates.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How often should I send emails to my subscribers?
                  </div>
                  <div className="cs_faq_answer">
                    Email frequency depends on your industry, audience, and content type. Generally, we recommend 1-2 emails 
                    per week for newsletters and promotional emails. For automated sequences, emails are sent based on subscriber 
                    behavior. We analyze your audience&apos;s engagement patterns to determine the optimal frequency.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What is email automation and how does it work?
                  </div>
                  <div className="cs_faq_answer">
                    Email automation sends targeted emails based on triggers like subscriber actions, dates, or behaviors. 
                    Examples include welcome series for new subscribers, abandoned cart emails, birthday emails, and post-purchase 
                    follow-ups. Automation saves time and ensures timely, relevant communication with your audience.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How do you ensure emails don&apos;t end up in spam folders?
                  </div>
                  <div className="cs_faq_answer">
                    We maintain high deliverability rates through proper authentication (SPF, DKIM, DMARC), clean email lists, 
                    avoiding spam trigger words, using reputable email service providers, and following best practices. We also 
                    monitor sender reputation and engagement rates to ensure your emails reach the inbox.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Can you help with email design and templates?
                  </div>
                  <div className="cs_faq_answer">
                    Yes! We create beautiful, responsive email templates that look great on all devices. Our designs are 
                    mobile-friendly, brand-consistent, and optimized for engagement. We also design custom templates for 
                    specific campaigns, promotions, and automated sequences.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What email marketing platforms do you work with?
                  </div>
                  <div className="cs_faq_answer">
                    We work with all major email marketing platforms including Mailchimp, Constant Contact, Sendinblue, 
                    ConvertKit, Klaviyo, and others. We can help you choose the right platform for your needs or work with 
                    your existing platform.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How do you measure email marketing success?
                  </div>
                  <div className="cs_faq_answer">
                    We track key metrics including open rates, click-through rates, conversion rates, unsubscribe rates, 
                    revenue per email, and overall ROI. We provide detailed monthly reports with actionable insights and 
                    recommendations for improvement.
                  </div>
                </div>
                <div className="cs_faq_item">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How do I get started with your email marketing services?
                  </div>
                  <div className="cs_faq_answer">
                    Contact us for a free email marketing consultation. We&apos;ll audit your current email strategy, discuss 
                    your goals, and recommend the best approach for your business. We can have your first campaign running 
                    within a week.
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
            <h2 className="cs_fs_48 mb-0">Email Marketing Case Studies</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_white_bg cs_p_40" style={{ marginBottom: '30px', padding: '40px 30px' }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15">E-commerce Store Growth</h3>
                <p className="cs_case_challenge cs_mb_20">
                  <strong>Challenge:</strong> An online retailer needed to increase customer retention and repeat purchases while reducing cart abandonment.
                </p>
                <p className="cs_case_solution cs_mb_20">
                  <strong>Solution:</strong> We implemented automated abandoned cart emails, welcome series, and segmented promotional campaigns based on purchase history.
                </p>
                <div className="cs_case_results">
                  <strong>Results:</strong>
                  <ul className="cs_mt_10">
                    <li>45% increase in email-generated revenue within 6 months</li>
                    <li>35% reduction in cart abandonment rate</li>
                    <li>28% improvement in email open rates</li>
                    <li>52% increase in repeat customer purchases</li>
                  </ul>
                </div>
                <div className="cs_case_timeline cs_mt_20">
                  <strong>Timeline:</strong> 6 months
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_white_bg cs_p_40" style={{ marginBottom: '30px', padding: '40px 30px' }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15">B2B Service Company</h3>
                <p className="cs_case_challenge cs_mb_20">
                  <strong>Challenge:</strong> A B2B service company wanted to nurture leads and convert prospects into customers through email marketing.
                </p>
                <p className="cs_case_solution cs_mb_20">
                  <strong>Solution:</strong> We created a comprehensive email nurture sequence, educational newsletter series, and targeted lead segmentation campaigns.
                </p>
                <div className="cs_case_results">
                  <strong>Results:</strong>
                  <ul className="cs_mt_10">
                    <li>38% increase in lead-to-customer conversion rate</li>
                    <li>42% improvement in email engagement rates</li>
                    <li>55% increase in qualified leads generated from email</li>
                    <li>3x ROI on email marketing investment</li>
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
              <h2 className="cs_fs_48 cs_fw_bold cs_mb_20 cs_white_color">Ready to Grow Your Business with Email Marketing?</h2>
              <p className="cs_fs_18 cs_mb_30 cs_white_color">
                Start building stronger customer relationships and driving sales through strategic email marketing. 
                Our email marketing experts can help you create campaigns that engage, convert, and deliver exceptional ROI.
              </p>
              <div className="cs_btn_group cs_mb_40">
                <Link href="/contact" className="cs_btn cs_style_1 cs_fs_14 text-uppercase cs_white_bg cs_accent_color">
                  <span>Get Free Email Audit</span>
                </Link>
                <Link href="tel:+919266812465" className="cs_btn cs_style_2 cs_fs_14 text-uppercase cs_white_color">
                  <span>Call +91 92668 12465</span>
                </Link>
              </div>
              <p className="cs_fs_16 cs_white_color">
                <strong>Free consultation • Proven ROI • Automated campaigns</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    </div>
  );
};

export default EmailMarketingContent;

