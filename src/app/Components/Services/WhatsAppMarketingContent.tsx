import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhatsAppMarketingContent = () => {
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
                  <span className="cs_shape_right"></span>Why Choose Our WhatsApp Marketing Services<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_30">Connect Directly with Your Customers</h2>
                <p className="cs_fs_18 cs_mb_30">
                  WhatsApp has over 2 billion users worldwide and is the most personal communication channel available. 
                  We help businesses leverage WhatsApp Business to build direct relationships, provide instant customer 
                  support, and drive sales through personalized messaging. Our team has managed 300+ WhatsApp Business 
                  accounts, achieving 98% message open rates and 45% click-through rates.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_choose_content">
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/engagement.svg" alt="High Engagement" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">98% Open Rate</h3>
                  <p className="cs_choose_subtitle">WhatsApp messages have an average 98% open rate compared to 20% for emails</p>
                </div>
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/support.svg" alt="Customer Support" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Instant Customer Support</h3>
                  <p className="cs_choose_subtitle">Provide real-time customer support and build trust with instant responses</p>
                </div>
                <div className="cs_choose_item">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/automation.svg" alt="Automation" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Automated Messaging</h3>
                  <p className="cs_choose_subtitle">Automate welcome messages, order updates, and customer inquiries 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* WhatsApp Marketing Services */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Our WhatsApp Marketing Services<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">Complete WhatsApp Business Solutions</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_30">
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/whatsapp.svg" alt="WhatsApp Business" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">WhatsApp Business Setup</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Set up and verify your WhatsApp Business account with business profile, catalog, and quick replies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/broadcast.svg" alt="Broadcast" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Broadcast Messaging</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Send promotional messages, announcements, and updates to your entire customer base at once.
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
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Chatbot & Automation</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Automated responses, order tracking, FAQ handling, and customer support chatbots for instant replies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/support.svg" alt="Support" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Customer Support</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Multi-agent customer support setup with conversation management and response time optimization.
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
            <h2 className="cs_fs_48 mb-0">Our 6-Step WhatsApp Marketing Process</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">01</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Business Account Setup</h3>
                <p className="cs_process_subtitle">We set up and verify your WhatsApp Business account with complete business profile.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">02</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Strategy Development</h3>
                <p className="cs_process_subtitle">We create a comprehensive WhatsApp marketing strategy tailored to your goals.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">03</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Contact List Building</h3>
                <p className="cs_process_subtitle">We help you build and organize your customer contact list for targeted messaging.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">04</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Automation Setup</h3>
                <p className="cs_process_subtitle">We configure automated messages, chatbots, and quick replies for efficiency.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">05</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Campaign Execution</h3>
                <p className="cs_process_subtitle">We launch and manage your WhatsApp marketing campaigns with optimal timing.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">06</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Monitoring & Optimization</h3>
                <p className="cs_process_subtitle">We monitor performance, response rates, and continuously optimize campaigns.</p>
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
                <h2 className="cs_fs_48 cs_mb_30">Why WhatsApp Marketing Matters for Your Business</h2>
                <p className="cs_fs_18 cs_mb_30">
                  WhatsApp marketing offers direct, personal communication with your customers that no other channel can match. 
                  Here&apos;s how our WhatsApp marketing services can transform your business:
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_benefits_list">
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/engagement.svg" alt="High Engagement" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Exceptional Open Rates</h4>
                    <p className="cs_benefit_desc">98% message open rate compared to 20% for emails - your messages get seen</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/support.svg" alt="Customer Support" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Instant Customer Support</h4>
                    <p className="cs_benefit_desc">Provide real-time support and build customer trust with instant responses</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/automation.svg" alt="Cost Effective" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Cost-Effective Marketing</h4>
                    <p className="cs_benefit_desc">Reach customers directly without expensive advertising costs - WhatsApp is free to use</p>
                  </div>
                </div>
                <div className="cs_benefit_item">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/analytics.svg" alt="Personal Touch" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Personal Customer Connection</h4>
                    <p className="cs_benefit_desc">Build personal relationships with customers through one-on-one messaging and conversations</p>
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
            <h2 className="cs_fs_48 mb-0">WhatsApp Marketing FAQ</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="cs_faq_wrap">
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What is WhatsApp Business and how is it different from regular WhatsApp?
                  </div>
                  <div className="cs_faq_answer">
                    WhatsApp Business is a free app designed specifically for businesses. It includes features like business 
                    profile, catalog, quick replies, automated messages, labels, and business statistics. Unlike personal 
                    WhatsApp, it allows businesses to showcase products, automate responses, and manage customer communications professionally.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Can I send marketing messages to customers who haven&apos;t contacted me first?
                  </div>
                  <div className="cs_faq_answer">
                    Yes, but only to customers who have opted in to receive messages from you. WhatsApp has strict policies 
                    about unsolicited messages. We help you set up proper opt-in mechanisms and ensure compliance with 
                    WhatsApp&apos;s terms of service to avoid account restrictions.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What&apos;s the difference between WhatsApp Business API and WhatsApp Business App?
                  </div>
                  <div className="cs_faq_answer">
                    WhatsApp Business App is free and suitable for small businesses with basic needs. WhatsApp Business API 
                    is for larger businesses requiring advanced features like automation, multiple agents, integration with CRM 
                    systems, and higher message volumes. We help you choose the right solution based on your needs.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How can WhatsApp marketing help my local business?
                  </div>
                  <div className="cs_faq_answer">
                    WhatsApp is perfect for local businesses! You can send location-based offers, share store updates, 
                    provide instant customer support, send order confirmations, and build personal relationships with 
                    local customers. It&apos;s especially effective for restaurants, retail stores, service providers, 
                    and e-commerce businesses.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Can you automate WhatsApp messages?
                  </div>
                  <div className="cs_faq_answer">
                    Yes! We set up automated welcome messages, order confirmations, shipping updates, abandoned cart reminders, 
                    birthday greetings, and FAQ responses. Automation helps you provide instant responses 24/7 and improves 
                    customer experience while saving time.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How do I build a WhatsApp contact list?
                  </div>
                  <div className="cs_faq_answer">
                    We help you build your contact list through website opt-in forms, QR codes, social media campaigns, 
                    in-store sign-ups, and by collecting numbers during purchases. We ensure all contacts have opted in 
                    to comply with WhatsApp policies and regulations.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Can I integrate WhatsApp with my existing CRM or e-commerce platform?
                  </div>
                  <div className="cs_faq_answer">
                    Yes! We can integrate WhatsApp Business API with popular platforms like Shopify, WooCommerce, Magento, 
                    Salesforce, HubSpot, and custom CRM systems. This allows automatic order updates, customer data sync, 
                    and streamlined customer communication.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How do you measure WhatsApp marketing success?
                  </div>
                  <div className="cs_faq_answer">
                    We track key metrics including message delivery rate, read receipts, response time, click-through rates, 
                    conversion rates, customer satisfaction, and revenue generated from WhatsApp campaigns. We provide 
                    detailed monthly reports with insights and recommendations.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What happens if I send too many messages?
                  </div>
                  <div className="cs_faq_answer">
                    WhatsApp monitors message quality and spam reports. Sending too many unsolicited messages or having 
                    high spam rates can result in account restrictions or bans. We help you maintain healthy messaging 
                    practices, proper opt-ins, and quality content to avoid issues.
                  </div>
                </div>
                <div className="cs_faq_item">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How do I get started with your WhatsApp marketing services?
                  </div>
                  <div className="cs_faq_answer">
                    Contact us for a free WhatsApp marketing consultation. We&apos;ll assess your needs, recommend the right 
                    WhatsApp Business solution (App or API), and help you set up your account. We can have your WhatsApp 
                    marketing campaign running within a week.
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
            <h2 className="cs_fs_48 mb-0">WhatsApp Marketing Case Studies</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_white_bg cs_p_40" style={{ marginBottom: '30px', padding: '40px 30px' }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15">E-commerce Store Growth</h3>
                <p className="cs_case_challenge cs_mb_20">
                  <strong>Challenge:</strong> An online fashion retailer needed to reduce cart abandonment and improve customer engagement through direct communication.
                </p>
                <p className="cs_case_solution cs_mb_20">
                  <strong>Solution:</strong> We implemented WhatsApp Business API with automated order confirmations, shipping updates, abandoned cart reminders, and customer support chatbot.
                </p>
                <div className="cs_case_results">
                  <strong>Results:</strong>
                  <ul className="cs_mt_10">
                    <li>40% reduction in cart abandonment rate</li>
                    <li>65% increase in repeat customer purchases</li>
                    <li>98% message open rate</li>
                    <li>50% improvement in customer satisfaction scores</li>
                  </ul>
                </div>
                <div className="cs_case_timeline cs_mt_20">
                  <strong>Timeline:</strong> 3 months
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_white_bg cs_p_40" style={{ marginBottom: '30px', padding: '40px 30px' }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15">Local Restaurant Chain</h3>
                <p className="cs_case_challenge cs_mb_20">
                  <strong>Challenge:</strong> A restaurant chain wanted to improve order management, provide instant customer support, and send promotional offers to local customers.
                </p>
                <p className="cs_case_solution cs_mb_20">
                  <strong>Solution:</strong> We set up WhatsApp Business with automated order confirmations, menu sharing, table booking system, and promotional broadcast campaigns.
                </p>
                <div className="cs_case_results">
                  <strong>Results:</strong>
                  <ul className="cs_mt_10">
                    <li>35% increase in online orders through WhatsApp</li>
                    <li>60% reduction in customer support response time</li>
                    <li>45% increase in repeat customers</li>
                    <li>80% customer satisfaction with WhatsApp ordering</li>
                  </ul>
                </div>
                <div className="cs_case_timeline cs_mt_20">
                  <strong>Timeline:</strong> 2 months
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
              <h2 className="cs_fs_48 cs_fw_bold cs_mb_20 cs_white_color">Ready to Connect with Your Customers on WhatsApp?</h2>
              <p className="cs_fs_18 cs_mb_30 cs_white_color">
                Start building direct relationships with your customers through WhatsApp Business. Our WhatsApp marketing 
                experts can help you set up automated campaigns, provide instant customer support, and drive sales.
              </p>
              <div className="cs_btn_group cs_mb_40">
                <Link href="/contact" className="cs_btn cs_style_1 cs_fs_14 text-uppercase cs_white_bg cs_accent_color">
                  <span>Get Free Consultation</span>
                </Link>
                <Link href="tel:+919266812465" className="cs_btn cs_style_2 cs_fs_14 text-uppercase cs_white_color">
                  <span>Call +91 92668 12465</span>
                </Link>
              </div>
              <p className="cs_fs_16 cs_white_color">
                <strong>Free setup • 98% open rate • Instant support</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    </div>
  );
};

export default WhatsAppMarketingContent;

