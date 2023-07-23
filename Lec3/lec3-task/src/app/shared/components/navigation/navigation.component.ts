import { Component, Input } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  CART_ROUTE:string = '/cart';
  HOME_ROUTE:string = '';
  @Input() itemsCount: number;
  constructor(private router: Router){
    this.itemsCount = 0;
  }

  moveToRoute(route:string){
    this.router.navigate([route]);
  }
}
