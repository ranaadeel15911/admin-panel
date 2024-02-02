const { Schema, models, model } = require("mongoose");

const productSchema = new Schema({
    imgSrc:{
        type:String,
        require:true
    },
    fileKey:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
})
//it means if model already created then use it if not than creat first and than use 
const Product =models.Product || model("Product",productSchema)
export default Product