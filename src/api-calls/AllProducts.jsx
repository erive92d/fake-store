import { allProducts } from "../utils/API";
import { useEffect, useState } from "react";

export default function AllProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then(data => setProducts(data))
    },[])

    const getProducts =  async () => {
        try {
            const response = await allProducts()
            if(!response.ok) {
                alert("Could not fetch data")
                return
            }

            return await response.json()
            

        } catch (error) {
            console.log(error)
        }
    }

    return 
    
}