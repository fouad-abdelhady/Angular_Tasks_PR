import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsModule } from './contacts/contacts.module';

const routes: Routes = [
  {path:'', component: ContactsComponent},
  {path:'newContact', loadChildren:() => import('./new-contacts/new-contacts.module').then(m => m.NewContactsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
