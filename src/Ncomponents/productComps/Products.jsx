import Loading from "../Loading"
import { Link } from "react-router-dom"

export default function Products({ products }) {

    return (
        <div className="min-h-screen lg:w-4/5 lg:mx-auto py-8">
            <div className="flex flex-col lg:flex-row lg:flex-wrap justify-around">
                {products ?
                    products.map((product) => (
                        <div className="lg:w-2/4 p-8 px-2 flex flex-col justify-center border items-center gap-4" key={product.id}>
                            {/* <NewRating rating={product.rating} /> */}
                            <img src={product.image} className="w-1/2 h-60 lg:w-96 lg:h-96"></img>
                            <Link
                                className="font-bold px-4"
                                to={`/item/${product.id}`}
                            >
                                {product.title}
                            </Link>
                        </div>
                    ))
                    :
                    <Loading />
                }
            </div>

        </div>
    )
}