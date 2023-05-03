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

export const allProducts = () => {
    return fetch(`https://fakestoreapi.com/products/`);
};

export const singleProduct = (query) => {
    return fetch(`https://fakestoreapi.com/products/${query}`);
};

export const getCategory = (query) => {
    return fetch(`https://fakestoreapi.com/products/category/${query}`)
}