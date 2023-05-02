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
        console.log(catName)
        if (catName === "all") {
            setCurrentAPI(allProducts())
            return
        }

        setCurrentAPI(getCategory(catName))
    }






    console.log(currentAPI)
    return (
        <div>

            <div class="mt-2">
                <div class="border-b border-gray-200 ">
                    <div class="-mb-px flex space-x-8 px-4 justify-around" aria-orientation="horizontal" role="tablist">
                        <button id="tabs-1-tab-2" name="all" onClick={handleClick} value="all" class="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">All</button>

                        {/* <!-- Selected: "border-indigo-600 text-indigo-600", Not Selected: "border-transparent text-gray-900" --> */}
                        <button id="men" name="all" onClick={handleClick} value="men's clothing" class="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium" aria-controls="tabs-1-panel-1" role="tab" type="button">Men</button>
                        <button id="women" name="all" onClick={handleClick} value="women's clothing" class="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium" aria-controls="tabs-1-panel-1" role="tab" type="button">Women</button>

                        {/* <!-- Selected: "border-indigo-600 text-indigo-600", Not Selected: "border-transparent text-gray-900" --> */}
                        <button id="tabs-1-tab-2" name="all" onClick={handleClick} value="electronics" class="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">Electronics</button>
                        <button id="tabs-1-tab-2" name="all" onClick={handleClick} value="jewelery" class="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">Jewelry</button>
                    </div>
                </div>
            </div>

            <DisplayItems items={items} />

        </div>
    )
}