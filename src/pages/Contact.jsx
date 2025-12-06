import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-pro-wrapper">
            <div className="pro-bg-pattern"></div>

            <div className="container pro-container">
                <div className="pro-header">
                    <h1 className="pro-title">Get in Touch</h1>
                    <p className="pro-subtitle">We are here to help and answer any question you might have.</p>
                </div>

                <div className="pro-card">
                    {/* Left: Form Section */}
                    <div className="pro-form-section">
                        <h2>Send us a Message</h2>
                        <form className="pro-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-row">
                                <div className="form-group-pro">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" id="firstName" placeholder="John" required />
                                </div>
                                <div className="form-group-pro">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" id="lastName" placeholder="Doe" required />
                                </div>
                            </div>

                            <div className="form-group-pro">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="john@example.com" required />
                            </div>

                            <div className="form-group-pro">
                                <label htmlFor="subject">Subject</label>
                                <select id="subject" className="pro-select">
                                    <option value="">Select a topic</option>
                                    <option value="support">Customer Support</option>
                                    <option value="sales">Sales Inquiry</option>
                                    <option value="feedback">Feedback</option>
                                </select>
                            </div>

                            <div className="form-group-pro">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
                            </div>

                            <button type="submit" className="btn-pro-submit">
                                Send Message <FaPaperPlane />
                            </button>
                        </form>
                    </div>

                    {/* Right: Info Section */}
                    <div className="pro-info-section">
                        <div className="info-block">
                            <h3>Contact Information</h3>
                            <p className="info-text">Fill up the form and our team will get back to you within 24 hours.</p>

                            <ul className="info-list">
                                <li>
                                    <div className="icon-wrapper"><FaPhoneAlt /></div>
                                    <div className="info-content">
                                        <span className="label">Phone</span>
                                        <span className="value">+1 (555) 123-4567</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon-wrapper"><FaEnvelope /></div>
                                    <div className="info-content">
                                        <span className="label">Email</span>
                                        <span className="value">support@bookstore.com</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon-wrapper"><FaMapMarkerAlt /></div>
                                    <div className="info-content">
                                        <span className="label">Address</span>
                                        <span className="value">123 Literary Lane, NY 10012</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon-wrapper"><FaClock /></div>
                                    <div className="info-content">
                                        <span className="label">Business Hours</span>
                                        <span className="value">Mon - Fri: 9AM - 6PM</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="map-placeholder">
                            <span>Map Projection</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
