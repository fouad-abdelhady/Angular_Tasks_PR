import { Component } from '@angular/core';
import {Contact} from '../../shared/models/contact'
@Component({
  selector: 'app-new-contacts',
  templateUrl: './new-contacts.component.html',
  styleUrls: ['./new-contacts.component.css']
})
export class NewContactsComponent {
  imageUrl?:string;
  contactName?:string;
  contactMobile?: string;
  createError:string = "";

  addContact(): void {
    if(!Contact.validateContactInfo(this.contactName, this.imageUrl, this.contactMobile)) {
      this.createError = "Missing field";
      return;
    }
    if(Contact.checkIfNumberExists(this.contactMobile!)){
      this.createError = "This mobile number is already saved";
      return;
    }
    Contact.CONTACTS_LIST.push(new Contact(this.contactName!,  this.imageUrl!,this.contactMobile!));
    this.createError = this.imageUrl = this.contactMobile = this.contactName = "";
  }
} 
