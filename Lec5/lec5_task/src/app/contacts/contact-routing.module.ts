import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import {NewContactsComponent} from './contact-new/new-contacts.component'
const routes: Routes = [
  {path: '', component: ContactsListComponent},
  {path: 'newContact', component: NewContactsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }