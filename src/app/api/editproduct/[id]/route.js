// import { ConnectMongoDB } from "@/lib/MongoConnect";
import { NextRequest , NextResponse} from "next/server";
// import { ConnectMongoDB } from "../../../../lib/Mongoconnect";
// import Product from "../../../lib/model/Products";
import { ConnectMongoDB } from "../../../../lib/Mongoconnect";
import Product from "../../../../lib/model/Products";

export async function PUT(NextRequest , urlparams) {
try {

    const body = await NextRequest.json()
    const id = urlparams.params.id
    const {name,category,price} = body
    await ConnectMongoDB()
    const data = await Product.findByIdAndUpdate(id,{
        // imgSrc,
        // fileKey,
        name,
        category,
        price
    })
    
    return NextResponse.json(data,{msg:"Product created successfully"})
} catch (error) {
    return NextResponse.json({error,msg:'Something went wrong'},{status:400})
}
}
