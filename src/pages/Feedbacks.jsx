import { useEffect, useState } from "react";
import { getAllUsers } from "../utils/API";

export default function Feedbacks ({item}) {
    const [reviews, setReviews] = useState({})
    const [userReviews, setUserReviews] = useState([])



    useEffect(()=>{
       
        
        //Function for getting the data of users
        const getReviews = async (reviewItems) => {
            let arrayReviews = [] // Start with empty Array
           
            //Itirate over the users data
            for(let i = 0; i < reviewItems.length; i++) {
                //If a user review is not empty only perform this
                if(reviewItems[i].review.length !== 0) {
                    //push all the reviews to the empty array
                    arrayReviews.push(reviewItems[i].review)
                }
            }
            // for(let i = 0; i < reviewItems.length; i++) {
            //     if(reviewItems[i].review.length !== 0) {
            //         arrayReviews.push(reviewItems[i])
    
            //     }
            // }

            // console.log(arrayReviews)
  
            setUserReviews(...arrayReviews)
        }

        //Initially runs the API that takes all the users
        getAllUsers()
        .then((res)=>res.json())
        .then(((data) => getReviews(data)  ))

   
        getReviews()

    },[])


    // console.log(userReviews, "TEST")


    //if a user review id matches the current item id, grab it.
    const actualRev = userReviews?.filter((revs) => revs.productId === item.id)
    // console.log(actualRev)


    // const actualReviews = userReviews?.map((users) => {
    //     let userNames = users.username
    //     let itemRevs = users.review.filter((rev) => rev.productId === item.id)

        
        
    //     return 
    // })

    // console.log(actualReviews)


    if(!reviews) return <h1>Loading</h1>
    return (
        <div className="border">
            <h1 className="font-bold text-xl text-center">Reviews</h1>

            <div>
                {actualRev?.map((rev) => <p key={rev._id}>{rev.textBody} by </p>)}
            </div>
         
        </div>
    )

}