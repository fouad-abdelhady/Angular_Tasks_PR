import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaviagtionComponent } from './naviagtion/naviagtion.component';



@NgModule({
  declarations: [
    NaviagtionComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NaviagtionComponent
  ]
})
export class SharedModule { }
