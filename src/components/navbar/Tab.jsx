import React from 'react'
import { Link } from 'react-router-dom'

export default function Tab() {

  return (
    <div className='border-t-2'>
      <ul className='flex justify-around items-center mx-auto w-3/4 py-2'>
        <li>
          <a className='link-hover' href="/">Home</a>
        </li>
        <li>
          <Link to={"/c/men's clothing"} className='link-hover' >
            Mens
          </Link>
        </li>
        <li>
          <Link to={"/c/women's clothing"} className='link-hover' >
            Womens
          </Link>
        </li>
        <li>
          <Link to={"/c/electronics"} className='link-hover' >
            Electronics
          </Link>
        </li>
        <li>
          <Link to={"/c/jewelery"} className='link-hover' >
            Jewelry
          </Link>
        </li>
      </ul>
    </div>
  )
}
