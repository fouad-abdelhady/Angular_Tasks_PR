import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren:() => import('./contacts/contacts.module').then(m => m.ContactsModule)},
  //{path:'newContact', loadChildren:() => import('./new-contacts/new-contacts.module').then(m => m.NewContactsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
