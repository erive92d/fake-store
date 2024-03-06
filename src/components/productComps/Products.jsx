
import Loading from "../Loading"
import { Link } from "react-router-dom"

export default function Products({ products }) {

    return (
        <div className="min-h-screen lg:w-4/5 lg:mx-auto py-12 my-6">
            <div className="flex flex-col lg:flex-row lg:flex-wrap justify-around">
                {products ?
                    products.map((product) => (
                        <div className="lg:w-1/3 p-14 px-4 flex flex-col items-center gap-4" key={product._id}>
                            <img src={product.image} className="w-1/2 md:w-96 md:h-96 h-60 lg:w-60 lg:h-80"></img>
                            <Link
                                className="font-bold px-4"
                                to={`/products/${product._id}`}
                            >
                                {product.title}
                            </Link>
                            <span className="text-green-600 font-bold">${product.price}</span>

                        </div>
                    ))
                    :
                    <Loading />
                }
            </div>

        </div>
    )
}