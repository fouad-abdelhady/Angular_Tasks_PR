import { Injectable } from '@angular/core';
import { Product } from '../../models/productModel';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
   
  async fetchProductsList():Promise<Product[]>{
    await this.delay(3500);
    let productsList = [
      {nameProduct:"Nikon Camera", imageProduct:"../../../assets/product-1.jpg", priceProduct:2000, isAvailable:true},
      {nameProduct:"Blue T-Shirt", imageProduct:"../../../assets/product-2.jpg", priceProduct:250, isAvailable:true},
      {nameProduct:"White Lamp", imageProduct:"../../../assets/product-3.jpg", priceProduct:500, isAvailable:true},
      {nameProduct:"Black Nike", imageProduct:"../../../assets/product-4.jpg", priceProduct:300, isAvailable:false},
      {nameProduct:"Drone", imageProduct:"../../../assets/product-5.jpg", priceProduct:3000, isAvailable:false},
      {nameProduct:"Huawei Watch", imageProduct:"../../../assets/product-6.jpg", priceProduct:950, isAvailable:false},
      {nameProduct:"Black Blouse", imageProduct:"../../../assets/product-7.jpg", priceProduct:160, isAvailable:true},
      {nameProduct:"Some Creams", imageProduct:"../../../assets/product-8.jpg", priceProduct:60, isAvailable:false}
      ];
    return Product.fromResponseList(productsList);
  }

/**
 * just for test purposes 
 */
  private delay(ms: number) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
}
