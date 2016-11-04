import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <div class="card" id="main-todo-container">
      <div class="card-block">
        <h4 class="card-title">Todo app</h4>
        <ngb-progressbar type="success" [value]="getDonePercentage()"></ngb-progressbar>
        
        <div class="row">
          <div class="col-lg-12">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="New todo item" #inputTodo (keyup.enter)="addTodo(inputTodo)">
              <span class="input-group-btn">
                <button class="btn btn-secondary" type="button" (click)="addTodo(inputTodo)">+ Add</button>
              </span>
              <span class="input-group-btn">
                <button class="btn btn-secondary" type="button" (click)="checkAll()">&#10003; Check all</button>
              </span>
            </div>
          </div>
        </div>

        <ul class="list-group todo-list">
          <li class="list-group-item" *ngFor="let todo of todoItems">
            <label class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" [checked]="todo.done" (change)="toggleTodo(todo)">
              <span class="custom-control-indicator"></span>
            </label>
            <span [ngClass]="getTodoDonenessClass(todo)">{{todo.text}}</span>
            <a href="javascript:void(0)" (click)="deleteTodo(todo)">&times;</a>
          </li>
        </ul>

        <button type="button" class="btn btn-danger pull-xs-righ" (click)="deleteDoneTodos()">&times; Delete Done</button>
      </div>
    </div>`
})
export class AppComponent { 
  private todoItems: TodoItem[];
  
  constructor(){
    this.todoItems = [
      new TodoItem("Learn Angular 2"), 
      new TodoItem("Learn React"), 
      new TodoItem("Learn ASP.NET core", true),
      new TodoItem("Learn node.js", true),
    ];
 }

 private getDonePercentage(): number {
   if(this.todoItems.length === 0) { return 100; }

   return 100*this.getDoneItemsCount()/this.getTotalItemsCount();    
 }
 
 private getDoneItemsCount(): number {
   return this.todoItems.filter(todo => todo.done).length;
 }
 
 private getTotalItemsCount(): number {
   return this.todoItems.length;
 }
 
 private getTodoDonenessClass(todo: TodoItem) {
   return {
     [todo.done ? "todo-done" : "todo-not-done"]: true
   };
 }
 
 private toggleTodo(todo: TodoItem){
   todo.done = !todo.done;
 }

 private deleteDoneTodos(){
   //delete done -> keep only not done items
   this.todoItems = this.todoItems.filter(it => !it.done);
 }

 private deleteTodo(todo: TodoItem){
   this.todoItems.splice(this.todoItems.indexOf(todo), 1); 
 }

 private checkAll(){
   this.todoItems.forEach(it => it.done = true);
 }

 private addTodo(input: HTMLInputElement){
   const value = input.value;
   if(!value.trim()) {  //Don't add empty todo items 
     return;
   }

   this.todoItems.push(new TodoItem(value));

   input.value = "";//Reset the box
 }
}

class TodoItem {
  public text: string;
  public done: boolean;
  
  constructor(text: string, done: boolean = false){
    this.text = text;
    this.done = done;
  }
}
