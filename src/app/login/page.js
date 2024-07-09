'use client'
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import {FcGoogle } from "react-icons/fc";
const Login =()=>{
    const {data:session , status} = useSession()
    const router = useRouter()
    if (status == "authenticated") {
        router.push("/admin/dashboard")
    }
    
console.log(status)
return (

<div className="  bg-black min-h-screen grid place-items-center"> 
<button
 className="  px-8 py-4 flex gap-2 items-center text-white" onClick={()=> signIn("google")} >
    <FcGoogle size={30}/> Sign In with Google
</button> 
 </div> )
};

export default Login;