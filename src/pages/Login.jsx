import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaGoogle, FaGithub, FaArrowRight } from 'react-icons/fa';
import './Auth.css';

const Login = () => {
    return (
        <div className="auth-page-wrapper">
            <div className="auth-visual-side">
                <div className="auth-bg-blob blob-1"></div>
                <div className="auth-bg-blob blob-2"></div>
                <div className="visual-content">
                    <h1 className="visual-title">Welcome Back<span className="dot">.</span></h1>
                    <p className="visual-quote">
                        "There is no friend as loyal as a book."
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
                        <h2>Sign In</h2>
                        <p>Access your personal library</p>
                    </div>

                    <form className="auth-form">
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
                                placeholder="Password"
                                required
                            />
                        </div>

                        <div className="form-options">
                            <label className="checkbox-container">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                Remember me
                            </label>
                            <Link to="/forgot-password" class="forgot-link">Forgot Password?</Link>
                        </div>

                        <button type="submit" className="auth-btn-creative">
                            Sign In <FaArrowRight />
                        </button>

                        <div className="auth-divider">
                            <span>or continue with</span>
                        </div>

                        <div className="social-login">
                            <button type="button" className="social-btn"><FaGoogle /> Google</button>
                            <button type="button" className="social-btn"><FaGithub /> GitHub</button>
                        </div>
                    </form>

                    <div className="auth-footer-creative">
                        Don't have an account?
                        <Link to="/signup" className="auth-link-creative">Create Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
