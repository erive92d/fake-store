import auth from "../../utils/auth"

import { createUser, getProductsFromDB, loginUser } from "../../utils/API"
import { useEffect, useState } from "react"

const errorHandler = (message) => {
    return (
        <div className="fixed bottom-4 right-4 p-4 rounded text-white bg-red-600">
            {message}
        </div>
    )
}

export default function Login() {

    const [userForm, setUserForm] = useState({
        email: "",
        username: "",
        password: ""
    })

    const [error, setError] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setError("")
        setUserForm({ ...userForm, [name]: value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await loginUser(userForm)
            if (!response.ok) {
                const res = await response.json()
                setError(res.message)
                throw new Error('something went wrong!');
            }
            const { token, user } = await response.json();
            auth.login(token);
        } catch (err) {
            console.error(err);
        }
        setUserForm.email = ""
        setUserForm.username = ""
        setUserForm.password = ""

    }

    return (

        <div className="min-h-screen flex bg-gray-200 flex-col lg:items-center lg:justify-center">
            <div className="flex flex-col gap-4 lg:shadow-lg p-8 lg:w-96 bg-white">
                <h1 className="text-purple-900 text-2xl font-bold">Login</h1>
                <input onChange={handleChange} name="email" className="rounded bg-gray-100" type="email" placeholder="Email Address" />
                <input onChange={handleChange} name="password" className="rounded bg-gray-100" type="password" placeholder="Password" />
                <div>
                    <button onClick={handleSubmit} className="btn btn-ghost bg-purple-900 text-white">Login</button>
                </div>
                {error && errorHandler(error)}
            </div>
        </div>

    )
}