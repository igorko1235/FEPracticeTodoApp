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
      text: todoText
    }
  }

  public createTodo(text: string): void {
    const newTodo = this.generateTodo(text);
    this.todos = [...this.todos, newTodo];
  }

  public deleteTodo(deleteTodo: TodoModel): void {
    this.todos = this.todos.filter(todo => {
        return todo.id !== deleteTodo.id;
    });
  }

  public updateTodo(updatedTodo: TodoModel): void {
    this.todos.map(todo => {
      return todo.id === updatedTodo.id ? {...updatedTodo} : todo 
    })
  }
}
