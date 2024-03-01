import React from 'react'

export default function BuyItem({itemClick, setItemClick, handleCart}) {
    
  return (
    <div className=''>
        <div className='p-2 bg-gray-800 '>
            <h1 className='text-white'>{itemClick?.item.title}</h1>
        </div>
    </div>
  )
}
