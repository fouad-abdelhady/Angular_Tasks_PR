import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodosComponent } from './todos/todos.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddTodoComponent } from './add-todo/add-todo.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TodosComponent,
    NavBarComponent,
    AddTodoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
