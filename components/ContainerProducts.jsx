'use client'
import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"
import ProductCard from "./ProductCard"
import Tippy from "@tippyjs/react"
import 'tippy.js/dist/tippy.css';
import { usePathname, useRouter } from "next/navigation";


export default function ContainerProducts({products}) {

    const route = useRouter()
    const path = usePathname()
    
    // const [productos, setProductos] = useState([])

    const handleOnClick =(id) =>{
        route.push(`/products/hombres/zapatillas/${id}`)
    }
    // const getProducts = async () => {


    //     if(path.includes('hombres/remeras') || path.includes('children/shirt') || path.includes('female/shirt')){ 
        
    //     try {
    //         const response = await axios('http://localhost:3000/productsHombresRemeras.json')
    //         console.log(response);
    //         setProductos(response.data)
    //         console.log(`esto son productos ${productos.length}`);
    //     } catch (error) {
    //         console.log(error);
    //     }

    // }else if(path.includes('hombres/buzos') || path.includes('children/sweatshirt') || path.includes('female/sweatshirt')) {
    //     try {
    //         const response = await axios('http://localhost:3000/productsHombresBuzos.json')
    //         console.log(response);
    //         setProductos(response.data)
    //         console.log(`esto son productos ${productos.length}`);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // else if(path.includes('hombres/pantalones') || path.includes('children/pants') || path.includes('female/pants')) {
    //     try {
    //         const response = await axios('http://localhost:3000/productsHombresPantalones.json')
    //         console.log(response);
    //         setProductos(response.data)
    //         console.log(`esto son productos ${productos.length}`);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // else {
    //     try {
    //         const response = await axios('http://localhost:3000/productsHombresZapatillas.json')
    //         console.log(response);
    //         setProductos(response.data)
    //         console.log(`esto son productos ${productos.length}`);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }



    // }

    // useEffect(() => {
    //     getProducts()
    // }, [])

    return (
        <div className="flex flex-wrap p-[2rem] justify-between gap-y-[2rem]">
            {

                products?.map((producto, index) => {
                    return (
                        <Tippy
                            interactive={true}
                            placement="left"
                            content={
                                <div className="flex gap-x-[1rem] py-[1rem] z-0">
                                    <div className="w-[20%] flex flex-col gap-y-[1rem]">
                                        <Image
                                            src={producto?.images[0]} alt={producto?.name} width={200} height={400} />
                                        <Image
                                            src={producto?.images[0]} alt={producto?.name} width={200} height={400} />
                                        <Image
                                            src={producto?.images[0]} alt={producto?.name} width={200} height={400} />
                                    </div>
                                    <div className="flex flex-col gap-y-[1rem] w-[70%]">
                                        <Image
                                            className="w-[100%]"
                                            src={producto?.images[0]} alt={producto?.name} width={200} height={400} />
                                        <div className="w-[90%] mx-[auto] flex flex-col gap-y-[0.6rem]" >
                                            <h2 className="font-bold">{producto?.brand}</h2>
                                            <p>{producto?.name}</p>
                                            <span className="font-bold">$ {producto.price}</span>
                                            <select 
                                            name="" id="" className="text-black p-[0.6rem] rounded-[0.6rem]">
                                                <option value="" disabled>Elegir talle</option>
                                                <option value="">38</option>
                                                <option value="">39</option>
                                                <option value="">40</option>
                                                <option value="">41</option>
                                            </select>
                                            <span className="w-[100%] py-[0.6rem] text-center bg-[white] text-black rounded-[0.6rem]">Añadir a carrito</span>
                                        </div>
                                    </div>
                                </div>
                            }
                            key={index}>
                            <div
                                onClick={()=>{handleOnClick(producto?._id)}}
                                className="w-[30%] flex flex-col gap-y-[1rem]"
                            >
                                <Image
                                    className="w-[90%] mx-[auto]"
                                    src={producto?.images[0]} alt={producto?.name} width={200} height={400} />
                                <div className="w-[90%] mx-[auto]">
                                    <h2 className="font-bold">{producto?.brand}</h2>
                                    <p>{producto?.name}</p>
                                    <span className="font-bold">$ {producto.price}</span>
                                </div>

                            </div>
                        </Tippy>
                    )
                })
            }
            {/* {
                productos?.map((produc)=>{
                    return(
                        <ProductCard
                        key={produc?.id}
                        title={produc?.title}
                        marca={produc?.marca}
                        talle={produc?.talle}
                        background_image={produc?.background_image}
                        price={produc?.price}
                        />
                    )
                })
            } */}

        </div>
    )
}