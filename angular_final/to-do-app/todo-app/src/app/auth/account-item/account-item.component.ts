import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../shared/services/accounts/accounts.service';
@Component({
  selector: 'app-account-item',
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.scss']
})
export class AccountItemComponent {
  @Input() accountsList: User[] = [];
  @Output() onAccountSelected: EventEmitter<User>;
  constructor(){
    this.onAccountSelected = new EventEmitter();
  }
  selectItem(account: User){
     this.onAccountSelected.emit(account);
  }
}
