import { Navtab } from "./Navtab";
import { allProducts, getCategory } from "../utils/API"
import { useEffect, useState } from "react";
import { DisplayItems } from "../pages/DisplayItems";

export default function Home() {

    const [items, setItems] = useState([])
    const [currentAPI, setCurrentAPI] = useState(allProducts())

    useEffect(() => {
        currentAPI
            .then((res) => res.json())
            .then((data) => setItems(data))
    }, [currentAPI])

    const handleClick = (e) => {

        e.preventDefault()
        const catName = e.target.value

        setCurrentAPI(getCategory(catName))
    }
    console.log(currentAPI)
    return (
        <div>
            <div className="flex justify-around border">
                <button onClick={handleClick} value="jewelery">Jewelry</button>
                <button onClick={handleClick} value="men's clothing">Mens</button>
                <button onClick={handleClick} value="electronics">Electronics</button>
            </div>

            <DisplayItems items={items} />

        </div>
    )
}