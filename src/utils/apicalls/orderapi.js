import axios from "axios";

export const getOrdersFromUser = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    try {
        const response = await axios.get("/api/order", config)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const addToCart = async (items, token) => {
    try {
        const res = await fetch(`/api/order`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(items)
        })
        if (!res.ok) {
            const { message } = await res.json()
            return message
        }
        return res
    } catch (error) {
        console.error(error.message)
    }
};

export const removeItemFromOrder = async (productId, size = null, token) => {

    let url = `/api/order/${productId}`

    if (size) {
        url += `/${size}`
    }
    try {
        return await axios.delete(url,
            {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`
                },
            })
    } catch (error) {
        console.error(error)

    }
}