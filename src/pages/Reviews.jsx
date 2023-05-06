import { useEffect } from "react"
import { getAllUsers } from "../utils/API"

export default function ({ rating }) {
    // console.log(rating)
    useEffect(()=> {
        getAllUsers()
        .then((response)=>response.json())
        .then((data) =>console.log(data))
    },[])

    return (
        <div className="text-right">
            <p>{rating.rate} <i class="fa-solid fa-star" style={{ color: "#e2e524" }}></i></p>
            {/* <p>{rating.count} </p> */}
        </div>
    )
}