import { useEffect } from "react"
import { getMe } from "../utils/API"
import auth from "../utils/auth";
import Button from "react-bootstrap/Button"
import { useState } from "react";
import { deleteProduct } from "../utils/API";
export default function Cart() {
    const [userData, setUserData] = useState({})
    const token = auth.loggedIn() ? auth.getToken() : null;
    // console.log(token)

    useEffect(() => {

        const getUserData = async () => {
            try {
                const token = auth.loggedIn() ? auth.getToken() : null;

                if (!token) {
                    return false;
                }

                const response = await getMe(token);

                if (!response.ok) {
                    throw new Error('something went wrong!');
                }
                // console.log(response)
                

                const user = await response.json();
                
                // console.log(user,'XXXXXXXXXXXXX')
                setUserData(user);
            } catch (err) {
                console.error(err);
            }
        };

        getUserData();
    }, []);

    console.log(userData)
    if (!userData) {
        return <h1>Loading</h1>
    }

    let totalPrice = 0
    const itemPrice = userData.order?.map((item) => item.price += totalPrice)
    itemPrice?.map((price) => totalPrice += price)

    console.log(totalPrice)

    const handleDelete = async (id) => {
        const token = auth.loggedIn() ? auth.getToken() : null;

        if (!token) {
            return false
        }

        try {
            const response = await deleteProduct(id, token)

            if (!response.ok) {
                throw new Error("Error")
            }
            window.location.reload()

        } catch (err) {
            console.error(err)
        }

    }



    return (
        <div className="flex flex-wrap flex-col m-2 ">
            <div>
                <h1 className='' style={{ fontSize: "50px" }}>Shopping Cart</h1>
                <h2>Total ${Math.round(totalPrice)}</h2>
                <button type="submit" className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => handleDelete(item._id)}>Checkout</button>
            </div>

            <div className="flex flex-wrap ">
                {userData.order?.map((item) => {
                    return (
                        <div className="border flex justify-center flex-wrap w-1/2 p-2">
                            <div className="flex flex-col items-center">
                                <img src={item.image} style={{ width: '230px', height: "200px" }}></img>
                                <h1>{item.title}</h1>
                                {/* <p>{item.description}</p> */}
                                <p>${item.price}</p>
                                <div>
                                    <button type="submit" className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => handleDelete(item._id)}>Delete</button>

                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>



        </div>

    )
}