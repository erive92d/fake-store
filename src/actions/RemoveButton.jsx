import React from 'react'
import CartContext from '../context/CartContext'
import { useContext } from 'react'

export default function RemoveButton({ productId, productSize }) {

    const { removeFromCart, loading } = useContext(CartContext)

    return (
        <>
            {loading ?
                <span
                    onClick={() => removeFromCart(productId, productSize)}
                    className='disabled btn btn-outline btn-sm items-center text-gray-600'>
                    <i class="fa-regular fa-trash-can"></i>
                </span>
                :
                <span
                    onClick={() => removeFromCart(productId, productSize)}
                    className='btn btn-outline btn-sm items-center text-black'>
                    <i class="fa-regular fa-trash-can"></i>
                </span>
            }
        </>
    )
}
