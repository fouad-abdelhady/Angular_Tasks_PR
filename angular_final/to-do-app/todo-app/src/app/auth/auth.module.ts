import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountItemComponent } from './account-item/account-item.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AccountsComponent,
    AccountItemComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
})
export class AuthModule { }
