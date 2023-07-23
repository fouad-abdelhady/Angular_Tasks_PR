import mongoose from "mongoose";
const Schema = mongoose.Schema;
const cart = {
    products:[
        {
            productId:{type:String, required:true},
            title:{type:String, required:true},
            price:{type:Number, required:true},
            img:{type:String, default:"*"}
        }
    ],
}

const cartSchema = new Schema(cart);
const Cart = mongoose.model('Cart', cartSchema,);

export default Cart;