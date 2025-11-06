"use client";

import Image from 'next/image';
import React, { useEffect } from 'react';

const Contact3 = () => {
    useEffect(() => {
        // Contact form script integration
        const form = document.getElementById('contactForm') as HTMLFormElement;
        const tsInput = document.getElementById('timestamp') as HTMLInputElement;
        const ipInput = document.getElementById('ip') as HTMLInputElement;
        const countryInput = document.getElementById('country') as HTMLInputElement;
        const regionInput = document.getElementById('region') as HTMLInputElement;
        const cityInput = document.getElementById('city') as HTMLInputElement;

        // Helper: promise that rejects after timeout ms
        function timeoutPromise(ms: number, promise: Promise<any>) {
            return Promise.race([
                promise,
                new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms))
            ]);
        }

        const handleSubmit = (e: Event) => {
            // Prevent default form submission completely
            e.preventDefault();
            e.stopPropagation();

            // Timestamp
            const now = new Date();
            if (tsInput) tsInput.value = now.toISOString();

            // Attempt to fetch public IP then geo info
            const ipFetch = timeoutPromise(3000, fetch('https://api.ipify.org?format=json').then(r => {
                if (!r.ok) throw new Error('ip fetch failed');
                return r.json();
            }));

            ipFetch.then(data => {
                const ip = data && data.ip ? data.ip : '';
                if (ipInput) ipInput.value = ip;

                if (!ip) return Promise.resolve();

                // Fetch geo info for IP (short timeout)
                const geoUrl = `https://ipapi.co/${ip}/json/`;
                return timeoutPromise(3000, fetch(geoUrl).then(r => {
                    if (!r.ok) throw new Error('geo fetch failed');
                    return r.json();
                }).then(geo => {
                    if (geo) {
                        if (countryInput) countryInput.value = geo.country_name || geo.country || '';
                        if (regionInput) regionInput.value = geo.region || '';
                        if (cityInput) cityInput.value = geo.city || '';
                    }
                }).catch(() => {
                    // Ignore geo errors
                }));
            }).catch(() => {
                // Ignore ip errors
            }).finally(() => {
                // Submit form via fetch to handle response
                const formData = new FormData(form);
                
                fetch(form.action, {
                    method: 'POST',
                    mode: 'no-cors', // Important for Google Apps Script
                    body: formData
                })
                .then(() => {
                    // Show success message or reload
                    alert('Thank you! Your message has been sent successfully.');
                    window.location.reload();
                })
                .catch(() => {
                    // Even if there's an error, the form likely submitted (no-cors)
                    alert('Thank you! Your message has been sent.');
                    window.location.reload();
                });
            });
        };

        if (form) {
            // Use capture phase to ensure we catch the event first
            form.addEventListener('submit', handleSubmit, true);
            
            // Cleanup function
            return () => {
                form.removeEventListener('submit', handleSubmit, true);
            };
        }
    }, []);

    return (
        <div>
  <div className="cs_height_120 cs_height_lg_80"></div>
    <div className="container-fluid">
      <div className="cs_contact_content">
        <div className="row cs_gap_y_30">
          <div className="col-xl-5 col-lg-6 wow fadeInLeft">
            <div className="cs_contact_desc cs_radius_30">
              <p className="cs_location_subtitle cs_fs_14 cs_bold cs_blue_color text-uppercase mb-0">
                <span></span> Work With Us
              </p>
              <h2 className="cs_location_title cs_fs_36 cs_semibold cs_mb_13">Let&apos;s working together</h2>
              <p className="cs_contact_text cs_mb_22">Thank you for your interest in Attach Web Agency. We are excited to hear from you and discuss...</p>
              <ul className="cs_contact_info_list cs_type_1 cs_mp_0">
                <li>
                  <div className="cs_iconbox cs_style_6">
                    <span className="cs_iconbox_icon cs_center cs_radius_50 position-relative">
                      <Image src="/assets/img/icons/head_phone.svg" alt="img" width={26} height={27}   />
                    </span>
                    <div className="cs_iconbox_info">
                      <p className="cs_mb_1">Call Us For Query</p>
                      <a href="tel:+919266812465" aria-label="Phone call button">+91 92668 12465</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="cs_iconbox cs_style_6">
                    <span className="cs_iconbox_icon cs_center cs_radius_50 position-relative">
                      <Image src="/assets/img/icons/email_2.svg" alt="img" width={26} height={27}   />
                    </span>
                    <div className="cs_iconbox_info">
                      <p className="cs_mb_1">Email Anytime</p>
                      <a href="mailto:info@attechglobal.com" aria-label="Click to send email">info@attechglobal.com</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="cs_iconbox cs_style_6">
                    <span className="cs_iconbox_icon cs_center cs_radius_50 position-relative">
                      <Image src="/assets/img/icons/location.svg" alt="img" width={26} height={27}   />
                    </span>
                    <div className="cs_iconbox_info">
                      <p className="cs_mb_1">Visit Our Office</p>
                      <p className="cs_fs_18 cs_semibold cs_heading_color mb-0">IIIrd Floor, Block B, Ansal Corporate Plaza, T-444, Carterpuri Rd, Block C 2, Palam Vihar, Gurugram, Haryana 122017</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="cs_iconbox cs_style_6">
                    <span className="cs_iconbox_icon cs_center cs_radius_50 position-relative">
                      <Image src="/assets/img/icons/share.svg" alt="img" width={26} height={27}   />
                    </span>
                    <div className="cs_iconbox_info">
                      <p className="cs_mb_1">Connect With Us</p>
                      <div className="cs_social_btns cs_style_1">
                        <a href="https://www.facebook.com/attechglobal" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="cs_center cs_radius_50"><i className="bi bi-facebook"></i></a>
                        <a href="https://www.linkedin.com/in/attechglobal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="cs_center cs_radius_50"><i className="bi bi-linkedin"></i></a>
                        <a href="https://www.instagram.com/at_tech_global/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="cs_center cs_radius_50"><i className="bi bi-instagram"></i></a>
                        <a href="https://www.threads.com/@at_tech_global" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="cs_center cs_radius_50"><i className="bi bi-at"></i></a>
                        <a href="https://wa.me/919266812465" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="cs_center cs_radius_50"><i className="bi bi-whatsapp"></i></a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="cs_contact_form_wrapper cs_type_2 cs_radius_30">
              <form 
                id="contactForm" 
                method="POST"
                action="https://script.google.com/macros/s/AKfycby1DMSEi7g4DQW7CLGgu2n0STRZMKOPgWXq_z_8m4SVXm6VOs2VlNbUnzrYoVVm9uu5BA/exec"
                className="cs_contact_form cs_type_2 row cs_gap_y_20"
              >
                <div className="col-md-6">
                  <input 
                    type="text" 
                    id="name" 
                    name="Name" 
                    className="cs_form_field cs_radius_8 cs_gray_bg_1" 
                    placeholder="Your name*" 
                    required 
                  />
                </div>
                <div className="col-md-6">
                  <input 
                    type="email" 
                    id="email" 
                    name="Email" 
                    className="cs_form_field cs_radius_8 cs_gray_bg_1" 
                    placeholder="Email address*" 
                    required 
                  />
                </div>
                <div className="col-md-6">
                  <input 
                    type="tel" 
                    id="phone" 
                    name="Phone" 
                    className="cs_form_field cs_radius_8 cs_gray_bg_1" 
                    placeholder="Phone number*" 
                    required 
                    pattern="[0-9]{10}" 
                    title="Enter 10-digit phone number" 
                  />
                </div>
                <div className="col-md-6">
                  <select 
                    name="Service" 
                    className="cs_form_field cs_radius_8 cs_gray_bg_1 cs_custom_select" 
                    required 
                  >
                    <option value="">Select service*</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Graphics Design">Graphics Design</option>
                    <option value="Email Marketing">Email Marketing</option>
                    <option value="Whatsapp Marketing">Whatsapp Marketing</option>
                    <option value="SMS Marketing">SMS Marketing</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Website Promotion">Website Promotion</option>
                    <option value="SEO">SEO</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <textarea 
                    name="Message" 
                    rows={7} 
                    className="cs_form_field cs_radius_20 cs_gray_bg_1" 
                    placeholder="Write a message*" 
                    required
                  ></textarea>
                </div>

                {/* Hidden fields: timestamp, ip and geo */}
                <input type="hidden" name="Time/Date" id="timestamp" />
                <input type="hidden" name="IP" id="ip" />
                <input type="hidden" name="Country" id="country" />
                <input type="hidden" name="Region" id="region" />
                <input type="hidden" name="City" id="city" />

                <div className="col-md-12">
                  <button 
                    type="submit" 
                    aria-label="Submit button" 
                    className="cs_btn cs_style_1 cs_fs_14 cs_semibold cs_white_color text-capitalize wow fadeInUp"
                  >
                    <span>Submit Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_80"></div>
        <div className="cs_location_map cs_radius_30 wow fadeInDown">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56102.642665128515!2d76.9447845486328!3d28.497154299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2391b6e20db78d7b%3A0x44ee4f6937c99c2d!2sAT%20Tech%20Global!5e0!3m2!1sen!2sin!4v1759269907072!5m2!1sen!2sin"  loading="lazy"></iframe>
        </div>
      </div>
    </div>
    <div className="cs_height_120 cs_height_lg_80"></div>           
        </div>
    );
};

export default Contact3;