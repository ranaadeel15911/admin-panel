'use client'
import React, { useState } from 'react'

const page = () => {
    const [state,setState]=useState([
        {
name:'Shoes',
quantity:1,

        },
        {
name:'watch',
quantity:3,

        },
        {
name:'Dress',
quantity:9,

        },
    ])
  return (
    <>
    {
        state.map((item,index)=>{
            return(
                <>
                <h2>{item.name}</h2>
                <h2>{item.quantity}</h2>
<button onClick={()=>item.quantity + 1}>+</button>
&
<button onClick={()=>item.quantity - 1}>-</button>
                </>
            )
            })
    }
    </>
  )
}

export default page