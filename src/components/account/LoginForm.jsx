import auth from "../../utils/auth"
import { loginUser } from "../../utils/apicalls/userapi"
import { useState } from "react"

export const errorHandler = (message) => {
    return (
        <div className="fixed bottom-4 right-4 p-4 rounded text-white bg-red-600">
            {message}
        </div>
    )
}

export default function LoginForm() {

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
                <h1 className="text-lime-900 text-2xl font-bold">Login</h1>
                <input onChange={handleChange} name="email" className="rounded bg-gray-100" type="email" placeholder="Email Address" />
                <input onChange={handleChange} name="password" className="rounded bg-gray-100" type="password" placeholder="Password" />
                <div>
                    <button onClick={handleSubmit} className="btn btn-ghost bg-black text-white">Login</button>
                    <a href="/signup" className="link:hover mx-4">Signup</a>
                </div>
                {error && errorHandler(error)}
            </div>
        </div>

    )
}