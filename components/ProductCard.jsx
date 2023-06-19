import Image from "next/image"
import Tippy from "@tippyjs/react"
import 'tippy.js/dist/tippy.css';
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function ProductCard({ product }) {

    const route = useRouter()
    const path = usePathname()

    const [toolTip, setTooltip] = useState({
        
    })
    
    // const [productos, setProductos] = useState([])

    const handleOnClick =(id) =>{
        route.push(`/products/hombres/zapatillas/${id}`)
    }

    useEffect(()=>{
        setTooltip(product)
    },[])

    return (

        <Tippy
            interactive={true}
            placement="left"
            content={
                <div className="flex gap-x-[1rem] py-[1rem] z-0">
                    <div className="w-[20%] flex flex-col gap-y-[1rem]">
                        {
                            product?.sameCode?.map((color, index) => {
                                return (
                                    <Image
                                        key={index}
                                        src={color?.images[0]} alt={color?.name} width={200} height={400} />
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-col gap-y-[1rem] w-[70%]">
                        <Image
                            className="w-[100%]"
                            src={product?.images[0]} alt={product?.name} width={200} height={400} />
                        <div className="w-[90%] mx-[auto] flex flex-col gap-y-[0.6rem]" >
                            <h2 className="font-bold">{product?.brand}</h2>
                            <p>{product?.name}</p>
                            <span className="font-bold">$ {product.price}</span>
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
            >
            <div
                onClick={() => { handleOnClick(product?._id) }}
                className="w-[30%] flex flex-col gap-y-[1rem]"
            >
                <Image
                    className="w-[90%] mx-[auto]"
                    src={product?.images[0]} alt={product?.name} width={200} height={400} />
                <div className="w-[90%] mx-[auto]">
                    <h2 className="font-bold">{product?.brand}</h2>
                    <p>{product?.name}</p>
                    <span className="font-bold">$ {product.price}</span>
                </div>

            </div>
        </Tippy>
    )
}