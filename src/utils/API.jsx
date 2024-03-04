import axios from 'axios'
// export const loginUser = (userData) => {
//     try {
//         return fetch('/api/users/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(userData),
//         });
//     } catch (error) {
//         console.log(error)
//     }

// };

// export const getMe = (token) => {
//     try {
//         return fetch('/api/users/me', {
//             method: "GET",
//             headers: {
//                 'Content-Type': 'application/json',
//                 authorization: `Bearer ${token}`
//             }
//         })
//     } catch (err) {
//         console.error(err)
//     }

// }

// export const createUser = (data) => {
//     return fetch(`/api/users/`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data)
//     })
// }


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

// export const allProducts = async () => {
//     try {
//         const res = await axios.get("/api/products")
//         if (res.status !== 200) {
//             throw new Error('Failed to fetch data');
//         }
//         return await res.data
//     } catch (error) {
//         console.log(error)
//     }

// };

// export const singleProduct = async (productId) => {
//     try {
//         const res = await axios.get(`/api/products/${productId}`)
//         if (res.status !== 200) {
//             console.log("something went wrong")
//         }
//         const product = await res.data
//         return product
//     } catch (error) {
//         console.error(error)
//     }
// };

// export const getOrdersFromUser = async (token) => {
//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     };
//     try {
//         const response = await axios.get("/api/order", config)
//         return response.data
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const addToCart = async (items, token) => {
//     try {
//         return await fetch(`/api/order`, {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 authorization: `Bearer ${token}`
//             },
//             body: JSON.stringify(items)
//         })
//     } catch (error) {
//         console.error(error)
//     }
// };

// export const fetchByCategory = async (cat) => {
//     try {
//         const res = await fetch(`/api/products/c/${cat}`)

//         if (!res.ok) {
//             console.log("something went wrong")
//         }
//         const product = await res.json()
//         return product
//     } catch (error) {
//         console.error(error)
//     }
// };
