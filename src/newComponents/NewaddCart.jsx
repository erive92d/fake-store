import React from 'react'
import { saveId, getSavedIds } from '../utils/localStorage'
import { useState } from 'react'
import { useEffect } from 'react'

export default function NewaddCart({ handleCart, product, cart}) {
    
  const [isAdded, setIsAdded] = useState(false)
  
  useEffect(() => {
    checkItem(product)
  },[cart])

  const checkItem = (item) => {
    const isPresent = cart.some(prd => prd.id === item.id)
    if(isPresent) {
      setIsAdded(true)
    }
  }

  return (
    <div className=' p-1 rounded-lg w-1/3 text-center mx-auto'>
        {isAdded ? <p className='bg-green-400 rounded-lg'>Saved</p> :  
        <button type='submit' className='bg-black p-1 rounded-lg'
         onClick={() => handleCart(product)} 
         >Add to cart</button>
       }
    </div>
  )
}
