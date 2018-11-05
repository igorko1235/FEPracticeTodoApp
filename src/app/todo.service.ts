import { Injectable } from '@angular/core';
import { TodoModel } from './todo-model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Array<TodoModel> = [];
  constructor() { }

  public getTodos(): Array<TodoModel> {
    return this.todos;
  }

  private generateTodo(todoText: string): TodoModel {
    return {
      id: Date.now(),
      text: todoText,
      done: false
    }
  }

  public createTodo(text: string): void {
    const newTodo = this.generateTodo(text);
    this.todos = [...this.todos, newTodo];
  }

  public updateTodo(updatedTodo: TodoModel): void {
    this.todos.map(todo => {
      return todo.id === updatedTodo.id ? {...updatedTodo} : todo 
    })
  }
}
