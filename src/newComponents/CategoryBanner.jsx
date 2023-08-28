import React from 'react'
import { useEffect, useState } from 'react'

export default function CategoryBanner({cat}) {

    const [category, setCategory] = useState(cat?.category)
    useEffect(() => {
        getCategory(cat?.category)
    }, [cat])

    const getCategory = (page) => {
        if(page === "men's clothing") {
            setCategory("Mens")
        }
        if(page === "women's clothing") {
            setCategory("Womens")
        }
        if(page === "jewelery") {
            setCategory("Jewelry")
        }
        if(page === "electronics") {
            setCategory("Electronics")
        }
    }

  return (
    <div className='text-center p-5'>
        <h1 className='text-3xl'>{category}</h1>
    </div>
  )
}
