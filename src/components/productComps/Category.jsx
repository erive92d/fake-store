import React from 'react'
import Loading from "../Loading"
import { useParams } from "react-router-dom"
import { fetchByCategory } from "../../utils/API"
import customQuery from "../../utils/useQueries"
import Products from './Products'

// const categoryReName = (cat) => {
//   if(cat.spli)
// }

export default function Category() {
    
    const { categoryName } = useParams()
    const { data:products, isLoading } = customQuery("category", fetchByCategory, categoryName)

    if(isLoading) return <Loading/>

    return (
      <div>
        <h1>{categoryName}</h1>
      <Products products={products} />
      </div>
    )
  
}
