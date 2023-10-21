import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  allTodos: any = [];
  constructor(private api: APIService) { }


  async ngOnInit() {
    let results = await this.api.ListTodos();
    this.allTodos = results.items;
  }

  async createTodo() {
    const newTodo = {
      name: "Todo " + Math.floor(Math.random() * 100),
      body: "Sample description",
      completed: false
    }

    let result = await this.api.CreateTodo(newTodo);
    this.allTodos.push(result);
  }

  async listTodos() {
    let results = await this.api.ListTodos();
    this.allTodos = results.items;
  }
}
