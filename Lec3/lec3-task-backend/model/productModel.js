
import Products from "../schemas/productSchema.js";

export async function addProduct(product) {
    try {
        let newProduct = new Products(product);
        let result = await newProduct.save();
        return {statusCode:200, result:{success:true, result:result}};
    } catch (err) {
        return { statusCode: 500, result: { success: false, message: "error occured" } };
    }
}

export async function getProducts(filter={}){
    let productsDoc = await Products.find(filter,{__v:0});
    //productsDoc = productsDoc.toObject();
    return productsDoc;
}

