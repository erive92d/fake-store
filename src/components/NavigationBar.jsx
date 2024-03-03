import auth from "../utils/auth";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import CartDrawer from "./cartcomps/CartDrawer";
export default function NavigationBar() {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="text-2xl text-white bg-lime-900 py-8 px-10 ">
            <a href="/" className="text-4xl  font-bold">Sahara Store</a>
        </div>
    )
}