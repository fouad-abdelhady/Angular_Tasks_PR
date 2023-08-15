import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  userName?: string;
  profileImgUrl?: string;
  constructor(private router: Router){

  }
  ngOnInit() {
    this.userName = localStorage.getItem('fullName')!;
    this.profileImgUrl = localStorage.getItem('image')!;
  }
  logOutUser(){
    localStorage.removeItem('image');
    localStorage.removeItem('userName');
    localStorage.removeItem('token');
    localStorage.removeItem('fullName');
    this.router.navigate(['/']);
  }
}
