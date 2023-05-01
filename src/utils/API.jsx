export const loginUser = (userData) => {
    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
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
    return fetch('/api/users/me', {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        }
    })
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