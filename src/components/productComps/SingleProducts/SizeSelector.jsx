import React from 'react'
import { useState } from 'react';
export default function SizeSelector({ handler }) {


    return (
        <div className='flex gap-4 items-center'>
            <label htmlFor='size'>Size</label>
            <select id="size" defaultValue="default" onChange={handler} className="select select-ghost select-sm w-full max-w-xs">
                <option disabled value="default">Select size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </div>
    )
}
