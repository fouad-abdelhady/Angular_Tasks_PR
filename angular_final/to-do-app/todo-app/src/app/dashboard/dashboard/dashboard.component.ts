import { Component, OnInit } from '@angular/core';
import { ToDo, TodosApis, TodosService } from 'src/app/shared/services/dashboard/todos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    toDoList: ToDo[] = []; 
    constructor(private toDoService: TodosService, private router: Router){
      console.log(this.toDoService.getHeaders());
    }

    ngOnInit(){
      this.fetchToDos();
    }
    
    fetchToDos(){
      this.toDoService.getToDos(TodosApis.getToDos).subscribe(res =>{
        this.toDoList = <ToDo[]> res;
      }, err=>{
        if(err.status == 401){
          this.router.navigate(['/']);
        }
      });
    }
    
    taskAdded(){
      this.fetchToDos();
    }
}
