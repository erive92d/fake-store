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
    <div className=' p-1 rounded-lg w-2/3 text-center mx-auto'>
        {isAdded ? <p onClick={() => handleRemove(product)} className='bg-green-400 w-2/3 mx-auto  rounded-lg'><i class="fa-solid fa-xmark"></i> Remove</p> :  
        <p type='submit' className='bg-orange-400 w-2/3 mx-auto p-1 rounded-lg text-sm'
         onClick={() => handleCart(product)} 
         ><i class="fa-solid fa-plus"></i> Add to cart</p>
       }
    </div>
  )
}
