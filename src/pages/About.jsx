import React from 'react';
import { FaBookOpen, FaGlobe, FaUsers, FaAward, FaHeart, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
    return (
        <div className="about-page-premium">
            {/* Hero Section */}
            <div className="about-hero-premium">
                <div className="about-hero-overlay"></div>
                <div className="container about-hero-content-premium">
                    <span className="hero-subtitle-premium">Our Journey</span>
                    <h1 className="hero-title-premium">Crafting Stories,<br />Building Communities</h1>
                    <p className="hero-desc-premium">We are more than just a bookstore. We are a sanctuary for dreamers, thinkers, and storytellers.</p>
                </div>
            </div>

            <div className="container">
                {/* Story Section */}
                <section className="story-section-premium">
                    <div className="story-grid">
                        <div className="story-content">
                            <span className="section-tag-premium">Since 2010</span>
                            <h2 className="story-title">A Decade of Literary Excellence</h2>
                            <p className="story-text">
                                Welcome to BookStore, your premier destination for literary excellence.
                                We believe in the power of stories to transform lives and connect people across cultures and generations.
                            </p>
                            <p className="story-text">
                                Founded by a group of passionate bibliophiles, our mission has always been simple:
                                to curate the finest collection of books and create a community where readers can thrive.
                                Whether you're looking for a rare first edition or the latest bestseller, we're here to guide you.
                            </p>
                            <div className="story-stats">
                                <div className="stat-box">
                                    <span className="stat-num">50k+</span>
                                    <span className="stat-label">Books Sold</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-num">10k+</span>
                                    <span className="stat-label">Happy Readers</span>
                                </div>
                            </div>
                        </div>
                        <div className="story-image-wrapper">
                            <div className="story-img-bg"></div>
                            <img
                                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1000"
                                alt="Bookstore Interior"
                                className="story-image-premium"
                            />
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="values-section-premium">
                    <div className="section-header-center">
                        <span className="section-tag-premium">Our Values</span>
                        <h2>What Drives Us Forward</h2>
                    </div>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon-box">
                                <FaHeart />
                            </div>
                            <h3>Passion for Books</h3>
                            <p>We don't just sell books; we love them. Every title is hand-picked with care and enthusiasm.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon-box">
                                <FaUsers />
                            </div>
                            <h3>Community First</h3>
                            <p>We believe in building a space where readers can connect, share, and grow together.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon-box">
                                <FaLightbulb />
                            </div>
                            <h3>Innovation</h3>
                            <p>Constantly evolving to bring you the best reading experience, both online and offline.</p>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="mission-section-premium">
                    <div className="mission-grid">
                        <div className="mission-card dark-card">
                            <FaBookOpen className="mission-icon" />
                            <h3>Our Mission</h3>
                            <p>To inspire and empower people through the magic of storytelling, making literature accessible to everyone, everywhere.</p>
                        </div>
                        <div className="mission-card light-card">
                            <FaGlobe className="mission-icon" />
                            <h3>Our Vision</h3>
                            <p>To become the world's most beloved literary hub, fostering a global community of lifelong learners and dreamers.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
