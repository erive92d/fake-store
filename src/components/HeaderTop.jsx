import auth from "../utils/auth";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import CartDrawer from "./cartcomps/CartDrawer";

export default function HeaderTop() {
  return (
    <div className="bg-white border-b-2 px-2 py-2">
                <ul className="flex justify-between text-black gap-4 w-4/5 mx-auto">
                    <li>
                        {auth.loggedIn() ?
                            <button onClick={() => auth.logout()}>Logout</button>
                            :
                            <a className="link-hover" href="/login">
                                Login
                          </a>
                        }
                    </li>
                    <li>
                        <CartDrawer />
                        {/* <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className=" ">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-10 bg-white text-black menu p-2 shadow rounded-box w-52">
                                {cartItems && cartItems.map((cartItem, index) => (
                                    <li className="border-b" key={index}>
                                        <h1>{cartItem.item.title}</h1>
                                    </li>
                                ))}
                                <li className="bg-green-600 text-white rounded-lg">
                                    <Link to="/cart">
                                        Go to cart
                                    </Link>
                                </li>
                            </ul>
                        </div> */}
                    </li>
                </ul>
           
    </div>
  )
}
