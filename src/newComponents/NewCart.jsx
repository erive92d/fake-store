import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

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
          <div className="text-white p-4  fixed top-60 right-0 w-1/2 h-1/2 overflow-y-auto bg-gray-700 shadow-inner shadow-purple-400 rounded">
            <div className='flex justify-between'>
              <Link to="/newcart" className="bg-green-500 font-thin p-1 rounded-md">
                  Go to cart
              </Link>
              <p className='text-white font-thin' onClick={handleShow}>close</p>
            </div>
              
            {cart?.map((items) => (
              <div className='border my-2 p-2 flex justify-around rounded bg-white text-black'>
                  <p className='text-sm w-1/2'>{items.title}</p>
                  <div className='w-1/3 m-auto'>
                      <img src={items.image} className='w-1/2'/>
                    </div>

                </div>
            ))}
            
          </div>}
      
      </div>
     
    // </Link>
  )
}
