import { useEffect, useState } from "react"
import { getMe } from "../utils/API"
import auth from "../utils/auth"
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
        <div className="min-h-full flex flex-col justify-center items-center">
            <h1>Order complete!</h1>
            <div>
                <p>Thanks for shopping with us, {recentOrder[0].fname}!</p>
            </div>
            <div className="bg-white flex flex-col items-center rounded w-2/3">
                {recentOrder[0].products.map((prod) => {
                    return (
                        <div className="border">
                            <p>{prod.title}</p>
                            <img src={prod.image} alt="image" />
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