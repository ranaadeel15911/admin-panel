import React from 'react'
// import toast from "react-hot-toast"
import { useAppDispatch } from '@/redux/hooks'
import {AiFillStar,AiOutlineStar,AiOutlineShoppingCart} from "react-icons/ai"
import toast from 'react-hot-toast'
import { addToCart } from '@/redux/feautures/cartSlice'
const ProductCard = ({category,id,name,price,img}) => {
    var dispatch = useAppDispatch()
    const addProductToCart= ()=>{
        const payload = {
            id,
            name,
            price,
            img,
            quantity:1,
        }
        dispatch(addToCart(payload))
toast.success("Added to Cart")
    }
  return (
    <div className='border border-gray-200'>
        <div className="text-center border-b min-h-64 border-gray-200">
            <img src={img} height={500} style={{height:'200px'}} className='inline-block' alt={name} />
        </div>
<div className='px-8 py-4'>
<p className='text-gray-500 text-[14px] font-medium '>
    {category}
</p>
<h2 className='font-medium'>
    {name}
</h2>
<div className='mt-3 flex text-[#FFB21D] items-center'>
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
    <AiOutlineStar/>
    <p className='text-gray-600 text-[14px] ml-2'>
        (13 Reviews)
    </p>
</div>
<div className="flex justify-between items-center mt-4">
    <h2 className='font-medium text-accent text-xl '>{price} Rs</h2>
    <div className='flex gap-2 items-center border border-black bg-pink text-white px-2 py-2 cursor-pointer hover:bg-accent'
    onClick={addProductToCart}>
        <AiOutlineShoppingCart/> Add to Cart

    </div>
</div>
</div>
    </div>
  )
}

export default ProductCard