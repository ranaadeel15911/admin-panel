'use client'
// import { signOut, useSession } from 'next-auth/react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { IoMdLogOut } from "react-icons/io";
const Navbar = () => {
  const dropref = useRef()
  const [abc,setabc] = useState(false)
  // console.log(window.onclick)
    const newclick = () => {
      // console.log(e.target.name);
      if (abc ) {
          setabc(false)
      }
      else{
          setabc(true)
      }
    };
    useEffect(()=>{
      const handledrop = (e) => {
        if (dropref.current && !dropref.current.contains(e.target)) {
          //it means if clicked on anywhere which event is not same like this then setabc(false)
          setabc(false)
        }
      }
      document.addEventListener("click",handledrop)
      return () => {
        document.removeEventListener("click",handledrop)
      }
    })
    
    const {data:session} = useSession()
    console.log(session.user.name)
  return (
    <div>
        <div className='flex items-center justify-between bg-white py-3'> 
            <h1 className='text-2xl text-black'>eCommerve Admin Panel</h1>
{/* <Image src={'/logo.png'} width={30} height={30} className='rounded-full' alt='dp'/> */}
{/* <Image src={session?.user?.image} width={30} height={30}
 onMouseEnter={() => setIsOpen(true)}
 onMouseLeave={() => setIsOpen(false)}
className='rounded-full cursor-pointer' alt='dp' onClick={()=>signOut()}/> */}
<div ref={dropref}>

  <input name='adeel' className='cursor-pointer size-12 rounded-full' type='image' src={session?.user?.image} onClick={newclick}/> 
{/* <button onClick={()=>signOut()}> This button </button> */}
{abc ?
        <div onClick={()=>signOut()}
        className="absolute cursor-pointer right-0 top-16 w-56  bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1 hover:bg-pink p-2 rounded-md">
            <button
              href="#"
              className=" flex items-center gap-1 text-md px-4 py-2  text-gray-700 "
              
            >
              Logout <IoMdLogOut/>
            </button>
          </div>
        </div> : null
      }
            </div>
    </div>
        </div>
  )
}

export default Navbar