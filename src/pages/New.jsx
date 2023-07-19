import { Checkbox } from "flowbite-react"
import { useEffect, useState } from "react"
import NewRemove from "../components/NewRemove"
import Total from "../components/Total"
import { getSavedIds } from "../utils/localStorage"
import Checkout from "../components/Checkout"

export default function New() {
    const [items, setItems] = useState([])



    useEffect(() => {
        setItems(getSavedIds())
    }, [])



    return (
        <div className="bg-white">
            {items.map((item) => {
                return (
                    <div className="p-5 mx-auto border flex flex-col">
                        <div className="text-right">
                            <NewRemove itemId={item.id} />

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
            <Total items={items} />
            <Checkout />
        </div>
    )

}