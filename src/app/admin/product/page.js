// import ProductForm from '@/components/admin-panel/ProductForm'
import React from 'react'
import Product from '../../../companents/adminpanel/Product'

const page = () => {
  return (
    <div className='h-[calc(100vh-96px)] w-full grid place-items-center overflow-y-auto'>
        <div className='bg-white w-[500px] rounded-lg p-4'>
<Product/>
        </div>
    </div>
  )
}

export default page