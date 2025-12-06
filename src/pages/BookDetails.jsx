import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { books } from '../data/books';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { FaStar, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';
import './BookDetails.css';

const BookDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const { addToast } = useToast();

    const book = books.find(b => b.id === parseInt(id));

    if (!book) {
        return <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>Book not found</div>;
    }

    const handleAddToCart = () => {
        addToCart(book);
        addToast(`Added "${book.title}" to cart!`, "success");
    };

    return (
        <div className="book-details-container">
            <Link to="/shop" className="back-btn">
                <FaArrowLeft /> Back to Shop
            </Link>

            <div className="details-grid">
                <div className="image-section">
                    <img src={book.image} alt={book.title} className="book-cover" />
                </div>

                <div className="info-section">
                    <span className="book-category">{book.category}</span>
                    <h1 className="book-title">{book.title}</h1>
                    <p className="book-author">by {book.author}</p>

                    <div className="rating-row">
                        <div className="stars">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} color={i < Math.floor(book.rating) ? "#f1c40f" : "#ddd"} />
                            ))}
                        </div>
                        <span className="review-count">({book.reviews} reviews)</span>
                    </div>

                    <div className="price-row">
                        <span className="price">${book.price}</span>
                        <button onClick={handleAddToCart} className="add-to-cart-btn">
                            <FaShoppingCart /> Add to Cart
                        </button>
                    </div>

                    <div className="description-section">
                        <h3 className="description-title">Description</h3>
                        <p className="description-text">{book.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
