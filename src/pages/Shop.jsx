import React, { useState, useMemo } from 'react';
import { books } from '../data/books';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { FaShoppingCart, FaSearch, FaFilter } from 'react-icons/fa';
import './Shop.css';

const Shop = () => {
    const { addToCart } = useCart();
    const { addToast } = useToast();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('featured');

    // Get unique categories
    const categories = ['All', ...new Set(books.map(book => book.category))];

    // Get featured books (top rated)
    const featuredBooks = useMemo(() => {
        return [...books].sort((a, b) => b.rating - a.rating).slice(0, 3);
    }, []);

    const filteredBooks = useMemo(() => {
        let result = [...books];

        if (searchQuery) {
            result = result.filter(book =>
                book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.author.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedCategory !== 'All') {
            result = result.filter(book => book.category === selectedCategory);
        }

        switch (sortBy) {
            case 'price-low':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                result.sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }

        return result;
    }, [searchQuery, selectedCategory, sortBy]);

    const handleAddToCart = (e, book) => {
        e.preventDefault(); // Prevent navigation if clicking the button
        addToCart(book);
        addToast(`Added "${book.title}" to cart!`, "success");
    };

    return (
        <div className="shop-container">
            {/* Featured Section */}
            <section className="shop-featured">
                <div className="featured-header">
                    <h2>Curator's Picks</h2>
                    <p>Top rated selections you shouldn't miss</p>
                </div>
                <div className="featured-grid">
                    {featuredBooks.map(book => (
                        <div key={book.id} className="featured-card">
                            <div className="featured-image-wrapper">
                                <img src={book.image} alt={book.title} />
                                <div className="featured-overlay">
                                    <button
                                        className="btn-quick-add"
                                        onClick={(e) => handleAddToCart(e, book)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="featured-info">
                                <span className="featured-badge">Top Rated</span>
                                <h3>{book.title}</h3>
                                <p className="featured-author">{book.author}</p>
                                <p className="featured-price">${book.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="shop-main-content">
                <div className="shop-header">
                    <h1 className="shop-title">All Products</h1>
                    <p className="shop-subtitle">Browse our complete catalog of books</p>
                </div>

                <div className="filters-bar">
                    <div className="filter-group search-group">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search by title or author..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                    </div>

                    <div className="filter-actions">
                        <div className="filter-group">
                            <FaFilter className="filter-icon" />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="category-select"
                            >
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        <div className="filter-group">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="sort-select"
                            >
                                <option value="featured">Sort by: Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Top Rated</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="products-grid">
                    {filteredBooks.map(book => (
                        <Link to={`/book/${book.id}`} key={book.id} className="product-card">
                            <div className="product-image-container">
                                <img src={book.image} alt={book.title} className="product-image" />
                                {book.rating >= 4.8 && <span className="badge-hot">Hot</span>}
                                <button
                                    className="add-btn"
                                    onClick={(e) => handleAddToCart(e, book)}
                                >
                                    <FaShoppingCart />
                                </button>
                            </div>
                            <div className="product-info">
                                <div className="product-meta">
                                    <span className="product-category">{book.category}</span>
                                </div>
                                <h3 className="product-title">{book.title}</h3>
                                <p className="product-author">by {book.author}</p>
                                <div className="product-footer">
                                    <span className="product-price">${book.price}</span>
                                    <span className="product-rating">★ {book.rating}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {filteredBooks.length === 0 && (
                    <div className="no-results">
                        <h3>No books found</h3>
                        <p>Try adjusting your search or filters</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shop;
