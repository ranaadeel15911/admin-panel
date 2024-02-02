import React from 'react'

const Dashboard = () => {
  return (
<div className=" bg-white h-[calc(100vh-96px)] rounded-lg p-4">
<h2 className="text-3x1">All Products</h2>
<div className="mt-4 h-[calc(100vh-180px)] overflow-y-auto">
<table className="w-full">
<thead>
<tr className="  text-gray-500 border-t  border-[#ececec]" >
<th>SR No.</th>
<th>Name</th>
<th>Price</th>
<th>Picture</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
    {/* {
        products.map(()=>{
<ProductRow
 key={}
srNo={}
setOpenPopup ={}
setUpdateTable ={}
product ={} />
        })
    } */}

</tbody>
</table>
</div>
</div>  )
}

export default Dashboard