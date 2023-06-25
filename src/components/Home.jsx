import { Navtab } from "./Navtab";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import auth from "../utils/auth";
import AddButton from "./AddButton";
import CardGroup from 'react-bootstrap/CardGroup';
import { saveProduct, getCategory, allProducts } from '../utils/API';
import Reviews from '../pages/Reviews'
import CatHeader from "./CatHeader";
import Featured from "../pages/Featured";
import FeaturedNew from "../pages/FeaturedNew";

export default function Home() {

    const [items, setItems] = useState([])
    const [currentAPI, setCurrentAPI] = useState(allProducts())
    const [currentCategory, setCurrentCategory] = useState("")
    useEffect(() => {
        currentAPI
            .then((res) => res.json())
            .then((data) => setItems(data))
    }, [currentAPI])

    const handleClick = (e) => {

        e.preventDefault()
        const catName = e.target.value
        setCurrentCategory(catName)
        console.log(catName)
        if (catName === "all") {
            setCurrentAPI(allProducts())
            return
        }

        setCurrentAPI(getCategory(catName))
    }

    if (!items[0]) {
        return (
            <div class="flex flex-col items-center justify-center h-fit">
                <div role="status">
                    <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>

                </div>
                <span>Unpacking items...</span>
            </div>
        )
    }



    // const featuredItem = items?.filter((prod) => prod.id === Math.floor(Math.random()*20))
    //     console.log(featuredItem)
    return (
        <div className="my-5">

            <div class="mt-2">
                <div class="border-b border-gray-200 ">
                    <div class="-mb-px flex space-x-8 px-4 justify-around" aria-orientation="horizontal" role="tablist">
                        <button id="tabs-1-tab-2" name="all" onClick={handleClick} value="all" class="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">All</button>

                        {/* <!-- Selected: "border-indigo-600 text-indigo-600", Not Selected: "border-transparent text-gray-900" --> */}
                        <button id="men" name="all" onClick={handleClick} value="men's clothing" class="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium" aria-controls="tabs-1-panel-1" role="tab" type="button">Men</button>
                        <button id="women" name="all" onClick={handleClick} value="women's clothing" class="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium" aria-controls="tabs-1-panel-1" role="tab" type="button">Women</button>

                        {/* <!-- Selected: "border-indigo-600 text-indigo-600", Not Selected: "border-transparent text-gray-900" --> */}
                        <button id="tabs-1-tab-2" name="all" onClick={handleClick} value="electronics" class="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">Electronics</button>
                        <button id="tabs-1-tab-2" name="all" onClick={handleClick} value="jewelery" class="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">Jewelry</button>
                    </div>
                </div>
            </div>
            <Featured featuredItem={items} />
            {/* <FeaturedNew items={items}/> */}

            <CardGroup className='flex flex-row flex-wrap justify-center gap-10'>


                <div className='flex flex-wrap justify-center'>

                    {items.map((item) => {

                        return (

                            <>

                                <Card className="flex flex-col justify-between border  w-80 static">
                                    <Reviews rating={item.rating} />
                                    <Card.Img className='m-5' variant="top" src={item.image} style={{ width: "100px", height: "150px" }} />
                                    <Card.Body className='m-5'>
                                        <Card.Title><Link to={`/item/${item.id}`}>{item.title}</Link></Card.Title>
                                    </Card.Body>
                                    <Card.Footer className='m-5 bottom-0'>
                                        <div className='flex justify-between'>
                                            <Card.Text className="font-bold text-xl">
                                                ${item.price}
                                            </Card.Text>


                                            <AddButton itemId={item.id} />


                                        </div>

                                    </Card.Footer>
                                </Card>
                            </>

                        )
                    })}
                </div>


            </CardGroup>


        </div>
    )
}