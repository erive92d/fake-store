

import { Carousel } from 'flowbite-react';
import AddButton from '../components/AddButton';

export default function CarouselItems({items}) {
    console.log(items)
  return (
    <Carousel indicators={false} className='border h-80 bg-black my-5 rounded'>
        {items.map((item) => {
            return (
                <>
                 <a href={`/item/${item.id}`} className='w-1/2 flex space-x-10 p-10'>
                <img alt="..." src={item.image} className='w-1/2' />
                </a>
                <div className='space-y-5'>
                <h1>{item.title}</h1>
                
        <p className='text-green-800 font-bold'>${item.price}</p>
        <AddButton itemId={item.id} />
                </div>
               
               
                </>
               
            )
        })}
      
      
    </Carousel>
  )
}


