'use client';

import { Carousel } from 'flowbite-react';
import AddButton from '../components/AddButton';

export default function CatCar({items}) {


  const mens = items.filter((item) => item.category === "men's clothing")
  const electronics = items.filter((item) => item.category === "electronics")
  const jewelry = items.filter((item) => item.category === "jewelery")
  const womens = items.filter((item) => item.category === "women's clothing")

  

  return (
    <div className='my-5'>


    <h1 className='text-xl font-bold'>Mens</h1>
    <Carousel indicators={false} className='border h-80 bg-white my-5 rounded'>
        {mens.map((item) => {
            return (
                <a href={`/item/${item.id}`} className='w-1/2 flex space-x-10 p-10'>
                <img alt="..." src={item.image} className='w-1/2' />
                <div className='space-y-5'>
                <h1>{item.title}</h1>
        <p className='text-green-800 font-bold'>${item.price}</p>
        <AddButton itemId={item.id} />
                </div>
               
                </a>
            )
        })}
    </Carousel>

    <h1  className='text-xl font-bold'>Womens</h1>
<Carousel indicators={false} className='border h-80 bg-white my-5 rounded'>

{womens.map((item) => {
 return (
     <a href={`/item/${item.id}`} className='w-1/2 flex space-x-10 p-10'>
     <img alt="..." src={item.image} className='w-1/2' />
     <div className='space-y-5'>
     <h1>{item.title}</h1>
<p className='text-green-800 font-bold'>${item.price}</p>
<AddButton itemId={item.id} />
     </div>
    
     </a>
 )
})}
</Carousel>

    <h1  className='text-xl font-bold'>Electronics</h1>
        <Carousel indicators={false} className='border h-80 bg-white my-5 rounded'>

     {electronics.map((item) => {
      return (
          <a href={`/item/${item.id}`} className='w-1/2 flex space-x-10 p-10'>
          <img alt="..." src={item.image} className='w-1/2' />
          <div className='space-y-5'>
          <h1>{item.title}</h1>
  <p className='text-green-800 font-bold'>${item.price}</p>
  <AddButton itemId={item.id} />
          </div>
         
          </a>
      )
  })}
  </Carousel>
  <h1  className='text-xl font-bold'>Jewelry</h1>
  <Carousel indicators={false} className='border h-80 bg-white my-5 rounded'>

{jewelry.map((item) => {
 return (
     <a href={`/item/${item.id}`} className='w-1/2 flex space-x-10 p-10'>
     <img alt="..." src={item.image} className='w-1/2' />
     <div className='space-y-5'>
     <h1>{item.title}</h1>
<p className='text-green-800 font-bold'>${item.price}</p>
<AddButton itemId={item.id} />
     </div>
    
     </a>
 )
})}
</Carousel>

  </div>
  
  )
}


