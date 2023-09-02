import { useState, useEffect } from "react"
import { allProducts } from "../utils/API"
import Tabs from "../newComponents/Tabs"
import Loading from "../newComponents/Loading"
import CurrentPage from "../newComponents/CurrentPage"

export default function Newhome() {

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

    return (
            <div>
                <Tabs items={items} handlePage={handlePage} page={page}/>
                <CurrentPage page={page} items={items} />
            </div>
        )
            
        
    


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