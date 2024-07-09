'use client'
import React, { useEffect } from 'react'
import Sidebar from "@/companents/adminpanel/Sidebar"
import Navbar from "@/companents/adminpanel/Navbar"
import Login from "@/companents/adminpanel/Login"
import { useSession } from 'next-auth/react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import Loader from '../../companents/adminpanel/Loader'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { setLoading } from '@/redux/feautures/loadingslice'
const Layout = ({children}) => {
const {data:session , status} = useSession()
const {load} = useAppSelector((store)=>store.Loadingslice)
const dispatch = useAppDispatch()
const router = useRouter()
const pathname = usePathname()
  if (status == "loading") {
return <Loader/>;
   }

else if (status == "unauthenticated") {
  return <Login/>
}
  return (
    <>
      <div className='flex'>
<Sidebar/>
        <div className='w-full h-full'>
        <Navbar/>
        <div className='bg-gray-200 p-4 h-[calc(100vh-65px)]'>
        {children}
        </div>
        </div>
        {load && <Loader/>}
    </div>
  </>
    )
  }

export default Layout
