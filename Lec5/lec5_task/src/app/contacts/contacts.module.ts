import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ContactsComponent } from './contacts.component';
import { ContactsItemsComponent } from './contacts-items/contacts-items.component';
import {ContactSearchComponent} from './contact-search/contact-search.component';
import { SharedModule } from '../shared/components/shared.module';

@NgModule({
declarations: [
ContactsComponent,
ContactsItemsComponent,
ContactSearchComponent,
],
imports: [
CommonModule,
SharedModule
]
})
export class ContactsModule { }
