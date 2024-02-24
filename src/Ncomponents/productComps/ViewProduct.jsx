import { useParams } from "react-router-dom";
import Loading from "../Loading";
import ProductComp from "./ProductComp";
import QueryItemId from "../../utils/QueryItemId";

export default function ViewProduct() {

    const { id } = useParams()
    const { product, isLoading } = QueryItemId(id)

    return (
        <div>
            <h1>
                {isLoading ?
                    <Loading />
                    :
                    <ProductComp product={product} />
                }

            </h1>
        </div>
    )
}