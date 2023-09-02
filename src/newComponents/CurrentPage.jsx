import { useEffect } from "react";
import { getCategory } from "../utils/API";
import { useState } from "react";
import ViewPage from "./ViewPage";
import Loading from "./Loading";
export default function CurrentPage({page, items}) {

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        setUpPage(page)
    },[page])


    const setUpPage = (page) => {
        if(page === "men's clothing") {
            const getItems = items.filter((item) => item.category === page)
            setProducts(getItems)
        }
        if(page === "women's clothing") {
            const getItems = items.filter((item) => item.category === page)
            setProducts(getItems)
        }
        if(page === "jewelery") {
            const getItems = items.filter((item) => item.category === page)
            setProducts(getItems)
        }
        if(page === "electronics") {
            const getItems = items.filter((item) => item.category === page)
            setProducts(getItems)
        }
    }
    // const [products, setProducts] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     setLoading(true)
    //     getProducts(page)
    //     .then(data => setProducts(data))
    // },[page])

    // const getProducts = async (cat) => {
    //     // try {
    //     //     const response = await getCategory(cat)
    //     //     if(!response.ok) {
    //     //         alert("error")
    //     //         return
    //     //     }

    //     //     setLoading(false)
    //     //     return await response.json()
    //     // } catch (error) {
    //     //     console.log(error)
    //     // }

    // }
    return (
        <div className="">
            {/* {loading ? <Loading page={page}/> :   */}
            <ViewPage products={products} />
 
        </div>
    )
    
}