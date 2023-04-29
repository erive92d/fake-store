import { useEffect } from "react"
import { getMe } from "../utils/API"
import auth from "../utils/auth";
import { useState } from "react";
export default function Profile() {

    const [userData, setUserData] = useState({})

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

                const user = await response.json();
                setUserData(user);
            } catch (err) {
                console.error(err);
            }
        };

        getUserData();
    }, []);

    console.log(userData)

    return <h1>Profile</h1>
}