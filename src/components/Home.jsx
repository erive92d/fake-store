import { allProducts } from "../utils/apicalls/productapi"
import Loading from "./Loading"
import Products from "./productComps/Products"
import customQuery from "../utils/useQueries"
import Tab from "./header/Tab"

export default function Home() {


    const { data: products, isLoading } = customQuery("products", allProducts())

    return (
        <div>
            <Tab />
            {isLoading ? <Loading /> :
                <Products products={products} />
            }
        </div>
    )
}