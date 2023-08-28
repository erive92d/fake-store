import { useState, useEffect } from "react"
import { allProducts } from "../utils/API"
import Tabs from "../newComponents/Tabs"
import AllProducts from "../api-calls/AllProducts"
import Loading from "../newComponents/Loading"

export default function Newhome() {

    const [items, setItems] = useState([])
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
    return <Tabs items={items}/>
            
        
    


    // const featuredItem = items?.filter((prod) => prod.id === Math.floor(Math.random()*20))
    //     console.log(featuredItem)
    // return (
    //     <div className="my-5 lg:flex lg:p-5 rounded">

    //         <Featured featuredItem={items} />
    //         {/* <CarouselItems items={items}/> */}
    //         <CatCar items={items} />

    //     </div>
    // )
}