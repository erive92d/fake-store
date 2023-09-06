'use client';

import { Carousel } from 'flowbite-react';
import AddButton from '../components/AddButton';
import { useState, useEffect } from 'react';
import { allProducts } from '../utils/API';
import NewAdd from '../components/NewAdd';
import { getSavedIds, saveId } from '../utils/localStorage';
import NewCart from '../components/NewCart';
export default function CatCar() {
  //LOCAL STORAGE

  //LOCAL STORAGE
  const [items, setItems] = useState([])
  useEffect(() => {
    allProducts()
      .then((res) => res.json())
      .then((data) => setItems(data))
  }, [])


  // console.log(items)
  const mens = items?.filter((item) => item.category === "men's clothing")
  const electronics = items?.filter((item) => item.category === "electronics")
  const jewelry = items?.filter((item) => item.category === "jewelery")
  const womens = items?.filter((item) => item.category === "women's clothing")








  return (
    <div className='relative md:flex md:w-full md:flex-wrap lg:w-1/2 '>
    
      <div className='md:w-1/2 md:p-2 md:h-100 lg:p-0'>

        <Carousel leftControl={<i class="fa-solid fa-arrow-left"></i>}
          rightControl={<i class="fa-solid fa-arrow-right"></i>} indicators={false} slide={5000} className='border h-50 bg-white my-5 lg:my-0 rounded'>
          {mens?.map((item) => {
            return (
              <>

                <div className='flex justify-between items-center p-2'>
                  <p className='text-green-800 font-bold'>${item.price}</p>
                  <NewAdd addItem={item} />
                  {/* <AddButton itemId={item.id} /> */}

                </div>
                <a href={`/item/${item.id}`} className='flex space-x-10 p-10 md:p-5  items-center'>
                  <img alt="..." src={item.image} className='w-1/2' />
                  <div className='space-y-5 w-100'>
                    <h1 className='font-thin text-lg'>{item.title}</h1>
                  </div>

                </a>
              </>

            )
          })}
        </Carousel>

      </div>
      <div className='md:w-1/2 md:p-2 md:h-100 lg:p-0'>
        <Carousel leftControl={<i class="fa-solid fa-arrow-left"></i>}
          rightControl={<i class="fa-solid fa-arrow-right"></i>} indicators={false} slideInterval={5000} className='border h-60 bg-white lg:my-0 my-5 rounded'>

          {womens?.map((item) => {
            return (
              <>
                <div className='flex justify-between items-center p-2'>
                  <p className='text-green-800 font-bold'>${item.price}</p>
                  <NewAdd addItem={item} />

                  {/* <AddButton itemId={item.id} /> */}

                </div>
                <a key={item.id} href={`/item/${item.id}`} className='flex space-x-10 p-10 md:p-5 items-center'>
                  <img alt="..." src={item.image} className='w-1/2' />
                  <div className='space-y-5 w-100'>
                    <h1 className='font-thin text-lg md:h-20 md:overflow-hidden'>{item.title}</h1>
                  </div>

                </a>
              </>

            )
          })}
        </Carousel>

      </div>
      <div className='md:w-1/2 md:p-2 md:h-100 lg:p-0'>
        <Carousel leftControl={<i class="fa-solid fa-arrow-left"></i>}
          rightControl={<i class="fa-solid fa-arrow-right"></i>} indicators={false} slideInterval={5000} className='border h-60 bg-white lg:my-0 my-5 rounded'>

          {electronics?.map((item) => {
            return (
              <>
                <div className='flex justify-between items-center p-2'>
                  <p className='text-green-800 font-bold'>${item.price}</p>
                  <NewAdd addItem={item} />

                  {/* <AddButton itemId={item.id} /> */}

                </div>
                <a key={item.id} href={`/item/${item.id}`} className='flex space-x-10 p-10 md:p-5 lg:flex-col lg:items-center lg:justify-center items-center'>
                  <img alt="..." src={item.image} className='w-1/2' />
                  <div className='space-y-5 w-100'>
                    <h1 className='font-thin text-lg md:h-20 md:overflow-hidden'>{item.title}</h1>
                  </div>

                </a>
              </>

            )
          })}
        </Carousel>
      </div>
      <div className='md:w-1/2 md:p-2 md:h-100 lg:p-0'>

        <Carousel leftControl={<i class="fa-solid fa-arrow-left"></i>}
          rightControl={<i class="fa-solid fa-arrow-right"></i>} indicators={false} slideInterval={5000} className='border h-60 bg-white my-5 lg:my-0 rounded'>

          {jewelry?.map((item) => {
            return (
              <>
                <div className='flex justify-between items-center p-2 '>
                  <p className='text-green-800 font-bold'>${item.price}</p>
                  <NewAdd addItem={item} />

                  {/* <AddButton itemId={item.id} /> */}

                </div>
                <a key={item.id} href={`/item/${item.id}`} className='flex space-x-10 p-10 justify-center'>

                  <img alt="..." src={item.image} className='w-1/2' />

                  <div className='space-y-5 w-100'>
                    <h1 className='font-thin text-lg md:h-20 md:overflow-hidden'>{item.title}</h1>
                  </div>

                </a>
              </>

            )
          })}
        </Carousel>
      </div>


    </div>

  )
}


