import { useEffect, useState } from "react"
import { getSavedIds, saveId } from "../utils/localStorage"

export default function NewAdd({ addItem }) {
    // const [localItems, setLocalItems] = useState(getSavedIds())
    // const [arrayOfIds, setArrayOfIds] = useState([])



    // const handleClick = () =>
    //     setLocalItems([...localItems, itemDetail])
    // saveId(localItems)

    const [localItems, setLocalItems] = useState(getSavedIds())
    const handleClick = () => {

        try {
            setLocalItems([...localItems, addItem])
            window.location.reload()

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        saveId(localItems)
    }, [localItems])

    return (
        <button className="rounded-md bg-orange-400 text-white px-3 py-1.5 text-xl font-semibold leading-6 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleClick}>
            Add to cart
        </button>
    )
}