import React from 'react';
import { useToast } from '../context/ToastContext';

const ToastItem = ({ toast }) => {
    const { removeToast } = useToast();

    // Dynamic styles based on type
    const isSuccess = toast.type === 'success';
    const bgColor = isSuccess ? '#4CAF50' : '#F44336';
    const icon = isSuccess ? '✓' : '✕';

    return (
        <div style={{
            ...styles.toast,
            backgroundColor: bgColor,
        }}>
            <div style={styles.icon}>{icon}</div>
            <div style={styles.message}>{toast.message}</div>
            <button
                onClick={() => removeToast(toast.id)}
                style={styles.closeBtn}
            >
                ×
            </button>
        </div>
    );
};

export const ToastContainer = () => {
    const { toasts } = useToast();

    return (
        <div style={styles.container}>
            {toasts.map(toast => (
                <ToastItem key={toast.id} toast={toast} />
            ))}
        </div>
    );
};

const styles = {
    container: {
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    toast: {
        display: 'flex',
        alignItems: 'center',
        padding: '16px 24px',
        borderRadius: '12px',
        color: 'white',
        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
        minWidth: '300px',
        animation: 'slideIn 0.3s ease-out forwards',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.1)',
    },
    icon: {
        marginRight: '12px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        backgroundColor: 'rgba(255,255,255,0.2)',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        flex: 1,
        fontSize: '0.95rem',
        fontWeight: '500',
        lineHeight: '1.4',
    },
    closeBtn: {
        background: 'none',
        border: 'none',
        color: 'rgba(255,255,255,0.8)',
        fontSize: '1.5rem',
        cursor: 'pointer',
        marginLeft: '12px',
        padding: '0 4px',
        lineHeight: '1',
    }
};

// Add keyframes to document
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
`;
document.head.appendChild(styleSheet);

export default ToastContainer;
