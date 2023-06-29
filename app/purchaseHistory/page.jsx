'use client'
import { useState, useEffect } from "react"
import CardHistoryPurchase from "@/components/cardHistoryPurchase"
import axios from "axios"
import Image from "next/image"

export default function PurchaseHistory() {
    // const user = JSON.parse(window.localStorage.getItem('user'))
    // console.log(user)

    const [user, setUser] = useState()
    const [getUser, setGetUser] = useState();
    const [localUser, setLocalUser] = useState();

    useEffect(() => {
        const userLocal = JSON.parse(window.localStorage.getItem('user'))
        console.log(userLocal);
        if (userLocal) {
            setUser(userLocal)
        }
        console.log(user);
    }, [])

    const addGetUser = async (userId) => {
        const response = await axios.get(`http://localhost:3001/users/${userId}`)
        console.log(response.data);
        setGetUser(response.data)
    }

    useEffect(() => {
        console.log(user);
        if (user && user.data) {
            addGetUser(user.data._id)
            // axios.get(`http://localhost:3001/users/${userId}`)
            // .then((response)=>setGetUser(response.data))
        }
    }, [user])

    useEffect(() => {
        if (getUser) {

            user.data = getUser;
            localStorage.setItem('user', JSON.stringify(user));
            console.log({ ESTEESELUSUARIOKAPO: getUser })
            setLocalUser(user)

        }
    }, [getUser, user, localUser])

    console.log(localUser);

    return (
        <main className="flex  pt-[9rem] min-h-[100vh] bg-gray-100  rounded-lg shadow-md w-full">
            <div className="w-[20%] bg-white"></div>
            <div className="w-[80%] p-[2rem]">

                {
                    (localUser && localUser?.data && localUser?.data?.purchaseHistory)
                        ?
                        (

                            <table className="w-[100%] ">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-[1px] ">img_product</th>
                                        <th className="py-2 px-4 border-[1px] ">name</th>
                                        <th className="py-2 px-4 border-[1px] ">cant</th>
                                        <th className="py-2 px-4 border-[1px] ">ammount</th>
                                        <th className="py-2 px-4 border-[1px] ">date</th>
                                    </tr>
                                </thead>
                                <tbody className="">

                                {
                                    user?.data?.purchaseHistory?.map((purchase, index) => {
                                        return (
                                            // <div key={index} className="flex">
                                            //     <div className="flex">
                                            //         {purchase?.products?.map((product, index) => {
                                            //             return (
                                            //                 <div key={index} className="ml-auto">
                                            //                     <CardHistoryPurchase
                                            //                         product={product.productId}
                                            //                         size={product.size}
                                            //                         cant={product.cant}
                                            //                     />
                                            //                 </div>
                                            //             );
                                            //         })}
                                            //     </div>
                                            //     <hr className="border-1 border-black" />
                                            //     <div>
                                            //         <p>Date of purchase: {purchase.date}</p>
                                            //         <p>Total amount: {purchase.amount}</p>
                                            //         <hr />
                                            //         <br className="w-full" />
                                            //     </div>
                                            //     <hr className="border-1 border-black my-1" />
                                            //     <br className="w-full" />
                                            // </div>
                                            <tr key={index} className="py-[1rem]">
                                                <td className="w-[5%] text-center py-[1rem]">
                                                    <Image
                                                        className="w-[50%] mx-[auto] "
                                                        src={purchase?.products[0]?.productId?.images[0]} alt="img" width={200} height={200} />
                                                </td>
                                                <td className="text-center py-[1rem]">
                                                    <h2>{purchase?.products[0]?.productId?.name}</h2>
                                                    
                                                </td>
                                                <td className="w-[5%] text-center py-[1rem]">
                                                    <span> {(purchase?.products.reduce((acu, cant) => {
                                                        return acu + cant.cant
                                                    }, 0
                                                    ))} </span>
                                                </td>
                                                <td className="w-[5%] text-center py-[1rem]">
                                                    <span>$ {purchase?.amount}</span>
                                                </td>
                                                <td className="text-center py-[1rem] w-[25%]">
                                                    <span>{purchase?.date}</span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
            ) :
            <span>loading...</span>
}
        </div>
        </main >
    )
}