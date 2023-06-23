'use client'
import Image from "next/image";
import SummaryCard from "./SummaryCard";
import { useEffect, useState } from "react";

export default function ContainerSummary({ products, handleCantChange, handleDeleteProductCart }) {

    const [totalSum, setTotalSum] = useState(0)
    const [myCartLocal, setMyCartLocal] = useState()


    useEffect(() => {
        console.log('hola');
        setMyCartLocal(products)
    }, [products])

    useEffect(()=>{
        const total = myCartLocal?.reduce((acu, producto) => {
            return acu + (producto.price * producto.cant)
        }, 0)
        setTotalSum(total)
    },[myCartLocal])




    return (
        <div className="bg-[#23232790] p-[2rem] flex flex-col gap-y-[1rem]">
            {
                products?.map((prod, index) => {
                    return (
                        <SummaryCard
                            key={index}
                            product={prod}
                            handleCantChange={handleCantChange}
                            handleDeleteProductCart={handleDeleteProductCart}
                            />
                    )
                })
            }
            <h1>Esto es Summary</h1>
            
            <h2>$ {totalSum}</h2>
            
        </div>
    )
}



    // useEffect(() => {

    //     let total = 0
    //     // const cart = localStorage.getItem("myCart")
    //     // const myCart = JSON.parse(cart)

    //     if (myCartLocal && myCartLocal.length > 0) {
    //         total = myCartLocal.reduce((acu, producto) => {
    //             return acu + (producto.price * producto.cant)
    //         }, 0)
    //         setTotalSum(total)
    //     }
    // }, [myCartLocal])

    // ------------------------------------------------------
    // useEffect(() => {
    //     console.log(products);
    //     const total = myCartLocal.reduce((acu, producto) => {
    //         return acu + (producto.price * producto.cant)
    //     }, 0)
    //     setTotalSum(total)

    //     window.addEventListener('storage', handleStorageChange);

    // }, [products])

    // const handleStorageChange = (event) => {
    //     if (event.storageArea === localStorage && event.key === 'myCart') {
    //         console.log('hola');
    //         const storedProducts = JSON.parse(event.newValue) || [];
    //         setMyCartLocal(storedProducts);

    //         const updatedTotalPrice = storedProducts.reduce((total, product) => {
    //             return total + product.price * product.cant;
    //         }, 0);
    //         setTotalSum(updatedTotalPrice);
    //     }
    // };