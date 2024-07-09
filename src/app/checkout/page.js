"use client";
import { useSearchParams } from "next/navigation";
import getStipePromise from "../../lib/stripe";

const products =
 [
  {
    product: 1,
    name: "Stripe Product",
    price: 400,
    quantity: 3,
    image:'https://res.cloudinary.com/dr3ie9gpz/image/upload/v1710324739/images/gdq5ibvp1iwqmqi29j8g.jpg'
  }


  // {
  //   product: 2,
  //   name: "Stripe Product2",
  //   price: 4000,
  //   quantity: 2,
  //   image:"https://res.cloudinary.com/dr3ie9gpz/image/upload/v1710324805/images/or9mmuanezwjlfop0tqt.jpg"
  // },
  
  // {
  //   product: 3,
  //   name: "Stripe Product23",
  //   price: 4000,
  //   quantity: 1,
  //   image:"https://res.cloudinary.com/dr3ie9gpz/image/upload/v1710324849/images/szc1jcnb4aafs1os3tvg.png"
  // },
];

const StripeCheckOutButton = () => {
  // const param = useSearchParams()
  // const cancel = param.get("canceled")
  // if (cancel) {
  //   alert("Your order has been canceled")
    
  // }
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
    <div className="py-5">
      <button
        className="bg-green-500 py-3 px-3 rounded-md"
        onClick={handleCheckout}
      >
        Check out
      </button>
    </div>
  );
};

export default StripeCheckOutButton;
