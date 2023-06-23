import Image from "next/image"
import Tippy from "@tippyjs/react"
import 'tippy.js/dist/tippy.css';
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function ProductCard({ product }) {

    const route = useRouter()
    const path = usePathname()


    const [toolTip, setTooltip] = useState({ })
    const [cant,setCant] = useState(1)
    const [priceModify, setPriceModify] = useState(product.price)
    
    // const [productos, setProductos] = useState([])

    const handleOnClick =(id) =>{
        path.includes('/children/pants') && route.push(`/products/children/pants/${id}`)
        path.includes('/children/shirt') && route.push(`/products/children/shirt/${id}`)
        path.includes('/children/shoes') && route.push(`/products/children/shoes/${id}`)
        path.includes('/children/sweatshirt') && route.push(`/products/children/sweatshirt/${id}`)
        path.includes('/female/hoodie') && route.push(`/products/female/hoodie/${id}`)
        path.includes('/female/pants') && route.push(`/products/female/pants/${id}`)
        path.includes('/female/shoes') && route.push(`/products/female/shoes/${id}`)
        path.includes('/female/t-shirt') && route.push(`/products/female/t-shirt/${id}`)
        path.includes('/hombres/buzos') && route.push(`/products/hombres/buzos/${id}`)
        path.includes('/hombres/pantalones') && route.push(`/products/hombres/pantalones/${id}`)
        path.includes('/hombres/remeras') && route.push(`/products/hombres/remeras/${id}`)
        path.includes('/hombres/zapatillas') && route.push(`/products/hombres/zapatillas/${id}`)
    }

    const addMyCart = () =>{
        const myCartLocal = localStorage.getItem('myCart')
        const myCartParse = JSON.parse(myCartLocal) 
        if(myCartParse.length === 0){
            localStorage.setItem('myCart', JSON.stringify([{...product,cant:cant}])) 
        }else{
            const productMyCart = {...product,cant:cant}
            const myCart = [...myCartParse,productMyCart]
            console.log(myCart);
            localStorage.setItem('myCart', JSON.stringify(myCart))
        }
        
    }
    
    const resCant = () =>{
        if(cant > 1){
            setCant(cant - 1)
        }
    }

    const sumCant = () =>{
        setCant(cant + 1)
        
    }

    useEffect(()=>{
        
        // setTooltip(product)
    },[cant])

    // const handlePrice = () =>{

    //     setPriceModify(priceModify * cant)
    // }

    return (

        <Tippy
            interactive={true}
            placement="left"
            content={
                <div className="flex gap-x-[1rem] py-[1rem] z-0">
                    <div className="w-[20%] flex flex-col gap-y-[1rem]">
                        {
                            product?.sameCode?.map((color, index) => {
                                if(product?._id !== color?._id){
                                    return (
                                        <Image
                                            key={index}
                                            src={color?.images[0]} alt={color?.name} width={200} height={400} />
                                    )
                                } 
                            })
                        }
                    </div>
                    <div className="flex flex-col gap-y-[1rem] w-[70%]">
                        <Image
                            className="w-[100%] cursor-pointer"
                            src={product?.images[0]} alt={product?.name} width={200} height={400} />
                        <div className="w-[90%] mx-[auto] flex flex-col gap-y-[0.6rem]" >
                            <h2 className="font-bold">{product?.brand}</h2>
                            <p>{product?.name}</p>
                    
                            <div className="flex gap-x-[1rem]">
                                <span>Cant</span>
                                <div className="flex">
                                    <span 
                                    className="bg-[#FA8B61] hover:bg-[#F8652A] px-[0.6rem] rounded-l-[0.4rem]  cursor-pointer"
                                    onClick={resCant}>{`<`}</span>
                                    <span 
                                    
                                    className="w-[30px] bg-white text-center text-black ">{cant}</span>
                                    <span 
                                    className="bg-[#FA8B61] hover:bg-[#F8652A] px-[0.6rem] rounded-r-[0.4rem] cursor-pointer"
                                    onClick={sumCant}>{`>`}</span>
                                </div>
                            </div>
                            <span 
                            
                            className="font-bold text-[#F8652A]">$ {product.price * cant}</span>tashed changes
                            {/* <select
                                name="" id="" className="text-black p-[0.6rem] rounded-[0.6rem]">
                                <option value="" disabled>Elegir talle</option>
                                {
                                    product?.size?.map((elemento,index)=>{
                                        return (
                                            <option key={index} value="">{elemento}</option>
                                        )
                                    })
                                }
                                
                            </select> */}

                            <span 
                            onClick={addMyCart}
                            className="cursor-pointer w-[100%] py-[0.6rem] text-center bg-[white] text-black rounded-[0.6rem] hover:bg-[#F8652A] hover:text-white">Añadir a carrito</span>
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
                    className="w-[90%] mx-[auto] cursor-pointer"
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