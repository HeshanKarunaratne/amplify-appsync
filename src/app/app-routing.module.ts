import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: "todo",
    component: TodoComponent
  },
  {
    path: "",
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
