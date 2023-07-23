import * as cartModel from '../model/cartModel.js';
import Jwt from "jsonwebtoken";
export async function addProductToCart(req, res){
    let response = await cartModel.addProductToCart(req.cartId, req.body);

    if(!response.success){
        res.status(500).send(response);
        return;
    }
    response.token = req.token;
    formCartData(response);
    res.send(response);
}

export async function deleteProductFromCart(req, res){
    if(!req.params.id){
        res.status(400).send({success: false, message:"missing product Id"});
    }
    let response = await cartModel.deleteProductFromCart(req.cartId, req.params.id);
    if(!response.success){
        res.status(500).send(response);
        return;
    }
    response.token = req.token;
    formCartData(response);
    res.send(response);
}

export async function getCartProducts(req, res){
    let response = await cartModel.getCartProducts(req.cartId);
    if(!response.success){
        res.status(500).send(response);
        return;
    }
    response.token = req.token;
    formCartData(response);
    res.send(response);
}

export async function getCartItemsCount(req, res){
    let response = await cartModel.getCartItemsCount(req.cartId);
    response.token = req.token;
    res.send(response);
}



//*****************Middlewares*****************************
export function verifyToken(req, res, next){
    let token;
    if(req.headers.authorization){
        token = req.headers.authorization.split(' ')[1];
    }
    if(!token){
        initCart(req, res, next);
        return;
    }

    Jwt.verify( token, process.env.TOKEN_KEY, (err, cartInfo)=>{
        if(err){
            initCart(req, res, next);
            return;
        }
        req.cartId = cartInfo.cartId;
        req.token = token;
        next();
    });
}

async function initCart(req, res, next){
    try{
        let cartId = await cartModel.createCart();
        let token = createToken({cartId:cartId});
        req.cartId = cartId;
        req.token = token;
        next();
    }catch(err){
        console.log("initCart", err);
        res.status(500).send({success: false, message: err});
        return false;
    }
    return true;
}

function createToken(cartInfo){
    return Jwt.sign(cartInfo, process.env.TOKEN_KEY);
}

/******************Functions ******************************* */
function formCartData(response){
    let cart = new Map();
    let totalPrice = 0;
    response.itemsCount = response.products.length; 
    for(let product of response.products){
        if(cart.has(product.productId)){
            cart.get(product.productId).total += product.price;
            cart.get(product.productId).amount += 1;
        }
        else{
            cart.set(product.productId, {
                amount: 1,
                total: product.price,
                ...product,
            });
        }
        totalPrice += product.price;
    }
    response.products = Array.from(cart.values());
    response.total = totalPrice;  
    
}