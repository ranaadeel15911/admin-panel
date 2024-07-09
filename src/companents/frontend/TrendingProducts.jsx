'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from "@/companents/frontend/ProductCard"
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setLoading } from '@/redux/feautures/loadingslice'
import Loader from '@/app/loader/page'
const TrendingProducts = () => {
const [products , setProducts]= useState([])
const dispatch = useAppDispatch()
const {load} = useAppSelector(state => state.Loadingslice)
// console.log(load)
const fetchProduct = async()=>{
try {
    dispatch(setLoading(true))
    const data = await axios.get("/api/getproduct") 
    setProducts(data?.data)
    dispatch(setLoading(false))
} catch (error) {
    console.log(error)
} finally{
    dispatch(setLoading(false))
}
}
useEffect(()=>{
    fetchProduct()
},[])
console.log(products)
  return (
      <div className='container mt-12'>
        <div className="sm:flex justify-between items-center">
            <h2 className='text-4xl font-medium'>
                Trending Products
            </h2>
            <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
<div className='text-black'>
    New
</div>
<div>Feautured</div>
<div>Top Sellers</div>
            </div>
        </div>
{/* {load && load} */}
{load ? <Loader/> : 
<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8'>
            {products.map((item)=>(
                <ProductCard
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                img={item.imgSrc}
                category={item.category}


                />

            ))}
        </div>

}

    </div>
  )
}

export default TrendingProducts