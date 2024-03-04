import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'

export default function CartItems({ ...cart }, key) {

    const { removeFromCart, loading } = useContext(CartContext)

    return (
        <li className="border-b" key={key}>
            <div className=''>
                <span className='font-bold'>{cart.product.title}</span>
                {loading ?
                    <button
                        disabled
                        className='w-1/3 btn btn-sm text-black'>
                        Removing..
                    </button>
                    :
                    <span
                        onClick={() => removeFromCart(cart.product._id, cart.size)}
                        className='btn btn-outline btn-sm items-center text-black'>
                        <i class="fa-regular fa-trash-can"></i>                </span>
                }
            </div>
            <span className=''>Sz: {cart.size?.toUpperCase()}</span>
            <span className=''>Qt: {cart.quantity}</span>
            <img className='w-60 h-60' src={cart.product.image} />


        </li>
    )
}
