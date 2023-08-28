import React from 'react'
import { useEffect, useState } from 'react'

export default function CategoryBanner({cat}) {

    const [category, setCategory] = useState(cat?.category)

    useEffect(() => {
        getCategory(cat?.category)
        
    }, [cat])

    const getCategory = (page) => {
        document.title = page
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

  return <h1 className='text-3xl w-1/3 text-center bg-cyan-600 italic  p-2'>{category}</h1>
   
  
}
