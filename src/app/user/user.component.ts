import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public todoTitle = '';
  public showDone = false;
  todos: Todo[] | undefined


  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos()
    this.todos = this.todoService.todos
  }

    

  getTodoPercentage(): number {
    const allTodos = this.todoService.getDoneTodos();
    if (allTodos.length) {
      return this.todoService.getDoneTodos(false).length / allTodos.length * 100;
    } else {
      return 0;
    }
  }

  getDonePercentage(): number {
    const allTodos = this.todoService.getDoneTodos();
    if (allTodos.length) {
      return this.todoService.getDoneTodos(true).length / allTodos.length * 100;
    } else {
      return 0;
    }
  }
}

  
