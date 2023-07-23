import { Component, OnInit} from '@angular/core';
import { Product } from '../shared/models/productModel'
import { ProductRoutes, ProductsService } from '../shared/services/products/products-services.service';
import { CartRoute, CartService } from '../shared/services/cart/cart.service';
import { CartItemsCountResponse } from '../shared/models/cartModel';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  private _featured: number;
  private _avaliableCount: number;
  private _all: number = 0;
  private _itemsCount: number = 0;
  private _filter = "All";
  private _products?:Product[];
  
  constructor(private productsService:ProductsService, private cartService:CartService){
    this._featured = 0;
    this._avaliableCount = 0;
  }
  ngOnInit(): void {
   this.fetchProducts();
   this.fetchCartItemsCount();
  }

  private fetchProducts():void{
    this.productsService.get(ProductRoutes.getProduct).subscribe(res=>{
      this._products = Product.fromResponseList(res);
      this.setCounts();
    });
    
  }

  private fetchCartItemsCount(){
    this.cartService.get(CartRoute.cartItemsCount).subscribe((res) =>{
      let response:CartItemsCountResponse = <CartItemsCountResponse>res;
      this.cartService.token = response.token;
      this._itemsCount = response.success? response.result: this._itemsCount;
    });
  }

  getProducts(): Product[] {
    return this._products??[];
  }

  private setCounts():void{
    this._products!.forEach((product)=>{
      if(product.isFeatured) this._featured++;
      if(product.isAvailable) this._avaliableCount++;
    });
    this._all = this._products!.length;
  }
  
  onFilterChanged(selectedFilter:string){
   this._filter = selectedFilter;
  }

  onProductAddedToCart(itemsCount:number){
    this._itemsCount = itemsCount
  }

  get all(){ return this._all;}
  get filter(){return this._filter;}
  get avaliableCount(){return this._avaliableCount;}
  get featured(){return this._featured;}
  get products(){return this._products;}
  get itemsCount(){return this._itemsCount;}
}
