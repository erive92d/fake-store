import { useEffect } from "react"
import NewRating from "../newComponents/NewRating"
import { getSavedIds, saveId } from "../utils/localStorage"
import { useState } from "react"
import NewCart from "../newComponents/NewCart"
import NewaddCart from "../newComponents/NewaddCart"
export default function ItemDetailUpper({item, title, id, price, image, rating}) {
    const [cart, setCart] = useState(getSavedIds())
    
    useEffect(() => {
        saveId(cart)
    }, [cart])

    const handleCart = (prod) => {
        setCart([...cart, prod])
    }

    const handleRemove = ( prod) => {
        const updated = cart.filter(item => item.id !== prod.id)
        setCart(updated)
      }



    return (
        <div className="flex flex-col lg:w-2/3 bg-white shadow-lg shadow-gray-600">
            {cart?.length !== 0 ? 
            <div className="right-10 fixed">
                <NewCart cart={cart} />
            </div> : null}
            
            
            <div className="flex justify-between p-2 border-r-gray-400 lg:w-full ">
                    <div className="flex flex-col w-1/3 space-y-7 lg:w-1/3 lg:p-5">
                        
                        <NewRating rating={rating} />
                        <a href="#">
                            <h5 class="text-xl font-semibold tracking-tight text-black ">{title}</h5>
                        </a>
                        <p class="font-bold text-2xl text-green-500 p-2 font-mono lg:text-3xl">
                            ${price}
                        </p>
                        {/* <NewAdd addItem={/> */}
                        <NewaddCart handleCart={handleCart} product={item} cart={cart} handleRemove={handleRemove}/>

                    </div>
                    <div className="w-1/2 bg-white lg:bg-transparent flex flex-col  items center  justify-center p-3 rounded-xl lg:w-2/3  ">
                            <img className="lg:p-2 lg:w-1/3 lg:bg-white lg:rounded-xl lg:h-72 lg:mx-auto" src={image} />
                    </div>
                </div>
                
        </div>
    )
}