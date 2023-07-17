import { Component, Input } from "@angular/core";
import {Product} from "../../shared/models/productModel";
@Component(
    {
        selector: "productItem-root",
        templateUrl: "./product.component.html",
        styleUrls: ["./product.component.scss"]
    }
    )
export class ProductItemComponent {
    @Input() products: Product[] = [];
    @Input() selectedFilter: string = "All";
    constructor(){
    }

    shouldBeViewed(product:Product):boolean{
        if(this.selectedFilter =="All")return true;
        if(this.selectedFilter =="Avaliable" && product.isAvailable) return true;
        if(this.selectedFilter =="Featured" && product.isFeatured) return true;
        console.log("false");
        return false;
      }
}

