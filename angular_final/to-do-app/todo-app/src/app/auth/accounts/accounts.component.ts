import { Component, OnInit } from '@angular/core';
import { AccountsService, AuthApis, User } from 'src/app/shared/services/accounts/accounts.service';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {
  showAccounts = false;
  accounts: User[];
  selectedAccount?: User;
  constructor(private accountsService: AccountsService){
    this.accounts = [];
  }
  ngOnInit(){
    this.fetchAccounts();
  }
  fetchAccounts(){
    this.accountsService.getUsers(AuthApis.getUsers).subscribe(res=>{
      this.accounts = <User[]> res;
    });
  }
  accountSelected(selectedAccount:User){
    this.selectedAccount = selectedAccount;
  }

  onBack(){
    this.selectedAccount = undefined;
  }
}
