import express from "express";
import * as productsController from "../controllers/productController.js";

const router = express.Router();
router.get('/products',  (req, res)=>{
    productsController.getProducts(req, res);
});
router.post('/products', (req, res)=>{
    productsController.createProduct(req, res)
});
export default router;