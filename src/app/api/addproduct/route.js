// import { ConnectMongoDB } from "@/lib/MongoConnect";
import { NextRequest , NextResponse} from "next/server";
import { ConnectMongoDB } from "../../../lib/Mongoconnect";
import Product from "../../../lib/model/Products";

export async function POST(NextRequest) {
    console.log(NextRequest.headers.get('Name'),NextRequest.headers.get('email'))
try {
    const body = await NextRequest.json()
    const {imgSrc,fileKey,name,category,price} = body
    if (!imgSrc) {
        return new Response("Not found any thing")
    }
    await ConnectMongoDB()
    const data = await Product.create({
        imgSrc,
        fileKey,
        name,
        category,
        price
    })
    
    return NextResponse.json(data,{msg:"Product created successfully"})
} catch (error) {
    return NextResponse.json({error,msg:'Something went wrong'},{status:400})
}
}
