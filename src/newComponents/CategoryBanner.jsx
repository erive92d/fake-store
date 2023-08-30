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

  return <h1 className='text-2xl w-2/3 text-center font-thin font-mono rounded-lg text-white p-2
    lg:text-6xl shadow-xl shadow-purple-800
  '>
    {category}
    </h1>
   
  
}
