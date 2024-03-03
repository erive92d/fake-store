import React from 'react'
import auth from '../../utils/auth'
import { addToCart } from '../../utils/API'

export default function AddButton({ productId, size, quantity }) {
    const token = auth.loggedIn() ? auth.getToken() : null


    const handleAddToCart = async () => {
        const items = {
            productId, size, quantity
        }

        const response = await addToCart(items, token)
        console.log(response)
        if (response) {
            alert("Success")
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
            <button onClick={handleAddToCart} className='btn btn-ghost bg-lime-900 text-white'>Add to cart</button>
        </div>
    )
}
