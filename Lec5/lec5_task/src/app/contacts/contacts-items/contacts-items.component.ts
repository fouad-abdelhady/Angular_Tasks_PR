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
  @Output() contactUpdate: EventEmitter<Contact> = new EventEmitter();
  currentlyUpdating:number = -1;
  currentName?:string;
  currentNumber?:string;
  currentImg?:string;
  updateError?:string;
  shouldBeViewed(contact:Contact, index:number):boolean {
    if(this.isUpdating(index)) return false;
    if(!this.searchExpr) return true;
    let result = contact.name.toLowerCase().match(this.searchExpr.toLowerCase());
    if(result) return true;
    return false;
  }
  onDeleteClicked(index:number){
    this.contactDelete.emit(index);
  }
  isUpdating(index:number):boolean{
    return this.currentlyUpdating == index;
  }
  resetInfo(){
    this.currentName = this.contactsList[this.currentlyUpdating].name;
    this.currentNumber = this.contactsList[this.currentlyUpdating].mobileNum;
    this.currentImg = this.contactsList[this.currentlyUpdating].imageUrl;
  }
  saveChanges(){
    if(!Contact.validateContactInfo(this.currentName, this.currentNumber, this.currentImg)){
      this.updateError = "Please enter valid info";
      return;
    }
    this.updateError = undefined;
    let contact = new Contact(this.currentName!, this.currentImg!, this.currentNumber! , this.currentlyUpdating);
    this.currentlyUpdating = -1;
    this.contactUpdate.emit(contact);
  }
  cancelUpdating(){
    this.currentlyUpdating = -1;
    this.updateError = "";
  }
  enableUpdating(index: number){
    this.currentlyUpdating = index;
    this.currentName = this.contactsList[index].name;
    this.currentNumber = this.contactsList[index].mobileNum;
    this.currentImg = this.contactsList[index].imageUrl;
  }
}
//G2232552m.a