'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
export default function SummaryCard({ product , handleCantChange, handleDeleteProductCart}) {

    const [cant, setCant] = useState(product.cant)

    const restCount = () => {
        if (cant > 1) {
            setCant(cant - 1)
        }
    }

    const sumCount = () => {
        setCant(cant + 1)
    }

    useEffect(()=>{
        handleCantChange(product._id, cant)
        console.log(product._id);
        console.log(cant);
    },[cant])

    return (
        <div>
            <div className="relative flex gap-x-[2rem] bg-[#232327] h-[130px] pt-[1.6rem] px-[1rem] rounded-[0.6rem]">
                <span 
                onClick={()=>{handleDeleteProductCart(product._id)}}
                className="cursor-pointer hover:bg-red-600 absolute font-bold bg-red-400 text-white right-[4px] top-[4px] px-[0.6rem] rounded-[0.4rem]">x</span>
                <Image
                    className="object-cover h-[60px] rounded-[0.4rem]"
                    src={product.images[0]} alt={product.title} width={100} height={0} />
                <div className="flex flex-col gap-y-[0.4rem]">
                    <span className="font-semibold text-[1.2rem] text-white">{product.name}</span>
                    <div className="flex gap-x-[0.8rem]">
                        <span className="font-medium text-white">Cant</span>
                        <div className="flex">
                            <span
                                className=" cursor-pointer select-none text-white font bold bg-[#FA8B61] hover:bg-[#F8652A] px-[0.6rem] rounded-l-[0.6rem]"
                                onClick={restCount}>{`-`}</span>
                            <span className=" bg-white w-[2rem] text-center text-[1rem] items-center">{`${cant}`}</span>
                            <span
                                className="cursor-pointer select-none text-white font bold bg-[#FA8B61] hover:bg-[#F8652A] px-[0.6rem] rounded-r-[0.4rem]"
                                onClick={sumCount}>{`+`}</span>
                        </div>
                    </div>
                    <span className="font-medium text-[#F8652A]">$ {product.price * cant}</span>
                </div>
            </div>
        </div>
    )
}


  // const myCartLocal = localStorage.getItem("myCart")
    // const myCart = JSON.parse(myCartLocal)
    // const newCart = myCart.map(producto=>{
    // })

    // const total = myCart.reduce((acu,producto)=>{
    //     return acu + (producto.price * producto.cant)
    // },0)
    // useEffect(()=>{
    // },[])


    // document.addEventListener('DOMContentLoaded', function () {
    //     console.log('hola');
    //     function handleStorageChange(event) {
    //         if (event.key === 'myCart') {
    //             console.log('Se ha detectado un cambio en el local storage para la clave "miClave"');
    //         }
    //     }

    //     window.addEventListener('storage', handleStorageChange);
    // })