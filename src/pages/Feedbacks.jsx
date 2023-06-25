import { useEffect, useState } from "react";
import { getAllUsers } from "../utils/API";

export default function Feedbacks({ item }) {
    const [reviews, setReviews] = useState({})
    const [userReviews, setUserReviews] = useState([])



    useEffect(() => {


        const getReviews = async (reviewItems) => {
            let arrayReviews = []


            for (let i = 0; i < reviewItems.length; i++) {
                if (reviewItems[i].review.length !== 0) {
                    arrayReviews = [...reviewItems[i].review]

                }
            }

            setUserReviews(arrayReviews)
        }

        getAllUsers()
            .then((res) => res.json())
            .then(((data) => getReviews(data)))


        getReviews()

    }, [])


    console.log(userReviews, "TEST")



    const actualRev = userReviews?.filter((revs) => revs.productId === item.id)
    console.log(actualRev)

    if (!reviews) return <h1>Loading</h1>


    return (
        <div className="p-2">
            {actualRev?.map((rev) => {
                return (
                    <div className="p-2 border-t-2">
                        <p>{rev.textBody}</p>
                        <p className="text-sm font-thin text-right">anonymous user</p>
                    </div>
                )
            })}
            {/* {userReviews.map((rev) => {
                {rev.productId === item.id ? <h1>True</h1> : <h1>False</h1>}
            })} */}
            {/* {userReviews.map((rev) => (<h1>{Number(rev.productId)}</h1>))} */}

        </div>
    )

}