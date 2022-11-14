import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public Title = '';
  public Description = '';
  public DueDate = new Date();
  public doneDate: Boolean = false;
  public showDone = false;
  public todoOwner = '';
  public Id = '';
  public todos= this.todoService.todos

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    this.allTodos()
  }

  allTodos(){
    this.todoService.getTodos()
    }    
    

  newTodo(): void {
      this.todoService.addTodo(this.Id, this.Title, this.Description, this.todoOwner, this.DueDate)
      this.allTodos()
      }

  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id)
    this.todoService.getTodos()
  }

  public getTodoTitle(): string {
    const title = this.Title
    return title
  }
}
