import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'

export default function CartItems({ ...cart }, key) {

    const { removeFromCart } = useContext(CartContext)

    return (
        <li className="border-b" key={key}>
            <span className='font-bold'>{cart.product.title}</span>
            <span className=''>{cart.size?.toUpperCase()}</span>
            <span className=''>Qt: {cart.quantity}</span>
            <img className='w-3/4 h-60' src={cart.product.image} />
            <button
                onClick={() => removeFromCart(cart.product._id, cart.size)}
                className='w-1/3 btn btn-sm bg-red-600 text-white'>
                Remove
            </button>
        </li>
    )
}
