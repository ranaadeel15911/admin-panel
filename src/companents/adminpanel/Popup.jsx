'use client'
import React, { useState } from 'react'
import {useAppDispatch, useAppSelector} from '../../redux/hooks'
import { IoIosClose } from "react-icons/io";
import { setLoading } from '@/redux/feautures/loadingslice';
import axios from 'axios';
const Popup = ({setOpenPopup,setUpdateTable}) => {
    const productData = useAppSelector((store) => store.productslice)
    const dispatch = useAppDispatch()
    const [inputData,setInputData] = useState({
        name:productData.name,
        category:productData.category,
        price:productData.price,
        img:productData.imgSrc
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        // setUpdateTable(inputData)
        // setOpenPopup(false)
        dispatch(setLoading(true))
        axios.put(`/api/editproduct/${productData._id}`,inputData)
        .then((res)=>{
        console.log(res);
        setUpdateTable((prevstate)=>!prevstate)
        }
        ).catch((err)=>console.log(err)).finally(()=>{
            dispatch(setLoading(false))
          setOpenPopup(false)  
        });
    }
    // console.log(productData)
  return (
    <div className='fixed top-0 left-0 w-full h-screen grid place-items-center bg-[#00000070]'>
        <div className='bg-white w-[700px] py-8 rounded-lg text-center relative'>
<IoIosClose
className='absolute text-2xl right-0 top-0 m-4 cursor-pointer hover:text-red-700'
onClick={()=>setOpenPopup(false)}
/>
            <h1 className='text-2xl font-bold text-gray-700'>Update Product</h1>
            <form onSubmit={handleSubmit} className='mt-3 w-fit space-y-2 mx-auto'>
            <img src={inputData.img} alt="" width={50} height={50} className='rounded-full border outline-black block translate-x-[75px]'/>
                <b className='text-2xl'>Name</b>
                <input type="text"
                placeholder='Name'
                value={inputData.name}
                className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit'
                onChange={(e)=>
                setInputData({...inputData,name:e.target.value}) } 
                required/>
                                <b className='text-2xl inline-block mt-2'>Category</b>
                <input type="text"
                placeholder='Category'
                className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit'
                value={inputData.category}
                onChange={(e)=>
                setInputData({...inputData,category:e.target.value}) } 
                required/>
                                <b className='text-2xl inline-block mt-2'>Price</b>
                <input type="text"
                className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit'
                placeholder='Price'
                value={inputData.price}
                onChange={(e)=>
                setInputData({...inputData,price:e.target.value}) } 
                required/>
                <div className='flex justify-end'>
                    <button type="submit" className="bg-pink self-center text-white px-8 py-2 rounded-md">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Popup