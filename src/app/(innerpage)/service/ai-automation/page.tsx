import { Metadata } from 'next'
import { getMetadata } from '@/lib/jsonDatabase'
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils'
import React from 'react'
import BreadCumb from '../../../Components/Common/BreadCumb'
import Contact2 from '../../../Components/Contact/Contact2'

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/service/ai-automation')
  if (metadata) {
    return convertToNextJsMetadata(metadata)
  }
  return {
    title: 'AI Automation Services | AT Tech Global',
    description: 'Transform your business with comprehensive AI automation solutions. AI calling, WhatsApp automation, email automation, and intelligent chatbots to streamline operations and enhance customer engagement.',
    keywords: 'ai automation, ai calling, ai whatsapp, ai emails, ai chatbot, business automation, customer service automation, voice bot, chatbot automation, email automation, whatsapp business api',
  }
}

const page = () => {
  return (
    <>

      <div>
        <BreadCumb
          bgimg="https://placeholdr.ai/d8252233-d15a-413e-a843-4687cfaa85c3/1024/412"
          Title="AI Automation Services"
        />
        
        {/* AI Automation Introduction */}
        <section className="cs_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <h2 className="cs_section_title">Intelligent AI Automation Solutions</h2>
                <p className="cs_section_subtitle">
                  Revolutionize your business operations with our cutting-edge AI automation services. 
                  From intelligent calling systems to automated messaging and smart chatbots, 
                  we help you deliver exceptional customer experiences at scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Calling Section */}
        <section className="cs_section cs_gray_bg">
          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-lg-6">
                <div className="cs_section_heading">
                  <h3 className="cs_section_title">AI Calling Solutions</h3>
                  <p className="cs_section_subtitle">
                    Transform your customer communications with intelligent voice automation. 
                    Our AI calling systems handle inbound and outbound calls with natural, human-like conversations.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <h4>Automated Outbound Calls</h4>
                  <p>Schedule and execute automated calls for reminders, notifications, surveys, and marketing campaigns with natural-sounding AI voices.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-headset"></i>
                  </div>
                  <h4>Intelligent Call Routing</h4>
                  <p>AI-powered call routing directs customers to the right department or provides instant solutions without human intervention.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-mic-fill"></i>
                  </div>
                  <h4>Voice Recognition</h4>
                  <p>Advanced speech recognition and natural language processing for accurate understanding of customer intent and context.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-clock-fill"></i>
                  </div>
                  <h4>24/7 Availability</h4>
                  <p>Provide round-the-clock customer support without the need for human agents, reducing wait times and improving satisfaction.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                  <h4>Call Analytics</h4>
                  <p>Comprehensive analytics and reporting to track performance, customer satisfaction, and identify improvement areas.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <h4>Compliance & Security</h4>
                  <p>Enterprise-grade security with GDPR, HIPAA, and PCI DSS compliance to protect sensitive customer information.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI WhatsApp Section */}
        <section className="cs_section">
          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-lg-6">
                <div className="cs_section_heading">
                  <h3 className="cs_section_title">AI WhatsApp Automation</h3>
                  <p className="cs_section_subtitle">
                    Leverage the world's most intimate marketing channel with intelligent WhatsApp automation. 
                    Reach customers where they are most active with personalized, automated conversations.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <h4>WhatsApp Business API</h4>
                  <p>Official WhatsApp Business API integration for enterprise-grade messaging with high delivery rates and rich media support.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-robot"></i>
                  </div>
                  <h4>WhatsApp Chatbots</h4>
                  <p>Intelligent chatbots that handle customer queries, process orders, and provide support 24/7 on WhatsApp.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-broadcast"></i>
                  </div>
                  <h4>Broadcast Messaging</h4>
                  <p>Send personalized broadcasts to thousands of customers with segmentation, scheduling, and delivery tracking.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-bell-fill"></i>
                  </div>
                  <h4>Automated Notifications</h4>
                  <p>Send order updates, payment reminders, appointment confirmations, and alerts automatically via WhatsApp.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-cart-check"></i>
                  </div>
                  <h4>WhatsApp Commerce</h4>
                  <p>Enable customers to browse products, place orders, and make payments directly through WhatsApp conversations.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-people-fill"></i>
                  </div>
                  <h4>Multi-Agent Support</h4>
                  <p>Multiple agents can manage conversations from a shared inbox with smart assignment and collaboration features.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Emails Section */}
        <section className="cs_section cs_gray_bg">
          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-lg-6">
                <div className="cs_section_heading">
                  <h3 className="cs_section_title">AI Email Automation</h3>
                  <p className="cs_section_subtitle">
                    Supercharge your email marketing with AI-powered automation. 
                    Deliver personalized, timely emails that convert with intelligent segmentation and behavioral triggers.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <h4>Smart Email Campaigns</h4>
                  <p>AI-optimized email campaigns that automatically adjust send times, subject lines, and content for maximum engagement.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-lightning-fill"></i>
                  </div>
                  <h4>Behavioral Triggers</h4>
                  <p>Automatically send emails based on user actions like cart abandonment, browsing behavior, and purchase history.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-person-check"></i>
                  </div>
                  <h4>Personalization at Scale</h4>
                  <p>Dynamic content that adapts to each recipient using AI-driven insights and customer data for truly personalized experiences.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-reply-fill"></i>
                  </div>
                  <h4>Smart Auto-Replies</h4>
                  <p>AI-generated email responses that understand context and provide relevant, professional replies to common inquiries.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-funnel-fill"></i>
                  </div>
                  <h4>Lead Nurturing</h4>
                  <p>Automated email sequences that guide prospects through the sales funnel with targeted, timely communications.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-graph-up"></i>
                  </div>
                  <h4>Performance Analytics</h4>
                  <p>AI-powered analytics that predict engagement, optimize send times, and provide actionable insights for better results.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Chatbots Section */}
        <section className="cs_section">
          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-lg-6">
                <div className="cs_section_heading">
                  <h3 className="cs_section_title">AI Chatbot Solutions</h3>
                  <p className="cs_section_subtitle">
                    Deploy intelligent chatbots across all your digital channels. 
                    From websites to messaging apps, our AI chatbots deliver instant, accurate responses 24/7.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-globe"></i>
                  </div>
                  <h4>Website Chatbots</h4>
                  <p>Engage website visitors with AI chatbots that answer questions, collect leads, and guide users through your site.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-messenger"></i>
                  </div>
                  <h4>Multi-Platform Bots</h4>
                  <p>Deploy chatbots across Facebook Messenger, Instagram, Telegram, Slack, and other popular messaging platforms.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-filter-circle-fill"></i>
                  </div>
                  <h4>Lead Qualification</h4>
                  <p>AI chatbots that qualify leads through intelligent conversations, scoring prospects and routing hot leads to sales teams.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-translate"></i>
                  </div>
                  <h4>Multi-Language Support</h4>
                  <p>Chatbots that communicate in multiple languages, breaking down barriers and serving global customers effectively.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-plug-fill"></i>
                  </div>
                  <h4>CRM Integration</h4>
                  <p>Seamless integration with your CRM, helpdesk, and other business tools for a unified customer experience.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="cs_service_item">
                  <div className="cs_service_icon">
                    <i className="bi bi-cpu-fill"></i>
                  </div>
                  <h4>Continuous Learning</h4>
                  <p>Self-improving AI that learns from every interaction, getting smarter and more accurate over time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cs_section cs_gray_bg">
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-12">
                <div className="cs_cta_box text-center">
                  <h3>Ready to Transform Your Business with AI?</h3>
                  <p className="mt-3">
                    Join hundreds of businesses that have revolutionized their operations with our AI automation solutions. 
                    Reduce costs, improve efficiency, and deliver exceptional customer experiences across all channels.
                  </p>
                  <a href="/contact" className="cs_btn cs_style_1 mt-4">Get Started Today</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ padding: '60px 40px' }}>
          <Contact2 />
        </div>
      </div>
    </>
  )
}

export default page