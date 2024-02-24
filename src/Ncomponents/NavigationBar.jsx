import auth from "../utils/auth";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
export default function NavigationBar() {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="text-2xl bg-white border-b-2 text-black py-6 flex items-center justify-between px-16">
            <a href="/" className="font-bold">Sahara Store</a>
            <div>
                <ul className="flex text-orange-500 gap-4">
                    {/* <li>
                        {auth.loggedIn() ?
                            <button onClick={() => auth.logout()}>Logout</button>
                            :
                            <a href="/login">Login</a>
                        }
                    </li> */}
                    <li>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className=" ">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-10 bg-white text-black menu p-2 shadow rounded-box w-52">
                                {cartItems && cartItems.map((cartItem) => (
                                    <li className="border-b" key={cartItem.item.id}>
                                        <h1>{cartItem.item.title}</h1>
                                    </li>
                                ))}
                                <li className="bg-green-600 text-white rounded-lg">
                                    <Link to="/cart">
                                        Go to cart
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}