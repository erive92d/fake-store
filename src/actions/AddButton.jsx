import React, { useContext, useState } from 'react'
import auth from '../utils/auth'
import CartContext from '../context/CartContext'

export default function AddButton({ productId, size, quantity, isClothes }) {
    const { addItemToCart, loading, errorCart } = useContext(CartContext)


    const handleAddToCart = async () => {
        const items = {
            productId,
            size,
            quantity
        }
        try {
            await addItemToCart(items)
        } catch (error) {
            console.log(error.message)
        }

    }
    if (!auth.loggedIn()) {
        return (
            <div className='my-4'>
                <a className='link:hover' href="/login">Login</a> {" "}
                to shop.
            </div>
        )
    }
    return (
        <div>
            {loading ? <button disabled className='btn btn-ghost bg-lime-900 text-white'>Adding</button>
                :
                <button onClick={handleAddToCart} className='btn btn-ghost bg-lime-900 text-white'>Add to cart</button>
            }
            {errorCart && <h1 className='py-4 text-red-500 font-thin'>{errorCart}</h1>}
        </div>
    )
}
