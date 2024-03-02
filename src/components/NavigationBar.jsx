import auth from "../utils/auth";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import CartDrawer from "./cartcomps/CartDrawer";
export default function NavigationBar() {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="text-2xl text-black py-8 w-4/5 mx-auto ">
            <a href="/" className="text-4xl  font-bold">Sahara Store</a>
        </div>
    )
}