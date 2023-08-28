import auth from "../utils/auth"

export default function Checkout() {

    if (!auth.loggedIn()) {
        return (
            <div className="p-2 text-center">
                <h1><a href="/login" className=" bg-cyan-600 p-1 rounded-lg">Log in</a> to checkout</h1>
            </div>
        )
    }
    return (
        <div className="p-2 text-center my-2">
            <a href="/checkout" className="bg-blue-500 p-2  rounded font-bold">Checkout</a>
        </div>
    )
}