import { Navtab } from "./Navtab";
import { allProducts } from "../utils/API"
import { useEffect, useState } from "react";
import { DisplayItems } from "../pages/DisplayItems";

export default function Home() {

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