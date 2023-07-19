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
        <div className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="small"
                        value="Name"
                    />
                </div>
                <TextInput
                    id="small"
                    sizing="sm"
                    type="text"
                    value={defaultFirst}

                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="base"
                        value="Address"
                    />
                </div>
                <TextInput
                    id="base"
                    sizing="md"
                    type="address"
                    name="address"
                    onChange={handleChange}
                />

            </div>
            <div>
                <div className="flex items-center gap-2">
                    <Radio

                        id="united-state"
                        name="payment"
                        onClick={handleChange}
                        value="paypal"
                    />
                    <Label htmlFor="united-state">
                        Paypal                    </Label>
                    <Radio

                        id="united-state"
                        name="payment"
                        value="venmo"
                        onClick={handleChange}

                    // value="USA"
                    />
                    <Label htmlFor="united-state">
                        Venmo                    </Label>
                </div>
            </div>
            <div>
                <Button onClick={handleSubmit}>Order</Button>
            </div>
        </div>

    )
}