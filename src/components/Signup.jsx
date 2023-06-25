import { useState } from "react";
import { createUser } from "../utils/API";
import auth from "../utils/auth";
export default function Signup() {
    const [userForm, setUserForm] = useState({
        email: "",
        username: "",
        password: ""
    })

    const [errorMssg, setErrorMsg] = useState({
        denied: false,
        mssg: ""
    })

    const handleChange = (e) => {


        const { name, value } = e.target;
        setUserForm({ ...userForm, [name]: value });
    }

    const handleSignup = async (e) => {
        e.preventDefault()

        try {
            const response = await createUser(userForm)

            if (!response.ok) {
                console.log(response.status)
                if (response.status === 561) {
                    console.log("Username already exist")

                    setErrorMsg({ ...errorMssg, denied: true, mssg: "Username already exist" })
                }
                if (response.status === 562) {
                    console.log("Email already exists")
                    setErrorMsg({ ...errorMssg, denied: true, mssg: "Email already exist" })

                }

                // setErrorMsg.denied(false)
                // setErrorMsg.mssg("")
                // setDenied(false)
                return false
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

        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                {/* <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up</h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" action="#" method="POST">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} />
                        </div>

                    </div>
                    <div>
                        <div class="flex items-center justify-between">
                            <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>

                        </div>
                        <div class="mt-2">
                            <input id="username" name="username" type="username" autocomplete="current-username" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} />
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>

                        </div>
                        <div class="mt-2">
                            <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} />
                        </div>
                    </div>

                    <div>
                        <button onClick={handleSignup} type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Create account</button>
                    </div>
                    {errorMssg.denied ? <h1 className="text-red-500">{errorMssg.mssg}</h1> : null}
                </form>

            </div>
        </div>

    )
}