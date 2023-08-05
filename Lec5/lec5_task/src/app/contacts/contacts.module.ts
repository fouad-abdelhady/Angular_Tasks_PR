import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsItemsComponent } from './contacts-items/contacts-items.component';
import {ContactSearchComponent} from './contact-search/contact-search.component';
import { SharedModule } from '../shared/components/shared.module';
import { ContactsRoutingModule } from './contact-routing.module';
import { ContactsComponent } from './contacts.component';
import { NewContactsComponent } from './contact-new/new-contacts.component';
@NgModule({
declarations: [
ContactsComponent,
ContactsListComponent,
ContactsItemsComponent,
ContactSearchComponent,
NewContactsComponent
],
imports: [
CommonModule,
SharedModule,
FormsModule,
ContactsRoutingModule
]
})
export class ContactsModule { }
