import * as productModel from "../model/productModel.js";
export async function getProducts(req, res){
    let productId = req.params.id;
    let filter = {};
    if(productId) filter._id = productId;
    let result  = await productModel.getProducts(filter);
    res.send(result);
}
export async function createProduct(req, res){
    let body = req.body;
   let result = await productModel.addProduct(body);
    res.status(result.statusCode).send({result: result.result});
}