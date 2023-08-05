import { Component } from '@angular/core';
import { Contact } from '../../shared/models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {
   contacts: Contact[] = Contact.CONTACTS_LIST;
   searchExpr?: string;
   deleteContact(index: number): void {
    Contact.deleteContact(index);
   }
   onSearchEnterd(keywords: string): void {
    this.searchExpr = keywords;
   }
   updateContact(updatedContact: Contact){
    Contact.updateContact(updatedContact);
   }
}
