// ShoppingCart.js
import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import auth from '../utils/auth';
const CartComp = () => {
    const { cartItems, setCartItems, removeItemFromCart, totalPrice } = useContext(CartContext);

    const handleIncrementQuantity = (itemId, size) => {
        const updatedCartItems = cartItems.map(item =>
            item.item.id === itemId && item.size === size
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        setCartItems(updatedCartItems);
    };

    const handleDecrementQuantity = (itemId, size) => {
        const updatedCartItems = cartItems.map(item =>
            item.item.id === itemId && item.size === size && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setCartItems(updatedCartItems);
    };

    const handleRemoveItem = (item) => {
        const itemIndex = cartItems.findIndex(cart =>
            cart.item.id === item.item.id
        )
        const confirmDelete = confirm("Are you sure?")
        if (confirmDelete) {
            removeItemFromCart(itemIndex)

        }
    }



    return (
        <div className=' flex min-h-screen flex-col w-4/5 m-auto'>
            {cartItems.length === 0 ?
                <div className='mx-auto p-8'>
                    <h1 className='text-2xl font-bold'>Cart is empty</h1>
                </div>
                :
                <>
                    {cartItems.map((item, index) => (
                        <div key={index} className='relative p-10 border-b-4 flex flex-col items-center gap-4  lg:items-start  lg:flex-row'>
                            <div className='lg:w-1/3'>
                                <img className='w-48 h-60' src={item.item.image} />
                            </div>
                            <div className='flex flex-col gap-2 items-center lg:items-start'>
                                <span className='text-xl font-bold'>{item.item.title}</span>
                                <span className='font-lg font-bold text-green-600'>${item.item.price}</span>
                                <span className='font-lg font-bold'>{item?.size?.toUpperCase()}</span>
                                <div className="flex items-center justify-between bg-gray-100 rounded-md p-2">
                                    {item.quantity === 1 ?
                                        <span onClick={() => handleRemoveItem(item)}
                                            className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                                        >x</span>
                                        :
                                        <button
                                            className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                                            onClick={() => handleDecrementQuantity(item.item.id, item.size)}
                                        >
                                            -
                                        </button>
                                    }

                                    <span className="mx-4 text-lg font-semibold">{item.quantity}</span>
                                    <button
                                        className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                                        onClick={() => handleIncrementQuantity(item.item.id, item.size)}
                                    >
                                        +
                                    </button>
                                </div>

                            </div>

                        </div>
                    ))}
                </>
            }
            <div className='flex bg-gray-200 items-center py-2'>
                <span className={`text-lg font-bold  text-green-500 rounded-lg w-1/2 mx-auto`}>${totalPrice()}</span>
                {auth.loggedIn() ? <a className='btn btn-sm text-black btn-ghost btn-outline' href="/checkout">Checkout</a> : <a className='btn btn-sm btn-ghost btn-outline text-black' href="/login">Login</a>}
            </div>
        </div>
    );
};

export default CartComp;
