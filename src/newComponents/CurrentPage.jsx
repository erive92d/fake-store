import { useEffect } from "react";
import { getCategory } from "../utils/API";
import { useState } from "react";
import ViewPage from "./ViewPage";
import Loading from "./Loading";
export default function CurrentPage({page}) {


    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getProducts(page)
        .then(data => setProducts(data))
    },[page])

    const getProducts = async (cat) => {
        try {
            const response = await getCategory(cat)
            if(!response.ok) {
                alert("error")
                return
            }

            setLoading(false)
            return await response.json()
        } catch (error) {
            console.log(error)
        }
    }

    // if(!products) {
    //     return <h1>Loading..</h1>
    // }

    return (
        <div className="">
            {loading ? <Loading page={page}/> :  <ViewPage products={products} />
 }
        </div>
    )
    
}