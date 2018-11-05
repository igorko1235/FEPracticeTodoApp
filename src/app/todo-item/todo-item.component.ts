import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoModel } from '../todo-model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoModel;
  
  isEdit: boolean = false;
  editValue: string = '';

  @Output() todoChanged: EventEmitter<TodoModel> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    this.editValue = this.todo.text;
    this.isEdit = true;
  }

  onCancel() {
    this.editValue = '';
    this.isEdit = false;
  }

  onSave() {
    this.todo.text = this.editValue;
    this.todoChanged.emit(this.todo);
    this.editValue = '';
    this.isEdit = false;
  }

  onChecked() {
    this.todo.done = !this.todo.done;
    this.todoChanged.emit(this.todo);
  }
}
