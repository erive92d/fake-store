import React from 'react'
import { saveId, getSavedIds } from '../utils/localStorage'
import { useState } from 'react'
import { useEffect } from 'react'

export default function NewaddCart({ handleCart, product, cart, handleRemove}) {
   
  const [isAdded, setIsAdded] = useState(false)
  
  useEffect(() => {
    if( checkItem(product)) {
      setIsAdded(true)
    } else {
      setIsAdded(false)
    }
   
  },[cart])

  const checkItem = (item) => {
    const isPresent = cart.some(prd => prd.id === item.id)
    if(isPresent) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className='p-1 lg:w-1/3 text-center'>
        {isAdded ? <p onClick={() => handleRemove(product)} className='bg-red-600 rotate-180 duration-300 p-1 rounded-full text-md'><i class="fa-solid fa-cart-shopping text-sm rotate-180 "></i> <i class="fa-solid fa-xmark"></i> </p> :  
        <p type='submit' className='bg-orange-400 ease-out duration-300 p-1 rounded-full text-sm'
         onClick={() => handleCart(product)} 
         ><i class="fa-solid fa-plus"></i> <i class="fa-solid fa-cart-shopping text-sm "></i> 
         </p>
       }
    </div>
  )
}
