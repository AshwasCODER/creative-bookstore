import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, cartCount }) => {
    return (
        <div style={styles.layout}>
            <Navbar cartCount={cartCount} />
            <main style={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

const styles = {
    layout: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        flex: 1,
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '20px',
        width: '100%',
        boxSizing: 'border-box',
    }
};

export default Layout;
