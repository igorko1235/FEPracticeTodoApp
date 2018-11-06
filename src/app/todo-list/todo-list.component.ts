import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../todo-model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todoText: string = '';
  todos: TodoModel[];
  constructor(private todoService: TodoService) {
    this.getTodos();
  }

  private getTodos() {
    this.todos = this.todoService.getTodos();
  }

  public addTodo(): void {
    this.todoService.createTodo(this.todoText);
    this.todoText = '';
    this.getTodos(); 
  }

  public todoDeleted(todo: TodoModel): void {
    this.todoService.deleteTodo(todo);
    this.getTodos();
  }

  public todoChanged(todo: TodoModel): void {
    this.todoService.updateTodo(todo);
    this.getTodos();
  }

}
