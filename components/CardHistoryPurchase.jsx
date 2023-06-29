'use client'
import Image from "next/image"

export default function CardHistoryPurchase({product, size, cant}){
  return(
    <div className="w-[30%] flex flex-col gap-y-[1rem] border-gray-100">
      <Image
      className="w-[8rem] mx-[auto] cursor-pointer" width={200} height={400}
      src={product?.images[0]}
      alt={product?.name}
      />
      <div className="flex flex-col">
        <h2 className="font-bold">{product?.name}</h2>
        <p className="font-bold">{product?.brand}</p>
        <p className="font-bold">{product.color}</p>
        <p>Size: {size}</p>
        <p>Quantity: {cant}</p>
      </div>
    </div>
  )
}