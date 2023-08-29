import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { rateStars } from '../utils/rating'
export default function NewRating({rating}) {

    const [icon, setIcon] = useState([])

    useEffect(() => {
        setIcon(rateStars(rating))
    },[])

   

  return (
    <div className='text-yellow-500 text-2xl'>{icon && icon}</div>
  )
}
