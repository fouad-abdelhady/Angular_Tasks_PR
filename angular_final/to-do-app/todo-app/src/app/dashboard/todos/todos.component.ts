import { Component, Input } from '@angular/core';
import { ToDo, TodosApis, TodosService } from '../../shared/services/dashboard/todos.service'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  @Input() todos: ToDo[] = [];
  constructor(private todosService:TodosService){}

  getStatus(isComplete: boolean){
    return isComplete?"Completed":"Incomplete";
  }

  toggelItemStatus(itemIndex: number){
    this.todos[itemIndex].completed = !this.todos[itemIndex].completed;
    this.todosService.updateToDo(
      TodosApis.updateToDo,this.todos[itemIndex].id, 
      { completed: this.todos[itemIndex].completed}).subscribe(res =>{
        let item = <ToDo>res;
    });
  }
  deleteToDo(index:number){
    console.log(this.todos[index]);
    this.todosService.
    deleteTodo(TodosApis.deleteToDo, this.todos[index].id).
    subscribe(res =>{
      let response = <{message:string}>res;
      if(response.message =="Todo deleted"){
        this.todos.splice(index, 1);
        console.log(this.todos);
      }
    });
  }
}
