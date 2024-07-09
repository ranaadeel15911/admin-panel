// import { NextRequest, NextResponse } from "next/server";
import { NextRequest,NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: "2023-10-16",
});
export async function POST(request) {
  const body = await request.json();
  console.log(body);
  try {
    if (body.length > 0) {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1OvOpqGI1gJw7GOLJz24UmRZ" },
          { shipping_rate: "shr_1OvOo4GI1gJw7GOLenYV40xQ" },
        ],
        invoice_creation: {
          enabled: true,
        },
        line_items: body.map((item) => {
          return {
            price_data: {
              currency: "pkr",
              product_data: {
                name: item.name,
                images:[item.img]
              },
              unit_amount: item.price * 100,
            },
            
            quantity: item.quantity,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 10,
            },
          };
          
        }),
       
        custom_fields:[{
          key:'compny',
          label:{type:'custom',custom:"Compny name"},
          type:'text',
          optional: true,
        }],
        // custom_text: {
        //   shipping_address: "jfasfjlsdkjfsdk",
        //   submit: null
        // },


        phone_number_collection: {
          enabled: true,
        },
        success_url: `${request.headers.get("origin")}/success`,
        cancel_url: `${request.headers.get("origin")}/?canceled=true`,
      });
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ message: "No Data Found" });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(err.message);
  }
}
