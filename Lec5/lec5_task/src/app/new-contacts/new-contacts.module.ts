import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewContactsRoutingModule } from './new-contacts-routing.module';
import { NewContactsComponent } from './new-contacts.component';


@NgModule({
  declarations: [
    NewContactsComponent
  ],
  imports: [
    CommonModule,
    NewContactsRoutingModule
  ]
})
export class NewContactsModule { }
