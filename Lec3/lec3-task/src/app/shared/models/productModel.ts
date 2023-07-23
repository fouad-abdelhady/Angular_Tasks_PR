export class Product {
  nameProduct: string;
  imageProduct: string;
  priceProduct: number;
  isAvailable: boolean;
  isFeatured: boolean;
  productId: string;
  constructor(item: { _id: string, nameProduct?: string, imageProduct?: string, priceProduct?: number, isAvailable?: boolean, isFeatured?: boolean }) {
    this.nameProduct = item.nameProduct ?? "";
    this.imageProduct = item.imageProduct ?? "../../../assets/product-1.jpg";
    this.priceProduct = item.priceProduct ?? 0;
    this.isAvailable = item.isAvailable ?? false;
    this.isFeatured = item.isFeatured ?? false;
    this.productId = item._id;
  }

  getProductForRequestBody(){
    return {
      "productId":this.productId,
      "title": this.nameProduct,
      "price":this.priceProduct,
      "img":this.imageProduct
    }
  }

  static fromResponseList(items: { _id: string, nameProduct?: string, imageProduct?: string, priceProduct?: number, isAvailable?: boolean, isFeatured?: boolean }[]): Product[] {
    const productList: Product[] = [];
    for (const item of items) {
      const product = new Product({
        _id: item._id,
        nameProduct: item.nameProduct,
        imageProduct: item.imageProduct,
        priceProduct: item.priceProduct,
        isAvailable: item.isAvailable,
        isFeatured: item.isFeatured
      });
      productList.push(product);
    }
    return productList;
  }
}