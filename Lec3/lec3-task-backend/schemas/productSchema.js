import mongoose from "mongoose";
const Schema = mongoose.Schema;
const product = {
    nameProduct: {type:String, required: true},
    priceProduct: {type:Number, required: true},
    imageProduct: {type:String},
    isAvailable: {type:Boolean, default: true},
    isFeatured: {type:Boolean, default: false}
}
const productSchema = new Schema(product);
const Product = mongoose.model('Product', productSchema, 'products');
export default Product;