// CartContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
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
        try {
            await addToCart(items, token)
            await fetchItemsFromCart()
        } catch (error) {
            console.error(error)
        }
    }


    //     const existingItemIndex = cartItems.findIndex(
    //         (cartItem) => cartItem.item.id === item.item.id && cartItem.size === item.size
    //     );
    //     setIsLoading(true)
    //     if (existingItemIndex !== -1) {
    //         const currentQuantity = cartItems[existingItemIndex].quantity;
    //         const updatedQuantity = updateCallback(currentQuantity);
    //         // If item already exists, update its quantity by adding the new quantity
    //         const updatedCartItems = [...cartItems];
    //         updatedCartItems[existingItemIndex].quantity += updatedQuantity;
    //         setTimeout(() => {
    //             setCartItems(updatedCartItems);
    //             setIsLoading(false)
    //         }, 2000)
    //     } else {
    //         // If item doesn't exist, add it to the cart
    //         setTimeout(() => {
    //             setCartItems([...cartItems, item]);
    //             setIsLoading(false)
    //         }, 2000)
    //     }
    // };

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

    // const totalPrice = () => {
    //     const itemPrices = cartItems.map(item => item.item.price * item.quantity)
    //     const total = itemPrices.reduce((acc, curr) => acc + curr, 0);
    //     return total
    // }

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, loading, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
