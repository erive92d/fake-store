import { useEffect, useState } from "react"


export default function Featured({ featuredItem }) {
    // const featured =  featuredItem ? featuredItem[0] : null
    const featured = featuredItem?.filter((prod) => prod.id === Math.floor(Math.random() * 20))
    const [featItem, setFeatItem] = useState([])

    useEffect(() => {
        const getItem = () => {
            let randomItem = []
            let randomNum = Math.floor(Math.random() * 20)
            for (let i = 0; i < featuredItem.length; i++) {
                if (i === randomNum) {
                    randomItem.push(featuredItem[i])
                }
            }

            return randomItem
        }

        setFeatItem(getItem()[0])
    }, [])

    // console.log(featItem)

    return (
        <div className="space-x-5  p-5  flex flex-col space-y-10 bg-white rounded lg:w-1/2">
            <a className="space-y-10 md:p-10" href={`/item/${featItem?.id}`}>
                <h1 className="md:text-2xl text-xl font-thin ">Featured Item</h1>
                <div className="flex space-x-6 flex-row h-60 p-2">
                    <img src={featItem?.image} className="w-1/2 "></img>
                    <h1 className="text-gray-700 italic font-bold">{featItem?.title}</h1>

                </div>
                <div className="p-5 space-y-4">
                    <p className="text-sm font-thin italic ">{featItem?.description}</p>
                    <p className="font-bold text-center text-lg text-green-600">${featItem.price}</p>
                </div>

            </a>
        </div>
    )
}