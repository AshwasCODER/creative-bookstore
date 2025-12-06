import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import { ToastContainer } from './components/Toast';
import { OrderProvider } from './context/OrderContext';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import BookDetails from './pages/BookDetails';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import ArticleDetails from './pages/ArticleDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout';
import OrderTracking from './pages/OrderTracking';

const AppContent = () => {
    const { cartCount } = useCart();

    return (
        <Router>
            <Layout cartCount={cartCount}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/article/:id" element={<ArticleDetails />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/book/:id" element={<BookDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/order-tracking" element={<OrderTracking />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </Layout>
        </Router>
    );
};

function App() {
    return (
        <CartProvider>
            <ThemeProvider>
                <OrderProvider>
                    <ToastProvider>
                        <AppContent />
                        <ToastContainer />
                    </ToastProvider>
                </OrderProvider>
            </ThemeProvider>
        </CartProvider>
    );
}

export default App;
