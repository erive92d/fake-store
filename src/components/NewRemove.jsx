import { getSavedIds } from "../utils/localStorage"

export default function NewRemove({ handleDelete, itemId }) {

    return (
        <button className="bg-red-700 text-white w-1/3 rounded-xl" onClick={() => handleDelete(itemId)} type="button">
            Remove
        </button>
    )
}