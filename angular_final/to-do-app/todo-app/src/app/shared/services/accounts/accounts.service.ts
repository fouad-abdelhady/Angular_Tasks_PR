import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Services } from '../services';
@Injectable({
  providedIn: 'root'
})
export class AccountsService extends Services{
  static GET_ACCOUNTS = '';

  constructor(private httpClient: HttpClient) {
    super();
   }

  getUsers(route:AuthApis){
    let url = this.getUrl(route);
    return this.httpClient.get<User[]>(url, {headers: this.getHeaders()});
  }
}

export enum AuthApis{
  getUsers = 'users'
}

export type User = {
  id: number,
  name: string,
  avatar: string,
  username: string
}