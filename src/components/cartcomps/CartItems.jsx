import React from 'react'

export default function CartItems({ ...items }, key) {
    return (
        <li className="border-b" key={key}>
            <span className='font-bold'>{items.item.title}</span>
            <span className=''>{items.size.toUpperCase()}</span>
            <img className='w-3/4 h-60' src={items.item.image} />
        </li>
    )
}
