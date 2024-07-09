'use client'
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { useAppSelector } from '@/redux/hooks';
const Navbar = ({setShowCart}) => {
    const cartCount = useAppSelector((state) => state.cartslice.length)
  return (
    <div className='pt-4 bg-white sticky top-0'>
        <div className="container ">
            <div className="flex justify-between items-center">
                <h2 className='text-4xl font-bold'>Logo</h2>
                <div className='lg:flex hidden w-full max-w-[500px]'>
                    <input type="text" placeholder='Search for products' className='border-2 border-accent w-full px-6 py-2 outline-none' />
<div className='bg-accent text-white text-[20px] grid place-items-center px-4'>
<IoIosSearch/>
</div>
                </div>
                <div className='flex'>
                <FaUser className='hidden lg:block text-4xl border rounded-full'/>
                <div className='hidden lg:block leading-[18px] text-sm'>
                    <p>Hello Sign in</p>
                    <p className='font-bold'>Your Account</p>
                </div>
                <div onClick={()=>setShowCart(true)} className='relative grid place-items-center cursor-pointer ps-3'>
                    <FaCartArrowDown className='text-[27px]  '/>
                    <div className="absolute top-0 right-0 translate-x-2 -translate-y-1 lg:translate-y-0 text-white bg-red-700 text-[11px] size-4 grid place-items-center rounded-full">
                        {cartCount}
                    </div>
                </div>
                
            </div>
                </div>
        </div>
    </div>

  )
}

export default Navbar