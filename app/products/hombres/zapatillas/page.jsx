'use client'
import ContainerProducts from "@/components/ContainerProducts"
import {useEffect, useState } from "react"
import axios from "axios"
import FilterBar from "@/components/FilterBar"

export default function ProductsPage() {

    
    const [products, setProducts] = useState([])

    

    const getShoes = async() =>{
        const response = await axios.get('http://localhost:3001/products/search?gender=male&category=shoe')
        const arrayProduct = response.data.documents
        setProducts(arrayProduct)
        // console.log(response.data.documents);
    }

    useEffect(()=>{
        // console.log(products);
        getShoes()
    },[])


    return (
        <main className="pt-[9rem] min-h-[100vh]">
            <section className="w-[70%] mx-[auto] flex py-[3rem]">
                <FilterBar products={products}/>

                <div className="w-[80%]">
                    <ContainerProducts products={products}/>
                </div>
            </section>
        </main>
    )
}