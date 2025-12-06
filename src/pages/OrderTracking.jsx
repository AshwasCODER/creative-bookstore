import React, { useEffect, useState } from 'react';
import { useOrder } from '../context/OrderContext';
import { Link } from 'react-router-dom';
import { FaBox, FaShippingFast, FaTruck, FaCheckCircle, FaArrowLeft, FaMapMarkerAlt, FaReceipt } from 'react-icons/fa';
import './OrderTracking.css';

const OrderTracking = () => {
    const { currentOrder } = useOrder();
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        if (currentOrder) {
            // Simulate realistic status updates for demo
            const timer1 = setTimeout(() => setActiveStep(1), 2000); // Shipped
            const timer2 = setTimeout(() => setActiveStep(2), 5000); // Out for Delivery
            const timer3 = setTimeout(() => setActiveStep(3), 8000); // Delivered

            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
                clearTimeout(timer3);
            };
        }
    }, [currentOrder]);

    if (!currentOrder) {
        return (
            <div className="empty-tracking-container">
                <div className="empty-content fade-in-up">
                    <div className="empty-icon-wrapper">
                        <FaBox className="empty-icon-bounce" />
                    </div>
                    <h2>No Active Orders</h2>
                    <p>It looks like you haven't placed an order yet. Discover your next favorite book today.</p>
                    <Link to="/shop" className="btn-tracking-primary">
                        Start Shopping
                    </Link>
                </div>
            </div>
        );
    }

    const steps = [
        { label: 'Order Confirmed', icon: <FaReceipt />, sub: 'We have received your order' },
        { label: 'Shipped', icon: <FaBox />, sub: 'On its way to logistics' },
        { label: 'Out for Delivery', icon: <FaTruck />, sub: 'Arriving soon' },
        { label: 'Delivered', icon: <FaCheckCircle />, sub: 'Package at your doorstep' },
    ];

    return (
        <div className="tracking-page-wrapper">
            {/* Background Elements */}
            <div className="tracking-bg-blob blob-top-left"></div>
            <div className="tracking-bg-blob blob-bottom-right"></div>

            <div className="tracking-content-container container">

                {/* Header Section */}
                <div className="tracking-header fade-in-up">
                    <Link to="/shop" className="back-link">
                        <FaArrowLeft /> Back to Shop
                    </Link>
                    <div className="order-status-badge">
                        <span className="status-dot pulsing"></span>
                        {steps[activeStep].label}
                    </div>
                </div>

                <div className="tracking-grid">
                    {/* Left Column: Timeline & Status */}
                    <div className="tracking-main-card glass-panel fade-in-left">
                        <div className="order-summary-header">
                            <h1>Order #{currentOrder.id}</h1>
                            <p className="order-date">Placed on {new Date().toLocaleDateString()}</p>
                        </div>

                        <div className="creative-timeline">
                            <div className="progress-bar-container">
                                <div
                                    className="progress-bar-fill"
                                    style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
                                ></div>
                            </div>

                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`timeline-step ${index <= activeStep ? 'active' : ''}`}
                                >
                                    <div className="timeline-icon-container">
                                        <div className="timeline-icon">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div className="timeline-content">
                                        <h3>{step.label}</h3>
                                        <p>{step.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="delivery-estimate-card">
                            <div className="estimate-icon">
                                <FaShippingFast />
                            </div>
                            <div className="estimate-info">
                                <span>Estimated Delivery</span>
                                <h4>Today by 8:00 PM</h4>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Order Details */}
                    <div className="tracking-details-column fade-in-right">

                        {/* Shipping Address Card */}
                        <div className="details-card glass-panel mb-4">
                            <div className="card-header">
                                <FaMapMarkerAlt className="card-header-icon" />
                                <h3>Shipping Details</h3>
                            </div>
                            <div className="address-content">
                                <h4>{currentOrder.shipping.firstName} {currentOrder.shipping.lastName}</h4>
                                <p>{currentOrder.shipping.address}</p>
                                <p>{currentOrder.shipping.city}, {currentOrder.shipping.zipCode}</p>
                                <p>{currentOrder.shipping.country}</p>
                            </div>
                        </div>

                        {/* Order Items Card */}
                        <div className="details-card glass-panel">
                            <div className="card-header">
                                <FaBox className="card-header-icon" />
                                <h3>Package Contents</h3>
                            </div>
                            <div className="order-items-scroll">
                                {currentOrder.items.map((item, idx) => (
                                    <div key={idx} className="order-item-row">
                                        <div className="item-image-placeholder">
                                            {/* Using a placeholder or book cover if available */}
                                            <img src={item.image || 'https://via.placeholder.com/60'} alt={item.title} />
                                        </div>
                                        <div className="item-details">
                                            <h4>{item.title}</h4>
                                            <div className="item-meta">
                                                <span>Qty: {item.quantity}</span>
                                                <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="order-total-section">
                                <div className="total-row">
                                    <span>Subtotal</span>
                                    <span>${currentOrder.total.toFixed(2)}</span>
                                </div>
                                <div className="total-row">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="divider-dashed"></div>
                                <div className="total-row grand-total">
                                    <span>Total</span>
                                    <span className="gradient-text">${currentOrder.total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderTracking;
