import auth from "../utils/auth"

export default function Checkout() {


    if (!auth.loggedIn()) {
        return (
            <div className="p-2">
                <h1><a href="/login" className="underline">Log in</a> to checkout</h1>
            </div>
        )
    }

    return (
        <div className="p-2">
            <a href="/checkout" className="bg-blue-200 p-2 rounded font-bold">Checkout</a>
        </div>
    )
}