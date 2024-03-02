import { useParams } from "react-router-dom";
import Loading from "../Loading";
import SingleProduct from "./SingleProduct";
import customQuery from "../../utils/useQueries";
import { singleProduct } from "../../utils/API";

export default function ViewProduct() {

    const { productId } = useParams()
    const { data: product, isLoading } = customQuery("product", singleProduct, productId)

    return (
        <div>
            <h1>
                {isLoading ?
                    <Loading />
                    :
                    <SingleProduct product={product} />
                }
            </h1>
        </div>
    )
}