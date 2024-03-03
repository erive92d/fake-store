import React from 'react'
import NewRating from '../../NewRating'


export default function ProductDescription({ image, title, description, rating }) {
    return (
        <div className="lg:w-1/2 space-y-4 lg:py-12">
            <h1 className="font-bold text-2xl">{title}</h1>
            <NewRating rating={rating} />
            <p>
                {description}
            </p>
        </div>
    )
}
