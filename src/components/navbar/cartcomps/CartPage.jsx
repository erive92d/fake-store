import React, { useContext } from 'react'
import CartContext from '../../../context/CartContext'
import CartItems from './CartItems'
export default function CartPage() {
    const { cartItems, removeFromCart } = useContext(CartContext)
    return (
        <div className='min-h-screen px-2'>
            {cartItems?.products?.map((cart, index) => (
                <CartItems {...cart} key={index} />
            ))}
        </div>
    )
}
