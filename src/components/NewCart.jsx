import { useEffect, useState } from "react"
import { allProducts } from "../utils/API"
import { getSavedIds } from "../utils/localStorage"
import { Tooltip, Button, Badge } from "flowbite-react"
import { getMe } from "../utils/API"
import auth from "../utils/auth"
export default function NewCart() {

    const [items, setItems] = useState([])
    useEffect(() => {

        setItems(getSavedIds())
    }, [])

    return (
        <div className={items?.length !== 0 ? "flex" : "hidden"}>
            {items &&
                <a href="/newcart" className="flex space-x-1 items-end ">
                    <i class="fa-solid fa-cart-shopping text-2xl text-gray-700"></i>
                    <p className="bg-green-700 text-white p-2 text-sm  rounded-full">
                        {items.length}
                    </p>

                </a>}


        </div>
    )
}