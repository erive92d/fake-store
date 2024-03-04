import axios from "axios";

export const allProducts = async () => {
    try {
        const res = await axios.get("/api/products")
        if (res.status !== 200) {
            throw new Error('Failed to fetch data');
        }
        return await res.data
    } catch (error) {
        console.log(error)
    }

};

export const singleProduct = async (productId) => {
    try {
        const res = await axios.get(`/api/products/${productId}`)
        if (res.status !== 200) {
            console.log("something went wrong")
        }
        const product = await res.data
        return product
    } catch (error) {
        console.error(error)
    }
};

export const fetchByCategory = async (cat) => {
    try {
        const res = await fetch(`/api/products/c/${cat}`)

        if (!res.ok) {
            console.log("something went wrong")
        }
        const product = await res.json()
        return product
    } catch (error) {
        console.error(error)
    }
};
