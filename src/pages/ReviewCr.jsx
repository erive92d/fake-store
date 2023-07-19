'use client';

import { Button, Label, Textarea } from 'flowbite-react';
import auth from '../utils/auth';
import { useState } from 'react';
import { leaveFeedback } from '../utils/API';

export default function ReviewCreate({ itemId }) {

    const [input, setInput] = useState({
        productId: itemId,
        textBody: ""
    })


    const handleChange = (e) => {
        const { value, name } = e.target
        setInput({ ...input, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = auth.loggedIn() ? auth.getToken() : null


        if (!token) return false

        try {
            const { productId, textBody } = input
            console.log(productId, textBody)

            const response = await leaveFeedback(token, input, itemId)
            console.log(response)
            if (!response.ok) {
                alert("Error")
                throw new Error('something went wrong!');
            }

            window.location.reload()

        } catch (error) {
            console.log(error)
        }

        setInput({
            textBody: "",

        })


    }



    return (
        <div
            className="max-w-md p-2"
            id="textarea"

        >
            <div className="mb-2 block">
                <Label
                    htmlFor="comment"
                    value=""
                />
            </div>
            <Textarea
                onChange={handleChange}
                id="comment"
                name="textBody"
                placeholder="Leave a comment..."
                required
                rows={4}
            />
            {!auth.loggedIn() ? <h1> <a href="/login" className='text-blue-600'>Log in </a> to leave a comment </h1> :
                <Button type='button' className='my-2' onClick={handleSubmit}>Submit</Button>}
        </div>
    )
}


