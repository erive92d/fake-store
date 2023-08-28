import { Checkbox } from "flowbite-react"
import { useEffect, useState } from "react"
import NewRemove from "../components/NewRemove"
import Total from "../components/Total"
import { getSavedIds } from "../utils/localStorage"
import Checkout from "../components/Checkout"

export default function New() {
    const [items, setItems] = useState(getSavedIds())

    useEffect(() => {
        localStorage.setItem("saved_ids", JSON.stringify(items))
    },[items])
   
    const handleDelete = (itemId) => {
        console.log(itemId)
        const updated = items.filter(itm => itm.id !== itemId)
        setItems(updated)
        
    }
    return (
        <div className="bg-gray-700 text-white flex flex-col h-screen">
               
               <Total items={items} />
            <div className="h-2/3 overflow-scroll">
            {items?.map((item) => {
                return (
                    <div className=" p-2 mx-auto border rounded-lg bg-white my-2 text-black w-2/3 flex flex-col">
                        <div className="text-right">
                            <NewRemove handleDelete={handleDelete} itemId={item.id} />

                        </div>
                        <div className="flex">
                            <div className="flex flex-col justify-center space-y-5 w-1/2">
                                <h1 className="">{item.title}</h1>
                                <p className="text-green-600">${item.price}</p>
                            </div>
                            <div className="w-1/3 p-5">
                                <img src={item.image} alt="pic" />
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
            <Checkout />
        </div>
    )

}