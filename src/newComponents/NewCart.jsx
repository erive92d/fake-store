import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { rateStars } from '../utils/rating'
import { saveId, getSavedIds } from '../utils/localStorage'
import { useEffect } from 'react'

export default function NewCart({cart, handleCart}) {



  const [isShow, setIsShow] = useState(false)
  const [multiplier, setMultiplier] = useState(1)

  return (
    // <Link to="/newcart" className=' text-black rounded-xl flex  items-center'>
      <div className=''>
        {!isShow ?  
        <div  onClick={() => setIsShow(!isShow)} className='text-black rounded-xl flex  items-center animate-bounce'>
                  <h1 className='text-sm  bg-red-500 p-1 text-white rounded-xl'>{cart?.length}</h1>
                  <i class="fa-solid fa-cart-shopping text-2xl text-black"></i> 
          </div>
          :
          <div className="text-white p-4 border-2 border-gray-200 fixed top-70 right-0  h-1/2 overflow-y-auto bg-gray-700  rounded
          lg:w-1/4 lg:p-3 lg:right-10
          ">
            <div className='flex justify-between '>
              <Link to="/newcart" className="bg-green-500 font-thin p-1 rounded-md">
                  Go to cart
              </Link>
              <button className='text-white font-thin' onClick={() => setIsShow(!isShow)}>close</button>
            </div>
             <div className='lg:flex lg:flex-wrap'>
             {cart?.map((items) => (
              <div className='border my-1 p-5 flex justify-around rounded bg-white text-black
                lg:w-2/3 lg:my-1 lg:mx-auto lg:h-82 lg:flex-col 
              '>
                  <div className='flex justify-between'>
                    <div>
                      <p className='text-sm w-1/2'>{items.title}</p>
                      <p className="text-yellow-500 text-xl">{rateStars(items.rating)}</p>
                      <p className='text-green-600'>${items.price}</p>
                      {/* <div className="flex space-x-3 items-center">
                        <button onClick={()=> setMultiplier(prev => prev - 1)} className={`${multiplier === 0 ? "hidden" : "bg-blue-400 text-white rounded px-1"}`}>-</button>
                        <h1>{multiplier}</h1>
                        <button onClick={() => setMultiplier(prev => prev + 1)} className="bg-blue-400 text-white rounded px-1">+</button>
                        <button onClick={() => handleCart(items, multiplier)}>Update</button>
                      </div> */}
                    </div>

                      
                  </div>
                  <div className='w-1/2 m-auto lg:w-2/3'>
                      <img src={items.image} className='w-full h-32 lg:w-full lg:object-contain lg:h-32'/>
                    </div>

                </div>
            ))}
              
              </div> 
           
            
          </div>}
      
      </div>
     
    // </Link>
  )
}
