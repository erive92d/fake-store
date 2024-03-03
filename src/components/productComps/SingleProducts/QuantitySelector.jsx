import React, { useState } from 'react'

export default function QuantitySelector({ handler, quantity }) {


    return (
        <div className='flex gap-4 items-center'>
            <label htmlFor="quantity">Quantity:</label>
            <input
                type="number"
                id="quantity"
                value={quantity}
                min="1"
                max="10"
                onChange={handler}
            />
        </div>
    )
}
