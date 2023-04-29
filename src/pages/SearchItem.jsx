// import searchGoogleBooks from "../utils/API/searchGoogleBooks"
import { useEffect, useState } from "react"
import { allProducts } from "../utils/API"
import { DisplayItems } from "./DisplayItems"
export default function SearchItem() {

    const [items, setItems] = useState([])



    useEffect(() => {
        allProducts()
            .then((res) => res.json())
            .then((data) => setItems(data))
    }, [])

    console.log(items)

    return (
        <>
            <DisplayItems items={items} />
        </>

    )
}