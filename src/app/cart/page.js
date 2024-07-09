'use client'
import {RxCross1} from "react-icons/rx";
import CartProduct from "./CartProduct";
import { useAppSelector } from "@/redux/hooks";
import getStipePromise from "@/lib/stripe";
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";
import { useAppDispatch } from '@/redux/hooks'
import { clearCart } from "@/redux/feautures/cartSlice";
import { FaHome } from "react-icons/fa";
const Cart = () => {
const router = useRouter()
const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.cartslice);
  console.log(products)
  const getTotal = () => {
    let total = 0;
    products.forEach((item) => {
      total = total + item.price * item.quantity;
    });

    return total;
  };

  const handleCheckout = async () => {
    const stripe = await getStipePromise();
    const response = await fetch("/api/stripe-session/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(products),
    });

    const data = await response.json();
    console.log(data)
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };
  
  return (
    <div className=" bg-[\#0000007d] w-full min-h-screen">
      <div className=" w-full min-h-full square bg-white absolute right-0 top-0 p-6">
        {/* <RxCross1
          className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
          onClick={() => setShowCart(false)}
        /> */}
        <div className="flex gap-[530px]">
        <h3 className="pt-6 text-lg font-medium square text-gray-600 uppercase">
          Your Cart
        </h3>
        <h3 className="pt-6 text-4xl font-medium square text-gray-600 uppercase cursor-pointer" onClick={()=>router.push("/")}>
          <FaHome/>
        </h3>
        <h3 className="pt-6 text-4xl font-medium square text-gray-600 uppercase cursor-pointer" onClick={()=>dispatch(clearCart())}>
          <MdDelete/>
        </h3>
        
        </div>
        <div className="mt-6 space-y-2">
            {products.map((item,index)=>(
                <CartProduct
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                quantity={item.quantity}
                index={index}


                />
            ))}
            <hr />
        </div>
        <div className="flex justify-between items-center font-medium text-xl py-4">
            <p>Total : {getTotal()}.00 Rs</p>
            {/* <p>${getTotal()}.00</p> */}

        </div>
        <button className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-accent" onClick={handleCheckout}>Check Out</button>

      </div>
    </div>
  );
};

export default Cart
