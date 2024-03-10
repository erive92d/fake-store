import { useParams } from "react-router-dom";
import Loading from "../Loading";
import customQuery from "../../utils/useQueries";
import { singleProduct } from "../../utils/apicalls/productapi";
import ProductDescription from "./SingleProducts/ProductDescription";
import SizeSelector from "./SingleProducts/SizeSelector";
import QuantitySelector from "./SingleProducts/QuantitySelector";
import AddButton from "../../actions/AddButton";
import { useState } from "react";

export default function ViewProduct() {

    const [size, setSize] = useState("")
    const [quantity, setQuantity] = useState(1)

    const { productId } = useParams()
    const { data: product } = customQuery("product", singleProduct, productId)

    if (!product) return <Loading />

    const isClothes = product.category === "men's clothing" || product.category === "women's clothing"

    const handleSizeChange = (e) => {
        setSize(e.target.value)
    };

    const handleQuantity = (e) => {
        setQuantity(parseInt(e.target.value))
    };

    return (
        <div
            className="min-h-screen
            flex flex-col
            mx-auto
            lg:w-5/6
            lg:flex-row
            lg:justify-center
            lg:items-center
            rounded-xl
            my-6
            px-4
            lg:px-0
        ">
            <div className="
            lg:w-2/3 py-6 px-4">
                <img className="w-96 lg:h-80" src={product.image} />
            </div>
            <div className="lg:w-4/5
              py-6 flex flex-col gap-4">
                <ProductDescription
                    title={product.title}
                    rating={product.rating}
                    description={product.description}
                    price={product.price}
                />
                {isClothes ? <SizeSelector handler={handleSizeChange} /> : null}
                <QuantitySelector quantity={quantity} handler={handleQuantity} />
                <AddButton productId={productId} isClothes={isClothes} size={size} quantity={quantity} />
            </div>



        </div>
    )
}