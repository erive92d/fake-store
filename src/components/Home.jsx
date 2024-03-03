import { useState, useEffect } from "react"
import { allProducts } from "../utils/API"
import Tabs from "./Tabs"
import Loading from "./Loading"
import Products from "./productComps/Products"
import customQuery from "../utils/useQueries"
import Tab from "./Tab"

export default function Home() {
    const { data: items, isLoading } = customQuery("products", allProducts())

    if (isLoading) {
        return (
            <Loading />
        )
    }
    return (
        <div>
            <Tab />
            <Products products={items} />
        </div>
    )
}