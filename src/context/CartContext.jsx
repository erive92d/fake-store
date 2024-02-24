// CartContext.js
import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addItemToCart = (item, updateCallback) => {
        const existingItemIndex = cartItems.findIndex(
            (cartItem) => cartItem.item.id === item.item.id && cartItem.size === item.size
        );

        if (existingItemIndex !== -1) {
            const currentQuantity = cartItems[existingItemIndex].quantity;
            const updatedQuantity = updateCallback(currentQuantity);
            // If item already exists, update its quantity by adding the new quantity
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += updatedQuantity;
            setCartItems(updatedCartItems);
        } else {
            // If item doesn't exist, add it to the cart
            setCartItems([...cartItems, item]);
        }
    };

    const removeItemFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, clearCart, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
