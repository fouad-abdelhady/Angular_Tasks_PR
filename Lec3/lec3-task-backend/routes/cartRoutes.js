import express from "express";
import * as cartController from "../controllers/cartController.js";

const router = express.Router();
router.post('/cart', cartController.verifyToken, (req,res)=>{
    cartController.addProductToCart(req, res);
});

router.get('/cart', cartController.verifyToken, (req,res)=>{
    cartController.getCartProducts(req, res);
});

router.delete('/cart/:id([0-9a-z]*)', cartController.verifyToken, (req,res)=>{
    cartController.deleteProductFromCart(req, res);
});

router.get('/cart/itemsCount', cartController.verifyToken, (req,res)=>{
    cartController.getCartItemsCount(req, res);
});
export default router;
