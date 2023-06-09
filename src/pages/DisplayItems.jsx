import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import auth from '../utils/auth';
import { useEffect, useState } from 'react';
import { saveProduct, getCategory } from '../utils/API';
import Reviews from './Reviews';
export function DisplayItems({ items }) {
    const [currentDisplay, setCurrentDisplay] = useState([...items])
    const [addItem, setAddItem] = useState([])


    // console.log(currentDisplay)

    const handleButton = async (id) => {
        // localStorage.setItem(Math.floor(Math.random() * 100), id)

        const itemToSave = items.filter((item) => item.id === id)
        console.log(itemToSave[0])

        const token = auth.loggedIn() ? auth.getToken() : null;

        try {

            const response = await saveProduct(itemToSave[0], token)

            if (!response.ok) {
                throw new Error('something went wrong!')
            }
            window.location.reload()

        } catch (err) {
            console.error(err)
        }


    }
    console.log(items)
    return (
        <CardGroup className='flex flex-row flex-wrap justify-center gap-10'>

            <div className='flex flex-wrap justify-center'>

                {items.length === 0 ?
                    <div className=''>
                        <h1>unpacking items...</h1>

                    </div> : items.map((item) => {
                        return (
                            <>
                                <Card className="flex flex-col justify-between w-80 static">
                                    <Reviews rating={item.rating} />
                                    <Card.Img className='m-5' variant="top" src={item.image} style={{ width: "100px", height: "150px" }} />
                                    <Card.Body className='m-5'>
                                        <Card.Title>{item.title}</Card.Title>
                                    </Card.Body>
                                    <Card.Footer className='m-5 bottom-0'>
                                        <div className='flex justify-between'>
                                            <Card.Text className='font-bold'>
                                                ${item.price}
                                            </Card.Text>
                                            {auth.loggedIn() ? <div>
                                                <button className="rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => handleButton(item.id)}>
                                                    Add to Cart
                                                </button>

                                            </div>
                                                : null}

                                        </div>

                                    </Card.Footer>
                                </Card>
                            </>

                        )


                    })}
            </div>


        </CardGroup>

    )
}