import Cart from "../schemas/cartSchema.js";

export async function createCart(){
    let newCart = new Cart({products:[]});
    let result = await newCart.save().catch((error)=>{
        console.log(error);
        throw("error occuerd while creating cart");
    });
    return result._id;
}

export async function addProductToCart(cartId, product){
   let response = {success:true};
   await Cart.findByIdAndUpdate(cartId, {$push:{products:product}}).catch((err) => {
    console.log(err);
    response = {success:false, message: "error occured while adding product to cart"}
   });

   if(response.success) {
    let result = await getCartProducts(cartId);
    response.products = result.products;
   }
   return response;
}

export async function deleteProductFromCart(cartId, productId){
   let response = {success:true};
   await Cart.findByIdAndUpdate(cartId, {$pull:{products:{productId: productId}}}).catch((err) => {
    console.log(err);
    response = {success:false, message: "error occured while deleting the product from cart"};
   });

   if(response.success) {
    let result = await getCartProducts(cartId);
    response.products = result.products;
   }
   return response;
}

export async function getCartProducts(cartId){
   let response = {success:true};
   let result = await Cart.findById(cartId).catch((err) => {
    console.log(err);
    response = {success:false, message: "error occured while deleting the product from cart"};
   });
   result = result.toObject();
   if(response.success) response.products = result.products;
   return response;
}

export async function getCartItemsCount(cartId){
    let products = await getCartProducts(cartId);
    products = products.products;
    if(!products) return {success: true, result:0};
    return {success: true, result:products.length};
}

