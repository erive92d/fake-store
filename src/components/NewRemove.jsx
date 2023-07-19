import { getSavedIds } from "../utils/localStorage"

export default function NewRemove({ itemId }) {

    const handleRemove = () => {
        const currentItems = getSavedIds()

        try {
            const updatedItems = currentItems.filter((item) => item.id !== itemId)
            localStorage.setItem("saved_ids", JSON.stringify(updatedItems))
            window.location.reload()
        } catch (error) {
            console.error(error)
        }

    }

    return (
        <button className="bg-red-700 text-white w-1/3 rounded-xl" onClick={handleRemove} type="button">
            Remove

        </button>
    )
}