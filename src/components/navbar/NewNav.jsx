import React from 'react'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import UserAvatar from './UserAvatar';
import auth from '../../utils/auth';
import CartDrawer from './cartcomps/CartDrawer';

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
                <div className="flex-none gap-4">
                    <div className="dropdown dropdown-end">
                        {cartItems?.products?.length !== 0 ? <CartDrawer /> : null}
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
