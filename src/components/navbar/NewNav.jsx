import React from 'react'
import CartProducts from './CartProducts';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import UserAvatar from './UserAvatar';
import auth from '../../utils/auth';

export default function NewNav() {

    const { cartItems } = useContext(CartContext);

    const isLoggedin = auth.loggedIn()

    return (
        <div className="navbar py-10 px-8 text-white bg-black">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost text-2xl">Empire</a>
            </div>
            {/* <InputSearch /> */}
            {isLoggedin ?
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        {cartItems?.products?.length > 0 ?
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">
                                        {cartItems?.products?.length}
                                    </span>
                                </div>
                            </div>
                            : null}

                        <CartProducts products={cartItems?.products} total={cartItems?.total} />
                    </div>
                    <div className="dropdown dropdown-end">
                        <UserAvatar user={cartItems?.user} />
                    </div>
                </div>
                :
                <a className='link:hover' href="/login">
                    Login
                </a>
            }

        </div>
    )
}
