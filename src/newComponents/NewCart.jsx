import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { rateStars } from '../utils/rating'

export default function NewCart({cart}) {
  const [isShow, setIsShow] = useState(false)

  const handleShow = (e) => {
    e.preventDefault()
    setIsShow(!isShow)
  }

  return (
    // <Link to="/newcart" className=' text-black rounded-xl flex  items-center'>
      <div onClick={handleShow} className=' '>

        {!isShow &&  
        <div className='text-black rounded-xl flex  items-center animate-bounce'>
                  <h1 className='text-sm  bg-red-500 p-1 text-white rounded-xl'>{cart?.length}</h1>
                  <i class="fa-solid fa-cart-shopping text-2xl text-purple-500"></i> 
          </div>
          }
        {isShow && 
          <div className="text-white p-4 border-2 border-purple-600 fixed top-70 right-0  h-1/2 overflow-y-auto bg-gray-700 shadow-inner shadow-purple-400 rounded
          lg:w-1/4 lg:p-3 lg:right-10
          ">
            <div className='flex justify-between '>
              <Link to="/newcart" className="bg-green-500 font-thin p-1 rounded-md">
                  Go to cart
              </Link>
              <p className='text-white font-thin' onClick={handleShow}>close</p>
            </div>
             <div className='lg:flex lg:flex-wrap'>
             {cart?.map((items) => (
              <div className='border my-1 p-5 flex justify-around rounded bg-white text-black
                lg:w-2/3 lg:my-1 lg:mx-auto lg:h-72 lg:flex-col 
              '>
                  <div className='flex justify-between'>
                    <div >
                      <p className='text-sm w-1/2'>{items.title}</p>
                      <p className="text-yellow-500 text-xl">{rateStars(items.rating)}</p>
                      <p className='text-green-600'>${items.price}</p>

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
