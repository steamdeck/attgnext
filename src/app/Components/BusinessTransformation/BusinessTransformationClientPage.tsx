"use client";
import React, { useState, useRef } from 'react';
import SEOHead from '../../Components/Common/SEOHead';

const BusinessTransformationClientPage = () => {
    const [formState, setFormState] = useState({
        Name: '',
        Phone: '',
        Company: ''
    });
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const servicesList = [
        'Website Development',
        'Mobile Application Development',
        'Increase Sales',
        'Grow Business',
        'Increase Website Traffic',
        'Web Application Development',
        'Learning Management System (LMS)',
        'Customer Relationship Management (CRM)',
        'Enterprise Resource Planning (ERP)'
    ];

    const handleServiceToggle = (service: string) => {
        setSelectedServices(prev => 
            prev.includes(service) 
                ? prev.filter(s => s !== service)
                : [...prev, service]
        );
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData();
        formData.append('Name', formState.Name);
        formData.append('Phone', formState.Phone);
        formData.append('Company', formState.Company);
        formData.append('Service', selectedServices.join(', '));
        formData.append('DatenTime', new Date().toLocaleString());

        try {
            await fetch('https://script.google.com/macros/s/AKfycbzfo4CAIezfV9hPE0FOyEy9dQAI91bJXMvTuGJ46u06AMHkrDbUcnPRSq-gs1cL43k/exec', {
                method: 'POST',
                body: formData
            });
            setIsSuccess(true);
            setFormState({ Name: '', Phone: '', Company: '' });
            setSelectedServices([]);
            setTimeout(() => setIsSuccess(false), 5000);
        } catch (error) {
            alert('There was an error submitting the form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <SEOHead 
                route="/business-transformation"
            />
            <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', padding: '40px 20px'}}>
                <div className="w-100" style={{maxWidth: '600px'}}>
                    {/* Logo */}
                    <div className="text-center mb-4">
                        <h1 style={{color: '#fff', fontSize: '28px', fontWeight: 'bold'}}>
                            AT Tech <span style={{color: '#FF4782'}}>Global</span>
                        </h1>
                    </div>

                    {/* Form Container */}
                    <div style={{
                        backgroundColor: '#fff',
                        padding: '40px',
                        borderRadius: '16px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                    }}>
                        <h2 style={{textAlign: 'center', color: '#1a1a2e', marginBottom: '8px', fontSize: '24px', fontWeight: 'bold'}}>
                            Get Free Consultation
                        </h2>
                        <p style={{textAlign: 'center', color: '#666', marginBottom: '30px', fontSize: '14px'}}>
                            Fill out the form below and our team will contact you soon!
                        </p>

                        {/* Success Message */}
                        {isSuccess && (
                            <div style={{
                                backgroundColor: '#d4edda',
                                color: '#155724',
                                padding: '15px',
                                borderRadius: '8px',
                                marginBottom: '20px',
                                border: '1px solid #c3e6cb',
                                textAlign: 'center'
                            }}>
                                Your message has been successfully submitted. Our team will contact you soon!
                            </div>
                        )}

                        <form ref={formRef} onSubmit={handleSubmit}>
                            {/* Spinner */}
                            {isSubmitting && (
                                <div style={{textAlign: 'center', marginBottom: '20px'}}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        border: '4px solid #e0e0e0',
                                        borderTopColor: '#FF4782',
                                        borderRadius: '50%',
                                        animation: 'spin 1s linear infinite',
                                        margin: '0 auto'
                                    }}></div>
                                    <style>{`
                                        @keyframes spin {
                                            0% { transform: rotate(0deg); }
                                            100% { transform: rotate(360deg); }
                                        }
                                    `}</style>
                                </div>
                            )}

                            {/* Input Fields */}
                            <div style={{marginBottom: '20px'}}>
                                <input 
                                    type="text" 
                                    name="Name" 
                                    value={formState.Name}
                                    onChange={handleInputChange}
                                    placeholder="Full Name" 
                                    required 
                                    disabled={isSubmitting}
                                    style={{
                                        width: '100%',
                                        padding: '14px 16px',
                                        borderRadius: '8px',
                                        border: '1px solid #ddd',
                                        fontSize: '15px',
                                        outline: 'none',
                                        transition: 'border-color 0.3s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#FF4782'}
                                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                />
                            </div>

                            <div style={{marginBottom: '20px'}}>
                                <input 
                                    type="tel" 
                                    name="Phone" 
                                    value={formState.Phone}
                                    onChange={handleInputChange}
                                    placeholder="Phone Number" 
                                    required 
                                    pattern="[0-9]{10}"
                                    title="Enter a valid 10-digit phone number"
                                    disabled={isSubmitting}
                                    style={{
                                        width: '100%',
                                        padding: '14px 16px',
                                        borderRadius: '8px',
                                        border: '1px solid #ddd',
                                        fontSize: '15px',
                                        outline: 'none',
                                        transition: 'border-color 0.3s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#FF4782'}
                                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                />
                            </div>

                            <div style={{marginBottom: '25px'}}>
                                <input 
                                    type="text" 
                                    name="Company" 
                                    value={formState.Company}
                                    onChange={handleInputChange}
                                    placeholder="Company Name" 
                                    disabled={isSubmitting}
                                    style={{
                                        width: '100%',
                                        padding: '14px 16px',
                                        borderRadius: '8px',
                                        border: '1px solid #ddd',
                                        fontSize: '15px',
                                        outline: 'none',
                                        transition: 'border-color 0.3s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#FF4782'}
                                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                />
                            </div>

                            {/* Services Checkboxes */}
                            <div style={{marginBottom: '25px'}}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '15px',
                                    fontWeight: '600',
                                    color: '#1a1a2e',
                                    fontSize: '15px'
                                }}>
                                    Select Services (you can select multiple):
                                </label>
                                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
                                    {servicesList.map((service, index) => (
                                        <div 
                                            key={index}
                                            onClick={() => !isSubmitting && handleServiceToggle(service)}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                padding: '12px',
                                                borderRadius: '8px',
                                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                                backgroundColor: selectedServices.includes(service) ? '#FF4782' : '#f8f9fa',
                                                border: selectedServices.includes(service) ? '1px solid #FF4782' : '1px solid #e0e0e0',
                                                transition: 'all 0.2s ease'
                                            }}
                                        >
                                            <input 
                                                type="checkbox" 
                                                checked={selectedServices.includes(service)}
                                                onChange={() => handleServiceToggle(service)}
                                                disabled={isSubmitting}
                                                style={{
                                                    marginRight: '10px',
                                                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                                    accentColor: '#FF4782'
                                                }}
                                            />
                                            <span style={{
                                                fontSize: '13px',
                                                color: selectedServices.includes(service) ? '#fff' : '#333',
                                                fontWeight: selectedServices.includes(service) ? '500' : 'normal'
                                            }}>
                                                {service}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                style={{
                                    width: '100%',
                                    padding: '16px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    backgroundColor: isSubmitting ? '#ccc' : '#FF4782',
                                    color: '#fff',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                    transition: 'background-color 0.3s',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}
                            >
                                {isSubmitting ? 'Sending...' : 'Send'}
                            </button>
                        </form>
                    </div>

                    {/* Footer Text */}
                    <p style={{textAlign: 'center', color: 'rgba(255,255,255,0.6)', marginTop: '30px', fontSize: '13px'}}>
                        © 2025 AT Tech Global. All rights reserved.
                    </p>
                </div>
            </div>
        </>
    );
};

export default BusinessTransformationClientPage;
