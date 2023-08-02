import { Component } from '@angular/core';
import { Contact } from '../shared/models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
   contacts: Contact[] = Contact.CONTACTS_LIST;
   searchExpr?: string;
   deleteContact(index: number): void {
    Contact.deleteContact(index);
   }
   onSearchEnterd(keywords: string): void {
    this.searchExpr = keywords;
   }
}
