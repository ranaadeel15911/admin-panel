// import { ConnectMongoDB } from "@/lib/MongoConnect";
import { NextRequest , NextResponse} from "next/server";
import { ConnectMongoDB } from "../../../lib/Mongoconnect";
import Product from "../../../lib/model/Products";

export async function GET() {
try {
    await ConnectMongoDB()
    const data = await Product.find()
    
    return NextResponse.json(data)
} catch (error) {
    return NextResponse.json({error,msg:'Something went wrong'},{status:400})
}
}
