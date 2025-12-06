import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';
import { useTheme } from '../context/ThemeContext';
import { FaShoppingCart, FaUser, FaSearch, FaBookOpen, FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ cartCount }) => {
    const location = useLocation();
    const { orders } = useOrder();
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <FaBookOpen /> <span>BookStore</span>
                </Link>

                <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
                    <Link to="/shop" className={`nav-link ${isActive('/shop')}`} onClick={closeMenu}>Shop</Link>
                    {orders.length > 0 && (
                        <Link to="/order-tracking" className={`nav-link ${isActive('/order-tracking')}`} onClick={closeMenu}>View Order</Link>
                    )}
                    <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMenu}>About</Link>
                    <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>Contact</Link>

                    <button className="mobile-theme-toggle" onClick={() => { toggleTheme(); closeMenu(); }}>
                        {theme === 'light' ? <span>Switch to Dark Mode <FaMoon /></span> : <span>Switch to Light Mode <FaSun /></span>}
                    </button>
                </div>

                <div className="navbar-actions">
                    <form className="search-bar" onSubmit={(e) => {
                        e.preventDefault();
                        if (searchQuery.trim()) {
                            window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
                        }
                    }}>
                        <FaSearch color="#7f8c8d" />
                        <input
                            type="text"
                            placeholder="Search books..."
                            className="search-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>

                    <button className="icon-btn theme-toggle" onClick={toggleTheme}>
                        {theme === 'light' ? <FaMoon /> : <FaSun />}
                    </button>

                    <Link to="/login" className="icon-btn">
                        <FaUser />
                    </Link>

                    <Link to="/cart" className="icon-btn">
                        <FaShoppingCart />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>

                    <button className="hamburger-menu" onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
