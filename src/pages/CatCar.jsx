'use client';

import { Carousel } from 'flowbite-react';
import AddButton from '../components/AddButton';
import { useState, useEffect } from 'react';
import { allProducts } from '../utils/API';
export default function CatCar() {
  const [items, setItems] = useState([])
  useEffect(() => {
    allProducts()
      .then((res) => res.json())
      .then((data) => setItems(data))
  }, [])

  console.log(items)

  // console.log(items)
  const mens = items?.filter((item) => item.category === "men's clothing")
  const electronics = items?.filter((item) => item.category === "electronics")
  const jewelry = items?.filter((item) => item.category === "jewelery")
  const womens = items?.filter((item) => item.category === "women's clothing")

  console.log(mens)








  return (
    <div className='my-5 md:flex md:w-full md:flex-wrap md:p-2'>
      <div className='md:w-1/2 md:p-2 md:h-80'>
        <h1 className='text-xl font-bold text-gray-800'>Mens</h1>
        <Carousel leftControl={<i class="fa-solid fa-arrow-left"></i>}
          rightControl={<i class="fa-solid fa-arrow-right"></i>} indicators={false} slideInterval={5000} className='border h-60 bg-white my-5 rounded'>

          {mens.map((item) => {
            return (
              <>
                <a key={item.id} href={`/item/${item.id}`} className='flex space-x-10 p-10 md:p-5  items-center'>
                  <img alt="..." src={item.image} className='w-1/2' />
                  <div className='space-y-5 w-100'>
                    <h1 className='font-thin text-lg'>{item.title}</h1>
                    <p className='text-green-800 font-bold'>${item.price}</p>
                    <AddButton itemId={item.id} />
                  </div>

                </a>
              </>

            )
          })}
        </Carousel>

      </div>
      <div className='md:w-1/2 md:p-2 md:h-80'>
        <h1 className='text-xl font-bold text-gray-800'>Women</h1>
        <Carousel leftControl={<i class="fa-solid fa-arrow-left"></i>}
          rightControl={<i class="fa-solid fa-arrow-right"></i>} indicators={false} slideInterval={5000} className='border h-60 bg-white my-5 rounded'>

          {womens.map((item) => {
            return (
              <>
                <a key={item.id} href={`/item/${item.id}`} className='flex space-x-10 p-10 md:p-5 items-center'>
                  <img alt="..." src={item.image} className='w-1/2' />
                  <div className='space-y-5 w-100'>
                    <h1 className='font-thin text-lg md:h-20 md:overflow-hidden'>{item.title}</h1>
                    <p className='text-green-800 font-bold'>${item.price}</p>
                    <AddButton itemId={item.id} />
                  </div>

                </a>
              </>

            )
          })}
        </Carousel>

      </div>
      <div className='md:w-1/2 md:p-2 md:h-80'>
        <h1 className='text-xl font-bold text-gray-800'>Electronics</h1>
        <Carousel leftControl={<i class="fa-solid fa-arrow-left"></i>}
          rightControl={<i class="fa-solid fa-arrow-right"></i>} indicators={false} slideInterval={5000} className='border h-60 bg-white my-5 rounded'>

          {electronics.map((item) => {
            return (
              <>
                <a key={item.id} href={`/item/${item.id}`} className='flex space-x-10 p-10 md:flex-1'>
                  <img alt="..." src={item.image} className='w-1/2' />
                  <div className='space-y-5 w-100'>
                    <h1 className='font-thin text-lg md:h-20 md:overflow-hidden'>{item.title}</h1>
                    <p className='text-green-800 font-bold'>${item.price}</p>
                    <AddButton itemId={item.id} />
                  </div>

                </a>
              </>

            )
          })}
        </Carousel>
      </div>
      <div className='md:w-1/2 md:p-2 md:h-80'>
        <h1 className='text-xl font-bold text-gray-800'>Jewelry</h1>
        <Carousel leftControl={<i class="fa-solid fa-arrow-left"></i>}
          rightControl={<i class="fa-solid fa-arrow-right"></i>} indicators={false} slideInterval={5000} className='border h-60 bg-white my-5 rounded'>

          {jewelry.map((item) => {
            return (
              <>
                <a key={item.id} href={`/item/${item.id}`} className='flex space-x-10 p-10 justify-center'>
                  <img alt="..." src={item.image} className='w-1/2' />
                  <div className='space-y-5 w-100'>
                    <h1 className='font-thin text-lg md:h-20 md:overflow-hidden'>{item.title}</h1>
                    <p className='text-green-800 font-bold'>${item.price}</p>
                    <AddButton itemId={item.id} />
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


