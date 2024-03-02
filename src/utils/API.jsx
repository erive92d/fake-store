import axios from 'axios'
export const loginUser = (userData) => {
    try {
        return fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
    } catch (error) {
        console.log(error)
    }

};


export const saveProduct = (item, token) => {
    return fetch(`/api/users`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(item)
    })
}

export const deleteProduct = (productId, token) => {
    return fetch(`/api/users/products/${productId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        }
    })
}

export const getMe = (token) => {
    try {
        return fetch('/api/users/me', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            }
        })
    } catch (err) {
        console.error(err)
    }

}

export const createUser = (data) => {
    return fetch(`/api/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
}


export const getAllUsers = () => {
    try {
        return fetch('/api/users/')
    } catch (err) {
        console.log(err)
    }
    // return fetch('/api/users/')
    // try {
    //     console.log(await axios.get("/api/users/")) 
    //   } catch (e) {
    //     console.log(e)
    //   }
}

export const leaveFeedback = (token, input, productId) => {
    try {
        return fetch(`/api/users/products/${productId}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(input)
        })
    }
    catch (e) {
        console.log(e, 'api error')
    }
}

export const userOrder = (token, items) => {
    try {
        return fetch('/api/users/order', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(items)
        })
    } catch (error) {
        console.log(error)
    }
}

export const getProductsFromDB = async () => {
    try {
        const res = await fetch("/api/products")
        if (!res.ok) {
            console.log("something went wrong")
        }
        return await res.json()

    } catch (error) {
        console.error(error)
    }
}

export const allProducts = async () => {
    try {
        const res = await fetch("/api/products")
        if (!res.ok) {
            console.log("something went wrong")
        }
        return await res.json()
    } catch (error) {
        console.error(error)
    }
};

export const singleProduct = async (productId) => {
    try {
        const res = await fetch(`/api/products/${productId}`)
        if (!res.ok) {
            console.log("something went wrong")
        }
        const product = await res.json()
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

export const addOrder = async (query) => {
    try {
        const res = await fetch(`/api/order`)
        if (!res.ok) {
            console.log("something went wrong")
        }
        const product = await res.json()
        return product
    } catch (error) {
        console.error(error)
    }
};

export const getCategory = (query) => {
    return fetch(`https://fakestoreapi.com/products/category/${query}`)
}