import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../../shared/models/productModel";
import { CartRoute, CartService } from "src/app/shared/services/cart/cart.service";

@Component(
    {
        selector: "productItem-root",
        templateUrl: "./product.component.html",
        styleUrls: ["./product.component.scss"]
    }
)
export class ProductItemComponent {
    @Input() products: Product[] = [];
    @Input() selectedFilter: string;
    @Output() productAddedToCartEvent: EventEmitter<number>;
    private _itemsCount: number;
    private _isAddingToCart: boolean = false;
    private _productId: string = "";
    constructor(private cartService: CartService) {
        this.selectedFilter = "All";
        this.products = [];
        this.productAddedToCartEvent = new EventEmitter();
        this._itemsCount = 0;
    }

    shouldBeViewed(product: Product): boolean {
        if (this.selectedFilter == "All") return true;
        if (this.selectedFilter == "Avaliable" && product.isAvailable) return true;
        if (this.selectedFilter == "Featured" && product.isFeatured) return true;
        return false;
    }

    addProductToCart(productItem: Product) {
        if(this._isAddingToCart) return;
        this._isAddingToCart = true;
        this._productId = productItem.productId;
        this.cartService.post(CartRoute.addProductToCart, productItem.getProductForRequestBody()).subscribe(res => {
            this._itemsCount = res.itemsCount;
            this.productAddedToCartEvent.emit(this._itemsCount);
            this._isAddingToCart = false;
        });
    }

    getAddToCartLabel(productId: string){
       return  this._isAddingToCart && this._productId == productId?"ADDING TO CART...": "ADD TO CART";
    }
}

