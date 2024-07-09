'use client'
import { UploadButton } from '@/utils/uploadthing'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import {useAppDispatch} from "../../redux/hooks"
import { setLoading } from '../../redux/feautures/loadingslice'
import { useRouter } from 'next/navigation'
// import { UploadButton } from '@uploadthing/react'
const Product = () => {
  const router = useRouter()
    const [payload,setPayload] = useState({
        imgSrc:null,
        fileKey:null,
        name:'',
        category:'',
        price:''

    })
    const dispatch = useAppDispatch()

    console.log(payload)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setLoading(true))
        axios.post("/api/addproduct",payload)
        .then(res => {
             console.log(res.data)
             console.log(res)
router.push('/admin/dashboard')
             setPayload(
                {
                    imgSrc:null,
                    fileKey:null,
                    name:'',
                    category:'',
                    price:''
                }
             )
        })
        .catch((err)=>console.log(err)).finally(()=>dispatch(setLoading(false)))
        
    }
  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
        <Image className='max-h-[300px] w-auto object-contain rounded-md' src={payload.imgSrc ? payload.imgSrc : "/placeholder.png"}
        width={600} height={600} alt='placeholder'/>
         <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log(res[0].url);
          console.log(res[0]);
        //   console.log(res.url);
          setPayload({
            ...payload,
             imgSrc:res[0]?.url,
             fileKey:res[0]?.key
        })
        }}

        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      <div>
        <label className='block ml-1'>Product Name</label>
        <input type="text"
        value={payload.name}
        onChange={(e)=>setPayload({...payload,name:e.target.value})}
        required
        className='bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md'
        />
      </div>
      <div>
        <label className='block ml-1'>Product Category</label>
        <input type="text"
        value={payload.category}
        onChange={(e)=>setPayload({...payload,category:e.target.value})}
        required
        className='bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md'
        />
        </div>
      <div>
        <label className='block ml-1'>Product Price</label>
        <input type="text"
        value={payload.price}
        onChange={(e)=>setPayload({...payload,price:e.target.value})}
        required
        className='bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md'
        />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-pink text-white px-8 py-2 rounded-md">Add Product</button>
      </div>
    </form>
  )
}

export default Product