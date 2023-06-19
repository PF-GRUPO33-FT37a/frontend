'use client'
import ContainerProducts from "@/components/ContainerProducts"
import {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from "@/redux/Slice"


export default function ChildrenPantsPage() {

    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.products.allProducts);
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      dispatch(getProducts("children", "pants"));
    }, [dispatch]);
  
    useEffect(() => {
        if (allProducts && allProducts.length > 0) {
          setProducts(allProducts);
        }
      }, [allProducts]);


    const [rangeValue, setRangeValue] = useState(0)

    const handleRange = (event) =>{
        setRangeValue(event.target.value)
    }

    

    return (
        <main className="pt-[9rem] min-h-[100vh]">
            <section className="w-[70%] mx-[auto] flex py-[3rem]">
                <div className="w-[20%]">


                    <article className="w-[100%]  p-[0.6rem] flex flex-col gap-y-[1rem]">
                        <h3 className="border-[#A9A9B2] border-b-[1px]">Marca</h3>
                        <input
                            className="w-[100%] text-[0.8rem] p-[0.4rem] border-[#A9A9B2] border-[1px]"
                            type="text" placeholder="Buscar por marca" />

                        <div
                            className="flex flex-col h-[120px] overflow-y-scroll">
                            <label htmlFor="">
                                <input type="checkbox" /> <span className="text-[#A9A9B2]">Adidas</span>
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" /> <span className="text-[#A9A9B2]">Nike</span>
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" /> <span className="text-[#A9A9B2]">Reebok</span>
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" /> <span className="text-[#A9A9B2]">Puma</span>
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" /> <span className="text-[#A9A9B2]">Vans</span>
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" /> <span className="text-[#A9A9B2]">NBA</span>
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" /> <span className="text-[#A9A9B2]">Wilson</span>
                            </label>
                        </div>
                        <h4 className="bg-[white] text-[#A9A9B2] text-[0.8rem] p-[0.4rem] text-center cursor-pointer border-[#A9A9B2] border-[1px]">Aplicar</h4>

                    </article>

                    <article className="w-[100%] p-[0.6rem] flex flex-col gap-y-[1rem]">
                        <h3 className="border-[#A9A9B2] border-b-[1px]">Talle</h3>
                        <input
                            className="w-[100%] text-[0.8rem] p-[0.4rem] border-[#A9A9B2] border-[1px]"
                            type="text" placeholder="Buscar por talle" />

                        <div
                            className="flex flex-col h-[120px] overflow-y-scroll">
                            <label htmlFor="">
                                <input type="checkbox" /> <span className="text-[#A9A9B2]">37</span>
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" /> <span className="text-[#A9A9B2]">38</span>
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" /> <span className="text-[#A9A9B2]">39</span>
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" /> <span className="text-[#A9A9B2]">40</span>
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" /> <span className="text-[#A9A9B2]">41</span>
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" /> <span className="text-[#A9A9B2]">42</span>
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" /> <span className="text-[#A9A9B2]">43</span>
                            </label>
                        </div>
                        <h4 className="bg-[white] text-[#A9A9B2] text-[0.8rem] p-[0.4rem] text-center cursor-pointer border-[#A9A9B2] border-[1px]">Aplicar</h4>

                    </article>

                    <article className="w-[100%] p-[0.6rem] flex flex-col gap-y-[1rem]">
                        <h3 className="border-[#A9A9B2] border-b-[1px]">Color</h3>
                        <input
                            className="w-[100%] text-[0.8rem] p-[0.4rem] border-[#A9A9B2] border-[1px]"
                            type="text" placeholder="Buscar por color" />

                        <div
                            className="flex flex-col h-[120px] overflow-y-scroll">
                            <label htmlFor="">
                                <input type="checkbox" /> <span className="text-[#A9A9B2]">Blanco</span>
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" /> <span className="text-[#A9A9B2]">Negro</span>
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" /> <span className="text-[#A9A9B2]">Rojo</span>
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" /> <span className="text-[#A9A9B2]">Azul</span>
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" /> <span className="text-[#A9A9B2]">Verde</span>
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" /> <span className="text-[#A9A9B2]">Violeta</span>
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" /> <span className="text-[#A9A9B2]">Marron</span>
                            </label>
                        </div>
                        <h4 className="bg-[white] text-[#A9A9B2] text-[0.8rem] p-[0.4rem] text-center cursor-pointer border-[#A9A9B2] border-[1px]">Aplicar</h4>

                    </article>

                    <article className="w-[100%] p-[0.6rem] flex flex-col gap-y-[1rem]">
                    <h3 className="border-[#A9A9B2] border-b-[1px]">Precio</h3>
                        <input value={rangeValue} onChange={handleRange} type="range" min={0} max={10000} />
                        <span>{rangeValue}</span>
                        <h4 className="bg-[white] text-[#A9A9B2] text-[0.8rem] p-[0.4rem] text-center cursor-pointer border-[#A9A9B2] border-[1px]">Aplicar</h4>

                    </article>
                </div>

                <div className="w-[80%]">
                    {products&&products.length>1?<ContainerProducts products={products}/>:<p>loading...</p>}
                </div>
            </section>
        </main>
    )
}