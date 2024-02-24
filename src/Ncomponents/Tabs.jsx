
export default function Tabs({ items, handlePage, page }) {

    return (
        <div className="text-black bg-gray-100 space-y-5 ">
            <div className="flex text-xl gap-4 py-4 px-16">
                <div>
                    <button
                        name="men's clothing"
                        onClick={handlePage}
                        className={page === "men's clothing" ? 'underline text-orange-500 underline-offset-4' : ' font-thin'}
                    >
                        Mens
                    </button>
                </div>
                <div>
                    <button
                        onClick={handlePage}
                        className={page === "women's clothing" ? 'underline text-orange-500 underline-offset-4 ' : ' font-thin'}
                        name="women's clothing">
                        Womens
                    </button>
                </div>
                <div>
                    <button
                        onClick={handlePage}
                        className={page === 'jewelery' ? 'underline text-orange-500 underline-offset-4 ' : ' font-thin'}
                        name="jewelery">
                        Jewelry
                    </button>
                </div>
                <div>
                    <button
                        onClick={handlePage}
                        className={page === 'electronics' ? 'underline text-orange-500 underline-offset-4 ' : ' font-thin'}
                        name="electronics">
                        Electronics
                    </button>
                </div>
            </div>
        </div>

    )
}