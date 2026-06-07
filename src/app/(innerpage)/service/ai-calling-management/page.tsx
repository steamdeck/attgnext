import { Metadata } from 'next'
import { getMetadata } from '@/lib/jsonDatabase'
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils'
import React from 'react'
import BreadCumb from '../../../Components/Common/BreadCumb'
import Contact2 from '../../../Components/Contact/Contact2'

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/service/ai-calling-management')
  if (metadata) {
    return convertToNextJsMetadata(metadata)
  }
  return {
    title: 'AI Calling Management | AT Tech Global',
    description: 'Transform your customer communications with AI-powered calling solutions. Automate calls, improve response times, and enhance customer satisfaction with intelligent voice assistants.',
    keywords: 'ai calling management, ai voice assistant, automated calling, customer service automation, ai call center, voice bot, intelligent calling system',
  }
}

const page = () => {
  return (
    <>

      <div>
        <BreadCumb
          bgimg="https://placeholdr.ai/d8252233-d15a-413e-a843-4687cfaa85c3/1024/412"
          Title="AI Calling Management"
        />
        
        {/* AI Calling Management Content */}
        <section className="cs_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <h2 className="cs_section_title">Intelligent AI Calling Solutions</h2>
                <p className="cs_section_subtitle">
                  Revolutionize your customer interactions with our cutting-edge AI calling management system. 
                  Automate routine calls, handle inquiries 24/7, and deliver personalized experiences at scale.
                </p>
              </div>
            </div>

            <div className="row mt-5">
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
                    <i className="bi bi-chat-dots-fill"></i>
                  </div>
                  <h4>Natural Language Processing</h4>
                  <p>Advanced NLP capabilities enable our AI to understand context, intent, and sentiment for more human-like conversations.</p>
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
                  <h4>Analytics & Insights</h4>
                  <p>Comprehensive call analytics and reporting to track performance, customer satisfaction, and identify improvement areas.</p>
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

            <div className="row mt-5">
              <div className="col-lg-12">
                <div className="cs_cta_box text-center">
                  <h3>Ready to Transform Your Customer Communications?</h3>
                  <p className="mt-3">
                    Join hundreds of businesses that have revolutionized their calling operations with our AI solutions. 
                    Reduce costs, improve efficiency, and deliver exceptional customer experiences.
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