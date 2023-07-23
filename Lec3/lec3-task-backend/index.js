import express from 'express';
import cors from require('cors');
import { config } from 'dotenv';
import mongoose from 'mongoose';
config();
const app = express();

mongoose.connect(process.env.CONNECTION_URL).then(result =>{
    app.listen(process.env.PORT|| 8080, (err)=>{
        if(err){
            console.log("Failed to connect", err);
            return;
        }
        initRoutes();
        console.log("Listening to port 8080");
    });
}).catch((err)=>{
    console.log(connectionUrl)
    console.log("error")
    console.log(err)
});

import productsRoutes from "./routes/productsRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
function initRoutes(){
    app.use(express.json());
    app.use(cors());
    app.use(productsRoutes);
    app.use(cartRoutes);
}