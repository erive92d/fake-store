import { useParams } from "react-router-dom";
import Loading from "../Loading";
import customQuery from "../../utils/useQueries";
import { singleProduct } from "../../utils/apicalls/productapi";
import ProductDescription from "./SingleProducts/ProductDescription";
import SizeSelector from "./SingleProducts/SizeSelector";
import QuantitySelector from "./SingleProducts/QuantitySelector";
import AddButton from "./AddButton";
import { useState } from "react";

export default function ViewProduct() {

    const [size, setSize] = useState("")
    const [quantity, setQuantity] = useState(1)

    const { productId } = useParams()
    const { data: product, isLoading } = customQuery("product", singleProduct, productId)


    if (isLoading) return <Loading />

    const isClothes = product.category === "men's clothing" || product.category === "women's clothing"

    const handleSizeChange = (e) => {
        setSize(e.target.value)
    };

    const handleQuantity = (e) => {
        setQuantity(parseInt(e.target.value))
    };

    return (
        <div
            className="min-h-screen flex flex-col
            w-96 mx-auto
            lg:w-5/6
            lg:flex-row
            lg:justify-around
            border-2
            rounded-xl
            my-6
        ">
            <div className="w-96 py-6 px-4 lg:h-40">
                <img src={product.image} />
            </div>
            <div className="lg:w-1/2 py-6 px-6 flex flex-col gap-4">
                <ProductDescription
                    title={product.title}
                    rating={product.rating}
                    description={product.description}
                />
                {isClothes ? <SizeSelector handler={handleSizeChange} /> : null}
                <QuantitySelector quantity={quantity} handler={handleQuantity} />
                <AddButton productId={productId} size={size} quantity={quantity} />
            </div>



        </div>
    )
}