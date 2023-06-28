import Review from "./Review";
import { useState } from "react";

export default function ContainerReviews({ reviews }){
    const average = reviews.length ? 
        (reviews.reduce((acc, review) => acc + +(review.ratings), 0) / reviews.length).toFixed(1) : 0
    const averageStars = '★'.repeat(parseInt(average)) + '☆'.repeat(5 - parseInt(average))

    const [ stars, setStars ] = useState(['☆', '☆', '☆', '☆', '☆'])
    const [ ratingStars, setRatingStars ] = useState(['☆', '☆', '☆', '☆', '☆'])

    function handleMouseEnter(event){
        const { id } = event.target
        let newStars = []
        newStars = stars.map((star, index) =>
            parseInt(id[5]) >= index + 1 ? '★' : '☆')
        setStars(newStars)
    }

    function handleMouseLeave(){
        setStars(ratingStars)
    }

    function handleClick(event){
        const { id } = event.target
        let newStars = []
        newStars = stars.map((star, index) =>
            parseInt(id[5]) >= index + 1 ? '★' : '☆')
        setRatingStars(newStars)
    }

    return <div className="flex flex-col gap-y-[2.2rem]">
        {reviews.length ?
            <div className="flex justify-between w-[80%]">
                <div className="flex gap-x-[0.5rem]">
                    <h1 className="flex text-[3.8rem] text-yellow-500 self-baseline"
                    >{average}</h1>
                    <h1 className="flex text-[1.5rem] text-yellow-500 self-baseline"
                    >{averageStars}</h1>
                    <h1 className="flex text-[1rem] w-fit h-fit self-baseline"
                    >{'(' + reviews.length + ' reviews)'}</h1>
                </div>
            </div>
            :
            <h1>No reviews for this product yet!</h1>
        }
        <div className="flex flex-col border p-[1rem] rounded-xl gap-y-[0.8rem] w-[75%]">
            <div className="flex text-[1.3rem] gap-x-[0.5rem] cursor-pointer w-fit" onMouseLeave={handleMouseLeave}>
                <h1 onMouseEnter={handleMouseEnter} id='star_1'
                onClick={handleClick}>
                    {stars[0]}</h1>
                <h1 onMouseEnter={handleMouseEnter} id='star_2'
                onClick={handleClick}>
                    {stars[1]}</h1>
                <h1 onMouseEnter={handleMouseEnter} id='star_3'
                onClick={handleClick}>
                    {stars[2]}</h1>
                <h1 onMouseEnter={handleMouseEnter} id='star_4'
                onClick={handleClick}>
                    {stars[3]}</h1>
                <h1 onMouseEnter={handleMouseEnter} id='star_5'
                onClick={handleClick}>
                    {stars[4]}</h1>
            </div>
            <input className="border-red-400" placeholder="Write a review ..."/>
            <button className="w-[3.8rem] h-[1.8rem] text-white bg-red-400"
            >Post</button>
        </div>
        {reviews.length ?
            <div className="flex flex-col gap-y-[0.8rem] content-center">
                {reviews.map((review)=> <Review data={review}/>)}
            </div> : <></>
        }
    </div>
}