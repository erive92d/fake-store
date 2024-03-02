import React from 'react'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import CartItems from './CartItems';

export default function CartDrawer() {

    const { cartItems, totalPrice } = useContext(CartContext);

    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button ">
                    <i className="fa-solid fa-cart-shopping"></i>
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-white text-black">
                    {/* Sidebar content here */}
                    <li>
                        <a className='bg-gray-200 text-xl font-bold rounded-none' href="/cart">Go to cart</a>
                    </li>
                    {cartItems.map((cart, index) => (
                        <CartItems {...cart} key={index} />
                    ))}
                </ul>
            </div>
        </div>
    )
}
