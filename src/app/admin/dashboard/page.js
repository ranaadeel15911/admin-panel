'use client'
import { setLoading } from '@/redux/feautures/loadingslice'
import { useAppDispatch } from '@/redux/hooks'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Row from '../../../companents/adminpanel/Row'
import Popup from '@/companents/adminpanel/Popup'
const Dashboard = () => {
  const [product , setProduct] = useState([])
  const [updateTable,setUpdateTable] = useState(false)
  const [openPopup,setOpenPopup] = useState(false)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(setLoading(true))
    axios.get("/api/getproduct").then(response => setProduct(response.data)).catch(error =>
      console.log(error)
    ).finally(()=>dispatch(setLoading(false)))
  },[updateTable])
  console.log(product)
  return (
<div className=" bg-white h-[calc(100vh-96px)] rounded-lg p-4">
<h2 className="text-3x1">All Products</h2>
<div className="mt-4 h-[calc(100vh-180px)] overflow-y-auto">
<table className="w-full">
<thead>
<tr className=" text-left text-gray-500 border-t  border-[#ececec]" >
<th>SR No.</th>
<th>Name</th>
<th>Price</th>
<th>Picture</th>
<th>Actions</th>
</tr>
</thead>
<tbody className=' border border-b '>

    {
        product.map((item,i)=>{
          return(
            <Row
            key={item._id}
srNo={i + 1}
setOpenPopup={setOpenPopup} setUpdateTable={setUpdateTable}
product ={item} 
/>
        )
          })
      }

</tbody>
</table>

</div>
{openPopup && <Popup setOpenPopup={setOpenPopup} setUpdateTable={setUpdateTable}/> }
</div>  )
}

export default Dashboard