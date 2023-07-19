import { useEffect, useState } from "react";
import { getAllUsers } from "../utils/API";

export default function Feedbacks({ item }) {
    const [reviews, setReviews] = useState({})
    const [userReviews, setUserReviews] = useState([])



    useEffect(() => {


        //Function for getting the data of users
        const getReviews = async (reviewItems) => {
            let arrayReviews = [] // Start with empty Array
            // console.log(reviewItems)
            //Itirate over the users data
            for (let i = 0; i < reviewItems.length; i++) {
                // console.log(reviewItems[i])
                //If a user review is not empty only perform this
                if (reviewItems[i].review.length !== 0) {
                    // console.log(reviewItems[i])
                    //push all the reviews to the empty array
                    arrayReviews.push(reviewItems[i])
                }
            }
            // for(let i = 0; i < reviewItems.length; i++) {
            //     if(reviewItems[i].review.length !== 0) {
            //         arrayReviews.push(reviewItems[i])

            //     }
            // }

            console.log(arrayReviews)

            setUserReviews(arrayReviews)
        }

        //Initially runs the API that takes all the users
        getAllUsers()
            .then((res) => res.json())
            .then(((data) => getReviews(data)))


        getReviews()

    }, [])


    // console.log(userReviews, "TEST")

    const actualReviews = userReviews.map((rev) => rev.review)
    const allReviews = actualReviews.flat()
    // console.log(allReviews)
    // const itemReview = allReviews?.filter(rev => rev.productId === item.id)
    // console.log(itemReview)

    //if a user review id matches the current item id, grab it.
    const actualRev = allReviews?.filter((revs) => revs.productId === item.id)
    // console.log(actualRev)



    // const actualReviews = userReviews?.map((users) => {
    //     let userNames = users.username
    //     let itemRevs = users.review.filter((rev) => rev.productId === item.id)



    //     return 
    // })

    // console.log(actualReviews)


    if (!reviews) return <h1>Loading</h1>
    return (
        <div className="p-2 h-40 overflow-auto">
            <div className={actualRev.length !== 0 ? "border rounded p-2" : "rounded p-2"}>
                {actualRev?.map((rev) => <p key={rev._id} className=" text-gray-700 text-lg">{rev.textBody} <p className="text-sm italic">by Anonymous User</p> </p>)}
            </div>

        </div>
    )


}