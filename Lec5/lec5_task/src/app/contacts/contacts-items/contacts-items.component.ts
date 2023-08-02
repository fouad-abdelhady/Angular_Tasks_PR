import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Contact } from 'src/app/shared/models/contact';

@Component({
  selector: 'app-contacts-items',
  templateUrl: './contacts-items.component.html',
  styleUrls: ['./contacts-items.component.css']
})
export class ContactsItemsComponent {
  @Input() searchExpr?: string;
  @Input() contactsList: Contact[] = [];
  @Output() contactDelete: EventEmitter<number> = new EventEmitter();
  shouldBeViewed(contact:Contact):boolean {
    if(!this.searchExpr) return true;
    let result = contact.name.toLowerCase().match(this.searchExpr.toLowerCase());
    if(result) return true;
    return false;
  }
  onDeleteClicked(index:number){
    this.contactDelete.emit(index);
  }
}
//G2232552m.a