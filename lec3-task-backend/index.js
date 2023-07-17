import express from 'express';
const app = express();

app.listen(process.env.PORT|| 8080, (err)=>{
    if(err){
        console.log("Failed to connect", err);
        return;
    }
    initRoutes();
    console.log("Listening to port 8080");
});

import productsRoutes from "./routes/productsRoutes.js";
function initRoutes(){
    app.use(express.json());
    app.use(productsRoutes);
}