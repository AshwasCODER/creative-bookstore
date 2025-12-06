import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaGithub, FaArrowRight } from 'react-icons/fa';
import './Auth.css';

const Signup = () => {
    return (
        <div className="auth-page-wrapper">
            <div className="auth-visual-side signup-mode">
                <div className="auth-bg-blob blob-3"></div>
                <div className="auth-bg-blob blob-4"></div>
                <div className="visual-content">
                    <h1 className="visual-title">Join Us<span className="dot">.</span></h1>
                    <p className="visual-quote">
                        "A room without books is like a body without a soul."
                    </p>
                    <div className="visual-decoration">
                        <div className="decoration-circle"></div>
                        <div className="decoration-line"></div>
                    </div>
                </div>
            </div>

            <div className="auth-form-side">
                <div className="auth-card glass-effect fade-in">
                    <div className="auth-header">
                        <h2>Create Account</h2>
                        <p>Begin your literary journey today</p>
                    </div>

                    <form className="auth-form">
                        <div className="form-group-creative">
                            <FaUser className="input-icon" />
                            <input
                                type="text"
                                className="auth-input-creative"
                                placeholder="Full Name"
                                required
                            />
                        </div>

                        <div className="form-group-creative">
                            <FaEnvelope className="input-icon" />
                            <input
                                type="email"
                                className="auth-input-creative"
                                placeholder="Email Address"
                                required
                            />
                        </div>

                        <div className="form-group-creative">
                            <FaLock className="input-icon" />
                            <input
                                type="password"
                                className="auth-input-creative"
                                placeholder="Create Password"
                                required
                            />
                        </div>

                        <div className="form-group-creative">
                            <FaLock className="input-icon" />
                            <input
                                type="password"
                                className="auth-input-creative"
                                placeholder="Confirm Password"
                                required
                            />
                        </div>

                        <button type="submit" className="auth-btn-creative">
                            Sign Up <FaArrowRight />
                        </button>

                        <div className="auth-divider">
                            <span>or join with</span>
                        </div>

                        <div className="social-login">
                            <button type="button" className="social-btn"><FaGoogle /> Google</button>
                            <button type="button" className="social-btn"><FaGithub /> GitHub</button>
                        </div>
                    </form>

                    <div className="auth-footer-creative">
                        Already have an account?
                        <Link to="/login" className="auth-link-creative">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
