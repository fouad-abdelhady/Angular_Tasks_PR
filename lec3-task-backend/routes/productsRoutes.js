import express from "express";
import {PRODUCTS_LIST} from "../model/products.js"
const router = express.Router();
router.get('/products', (req,res)=>{
    res.send({success: true, products: PRODUCTS_LIST});
});
export default router;