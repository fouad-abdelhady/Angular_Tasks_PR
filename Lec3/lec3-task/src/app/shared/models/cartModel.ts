import { CartItem, CartItemType } from "./cartItemModel";

export class CartModel{
    success: boolean;
    products: CartItem[];
    token: string;
    itemsCount: number;
    total: number;

    constructor(resCartItem:CartType) {
        this.success = resCartItem?.success;
        this.products = CartItem.formItemsList(resCartItem.products);
        this.token = resCartItem.token;
        this.itemsCount = resCartItem.itemsCount;
        this.total = resCartItem.total;
    }
}

export type CartType = {
    success: boolean, 
    products: CartItemType[], 
    token: string, 
    itemsCount: number, 
    total: number
}
export type CartItemsCountResponse = {
    success: boolean,
    result: number,
    token: string
}