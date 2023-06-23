import { useEffect, useState } from "react";
import { getAllUsers } from "../utils/API";

export default function Feedbacks ({item}) {
    const [reviews, setReviews] = useState({})
    const [userReviews, setUserReviews] = useState([])
    useEffect(()=>{
        const getReviews = () => {
            let arrayReviews = []
            for(let i = 0; i < reviews.length; i++) {
                if(reviews[i].review.length !== 0) {
                    arrayReviews = [...reviews[i].review]
    
                }
            }
    
            setUserReviews(arrayReviews)
        }

        getAllUsers()
        .then((res)=>res.json())
        .then(((data) => setReviews(data)  ))

        getReviews()

       

    },[])

    

    console.log(userReviews)


    console.log(reviews)
    if(!reviews) return <h1>Loading</h1>


    return (
        <div className="border">
            {/* {getReviews().map((item) => {
                <p>{item.textBody}</p>
            })} */}
        </div>
    )

}