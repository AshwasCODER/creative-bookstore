import React, { createContext, useState, useContext } from 'react';

const OrderContext = createContext();

export const useOrder = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error('useOrder must be used within an OrderProvider');
    }
    return context;
};

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    const addOrder = (order) => {
        const newOrder = {
            ...order,
            id: 'ORD-' + Math.floor(Math.random() * 100000),
            date: new Date().toLocaleDateString(),
            status: 'Ordered', // Ordered, Shipped, Out for Delivery, Delivered
            statusHistory: [
                { status: 'Ordered', date: new Date().toLocaleString() }
            ]
        };
        setOrders(prev => [newOrder, ...prev]);
        return newOrder;
    };

    const currentOrder = orders.length > 0 ? orders[0] : null;

    return (
        <OrderContext.Provider value={{ orders, addOrder, currentOrder }}>
            {children}
        </OrderContext.Provider>
    );
};
