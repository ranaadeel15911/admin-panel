// import { ConnectMongoDB } from "@/lib/MongoConnect";
import { NextRequest , NextResponse} from "next/server";
// import { ConnectMongoDB } from "../../../../lib/Mongoconnect";
// import Product from "../../../lib/model/Products";
import { ConnectMongoDB } from "../../../../lib/Mongoconnect";
import Product from "../../../../lib/model/Products";
export async function DELETE(NextRequest , urlparams) {
try {
    // const body = await NextRequest.json()
    const id = urlparams.params.id
    // const {name,category,price} = body
console.log(id)
    await ConnectMongoDB()
    await Product.findByIdAndDelete(id)
    return NextResponse.json({msg:"Product deleted successfully"})
} catch (error) {
    return NextResponse.json({error,msg:'Something went wrong'},{status:400})
}
}

// lexes bmw odi