import { useQuery } from "@tanstack/react-query"
import { singleProduct } from "./API"

export default function QueryItemId(id) {
    const { data: product, isLoading } = useQuery({
        queryKey: [id],
        queryFn: async () => singleProduct(id)
    })

    return { product, isLoading }
}