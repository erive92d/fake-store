import CategoryBanner from "./CategoryBanner";
import CurrentPage from "./CurrentPage";
import { useState } from "react";
export default function Tabs({items, handlePage, page}) {


    return (
        <div className="bg-gray-800 text-white space-y-5 ">
            <div className="flex relative justify-around py-2 shadow-lg shadow-purple-700">
                <div>
                    <button 
                    name="men's clothing"
                    onClick={handlePage}
                    className={page === "men's clothing" ? 'font-bold  bg-white text-black ease-out p-2 duration-200  sticky rounded': 'p-2 font-thin'}
                        >
                        Mens
                        </button>
                </div>
                <div>
                    <button 
                    onClick={handlePage}
                    className={page === "women's clothing" ? 'font-bold bg-white text-black ease-out p-2 duration-200  sticky rounded' :  'p-2 font-thin'}
                    name="women's clothing">
                        Womens
                        </button>
                </div>
                <div>
                    <button
                    onClick={handlePage}
                    className={page === 'jewelery' ? 'font-bold bg-white text-black ease-out p-2 duration-200  sticky rounded' :  ' p-2 font-thin'}
                    name="jewelery">
                        Jewelry
                        </button>
                </div>
                <div>
                    <button
                    onClick={handlePage}
                    className={page === 'electronics' ? 'font-bold bg-white text-black ease-out p-2 duration-200  sticky rounded' : 'p-2 font-thin'}
                    name="electronics">
                        Electronics
                        </button>
                </div>
            </div>
            
            <div >
                {/* <CurrentPage page={page}/> */}
            </div>

        </div>
       
    )
}