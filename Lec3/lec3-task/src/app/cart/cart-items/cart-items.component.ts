import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from 'src/app/shared/models/cartItemModel';
import { CartModel } from 'src/app/shared/models/cartModel';
import { CartRoute, CartService } from '../../shared/services/cart/cart.service'

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent {
  @Input() cartItems:CartItem[] = [];
  @Output() cartItemRemovedEvent: EventEmitter<CartModel> = new EventEmitter();

  private _isDeleting:boolean = false;
  deleteButtonLabel:string = 'Delete';
  productId:string = "";
  constructor(private cartService:CartService){}

  deleteCartItem(productId:string){
    this.productId = productId;
    if(this._isDeleting) return;
    this._isDeleting = true;
    this.cartService.delete(CartRoute.deleteCartItem, productId).subscribe(res=>{
      this._isDeleting = false;
      this.cartItemRemovedEvent.emit(new CartModel(res));
    });
  }
  
   setDeleteButtonLabel(productId:string):string {
    return  this._isDeleting&& this.productId == productId?"Deleting ...":"Delete";
  }
}