import React, { useContext } from 'react'
import CartContext from '../../../context/CartContext'
import RemoveButton from '../../../actions/RemoveButton'

export default function CartItems({ ...cart }, key) {

    return (
        <li className="border-b py-4" key={key}>
            <div className=''>
                <span className='font-bold'>{cart.product.title} x {cart.quantity}</span>
                <RemoveButton productId={cart.product._id} productSize={cart.size} />
            </div>
            {cart.size ? <span className=''>Sz: {cart.size?.toUpperCase()}</span>
                :
                null}
            <span className=''>Qt: {cart.quantity}</span>
            <img className='w-60 h-60' src={cart.product.image} />
        </li>
    )
}
