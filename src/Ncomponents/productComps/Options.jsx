// ProductOptions.js
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import QueryItemId from '../../utils/QueryItemId';
import { Link } from 'react-router-dom';
const ProductOptions = ({ item }) => {
    const { addItemToCart, cartItems } = useContext(CartContext);
    const [size, setSize] = useState('');
    const [error, setError] = useState("")
    const [quantity, setQuantity] = useState(1)

    //check if the item is already in the cart
    const itemIndex = cartItems.findIndex(cart => cart.item.id === item.id && cart.size === size)
    const itemInCart = cartItems[itemIndex]

    const handleAddToCartClick = () => {
        //We will check if the item is from clothing, which needs to fill out the size
        const isClothes = item.category === "men's clothing" || item.category === "women's clothing"

        if (size && quantity > 0) {
            const newItem = {
                item: item,
                size,
                quantity
            };
            addItemToCart(newItem);
            setError("")
            //if the item is not from clothing, sizing is not necesarry
        } else if (!isClothes) {
            const newItem = {
                item: item,
                quantity
            };
            addItemToCart(newItem);
            setError("")
        } else {
            setError("Please select a size and quantity")
        }
    };

    const handleQuantity = (e) => {
        e.preventDefault()
        if (e.target.value > 10) {
        }
        setQuantity(parseInt(e.target.value))
    }

    return (
        <div className='space-y-4'>
            {item.category === "men's clothing" || item.category === "women's clothing" ?
                <div className='flex gap-4 items-center'>
                    <label htmlFor='size'>Size</label>
                    <select id="size" defaultValue="default" onChange={(e) => setSize(e.target.value)} className="select select-ghost select-sm w-full max-w-xs">
                        <option disabled value="default">Select size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div> :
                null
            }

            <div className='flex gap-4 items-center'>
                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    min="1"
                    max="10"
                    onChange={handleQuantity}
                />
            </div>
            {error && <h1 className='text-red-500'>{error}</h1>}
            {itemInCart ?
                <div className='space-x-2'>
                    <span className='text-lg '>
                        You have {itemInCart.quantity + " "}
                        in
                    </span>
                    <Link className='btn btn-ghost bg-orange-500 text-white' to="/cart">
                        <i class=" fa-solid text-xl fa-cart-shopping"></i>
                    </Link>
                </div>
                :
                <button className='btn btn-ghost text-white bg-orange-600' onClick={handleAddToCartClick}>Add to Cart</button>
            }
        </div>
    );
};

export default ProductOptions;
