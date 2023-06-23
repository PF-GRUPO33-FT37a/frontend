'use client'
import Summary from "@/components/Stripe Components/ContainerSummary";
import { useEffect, useState } from "react";

export default function CheckoutPage ( ){
    const [products,setProducts ] = useState()

    const getMyCart = ()=>{
        const myCartLocal = localStorage.getItem("myCart")
        const myCart = JSON.parse(myCartLocal)
        console.log(myCart);
        setProducts(myCart)
    }

    const handleCantChange = (producId, newCant) =>{
        console.log('aca estoy');
        const newCantProduct = products.map((product)=>{

            if(product._id === producId ){
                console.log('lo encontre');
                return {...product, cant:newCant};
            }
            return product
        })
        setProducts(newCantProduct)
    }
    
    const handleDeleteProductCart = (producId) =>{
        console.log('voy a eliminar');
        const newArrayProduct = products.filter(product=>{
            if(product._id !== producId){
                return product
            }
        })
        setProducts(newArrayProduct)
    }
    
    useEffect(()=>{
        getMyCart()
        console.log(products);
    },[])
    
    useEffect(()=>{
        localStorage.setItem('myCart',JSON.stringify(products))
    },[products])
    
    return (
        <main>
            
            <section className="pt-[10rem] flex w-[80%] mx-[auto] justify-between">
                <h2>Esto es checkout</h2>
                <Summary products={products}
                handleCantChange={handleCantChange}
                handleDeleteProductCart={handleDeleteProductCart}
                />
            </section>
        </main>
    )
}