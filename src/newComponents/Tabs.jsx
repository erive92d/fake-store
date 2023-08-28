import CategoryBanner from "./CategoryBanner";
import CurrentPage from "./CurrentPage";
import { useState } from "react";
export default function Tabs({items}) {

    const [page, setPage] = useState("men's clothing")

    const handlePage = (e) => {
        e.preventDefault()
        setPage(e.target.name)
    }


    return (
        <div className="bg-gray-800 text-white space-y-5">
            <div className="flex justify-around py-3  shadow-lg shadow-purple-500">
                <div>
                    <button 
                    name="men's clothing"
                    onClick={handlePage}
                    className={page === "men's clothing" ? 'font-bold text-white underline underline-offset-4': 'font-thin'}
                        >
                        Mens
                        </button>
                </div>
                <div>
                    <button 
                    onClick={handlePage}
                    className={page === "women's clothing" ? 'font-bold text-white underline underline-offset-4' : 'font-thin'}
                    name="women's clothing">
                        Womens
                        </button>
                </div>
                <div>
                    <button
                    onClick={handlePage}
                    className={page === 'jewelery' ? 'font-bold text-white underline underline-offset-4' : 'font-thin'}
                    name="jewelery">
                        Jewelry
                        </button>
                </div>
                <div>
                    <button
                    onClick={handlePage}
                    className={page === 'electronics' ? 'font-bold text-white underline underline-offset-4' : 'font-thin'}
                    name="electronics">
                        Electronics
                        </button>
                </div>
            </div>
            
            <div >
                <CurrentPage page={page}/>
            </div>

        </div>
       
    )
}