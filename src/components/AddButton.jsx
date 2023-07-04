import auth from '../utils/auth';
import { useState, useEffect } from 'react';
import { allProducts, saveProduct } from '../utils/API';

export default function AddButton ({itemId}) {


    const [items, setItems] = useState([])
    useEffect(() => {
        allProducts()
            .then((res) => res.json())
            .then((data) => setItems(data))
    }, [])


    const handleButton = async (id) => {
        // localStorage.setItem(Math.floor(Math.random() * 100), id)
        
    if(!auth.loggedIn()) {
        const userLogin = confirm(
            "Log in to your account"
        )
        if(userLogin) {
            window.location.assign('/login')
        } else {
            return
        }
        
    }
        const itemToSave = items.filter((item) => item.id === id)
        console.log(itemToSave[0])

        const token = auth.loggedIn() ? auth.getToken() : null;

        try {

            const response = await saveProduct(itemToSave[0], token)
            console.log(itemToSave)
            if (!response.ok) {
                throw new Error('something went wrong!')
            }
            window.location.reload()

        } catch (err) {
            console.error(err)
        }


    }

    return (
        <div className='py-2'>
             <button className="rounded-md text-black px-3 py-1.5 text-xl font-semibold leading-6 shadow-sm hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => handleButton(itemId)}>
             <i class="fa-solid fa-cart-plus"></i>
            </button>
    </div>
    )
    
}