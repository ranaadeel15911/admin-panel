'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    const router = useRouter()
// useEffect(()=>{
    setTimeout(()=>{
        router.push('/')
    },1000)
// })
  return (
    <div>Transaction Successfully Received</div>
  )
}

export default page