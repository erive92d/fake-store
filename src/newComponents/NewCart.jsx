import React from 'react'
import { Link } from 'react-router-dom'

export default function NewCart({cart}) {
  return (
    <Link to="/newcart" className=' p-2 text-black rounded-xl flex  items-center'>
        <h1 className='text-sm  bg-red-500 p-1 text-white rounded-xl'>{cart?.length}</h1>
        <i class="fa-solid fa-cart-shopping text-2xl text-cyan-600"></i>
    </Link>
  )
}
