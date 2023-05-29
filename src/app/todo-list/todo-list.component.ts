import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  Items=['1', '2', '3'];

  ngOnInit(): void {
  }

  addTodo(todo:string): void {
    this.Items.push(todo);
  }

}
