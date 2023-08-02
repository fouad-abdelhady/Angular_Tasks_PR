import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewContactsComponent } from './new-contacts.component';
const routes: Routes = [
  {path: '', component: NewContactsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewContactsRoutingModule { }
