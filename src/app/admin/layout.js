'use client'
import React from 'react'
// import Sidebar from '@/components/admin-panel/Sidebar'
import Sidebar from "@/companents/adminpanel/Sidebar"
import Navbar from "@/companents/adminpanel/Navbar"
import Login from "@/companents/adminpanel/Login"
import { useSession } from 'next-auth/react'

// import Dashboard from './dashboard/page'
// import Navbar from '@/components/admin-panel/Navbar'
// import Login from '@/components/admin-panel/Login'
// import { useSession } from 'next-auth/react'

const Layout = ({children}) => {
const {data:session} = useSession()
if (!session?.user) {
    return <Login/>
}
  return (
    <div className='flex'>
        
<Sidebar/>
        <div className='w-full h-full'>
        <Navbar/>
        <div className='bg-gray-200 p-4 h-[calc(100vh-65px)]'>
            {children}
        </div>
        </div>
    </div>
    // <Login/>
  )
}

export default Layout