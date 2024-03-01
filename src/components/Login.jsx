import auth from "../utils/auth"

import { createUser, loginUser } from "../utils/API"
import { useEffect, useState, createContext, useContext } from "react"
import { CartContext } from "../App"
export default function Login() {

    const cart = useContext(CartContext)

    const [userForm, setUserForm] = useState({
        email: "",
        username: "",
        password: ""
    })

    console.log(cart.cart)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserForm({ ...userForm, [name]: value });
    }

    // console.log(userForm)

    const handleSubmit = async (e) => {
        e.preventDefault()
  
        try {
            const response = await loginUser(userForm)
            // auth.login(data.login.token);

            if (!response.ok) {
                alert("Incorrect email/password")
                throw new Error('something went wrong!');
            }

            const { token, user } = await response.json();
            console.log(user);
            console.log(token)
            auth.login(token);

        } catch (err) {
            console.error(err);

        }
        setUserForm.email = ""
        setUserForm.username = ""
        setUserForm.password = ""

    }

    return (
      
        <div class="flex h-screen flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                {/* <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
            </div>
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" action="#" method="POST">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} />
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-white">Password</label>

                        </div>
                        <div class="mt-2">
                            <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} />
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSubmit}>Sign in</button>
                    </div>
                </form>

                <p class="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <a href="/signup" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign up here!</a>
                </p>
            </div>
        </div>

    )
}