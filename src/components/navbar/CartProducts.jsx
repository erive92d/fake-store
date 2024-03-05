import React from 'react'

export default function CartProducts({products,total}) {
  
  return (
         <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 text-black bg-white shadow">
                <div className="card-body">
                    {products?.map((cart, index) => (
                        <div key={index}>
                            <span className="font-bold">{cart.product.title}</span>
                         </div>   
                      ))
                      }
                <span className="">Subtotal: ${total}</span>
                </div>
        </div>
   
  )
}
