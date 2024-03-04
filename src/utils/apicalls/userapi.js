import axios from 'axios'

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

export const createUser = (data) => {
    return fetch(`/api/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
}


