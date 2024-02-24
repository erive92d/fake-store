import { useEffect } from "react";
import { getAllUsers } from "../utils/API";
import { useState } from "react";
export default function Order() {
    const [userOrders, setUserOrders] = useState([])
    useEffect(() => {
        getAllUsers()
            .then((res) => res.json())
            .then((data) => setUserOrders(data))
    }, [])

    const filledOrders = userOrders?.filter((user) => user.order.length >= 1)
   


    return (
        <div className="flex flex-col ">
            {filledOrders?.map((user) => {
                return (
                    <div className="border">
                        <h1>{user.username}</h1>
                        <ul>
                            {user.order.map((item) =>
                                <li>{item.title}</li>
                            )}

                        </ul>


                    </div>
                )
            })}
        </div>
    )
}   