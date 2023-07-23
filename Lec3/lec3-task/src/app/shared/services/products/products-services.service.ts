import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _baseUrl:string = "https://lec4backend.up.railway.app/";
  

  constructor(private httpClient: HttpClient) { }
   

  get(route:string){
    return this.httpClient.get<{_id:string, nameProduct?:string, imageProduct?:string, priceProduct?:number, isAvailable?:boolean, isFeatured?:boolean}[]>(this._baseUrl+route);
  }

  set baseUrl(baseUrl:string){
    this._baseUrl = baseUrl;
  }

}
export enum ProductRoutes {
  getProduct = 'products',
  addProduct = 'products'
}