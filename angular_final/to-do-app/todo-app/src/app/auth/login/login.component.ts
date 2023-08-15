import { Component, EventEmitter, Output, Input } from '@angular/core';
import { AccountsService, User } from 'src/app/shared/services/accounts/accounts.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() back: EventEmitter<boolean>;
  @Input() accountInfo?: User;
  password?:string;
  errorMessage?:string;
  constructor(private accountsService: AccountsService, private router: Router) {
    this.back = new EventEmitter();
  }

  onBack(){
    console.log("Backing...");
    this.back.emit(true);
  }
  logIn(){
    if(!this.password){
      this.errorMessage = "Enter your password";
      return;
    }
    this.errorMessage = undefined;
    this.accountsService.setHeaders(this.accountInfo?.username??"", this.password);
    this.accountsService.saveUser(this.accountInfo?.username!, this.accountInfo?.name!, this.accountInfo?.avatar!);
    this.router.navigate(['/dashboard']);
  }
}
