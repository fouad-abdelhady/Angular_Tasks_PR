import { Component, Input } from '@angular/core';
import { CartItemType } from 'src/app/shared/models/cartItemModel';
import { CartModel} from 'src/app/shared/models/cartModel';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent {
  @Input() cartData:CartModel = new CartModel({success:true, products: [], token:"", itemsCount:0, total:0});
}