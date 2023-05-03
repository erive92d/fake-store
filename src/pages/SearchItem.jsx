// import searchGoogleBooks from "../utils/API/searchGoogleBooks"
import { useEffect, useState } from "react"
import { allProducts, getCategory } from "../utils/API"
import { DisplayItems } from "./DisplayItems"
export default function SearchItem() {

    const [items, setItems] = useState([])

    useEffect(() => {
        getCategory('electronics')
            .then((res) => res.json())
            .then((data) => setItems(data))
    }, [])



    return (
        <>
            <DisplayItems items={items} />
        </>

    )
}