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

    const listener = this.api.OnCreateTodoListener();
    let newTodo = null;
    listener.subscribe({
      next: (todo) => {
        newTodo = todo.value.data?.onCreateTodo;
        this.allTodos.push(newTodo);
      }
    })


  }

  async createTodo(todoName: any) {
    if (todoName.value.length) {
      const newTodo = {
        name: todoName.value,
        body: "Sample description",
        completed: false
      }

      await this.api.CreateTodo(newTodo);
      // this.allTodos.push(result);
      todoName.value = null;
    }

  }

  async listTodos() {
    let results = await this.api.ListTodos();
    this.allTodos = results.items;
  }
}
