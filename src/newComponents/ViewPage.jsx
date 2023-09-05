import React from 'react'
import CategoryBanner from './CategoryBanner'
import { Link } from 'react-router-dom'
import { saveId, getSavedIds } from '../utils/localStorage'
import { useState, useEffect } from 'react'
import NewaddCart from './NewaddCart'
import NewCart from './NewCart'
import NewRating from './NewRating'
export default function ViewPage({products}) {

    const [cart, setCart] = useState(getSavedIds())

    useEffect(() => {
        saveId(cart)
    }, [cart])

    const handleCart = (prod, multiplier) => {
        const newProd = {
            ...prod, count: multiplier
        }

        if(cart.find(item => item.id === newProd.id)) {
            console.log("its here")
            if(newProd.multiplier !== 0) {
                console.log("its not zero")
                let array = [...cart]
                const indexItem = array.findIndex(itm => itm.id === newProd.id)
                array[indexItem].count = multiplier
                setCart(array)
            } else {
                
                const deleteItem = cart.filter(item => item.id !== newProd.id)
                console.log(deleteItem)
                setCart(deleteItem)
            }
            
        } else {
            setCart([...cart, newProd])

        }
    }

    const handleRemove = ( prod) => {
        const updated = cart.filter(item => item.id !== prod.id)
        setCart(updated)
      }


  return (
    <div className='lg:flex lg:flex-col lg:h-screen'>
        <div className='fixed right-0  p-5'>
            {cart?.length !== 0 ? <NewCart handleCart={handleCart} cart={cart}/> : null}
        </div>
        <div className='p-2 lg:flex lg:justify-center '>
             <CategoryBanner cat={products[0]} />
        </div>
        <div className='flex flex-col items-center 
        lg:flex-row lg:flex-wrap lg:p-10 lg:justify-center 
        '>
            {products 
            && products.map((product) => (
                
                <div key={product.id} className='border  hover:ease-out hover:duration-300   w-2/3 rounded-lg p-2 my-2 bg-white 
                lg:flex lg:flex-col lg:m-3 lg:w-1/4
                '>
                        <div className='flex justify-between  lg:h-20'>
                            <div className='lg:w-1/2 w-1/2'>
                                <NewRating rating={product.rating}/>
                                <Link to={`/item/${product.id}`} className='w-1/2 lg:w-full lg:hover:text-orange-600 lg:duration-300  font-thin text-black' >
                                    {product.title}
                                </Link>
                            </div>
                            <div className='flex flex-col w-1/2 items-end lg:w-1/2 '>
                                <p className='text-green-500 font-bold lg:text-2xl'>${product.price}</p>
                                <NewaddCart handleRemove={handleRemove} handleCart={handleCart} product={product} cart={cart}/>
                            </div>
                           
                        </div>
                        <div className='p-5 lg:flex lg:flex-col '>
                            <img src={product.image}
                            className=' mx-auto w-1/2 h-48
                            lg:object-contain
                            lg:h-48 lg:w-96
                                                        '/>
                        </div> 
                   
                    
            </div>
            
            
            ))}
        </div>
        
    </div>
  )
}
