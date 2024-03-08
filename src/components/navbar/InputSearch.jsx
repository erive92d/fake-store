import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchProduct, singleProduct } from '../../utils/apicalls/productapi';
import useDebounce from '../../utils/hooks/useDebounce';
import customQuery from '../../utils/useQueries';

function InputSearch() {


    const [searchTerm, setSearchTerm] = useState("")
    // Update URL query parameter when search term changes
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const { debouncedValue } = useDebounce(searchTerm, 2000)


    const { data } = customQuery("title", searchProduct, debouncedValue)
    console.log(data)

    // const handleSearch = async (event) => {
    //     event.preventDefault(); // Prevent default form submission
    //     try {
    //         const productTitle = searchTerm
    //         const res = await searchProduct(productTitle)
    //         console.log(res)
    //         if (!res) {
    //             alert("Failed")
    //         }
    //         console.log(res)
    //     } catch (error) {
    //         console.log(error)
    //     }

    // };


    return (
        <div>
            <form>
                <input
                    className='text-black'
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Search..."
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default InputSearch;
