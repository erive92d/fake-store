export default function ({ rating }) {
    // console.log(rating)


    return (
        <div className="text-right">
            <p>{rating.rate} <i class="fa-solid fa-star" style={{ color: "#e2e524" }}></i></p>
            {/* <p>{rating.count} </p> */}
        </div>
    )
}