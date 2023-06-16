'use client'
import axios from "axios";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { useEffect, useState } from "react"

export default function DetailHombresZapatillas() {

    const path = usePathname()
    const idPath = path.split('/').pop()
    console.log(idPath);
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const getDetail = async () => {
            console.log(idPath);
            const response = await axios('http://localhost:3000/productsHombresZapatillas.json')
            response.data.forEach(product => {
                if (product.id == idPath) {
                    setDetail(product)
                }
            })
        }
        getDetail()
    }, [idPath])

    return (
        <main className="min-h-[100vh] pt-[9rem]">
            <section className="w-[70%] mx-[auto] flex justify-center pt-[1rem] pb-[4rem] gap-x-[3rem]">
                <article className="w-[40%] flex justify-between ">
                    <div className="w-[15%] flex flex-col gap-y-[1rem]">
                        <Image src={detail.background_image} alt={detail.title} width={500} height={500} />
                        <Image src={detail.background_image} alt={detail.title} width={500} height={500} />
                        <Image src={detail.background_image} alt={detail.title} width={500} height={500} />

                    </div>
                    <Image
                        className="w-[80%]"
                        src={detail.background_image} alt={detail.title} width={1000} height={1000} />
                </article>
                <article className="w-[40%] flex flex-col gap-y-[2rem]">
                    <div className="w-[80%]">
                        <div className="flex flex-col gap-y-[1rem]">
                            <div>
                                <h2 className="font-bold text-[1.4rem]">{detail.marca}</h2>
                                <p>{detail.description}</p>
                            </div>
                            <div className="flex flex-col gap-y-[0.6rem]">
                                <span>Vendido por (persona)</span>
                                <div>
                                    <h2 className="font-bold text-[1.4rem]">$ {detail.price}</h2>
                                    <span>ver cuotas</span>
                                </div>
                            </div>
                        </div>
                        <h3>Talles</h3>
                        <select
                            name="" id="" className="text-black p-[0.6rem] w-[100%] text-center">
                            
                            <option value="" selected disabled>Elegir talle</option>
                            <option value="">38</option>
                            <option value="">39</option>
                            <option value="">40</option>
                            <option value="">41</option>
                        </select>
                        <div className="flex flex-col gap-y-[0.6rem] mt-[2rem]">
                            <span className="text-white p-[0.6rem] w-[100%] text-center bg-[#F8652A] font-bold">Comprar</span>
                            <span className="text-[#F8652A] p-[0.6rem] w-[100%] text-center border-[1px] border-[#F8652A] ">Agregar a carrito</span>
                            <span className="text-[#11111180] border-[1px] border-[#11111180]  p-[0.6rem] w-[100%] text-center bg-[#E9E9ED] ">♥ Agregar a favoritos</span>
                        </div>
                    </div>
                    <div className="w-[100%] flex flex-col gap-y-[1rem]">
                        <h3>Mas colores</h3>
                        <div className="flex gap-x-[1rem]">
                        <Image 
                        className="w-[15%]"
                        src={detail.background_image} alt={detail.title} width={500} height={500} />
                        <Image 
                        className="w-[15%]"
                        src={detail.background_image} alt={detail.title} width={500} height={500} />
                        <Image 
                        className="w-[15%]"
                        src={detail.background_image} alt={detail.title} width={500} height={500} />
                        </div>
                    </div>
                </article>
            </section>

        </main>
    )
}