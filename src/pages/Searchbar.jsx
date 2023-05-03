import { useEffect, useState } from "react"
import { allProducts } from "../utils/API"

export default function Searchbar() {

    const [currentProducts, setCurrentProducts] = useState([])
    const [searchInput, setSearchInput] = useState('')
    useEffect(() => {
        allProducts()
            .then((res) => res.json())
            .then((data) => setCurrentProducts(data))
    }, [])

   

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const itemFound = []

        // console.log(currentProducts[0].title.toLowerCase().split(' '))
        const itemToSearch = searchInput.toLowerCase().split(' ')
 
        for (let i = 0; i < currentProducts.length; i++) {
            const productTitles = currentProducts[i].title.split(' ')


        }



        console.log(itemFound)
    }

    return (
        <>
            <input type='text' onChange={handleChange} className="text-black rounded" placeholder="Search for an item"></input>
            <button type="submit" onClick={handleSubmit} > Submit</button>
        </>
    )

}