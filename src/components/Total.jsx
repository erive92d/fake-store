import { useEffect, useState } from "react"
import { getSavedIds } from "../utils/localStorage"

export default function Total({ items }) {

    // console.log(items)
    const [total, setTotal] = useState(0)

    const itemPrices = items?.map((item) => item.price)

    // console.log(itemPrices)
    const totalPrice = itemPrices?.reduce((acc, curr) => acc += curr, 0)

    return (
        <div className="p-2 text-center">
            <h1 className="text-lg bg-green-600 rounded-lg w-1/2 mx-auto">Total: ${totalPrice}</h1>
        </div>
    )
}