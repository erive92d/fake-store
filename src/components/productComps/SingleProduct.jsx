import NewRating from "../NewRating"
import ProductOptions from "./Options"
export default function SingleProduct({ product }) {

    return (
        <div
            className="min-h-screen flex flex-col 
            space-y-4
            lg:justify-around 
            py-8
            lg:flex-row
        ">
            <div className="w-96 lg:h-40 mx-auto">
                <img src={product.image} />
            </div>
            <div className="lg:w-1/2 space-y-4 border-l-2 px-8">
                <h1 className="font-bold text-2xl">{product.title}</h1>
                <NewRating rating={product.rating} />
                <p>
                    {product.description}
                </p>
                <ProductOptions item={product} />
            </div>

        </div>
    )
}