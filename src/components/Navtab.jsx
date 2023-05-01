import auth from "../utils/auth"
import { useEffect, useState } from "react"
import { getMe } from "../utils/API"

export function Navtab() {

    const [orderLength, setOrderLength] = useState(0)


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
                setOrderLength(user.order.length)


            } catch (err) {
                console.error(err);
            }
        };

        getUserData();
    }, [orderLength])


    // console.log(auth.getProfile())
    return (
        <div>
            <nav class="flex justify-between border space-x-4 mb-5 bg-cyan-900 text-white items-center h-20">
                <div className="logo p-2 text-slate-200" >
                    {auth.loggedIn() ? <h3 style={{ fontSize: "20px" }}>Hello, {auth.getProfile().data.username} </h3> : <h1 style={{ fontSize: "50px" }}>Sahara</h1>
                    }
                </div>

                <div className="navs flex m-auto">
                    <a href="/" class="font-bold px-3 py-2 text-slate-200 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
                    {auth.loggedIn() ? <>
                        <a href="/cart" className="font-bold px-3 py-2 text-slate-200 rounded-lg hover:bg-slate-100 hover:text-slate-900">Cart {orderLength >= 1 ? orderLength : null}</a>
                        <a href="/me" class="font-bold px-3 py-2 text-slate-200 rounded-lg hover:bg-slate-100 hover:text-slate-900">Profile</a>
                    </> : null}

                    {auth.loggedIn() ? <a href="/" onClick={() => auth.logout()} className="font-bold px-3 py-2 text-slate-200 rounded-lg hover:bg-slate-100 hover:text-slate-900">Logout</a> : <a href="/login" class="font-bold px-3 py-2 text-slate-200 rounded-lg hover:bg-slate-100 hover:text-slate-900">Log In</a>
                    }
                </div>
            </nav>


        </div>


    )
}