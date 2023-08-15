import { Component, EventEmitter, Output} from '@angular/core';
import { ToDo, TodosApis, TodosService } from 'src/app/shared/services/dashboard/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  private _isOpend = false;
  @Output() taskAdded:EventEmitter<boolean>;
  taskName?: string;
  height = "0";
  error="";
  constructor(private todosService:TodosService){
    this.taskAdded = new EventEmitter();
  }
  toggelAddToDo(){
    this._isOpend = !this._isOpend;
    if(this._isOpend){
      this.height = "100%";
      return;
    }
    this.height = "0%";
  }
  addToDo(){
    if(!this.taskName){
      this.error = "Please enter a task name";
      return;
    }
    this.error = "";
    this.todosService.addToDo(TodosApis.addToDo, {task: this.taskName}).subscribe(res =>{
      this.taskAdded.emit(true);
      this.taskName = undefined;
      this.toggelAddToDo();
    });
  }
}
