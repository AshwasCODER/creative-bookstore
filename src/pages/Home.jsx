import React from 'react';
import { Link } from 'react-router-dom';
import { FaShippingFast, FaUndo, FaHeadset, FaArrowRight, FaStar, FaShoppingCart } from 'react-icons/fa';
import { books } from '../data/books';
import { articles } from '../data/articles';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import './Home.css';

const Home = () => {
    const { addToCart } = useCart();
    const { addToast } = useToast();
    const featuredBooks = books.slice(0, 3);
    const bestSellers = books.filter(book => book.rating >= 4.8).slice(0, 4);

    // Get unique categories and one book image for each
    const categories = [...new Set(books.map(book => book.category))].map(category => {
        const bookInCategory = books.find(book => book.category === category);
        return {
            name: category,
            image: bookInCategory?.image || 'https://via.placeholder.com/300'
        };
    });

    return (

        <div className="home-container">
            {/* Premium Hero Section - Split Layout */}
            <section className="hero-section">
                <div className="hero-bg-blobs">
                    <div className="hero-blob blob-1"></div>
                    <div className="hero-blob blob-2"></div>
                    <div className="hero-blob blob-3"></div>
                </div>
                <div className="hero-bg-overlay"></div>

                <div className="container hero-container-inner">
                    <div className="hero-content fade-in-up">
                        <div className="hero-badge-wrapper">
                            <span className="hero-badge">New Collection 2025</span>
                        </div>
                        <h1 className="hero-title">
                            Stories That <br />
                            <span className="text-gradient-animated">Ignite Your Soul</span>
                        </h1>
                        <p className="hero-subtitle">
                            Immerse yourself in a world of literary excellence. From timeless classics to modern masterpieces, find the book that speaks to you.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/shop" className="btn btn-primary btn-lg glow-effect">
                                Start Exploring <FaArrowRight className="btn-icon" />
                            </Link>
                            <Link to="/about" className="btn btn-outline btn-lg glass-effect">
                                Our Vision
                            </Link>
                        </div>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number count-up">50k+</span>
                                <span className="stat-label">Books Sold</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-number">4.9</span>
                                <span className="stat-label">Rating</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Support</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual fade-in-right">
                        <div className="hero-visual-circle-bg"></div>
                        <div className="hero-book-card floating-animation-3d">
                            <img src={featuredBooks[0]?.image || 'https://via.placeholder.com/400x600'} alt="Featured Book" className="hero-book-image" />
                            <div className="hero-book-shine"></div>
                        </div>

                        {/* Floating elements */}
                        <div className="floating-card float-card-1">
                            <span className="float-icon">🏆</span>
                            <span className="float-text">Best Seller</span>
                        </div>
                        <div className="floating-card float-card-2">
                            <span className="float-icon">⭐️</span>
                            <span className="float-text">Top Rated</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Creative Features Ticker - Infinite Scroll */}
            <div className="features-ticker-wrapper">
                <div className="ticker-track">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="ticker-content-group">
                            <div className="ticker-item">
                                <span className="ticker-icon"><FaShippingFast /></span>
                                <span className="ticker-text">Fast Worldwide Shipping</span>
                            </div>
                            <span className="ticker-separator">•</span>
                            <div className="ticker-item">
                                <span className="ticker-icon"><FaUndo /></span>
                                <span className="ticker-text">30-Day Money Back</span>
                            </div>
                            <span className="ticker-separator">•</span>
                            <div className="ticker-item">
                                <span className="ticker-icon"><FaHeadset /></span>
                                <span className="ticker-text">24/7 Premium Support</span>
                            </div>
                            <span className="ticker-separator">•</span>
                            <div className="ticker-item">
                                <span className="ticker-icon"><FaStar /></span>
                                <span className="ticker-text">5-Star Rated Store</span>
                            </div>
                            <span className="ticker-separator">•</span>
                        </div>
                    ))}
                </div>
            </div>



            {/* Creative Best Sellers - 3D Tilt Cards */}
            <section className="best-sellers-creative">
                <div className="creative-bg-blob"></div>
                <div className="container">
                    <div className="section-header-creative">
                        <h2 className="creative-title">Trending Now</h2>
                        <Link to="/shop" className="creative-view-all">View All <FaArrowRight /></Link>
                    </div>

                    <div className="books-3d-grid">
                        {bestSellers.map((book, idx) => (
                            <div key={book.id} className="book-3d-card">
                                <div className="book-3d-content">
                                    <div className="book-3d-front">
                                        <div className="book-3d-image-box">
                                            <img src={book.image} alt={book.title} />
                                            <div className="book-3d-rank">#{idx + 1}</div>
                                        </div>
                                        <div className="book-3d-info">
                                            <h3>{book.title}</h3>
                                            <p>{book.author}</p>
                                            <div className="book-3d-price">${book.price.toFixed(2)}</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Spotlight Showcase - Featured Section */}
            <section className="featured-section-spotlight">
                <div className="spotlight-bg-text">FEATURED</div>
                <div className="container">
                    <div className="spotlight-grid">
                        <div className="spotlight-image-container">
                            <img
                                src={featuredBooks[0]?.image || 'https://via.placeholder.com/400x600'}
                                alt="Featured Book"
                                className="spotlight-book-img"
                            />
                        </div>
                        <div className="spotlight-content">
                            <span className="spotlight-tag">Editor's Choice</span>
                            <h2 className="spotlight-title">{featuredBooks[0]?.title || "Featured Title"}</h2>
                            <p className="spotlight-author">by {featuredBooks[0]?.author || "Author Name"}</p>
                            <p className="spotlight-desc">
                                Experience a narrative that transcends time. This masterpiece has captivated readers worldwide with its compelling characters and intricate plot. A must-read for any true literary enthusiast.
                            </p>
                            <div className="spotlight-actions">
                                <button
                                    className="btn-spotlight-primary"
                                    onClick={() => {
                                        if (featuredBooks[0]) {
                                            addToCart(featuredBooks[0]);
                                            addToast("Added to cart", "success");
                                        }
                                    }}
                                >
                                    Add to Cart <FaShoppingCart />
                                </button>
                                <Link to={`/shop?id=${featuredBooks[0]?.id}`} className="btn-spotlight-outline">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter / CTA Section */}
            <section className="cta-section-premium">
                <div className="cta-content">
                    <h2>Join Our Literary Community</h2>
                    <p>Get exclusive access to new releases, author interviews, and special offers.</p>
                    <div className="cta-form">
                        <input type="email" placeholder="Enter your email address" />
                        <button className="btn btn-primary">Subscribe</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
