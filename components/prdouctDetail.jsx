'use client'
import axios from "axios";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import soldout from '../public/soldout.png'

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react"
import Link from "next/link";
import SkeletonDetail from "./SkeletonComponents/SkeletonDetail";
import Review from "./Review";

export default function ProductDetail() {
    const router = useRouter()
    
    const [productDetail, setProductDetail] = useState([])
    const [currentImg, setCurrentImage] = useState("")
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [loading, setLoading] = useState(true)
    
    const notify = (message) => {
        toast.success(message, {
            autoClose: 2000,
        });
    };

    const notifyError = (message) => toast.error(message);
    
    const path = usePathname()
    const idPath = path.split('/').pop()
    const [detail, setDetail] = useState({});
    const [ reviews, setReviews ] = useState([])
    const average = reviews.length ? 
        (reviews.reduce((acc, review) => acc + +(review.ratings), 0) / reviews.length).toFixed(1) : 0
    const stars = '★'.repeat(parseInt(average)) + '☆'.repeat(5 - parseInt(average))
    
    const getDetail = async () => {
        const response = await axios(`http://localhost:3001/products/${idPath}`)
        const arrayProduct = response.data
        getReviews(arrayProduct[0])
        setProductDetail(arrayProduct)
        const imgBase = arrayProduct[0].images[0]
        setCurrentImage(arrayProduct[0]?.images[0])
        setLoading(false)
    }

    const getReviews = async (product)=> {
        const response = await axios.get(`http://localhost:3001/reviews/search?product=${product._id}`)
        setReviews(response.data)
    }

    const handleImgBase = (img) => {
        setCurrentImage(img)
    }

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    };

    const addMyCart = () => {
        const myCartLocal = localStorage.getItem('myCart')
        const myCart = JSON.parse(myCartLocal)
        const product = myCart.find(prod => prod._id === productDetail[0]._id)
        if (!product) {
            productDetail[0].cant = 1;
            const newCart = [...myCart, productDetail[0]]
            localStorage.setItem('myCart', JSON.stringify(newCart))
            notify('Add to Cart')
        } else {
            notifyError('Already added to cart')
        }


    }

    const goBuy = () => {
        const myCartLocal = localStorage.getItem('myCart')
        const myCart = JSON.parse(myCartLocal)
        const product = myCart.find(prod => prod._id === productDetail[0]._id)
        if (!product) {
            productDetail[0].cant = 1;
            const newCart = [...myCart, productDetail[0]]
            localStorage.setItem('myCart', JSON.stringify(newCart))
            notify('Add to Cart')
        } else {
            notifyError('Already added to cart')
        }
        router.push('/checkout')
    }

    useEffect(() => {
        getDetail()
    }, [idPath])

    return (
        <main className="min-h-[100vh] pt-[9rem]">
            {
                loading
                    ?
                    <SkeletonDetail />
                    :
                    <>
                    <section className="w-[70%] mx-[auto] flex justify-center pt-[1rem] pb-[4rem] gap-x-[3rem]">
                        <article className="w-[45%] flex justify-between gap-x-[1rem]">
                            <div className="w-[15%] flex flex-col gap-y-[1rem]">
                                {
                                    productDetail[0]?.images?.map((img, index) => {
                                        return (

                                            <Image
                                                className="cursor-pointer"
                                                onMouseEnter={() => { handleImgBase(img) }}
                                                key={index} src={img} alt="photo" width={500} height={500} />
                                        )
                                    })
                                }

                            </div>
                            <div className="relative w-[85%] overflow-hidden ">
                                <Image
                                    onMouseMove={handleMouseMove}
                                    style={{
                                        transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
                                    }}
                                    className="w-full  object-cover hover:scale-150 transform transition-transform"
                                    src={currentImg} alt={`img`} width={1000} height={1000} />
                            </div>
                        </article>
                        <article className="w-[35%] flex flex-col gap-y-[2rem]">
                            <div className="w-[80%] mx-[auto]">
                                <div className="flex flex-col gap-y-[1rem]">
                                    <div>
                                        <h2 className="font-bold text-[1.4rem]">{productDetail[0]?.brand}</h2>
                                        <p>{productDetail[0]?.name}</p>
                                    </div>
                                    <div className="flex flex-col gap-y-[0.6rem]">
                                        <span>Vendido por (persona)</span>
                                        <div>
                                            <h2 className="font-bold text-[1.4rem]">$ {productDetail[0]?.price}</h2>
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
                                {
                                    (productDetail[0]?.stock > 0)
                                        ?
                                        <div className="flex flex-col gap-y-[0.6rem] mt-[2rem]">
                                            <span
                                                onClick={goBuy}
                                                className="text-white p-[0.6rem] w-[100%] text-center bg-[#FA8B61] hover:bg-[#F8652A] font-bold cursor-pointer">Comprar</span>
                                            <span
                                                onClick={addMyCart}
                                                className="text-[#F8652A] p-[0.6rem] w-[100%] text-center border-[1px] border-[#F8652A] cursor-pointer hover:bg-[#E9E9ED]">Agregar a carrito</span>
                                            <span className="text-[#11111180] border-[1px] border-[#11111180]  p-[0.6rem] w-[100%] text-center bg-[#E9E9ED] cursor-pointer hover:text-black">♥ Agregar a favoritos</span>
                                        </div>

                                        :

                                        <div className="flex flex-col gap-y-[0.6rem] mt-[2rem]">
                                            <span className="text-white p-[0.6rem] w-[100%] text-center bg-red-400 font-bold cursor-pointer">Sold Out</span>
                                            <span className="text-[#11111180] border-[1px] border-[#11111180]  p-[0.6rem] w-[100%] text-center bg-[#E9E9ED] cursor-pointer hover:text-black">♥ Agregar a favoritos</span>
                                        </div>


                                }
                            </div>
                            {
                                (productDetail[1]?.lenght > 0)
                                    ?
                                    <div className="w-[80%] flex flex-col gap-y-[1rem] mx-[auto]">
                                        <h3>Mas colores</h3>
                                        <div className="flex gap-x-[1rem]">

                                            {
                                                productDetail[1]?.map((img, index) => {
                                                    return (
                                                        <Link
                                                            className="w-[15%] hover:border-[1px] hover:border-[#F8652A]"
                                                            href={`/products/hombres/zapatillas/${img?._id}`} key={index}>
                                                            <Image
                                                                src={img?.images[0]} alt={img?.name} width={500} height={500} />
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    : <></>
                            }
                        </article>
                        <ToastContainer
                            position="bottom-left"
                            autoClose={2000}
                            theme="light" />
                    </section>
                    <section className="w-[70%] mx-[auto] flex flex-col justify-left pt-[1rem] pb-[4rem] gap-y-[0.5rem]">
                        <h1 className="text-[1.8rem]">Reviews: <strong>{productDetail[0]?.name}</strong></h1>
                        {reviews.length ? <>
                        <div className="flex justify-between w-[80%]">
                            <div className="flex gap-x-[0.5rem]">
                                <h1 className="flex text-[3.8rem] text-yellow-500 self-baseline"
                                >{average}</h1>
                                <h1 className="flex text-[1.5rem] text-yellow-500 self-baseline"
                                >{stars}</h1>
                                <h1 className="flex text-[1rem] w-fit h-fit self-baseline"
                                >{'(' + reviews.length + ' reviews)'}</h1>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-[0.8rem]">
                            {reviews.map((review)=> <Review data={review}/>)}
                        </div>
                        </>
                        :
                        <h1>No reviews for this product yet, write one!</h1>
                        }
                    </section>
                    </>
            }
        </main>
    )
}