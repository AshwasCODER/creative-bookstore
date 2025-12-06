import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* About Section */}
                    <div className="footer-section">
                        <h3>About BookStore</h3>
                        <p>
                            We are dedicated to bringing you the best in literature.
                            From timeless classics to modern masterpieces, find your next
                            adventure with us.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon"><FaFacebook /></a>
                            <a href="#" className="social-icon"><FaTwitter /></a>
                            <a href="#" className="social-icon"><FaInstagram /></a>
                            <a href="#" className="social-icon"><FaLinkedin /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="footer-section">
                        <h3>Customer Service</h3>
                        <ul className="footer-links">
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Shipping Policy</a></li>
                            <li><a href="#">Returns & Refunds</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-section">
                        <h3>Newsletter</h3>
                        <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email" className="newsletter-input" />
                            <button type="submit" className="newsletter-btn">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Online Book Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
