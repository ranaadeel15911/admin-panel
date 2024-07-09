import { setLoading } from '@/redux/feautures/loadingslice';
import { setProduct } from '@/redux/feautures/productslice';
import { useAppDispatch } from '@/redux/hooks';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react'
import { HiPencilSquare } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
const Row = ({srNo,product,setOpenPopup,setUpdateTable}) => {
  const [able,setAble] = useState(false)
  // console.log('first')
const dispatch = useAppDispatch()
  const onEdit = () => {
    // setUpdateTable(true)
    dispatch(setProduct(product))
    setOpenPopup(true)
  }
  const onDelete = async()=>{
    dispatch(setLoading(true))
    const payload = {
      fileKey : product.fileKey
    }
  await  axios.delete('/api/uploadthing',{data:payload}).then(async(res)=>{
      // console.log(res);
      // setUpdateTable((prevState)=>!prevState)
    await  axios.delete(`/api/deleteproduct/${product._id}`).then((res)=>{
        console.log('res');
        setUpdateTable((prevstate)=>!prevstate)
      })
      .catch((err)=>console.log(err,'second'))
      .finally(()=>dispatch(setLoading(false)))
    }).catch((err)=>{
      console.log(err,'first')
      dispatch(setLoading(false))
    })
  }
  return (
    <>
    {/* <h1> */}
<tr className='border-b' key={product._id}>
  <td >
    {srNo}
  </td>
  <td>
    {product.name}
  </td>
  <td>
    {product.price}$
  </td>
  <td className='ml-2 inline-block'>
    <Image src={product.imgSrc} width={50} height={50} className='h-12' alt='placeholder'/>
  </td>
  <td>
    {/* {product._id} */}
    <HiPencilSquare onClick={onEdit} className='inline-block mr-2 cursor-pointer hover:text-red-500'/>
    <MdDelete onClick={onDelete} className='inline-block cursor-pointer hover:text-red-500'/>

  </td>
  {/* <td>
    <MdDelete/>

  </td> */}
</tr>
    </>
  )
}

export default Row