'use client'
import ProductCard from "./ProductCard"

export default function ContainerProducts({products}) {

    return (
        <div className="flex flex-wrap p-[2rem] justify-between gap-y-[2rem]">
            {
                products?.map((product,index)=>{
                    return(
                        <ProductCard
                        key={index}
                        product={product}
                        />
                    )
                })
            }

        </div>
    )
}