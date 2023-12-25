import { useEffect, useState } from "react";

export default function CategoryTabs({ handleCategory, category }) {

    const [tabs, setTabs] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(js => js.json())
            .then(data => setTabs(data))
    }, [])

    return (
        <div>
            <div className="tabs bg-white">
                {!tabs ? <h1>Loading..</h1> : tabs?.map((tab) => (
                    <div className="font-light">
                        <button className={`tab ${category === tab ? "border border-orange-300 rounded font-bold" : ""}`} onClick={handleCategory} value={tab}>{tab.split(" ")[0].toUpperCase()}</button>
                    </div>
                ))}
            </div>
        </div>


    )

}