import { useState } from "react";
import { createUser } from "../../utils/API";
import auth from "../../utils/auth";
import { errorHandler } from "./Login";

export default function Signup() {
    const [userForm, setUserForm] = useState({
        email: "",
        username: "",
        password: ""
    })

    const [error, setError] = useState("")
    const handleChange = (e) => {
        setError("")
        const { name, value } = e.target;
        setUserForm({ ...userForm, [name]: value });
    }

    const handleSignup = async (e) => {
        e.preventDefault()
        try {
            const response = await createUser(userForm)

            if (!response.ok) {
                const res = await response.json()
                setError(res.message)
            }
            const { token, user } = await response.json();
            auth.login(token);
            window.location.assign("/")


        } catch (err) {
            console.error(err)
        }
        setUserForm.email = ""
        setUserForm.username = ""
        setUserForm.password = ""
    }

    return (

        <div className="min-h-screen flex bg-gray-200 flex-col lg:items-center lg:justify-center">
            <div className="flex flex-col gap-4 lg:shadow-lg p-8 lg:w-96 bg-white">
                <h1 className="text-purple-900 text-2xl font-bold">Sign up</h1>
                <input onChange={handleChange} name="email" className="rounded bg-gray-100" type="email" placeholder="Email Address" />
                <input onChange={handleChange} name="username" className="rounded bg-gray-100" type="text" placeholder="Full name" />
                <input onChange={handleChange} name="password" className="rounded bg-gray-100" type="password" placeholder="Password" />
                <div>
                    <button onClick={handleSignup} className="btn btn-ghost bg-purple-900 text-white">Signup</button>
                </div>
                {error && errorHandler(error)}
            </div>
        </div>
    )


}