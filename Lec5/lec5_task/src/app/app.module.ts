import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsModule } from './contacts/contacts.module';
import { NewContactsModule } from './new-contacts/new-contacts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactsModule,
    NewContactsModule
  ],
  providers: [ContactsModule, NewContactsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
