'use client'
import Image from "next/image";
import Navbar from "@/companents/frontend/Navbar"
import Hero from "@/companents/frontend/Hero"
import Feautures from "@/companents/feautures/Feauture"
import TrendingProducts from "@/companents/frontend/TrendingProducts"
import Banner from "@/companents/frontend/Banner"
import Footer from "@/companents/frontend/Footer"
import Cart from "@/companents/frontend/Cart"
import { useState } from "react";
import axios from "axios";
export default function Home() {
  console.log('first')
  const [showCart,setShowCart] = useState(false)
  const data = {
    "id": "1",
    "title": "title",
    "description": "description",
    "price": "100",
    "image": "https://images.unsplash.com/photo-1600000000000-0000000000000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  }
  const handleClick =async ()=>{
    const res = await axios.post('/api/addproduct',data,{
      headers:{
        "Name" : "Adeel"
      }
    })
    console.log(res)
  }
  return (
    <main >
      <Navbar setShowCart= {setShowCart}/>
      {showCart && <Cart setShowCart= {setShowCart}/> }
      <Hero/>
      <Feautures/>
      <TrendingProducts/>
      <Banner/>
      <Footer/>
      {/* <button className="bg-black text-white text-2xl" onClick={handleClick}>Click here</button> */}
    </main>
  );
}
