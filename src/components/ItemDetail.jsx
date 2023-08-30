import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { allProducts } from "../utils/API"
import auth from "../utils/auth"
import AddButton from "./AddButton"
import Feedbacks from "../pages/Feedbacks"
import ReviewCreate from "../pages/ReviewCr"
import NewAdd from "./NewAdd"
import NewaddCart from "../newComponents/NewaddCart"
import NewRating from "../newComponents/NewRating"
import Loading from "../newComponents/Loading"
import ItemDetailUpper from "./ItemDetailUpper"
import { getSavedIds } from "../utils/localStorage"

export default function ItemDetail() {
    const navigate = useNavigate()
    const [itemDetail, setItemDetail] = useState([])
    const { itemId } = useParams()
    
    
    useEffect(() => {
        const getItem = (items) => {
            const itemFound = items.filter((item) => item.id === Number(itemId))
            setItemDetail(itemFound)

        }
        allProducts()
            .then((res) => res.json())
            .then((data) => getItem(data))
    }, [])

    if (!itemDetail[0]) {
        return <Loading />
    }

    return (
            <div className="flex flex-col p-5 lg:p-10 lg:items-center lg:h-screen">
                {/* <button onClick={() => navigate(-1)}>Go back</button> */}
                <ItemDetailUpper item={itemDetail[0]} itemId={itemDetail[0].id} title={itemDetail[0].title} price={itemDetail[0].price} image={itemDetail[0].image} rating={itemDetail[0].rating}/>
                <div class="flex flex-col p-2 gap-5 lg:p-5 lg:w-2/3 lg:flex-row  ">
                    
                    <div className=" p-2 rounded space-y-2 lg:w-1/2 ">
                        <h1 className="text-2xl font-thin">About this product</h1>
                        <p class="font-bold text-sm text-gray-200 italic h-1/3 lg:overflow-auto lg:h-48">
                        {itemDetail[0]?.description}
                        </p>
                    </div>
                    <div className="flex flex-col lg:w-1/2 p-2 lg:p-0">
                        <ReviewCreate itemId={itemDetail[0]?.id} />
                        <Feedbacks item={itemDetail[0]} />

                    </div>
                    
                </div>
            </div>
            
    


    )


}