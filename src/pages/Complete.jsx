import { useEffect, useState } from "react"
import { getMe } from "../utils/API"
import auth from "../utils/auth"
import { rateStars } from "../utils/rating"
export default function Complete() {

    const [order, setOrder] = useState([])

    useEffect(() => {
        const getOrder = async () => {
            try {
                const token = auth.loggedIn() ? auth.getToken() : []

                const response = await getMe(token)
                if (!response) {
                    return false
                }
                const result = await response.json()

                setOrder(result)

            } catch (error) {
                console.log(error)
            }

        }

        getOrder()

    }, [])

    if (order.length === 0) {
        return <h1>Loading</h1>
    }
    // console.log(order)

    const recentOrder = order?.orders.slice(-1)
    // console.log(recentOrder)
    // if (!recentOrder) return <h1>Loading</h1>


    return (
        <div className="min-h-screen flex flex-col p-5">
            <h1>Order complete!</h1>
            <div>
                <p>Thanks for shopping with us, {recentOrder[0].fname}!</p>
            </div>
            <div className=" flex flex-col justify-center rounded">
                {recentOrder[0].products.map((prod) => {
                    return (
                        <div className="m-1 bg-white h-32 text-black rounded flex justify-between p-3 lg:w-1/3">
                            <div>
                            <p className="text-sm">{prod.title}</p>
                            <p className="text-yellow-600">{rateStars(prod.rating)}</p>

                            </div>
                            <img src={prod.image} className="h-20" alt="image" />
                        </div>
                    )
                })}
            </div>
            <div>
                <p>Your order will be delivered at {recentOrder[0].address}</p>
            </div>
        </div>
    )
}