import { Component, OnInit } from '@angular/core';
import { CartModel, CartType } from '../shared/models/cartModel';
import { CartRoute, CartService } from '../shared/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: CartModel = new CartModel({success:true, products: [], token:"", itemsCount:0, total:0});
  itemsCount:number = 0;
  isLoadingCart:boolean = true;
  constructor(private cartService:CartService){}

  ngOnInit(){
    this.getCart();
  }

  private getCart(){
    this.isLoadingCart = true;
    this.cartService.get(CartRoute.getCart).subscribe(res =>{
      this.cart = new CartModel(<CartType>res);
      this.itemsCount = this.cart.itemsCount;
      this.isLoadingCart = false;
    }, error=>{
      this.isLoadingCart = false;
    });
  }

  onCartItemRemoved(updatedCart:CartModel){
    this.cart = updatedCart;
  }
}
