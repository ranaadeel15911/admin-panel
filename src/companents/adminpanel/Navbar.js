// import { signOut, useSession } from 'next-auth/react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {
const {data:session} = useSession()
  return (
    <div>
        <div className='flex items-center justify-between bg-white py-3'> 
            <h1 className='text-2xl text-black'>eCommerve Admin Panel</h1>
{/* <Image src={'/logo.png'} width={30} height={30} className='rounded-full' alt='dp'/> */}
<Image src={session?.user?.image} width={30} height={30} className='rounded-full cursor-pointer' alt='dp' onClick={()=>signOut()}/>
            </div>
    </div>
  )
}

export default Navbar