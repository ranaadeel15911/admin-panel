import React from 'react'
import {TbTruckDelivery,TbDiscount2} from "react-icons/ri"
import { RiRefund2Fill } from 'react-icons/ri'
import {MdSupportAgent} from "react-icons/md"
import FeaututreCard from '../frontend/FeaututreCard'
const Feauture = () => {
    const data = [
        {
            icons:<MdSupportAgent className='text-4xl'/>,
            title:"Free Delivery",
            desc:"Items from all products",
        },
        {
            icons:<RiRefund2Fill className='text-4xl'/>,
            title:"Discount 14%",
            desc:"From all products",
        },
        {
            icons:<MdSupportAgent className='text-4xl'/>,
            title:"Return and Refund",
            desc:"Money back guarantee",
        },
        {
            icons:<RiRefund2Fill className='text-4xl'/>,
            title:"Support 24/7",
            desc:"Contact us 24hours a day",
        },
    ]
  return (
    <div className='container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8'>
        {
            data.map((item)=>(
<FeaututreCard
key={item.title} 
icons={item.icons}
title={item.title}
desc={item.desc}


/>
            ))
        }
    </div>
  )
}

export default Feauture