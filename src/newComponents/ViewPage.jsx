import React from 'react'
import CategoryBanner from './CategoryBanner'
import { Link } from 'react-router-dom'
import { saveId, getSavedIds } from '../utils/localStorage'
import { useState, useEffect } from 'react'
import NewaddCart from './NewaddCart'
import NewCart from './NewCart'
export default function ViewPage({products}) {

    const [cart, setCart] = useState(getSavedIds())

    useEffect(() => {
        saveId(cart)
    }, [cart])


   
   

    const handleCart = (prod) => {
        setCart([...cart, prod])
    }

  return (
    <div className='flex flex-col items-center'>
        <div className='fixed right-0 p-5'>
            {cart.length !== 0 ? <NewCart cart={cart}/> : null}
        </div>
        <div>
             <CategoryBanner cat={products[0]} />
        </div>
        {products 
        && products.map((product) => (
            <div  key={product.id} className='border w-2/3 rounded-lg p-5 my-2 bg-white'>


            <Link to={`/item/${product.id}`}  >
                <div className='flex justify-between'>
                    
                    <p className='w-1/2 font-thin text-black'>{product.title}</p>
                    <p className='text-green-500 font-bold'>${product.price}</p>
                </div>
                <div className='p-5 '>
                    <img src={product.image}  className='w-1/2 mx-auto'/>
                </div>  
            </Link>
            <div> 
                <NewaddCart handleCart={handleCart} product={product} cart={cart}/>
            </div>
         </div>
        
        
        ))}
    </div>
  )
}
