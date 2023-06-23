import { useEffect, useState } from "react"


export default function Featured ({featuredItem}) {
    // const featured =  featuredItem ? featuredItem[0] : null
        const featured = featuredItem?.filter((prod) => prod.id === Math.floor(Math.random()*20))
    const [featItem, setFeatItem] = useState([])
    
    useEffect(() => {
        const getItem = () => {
            let randomItem = []
            let randomNum = Math.floor(Math.random() * 20)
            for(let i = 0; i < featuredItem.length; i++) {
                if(i === randomNum) {
                    randomItem.push(featuredItem[i])
                }
            }

            return randomItem
        }

       setFeatItem(getItem()[0])
    },[])

    console.log(featItem)

    return (
        <div className="border p-5">
            <h1 className="font-bold">Featured Item</h1>
            <img src={featItem?.image} style={{height: "25rem", width:"25rem"}}></img>
            <h1>{featItem?.title}</h1>
            <p className="font-bold">${featItem.price}</p>
        </div>
    )
}