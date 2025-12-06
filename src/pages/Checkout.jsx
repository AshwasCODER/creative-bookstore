import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { useOrder } from '../context/OrderContext';
import './Checkout.css';

const Checkout = () => {
    const { cart, cartTotal } = useCart();
    const { addToast } = useToast();
    const { addOrder } = useOrder();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        country: '',
        shippingMethod: 'standard'
    });

    const shippingCost = formData.shippingMethod === 'express' ? 15.00 : 0;
    const total = cartTotal + shippingCost;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate order processing
        setTimeout(() => {
            const order = {
                items: cart,
                total: total,
                shipping: formData,
                shippingMethod: formData.shippingMethod
            };
            addOrder(order);
            addToast("Order placed successfully! Thank you for your purchase.", "success");
            navigate('/order-tracking');
            // In a real app, we would clear the cart here
        }, 1500);
    };

    if (cart.length === 0) {
        return (
            <div className="empty-container">
                <h2>Your cart is empty</h2>
                <button onClick={() => navigate('/shop')} className="continue-btn">
                    Continue Shopping
                </button>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h1 className="checkout-title">Checkout</h1>

            <div className="checkout-grid">
                {/* Left Column: Delivery Details */}
                <div className="form-section">
                    <h2 className="section-title">Delivery Details</h2>
                    <form id="checkout-form" onSubmit={handleSubmit} className="checkout-form">
                        <div className="form-row">
                            <div className="input-group">
                                <label className="input-label">First Name</label>
                                <div className="input-wrapper">
                                    <i className="fas fa-user input-icon"></i>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="John"
                                    />
                                </div>
                            </div>
                            <div className="input-group">
                                <label className="input-label">Last Name</label>
                                <div className="input-wrapper">
                                    <i className="fas fa-user input-icon"></i>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="input-group">
                            <label className="input-label">Email Address</label>
                            <div className="input-wrapper">
                                <i className="fas fa-envelope input-icon"></i>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="john.doe@example.com"
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label className="input-label">Phone Number</label>
                            <div className="input-wrapper">
                                <i className="fas fa-phone input-icon"></i>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label className="input-label">Address</label>
                            <div className="input-wrapper">
                                <i className="fas fa-map-marker-alt input-icon"></i>
                                <input
                                    type="text"
                                    name="address"
                                    required
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="123 Main St, Apt 4B"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="input-group">
                                <label className="input-label">City</label>
                                <div className="input-wrapper">
                                    <i className="fas fa-city input-icon"></i>
                                    <input
                                        type="text"
                                        name="city"
                                        required
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="New York"
                                    />
                                </div>
                            </div>
                            <div className="input-group">
                                <label className="input-label">Zip Code</label>
                                <div className="input-wrapper">
                                    <i className="fas fa-mail-bulk input-icon"></i>
                                    <input
                                        type="text"
                                        name="zipCode"
                                        required
                                        value={formData.zipCode}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="10001"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="input-group">
                            <label className="input-label">Country</label>
                            <div className="input-wrapper">
                                <i className="fas fa-globe input-icon"></i>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="form-select"
                                    required
                                >
                                    <option value="">Select Country</option>
                                    <option value="US">United States</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="CA">Canada</option>
                                    <option value="AU">Australia</option>
                                </select>
                            </div>
                        </div>

                        <h3 className="section-title" style={{ marginTop: '2rem' }}>Shipping Method</h3>
                        <div className="shipping-options">
                            <label className={`shipping-option ${formData.shippingMethod === 'standard' ? 'selected' : ''}`}>
                                <input
                                    type="radio"
                                    name="shippingMethod"
                                    value="standard"
                                    checked={formData.shippingMethod === 'standard'}
                                    onChange={handleChange}
                                    className="shipping-radio"
                                />
                                <div className="shipping-icon">
                                    <i className="fas fa-truck"></i>
                                </div>
                                <div className="shipping-details">
                                    <div className="shipping-name">Standard Delivery</div>
                                    <div className="shipping-time">5-7 Business Days</div>
                                </div>
                                <div className="shipping-price">Free</div>
                            </label>

                            <label className={`shipping-option ${formData.shippingMethod === 'express' ? 'selected' : ''}`}>
                                <input
                                    type="radio"
                                    name="shippingMethod"
                                    value="express"
                                    checked={formData.shippingMethod === 'express'}
                                    onChange={handleChange}
                                    className="shipping-radio"
                                />
                                <div className="shipping-icon">
                                    <i className="fas fa-plane"></i>
                                </div>
                                <div className="shipping-details">
                                    <div className="shipping-name">Express Delivery</div>
                                    <div className="shipping-time">1-2 Business Days</div>
                                </div>
                                <div className="shipping-price">$15.00</div>
                            </label>
                        </div>
                    </form>
                </div>

                {/* Right Column: Order Summary */}
                <div className="summary-section">
                    <div className="summary-card">
                        <h2 className="summary-title">Order Summary</h2>
                        <div className="summary-items">
                            {cart.map(item => (
                                <div key={item.id} className="summary-item">
                                    <div className="item-details">
                                        <span className="item-name">{item.title}</span>
                                        <span className="item-qty">x {item.quantity}</span>
                                    </div>
                                    <span className="item-cost">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <hr className="divider" />

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
                        </div>

                        <hr className="divider" />

                        <div className="total-row">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>

                        <button type="submit" form="checkout-form" className="place-order-btn">
                            Place Order
                        </button>

                        <p className="secure-text">
                            🔒 Secure Checkout
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
