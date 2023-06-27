import Image from "next/image"

export default function Review({ data }){
    const { UserID, ratings, comment, StoreID, ProductID } = data

    
    
    return <div>
        <div>
            <Image/>
            <div>
                <h1>{UserID}</h1>
                <div>★ ★ ★ ★ ☆</div>
            </div>
        </div>
        <div>
            <p>{comment}</p>
        </div>
    </div>
}