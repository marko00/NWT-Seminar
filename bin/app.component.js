"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.todoItems = [
            new TodoItem("Learn Angular 2"),
            new TodoItem("Learn React"),
            new TodoItem("Learn ASP.NET core", true),
            new TodoItem("Learn node.js", true),
        ];
    }
    AppComponent.prototype.getDonePercentage = function () {
        if (this.todoItems.length === 0) {
            return 100;
        }
        return 100 * this.getDoneItemsCount() / this.getTotalItemsCount();
    };
    AppComponent.prototype.getDoneItemsCount = function () {
        return this.todoItems.filter(function (todo) { return todo.done; }).length;
    };
    AppComponent.prototype.getTotalItemsCount = function () {
        return this.todoItems.length;
    };
    AppComponent.prototype.getTodoDonenessClass = function (todo) {
        return (_a = {},
            _a[todo.done ? "todo-done" : "todo-not-done"] = true,
            _a
        );
        var _a;
    };
    AppComponent.prototype.toggleTodo = function (todo) {
        todo.done = !todo.done;
    };
    AppComponent.prototype.deleteDoneTodos = function () {
        //delete done -> keep only not done items
        this.todoItems = this.todoItems.filter(function (it) { return !it.done; });
    };
    AppComponent.prototype.deleteTodo = function (todo) {
        this.todoItems.splice(this.todoItems.indexOf(todo), 1);
    };
    AppComponent.prototype.checkAll = function () {
        this.todoItems.forEach(function (it) { return it.done = true; });
    };
    AppComponent.prototype.addTodo = function (input) {
        var value = input.value;
        if (!value.trim()) {
            return;
        }
        this.todoItems.push(new TodoItem(value));
        input.value = ""; //Reset the box
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"card\" id=\"main-todo-container\">\n      <div class=\"card-block\">\n        <h4 class=\"card-title\">Todo app</h4>\n        <ngb-progressbar type=\"success\" [value]=\"getDonePercentage()\"></ngb-progressbar>\n        \n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"New todo item\" #inputTodo (keyup.enter)=\"addTodo(inputTodo)\">\n              <span class=\"input-group-btn\">\n                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addTodo(inputTodo)\">+ Add</button>\n              </span>\n              <span class=\"input-group-btn\">\n                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"checkAll()\">&#10003; Check all</button>\n              </span>\n            </div>\n          </div>\n        </div>\n\n        <ul class=\"list-group todo-list\">\n          <li class=\"list-group-item\" *ngFor=\"let todo of todoItems\">\n            <label class=\"custom-control custom-checkbox\">\n              <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"todo.done\" (change)=\"toggleTodo(todo)\">\n              <span class=\"custom-control-indicator\"></span>\n            </label>\n            <span [ngClass]=\"getTodoDonenessClass(todo)\">{{todo.text}}</span>\n            <a href=\"javascript:void(0)\" (click)=\"deleteTodo(todo)\">&times;</a>\n          </li>\n        </ul>\n\n        <button type=\"button\" class=\"btn btn-danger pull-xs-righ\" (click)=\"deleteDoneTodos()\">&times; Delete Done</button>\n      </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var TodoItem = (function () {
    function TodoItem(text, done) {
        if (done === void 0) { done = false; }
        this.text = text;
        this.done = done;
    }
    return TodoItem;
}());
//# sourceMappingURL=app.component.js.map