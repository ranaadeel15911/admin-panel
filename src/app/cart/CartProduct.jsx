import React from 'react'
import { decrement, increment, removeFromCart } from '@/redux/feautures/cartSlice'
import { RxCross1 } from 'react-icons/rx'
import { useAppDispatch } from '@/redux/hooks'

const CartProduct = ({
    id,
    name,
    price,
    img,
    quantity,
    index
}) => {
    const dispatch = useAppDispatch()
  return (
    

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Image
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {/* Magic Mouse 2 */}
{name}
                </th>
                <td class="px-6 py-4">
                    {/* Black */}
                    <img className='h-[80px]' src={img} alt={name} />

                </td>
                <td class="px-6 py-4 ">
                    {/* Black */}
                    <div className='w-fit flex gap-3 justify-center items-center border p-3'>
                <button className='text-xl' onClick={()=>dispatch(decrement(index))}>-</button>
                    {quantity} 
                <button className='text-xl' onClick={()=>dispatch(increment(index))}>+</button>
                    </div>
                </td>
                <td class="px-6 py-4">
                    {/* Black */}
                    {price * quantity}.00 Rs

                </td>
                <td class="px-6 py-4">
                <RxCross1 
        className='cursor-pointer'
        onClick={()=>dispatch(removeFromCart(id))}
        
        />

                </td>
            </tr>
        </tbody>
    </table>
</div>

    // <div className='flex justify-between items-center'>
    //     <div className="flex items-center gap-4">
    //         <img className='h-[80px]' src={img} alt={name} />
    //         <div className="space-y-2">
    //             <h3 className='font-medium'>{name}</h3>
    //             <p className='text-gray-500 text-[14px]'>
    //                 {quantity} x {price}.00 Rs
    //             </p>
    //             <button className='text-xl' onClick={()=>dispatch(increment(index))}>+</button>
    //             &
    //             <button className='text-xl' onClick={()=>dispatch(decrement(index))}>-</button>
    //         </div>
    //     </div>
        // <RxCross1 
        // className='cursor-pointer'
        // onClick={()=>dispatch(removeFromCart(id))}
        
        // />
    // </div>
  )
}

export default CartProduct