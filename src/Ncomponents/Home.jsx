import { useState, useEffect } from "react"
import { allProducts } from "../utils/API"
import Tabs from "./Tabs"
import Loading from "./Loading"
import Products from "./productComps/Products"

export default function Home() {

    const [items, setItems] = useState([])
    const [page, setPage] = useState("men's clothing")

    useEffect(() => {
        allProducts()
            .then((res) => res.json())
            .then((data) => setItems(data))
    }, [])

    if (!items[0]) {
        return (
            <Loading />
        )
    }

    const handlePage = (e) => {
        e.preventDefault()
        setPage(e.target.name)
    }

    function getProducts(page, items) {
        const getItems = items.filter((item) => item.category === page)
        return getItems

    }
    return (
        <div>
            <Tabs items={items} handlePage={handlePage} page={page} />
            <Products products={getProducts(page, items)} />
        </div>
    )
}