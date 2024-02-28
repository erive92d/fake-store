// CartContext.js
import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();


export const CartProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false)
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
        setIsLoading(true)
        if (existingItemIndex !== -1) {
            const currentQuantity = cartItems[existingItemIndex].quantity;
            const updatedQuantity = updateCallback(currentQuantity);
            // If item already exists, update its quantity by adding the new quantity
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += updatedQuantity;
            setTimeout(() => {
                setCartItems(updatedCartItems);
                setIsLoading(false)
            }, 2000)
        } else {
            // If item doesn't exist, add it to the cart
            setTimeout(() => {
                setCartItems([...cartItems, item]);
                setIsLoading(false)
            }, 2000)
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

    const totalPrice = () => {
        const itemPrices = cartItems.map(item => item.item.price * item.quantity)
        const total = itemPrices.reduce((acc, curr) => acc + curr, 0);
        return total
    }

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, totalPrice, isLoading, removeItemFromCart, clearCart, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
