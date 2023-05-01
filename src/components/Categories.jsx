import { useEffect, useState } from "react"
import DisplayCat from "../pages/DisplayCat"
import { getCategory } from "../utils/API"
export default function Categories() {
    const [category, setCategory] = useState("")
    const [queryCategory, setQueryCategory] = useState([])


    const handleClick = (e) => {
        e.preventDefault()
        setCategory(e.target.value)

    }



    useEffect(() => {

        const handlePages = (cat) => {
            getCategory(cat)
                .then((res) => res.json())
                .then((data) => setQueryCategory(data))


        }

        handlePages(category)
    }, [category])

    // console.log(queryCategory)

    // if (queryCategory.length > 0) {
    //     return <DisplayCat setData={queryCategory} />
    // }


    return (
        <div className="flex flex-col justify-around">
            <div className="flex justify-around">
                <div>
                    <button onClick={handleClick} value="jewelery">Jewelry</button>
                </div>
                <div>
                    <button onClick={handleClick} value="men's clothing">Clothing</button>
                </div>
                <div>
                    <button onClick={handleClick} value="electronics">Electronics</button>
                </div>
            </div>

            <DisplayCat setData={queryCategory} category={category} />
        </div>
    )
}