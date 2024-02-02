"use client"
import React from 'react'
import {MdDashboard, MdManageAccounts } from "react-icons/md";
import {GrTransaction } from "react-icons/gr";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiInbox } from "react-icons/hi";
const menus =[
{
title: "Dashboard",
icon: <MdDashboard />,
href: "/admin/dashboard",
},
{
title: "Product",
icon: <RiShoppingCartLine />,
href: "/admin/product",
},
{
title: "Accounts",
icon: <MdManageAccounts />,
href: "#",
},
{
title: "Transaction",
icon: <GrTransaction />,
href: "#",
},
{
title: "Analytics",
icon: <IoAnalytics />,
href: "#",
},
{
title: "Settings",
icon: <IoSettings />,
href: "#",
},
]
const Sidebar = () => {
    const pathname = usePathname()
  return (
    <div className="bg-white w-[300px] min-h-screen p-4 shrink-0">
         <div className="flex items-center gap-4"> 
         <img className="size-12 rounded-lg" src="/logo.png" alt="logo" /> 
         <h2 className="text-[20px] font-semibold text-black">Chase Up</h2> 
    </div>
    <ul className='space-y-4 mt-6'>

    {menus.map((item)=>(
        <Link href={item.href} key={item.title} className={`flex gap-2 items-center ${pathname === item.href ? "bg-pink text-white" : "bg-gray-200"} p-4 rounded-lg cursor-pointer hover:bg-pink hover:text-white `}>
            {/* <a className="flex items-center gap-4"> */}

                <div className='text-[20px] text-black'>{item.icon}</div>
                <p className='text-black'>{item.title}</p>
            {/* </a> */}
        </Link>
    ))}
            </ul>
    </div>
  )
}

export default Sidebar