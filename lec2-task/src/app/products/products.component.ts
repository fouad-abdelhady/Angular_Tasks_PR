import { Component } from '@angular/core';
import { Product } from '../shared/models/productModel'
import { ProductsService } from '../shared/services/products/products-services.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  featured: number;
  avaliableCount: number;
  all: number = 0;
  filter = "All";
  products?:Product[];
  constructor(private productsService:ProductsService){
    this.featured = 0;
    this.avaliableCount = 0;
   this.setProductsList(); 
  }
  async setProductsList():Promise<void>{
   this.products = await this.productsService.fetchProductsList();
   this.setCounts();
  }
  getProducts(): Product[] {
    return this.products??[];
  }
  private setCounts():void{
    this.products!.forEach((product)=>{
      if(product.isFeatured) this.featured++;
      if(product.isAvailable) this.avaliableCount++;
    });
    this.all = this.products!.length;
  }

  onFilterChanged(selectedFilter:string){
   this.filter = selectedFilter;
  }

}
