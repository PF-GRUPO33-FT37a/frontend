'use client'
import { useState, useEffect } from "react"
import CardHistoryPurchase from "@/components/cardHistoryPurchase"
import axios from "axios"

export default function PurchaseHistory(){
    // const user = JSON.parse(window.localStorage.getItem('user'))
    // console.log(user)

    const [user, setUser] = useState()
    const [getUser, setGetUser] = useState();
    const [localUser, setLocalUser] = useState();
    
    useEffect(()=>{
        const user = JSON.parse(window.localStorage.getItem('user'))
        if (user && user.data){
            setUser(user)
        }
    },[])

    useEffect(()=>{
        if (user && user.data){
            const userId = user.data._id
            axios.get(`http://localhost:3001/users/${userId}`)
            .then((response)=>setGetUser(response.data))
        }
    },[user])

    useEffect(()=>{
        if (user && user.data){
            const userinfo = JSON.parse(window.localStorage.getItem('user'))
            if (userinfo && userinfo.data){
                user.data = getUser;
                console.log(user); //
                localStorage.setItem('user', JSON.stringify(user));
                setLocalUser(user)
            }
        }
    },[getUser])

    return( 
        <main className="pt-[9rem] min-h-[100vh] w-[70%] p-8 mx-auto">
            <section className="mt-[4rem] mb-[4rem] flex flex-col  justify-center gap-y-[2.5rem]">
                <h1 className="text-[1.8rem]">Purchase history</h1>
                {localUser && localUser.data && localUser.data.purchaseHistory ? (
                    user.data.purchaseHistory.map((purchase, index) => {
                        return (
                            <div key={index} className="bg-gray-100 rounded-lg shadow-md">
                            <div>
                                <p>Date of purchase: {purchase.date}</p>
                                <p>Total amount: {purchase.amount
                                    .toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
                                <hr />
                                <br className="w-full" />
                            </div>
                            <div className="flex">
                                {purchase.products.map((product, index) => {
                                    if (index === 0) {
                                        return (
                                        <div key={index} className="ml-[1rem]">
                                            <CardHistoryPurchase
                                            product={product.productId}
                                            size={product.size}
                                            cant={product.cant}
                                            />
                                        </div>
                                        );
                                    } else {
                                        return (
                                        <div key={index}>
                                            <CardHistoryPurchase
                                            product={product.productId}
                                            size={product.size}
                                            cant={product.cant}
                                            />
                                        </div>
                                        );
                                    }
                                })}
                            </div>
                            <hr/>
                            <br className="w-full" />
                            </div>
                        )
                    })
                ) 
            :
            <span>loading...</span>
            }
            </section>
        </main>
    )
}