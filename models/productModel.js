import mongoose from "mongoose"

const productSchema=new mongoose.Schema({
name:{type:String,required:true},
desc:{type:String,required:true},
price:{type:Number,required:true},
imageUrl:{type:String}
})

const productModel=mongoose.model("products",productSchema)


// const productModel=[
//     {id:1 ,name:"Product1",price:100},
//     {id:2 ,name:"Product2",price:150},
//     {id:3 ,name:"Product3",price:200},
// ]
export default productModel