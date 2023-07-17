export class Product{
    nameProduct: string;
    imageProduct: string;
    priceProduct: number;
    isAvailable: boolean;
    isFeatured: boolean;
    constructor(item:{nameProduct?:string, imageProduct?:string, priceProduct?:number, isAvailable?:boolean, isFeatured?:boolean}){
        this.nameProduct = item.nameProduct??"";
        this.imageProduct = item.imageProduct??"../../../assets/product-1.jpg";
        this.priceProduct = item.priceProduct??0;
        this.isAvailable = item.isAvailable??false;
        this.isFeatured = item.isFeatured??false;
    }
}