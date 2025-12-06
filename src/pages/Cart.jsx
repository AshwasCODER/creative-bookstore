import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="cart-container empty-cart">
                <FaShoppingCart className="empty-icon" />
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added any books yet.</p>
                <Link to="/shop" className="shop-btn">Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h1 className="cart-title">Shopping Cart</h1>

            <div className="cart-content">
                <div className="cart-items">
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} className="item-image" />
                            <div className="item-details">
                                <h3 className="item-title">{item.title}</h3>
                                <p className="item-price">${item.price}</p>
                            </div>
                            <div className="item-actions">
                                <div className="quantity-controls">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="qty-btn"
                                    >
                                        <FaMinus size={10} />
                                    </button>
                                    <span className="qty-value">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="qty-btn"
                                    >
                                        <FaPlus size={10} />
                                    </button>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="remove-btn"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h2 className="summary-title">Order Summary</h2>
                    <div className="summary-row">
                        <span>Subtotal ({cart.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="total-row">
                        <span>Total</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <button onClick={() => navigate('/checkout')} className="checkout-btn">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
