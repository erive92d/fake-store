// CartContext.js
import React, { createContext, useState, useEffect } from 'react';
import { addToCart, removeItemFromOrder } from '../utils/apicalls/orderapi';
import { getOrdersFromUser } from '../utils/apicalls/orderapi';
import auth from '../utils/auth';
const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const token = auth.loggedIn() ? auth.getToken() : null

    const fetchItemsFromCart = async () => {
        setLoading(true)
        try {
            const items = await getOrdersFromUser(token)
            setCartItems(items)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        if (token) {
            fetchItemsFromCart()
        }
    }, []);

    const addItemToCart = async (items) => {
        setLoading(true)
        try {
            await addToCart(items, token)
            await fetchItemsFromCart()
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }


    const removeFromCart = async (productId, size) => {
        setLoading(true);
        try {
            await removeItemFromOrder(productId, size, token); // Remove item from cart
            await fetchItemsFromCart(); // Refetch cart items
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };


    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, loading, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
