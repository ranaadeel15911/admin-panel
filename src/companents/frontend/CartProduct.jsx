import React from 'react'
import { removeFromCart } from '@/redux/feautures/cartSlice'
import { RxCross1 } from 'react-icons/rx'
import { useAppDispatch } from '@/redux/hooks'

const CartProduct = ({
    id,
    name,
    price,
    img,
    quantity,
}) => {
    const dispatch = useAppDispatch()
  return (
    <div className='flex justify-between items-center'>
        <div className="flex items-center gap-4">
            <img className='h-[80px]' src={img} alt={name} />
            <div className="space-y-2">
                <h3 className='font-medium'>{name}</h3>
                <p className='text-gray-500 text-[14px]'>
                    {quantity} x {price}.00
                </p>
            </div>
        </div>
        <RxCross1 
        className='cursor-pointer'
        onClick={()=>dispatch(removeFromCart(id))}
        
        />
    </div>
  )
}

export default CartProduct