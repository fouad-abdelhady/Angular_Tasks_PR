import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItemsCountResponse, CartType } from '../../models/cartModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private static tokenKey:string = "cartTokenKey";
  private _baseUrl:string = "https://lec4backend.up.railway.app/";
  private _headers?:HttpHeaders;
  private _token:string;

  constructor(private httpClinet: HttpClient) {
    this._token = localStorage.getItem(CartService.tokenKey)??"";
    this.setHeaders(this._token);
  }

  get(route:CartRoute){
    
    let url = this._baseUrl+route;
    console.log(this._headers);
    return this.httpClinet.get<CartType|CartItemsCountResponse>(url, {headers: this._headers});
  }
  post(route:CartRoute, product:{}){
    let url = this._baseUrl+route;
    return this.httpClinet.post<CartType>(url, product, {headers: this._headers});
  }
  delete(route:CartRoute, productId:string){
    let url = this._baseUrl+route+productId;
    return this.httpClinet.delete<CartType>(url, {headers: this._headers});
  }

  set token(token:string){
    if(token == this._token)return;
    localStorage.setItem(CartService.tokenKey, token);
    this._token = token;
    this.setHeaders(token);
  }

  private setHeaders(token:string){
    this._headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
  }
}

export enum CartRoute{
  getCart = 'cart',
  addProductToCart = 'cart',
  deleteCartItem ='cart/',
  cartItemsCount = 'cart/itemsCount'
}
