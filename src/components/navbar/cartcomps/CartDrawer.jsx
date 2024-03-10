import React from 'react'
import { useContext } from 'react';
import CartContext from '../../../context/CartContext';
import CartItems from './CartItems';

export default function CartDrawer() {

    const { cartItems } = useContext(CartContext);
    console.log(cartItems)
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button ">
                    <span className="badge badge-sm indicator-item">
                        {cartItems?.products?.length}
                    </span>
                    <i className="fa-solid fa-cart-shopping"></i>

                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-white text-black">
                    <li className=' text-xl font-bold rounded-none border-b'>
                        <a href="/cart" className=''>Checkout
                            <span className='text-green-600'>${cartItems.total}</span>
                        </a>

                    </li>
                    {/* Sidebar content here */}
                    {cartItems?.products?.map((cart, index) => (
                        <CartItems {...cart} key={index} />
                    ))}

                </ul>
            </div>
        </div>
    )
}
