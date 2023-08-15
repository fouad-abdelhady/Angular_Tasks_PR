import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Services } from '../services';

@Injectable({
  providedIn: 'root'
})
export class TodosService extends Services{

  constructor(private httpClient: HttpClient) { 
    super();
  }
  getToDos(route:TodosApis){
    let url = this.getUrl(route);
    return this.httpClient.get<ToDo[]>(url, {headers: this.getHeaders()});
  }
  updateToDo(route:TodosApis, id:number, toDo:{}){
    let url = this.getUrl(route);
    url +=id;
    return this.httpClient.put<ToDo>(url, toDo, {headers: this.getHeaders()});
  }
  deleteTodo(route:TodosApis, todoId:number){
    let url = this.getUrl(route)+todoId;
    return this.httpClient.delete<{message:string}>(url, {headers: this.getHeaders()});
  }
  addToDo(route:TodosApis, toDo:{}){
    let url = this.getUrl(route);
    return this.httpClient.post<ToDo>(url, toDo, {headers: this.getHeaders()});
  }
}

export enum TodosApis{
  getToDos = 'todos',
  addToDo = 'todos',
  updateToDo = 'todos/',
  deleteToDo = 'todos/'
}

export type ToDo = {
  id: number,
  user_id: number,
  task: string,
  completed: boolean
}