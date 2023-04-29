import auth from "../utils/auth"

import { loginUser } from "../utils/API"
import { useState } from "react"

export default function Login() {


    const [userForm, setUserForm] = useState({
        email: "",
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        console.log(e.target.value)

        const { name, value } = e.target;
        setUserForm({ ...userForm, [name]: value });
    }

    console.log(userForm)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(userForm)
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
        <form className="flex flex-col border items-center justify-center">
            <label for="email">Enter Email</label>
            <input type="email" required id="email" name="email" onChange={handleChange}></input>
            <label for="password">Password:</label>
            <input type="password" required id="password" name="password" onChange={handleChange}></input>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    )
}