export class CartItem{
    amount: number;
    total: number;
    productId: string;
    title: string;
    price: number;
    img: string;
    constructor(cartItem: CartItemType){
        this.amount = cartItem.amount;
        this.total = cartItem.total;
        this.productId = cartItem.productId;
        this.title = cartItem.title;
        this.price = cartItem.price;
        this.img = cartItem.img;
    }

    static formItemsList(cartItems: CartItemType[]):CartItem[]{
        const cartProducts:CartItem[] = [];
        for(let cartItem of cartItems) cartProducts.push(new CartItem(cartItem))
        return cartProducts;
    }
}

export type CartItemType = {
    amount: number;
    total: number;
    productId: string;
    title: string;
    price: number;
    img: string;
}