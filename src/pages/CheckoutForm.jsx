import auth from "../utils/auth"
import { Label, TextInput, Radio, Button } from 'flowbite-react';
import { useEffect, useState } from "react";
import { handleError } from "@apollo/client/link/http/parseAndCheckHttpResponse";
import { userOrder } from "../utils/API";
import { getSavedIds } from "../utils/localStorage";
export default function CheckoutForm() {
    const defaultFirst = auth.getProfile().data.username

    const [orderDetail, setOrderDetail] = useState(
        {
            fname: defaultFirst,
            address: "",
            payment: "",
            products: []
        }
    )

    useEffect(() => {
        const itemsFromLocal = getSavedIds()
        setOrderDetail({ ...orderDetail, products: itemsFromLocal })
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(value)
        setOrderDetail({ ...orderDetail, [name]: value })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // setOrderDetail({ ...orderDetail, fname: defaultFirst })

        try {

            const token = auth.getToken()

            if (!token) return false
            if (!orderDetail) {
                return false
            }

            const response = await userOrder(token, orderDetail)

            if (!response.ok) {
                alert("Could not make the order")
                throw new Error('something went wrong!');
            }
            localStorage.removeItem("saved_ids")
            window.location.assign("/complete")


            // localStorage.setItem("order", JSON.stringify(orderDetail))
            console.log(orderDetail)
            setOrderDetail(
                {
                    fname: "",
                    address: "",
                    payment: ""
                }
            )
            // window.location.assign("/complete")
        } catch (error) {
            alert("Order, failed")
        }

    }


    console.log(orderDetail)



    return (
        <div className="flex max-w-md flex-col gap-4 min-h-screen items-center justify-center">
            <div className="w-2/3 space-y-5">
                <div className="w-100">
                    <div className="mb-2 block">
                        <label
                            htmlFor="small"
                            value="Name"
                        >
                            Name
                        </label>
                    </div>
                    <input
                        className=""
                        id="small"
                        sizing="sm"
                        type="name"
                        value={defaultFirst}

                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <label
                            htmlFor="base"
                            value="Address"
                        >

                            Address
                        </label>
                    </div>
                    <input
                        id="base"
                        sizing="md"
                        type="address"
                        name="address"
                        onChange={handleChange}
                    />

                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <input
                            type="radio"
                            id="united-state"
                            name="payment"
                            onClick={handleChange}
                            value="paypal"
                        />
                        <label htmlFor="united-state">
                            Paypal                    </label>
                        <input type="radio"

                            id="united-state"
                            name="payment"
                            value="venmo"
                            onClick={handleChange}

                        // value="USA"
                        />
                        <label htmlFor="united-state">
                            Venmo                    </label>
                    </div>
                </div>
                <div>
                    <Button onClick={handleSubmit}>Order</Button>
                </div>

            </div>

        </div>

    )
}