// AddToCart.js
import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';

const AddToCart = ({ item }) => {
    const { addItemToCart, cartItems } = useContext(CartContext);

    const handleAddToCart = () => {
        addItemToCart(item);
    };

    return (
        <button className={` "btn btn-ghost bg-orange-600"}`} onClick={handleAddToCart}>
            Add to Cart
        </button>
    );
};

export default AddToCart;
