webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <todo-list></todo-list>\n</main>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todos_todo_list_component__ = __webpack_require__("../../../../../src/app/todos/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todos_services_todo_service__ = __webpack_require__("../../../../../src/app/todos/services/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__todos_todo_list_component__["a" /* TodoListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__todos_services_todo_service__["a" /* TodoService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/todos/model/todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo() {
    }
    return Todo;
}());

//# sourceMappingURL=todo.js.map

/***/ }),

/***/ "../../../../../src/app/todos/services/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080';
    }
    TodoService.prototype.getTodos = function () {
        return this.http.get(this.baseUrl + '/api/todos/')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TodoService.prototype.createTodo = function (todoData) {
        return this.http.post(this.baseUrl + '/api/todos/', todoData)
            .toPromise().then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TodoService.prototype.updateTodo = function (todoData) {
        return this.http.put(this.baseUrl + '/api/todos/' + todoData.id, todoData)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TodoService.prototype.deleteTodo = function (id) {
        return this.http.delete(this.baseUrl + '/api/todos/' + id)
            .toPromise()
            .catch(this.handleError);
    };
    TodoService.prototype.handleError = function (error) {
        console.error('Some error occured', error);
        return Promise.reject(error.message || error);
    };
    return TodoService;
}());
TodoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TodoService);

var _a;
//# sourceMappingURL=todo.service.js.map

/***/ }),

/***/ "../../../../../src/app/todos/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"todo-content\">\n  <h1 class=\"page-title\">My Todos</h1>\n  <div *ngIf=\"todoExits\" style=\"color:red\">Todo Already Exists</div>\n  <div class=\"todo-create\">\n    <form #todoForm=\"ngForm\" (ngSubmit) = \"createTodo(todoForm)\" novalidate>\n      <input type=\"text\" id=\"title\" class=\"form-control\" placeholder=\"Type a todo and press enter...\" \n             required\n             name=\"title\" [(ngModel)]=\"newTodo.title\" (ngModelChange)=\"resetFlag()\"\n             #title=\"ngModel\" >\n      <div *ngIf=\"title.errors && title.dirty\"\n           class=\"alert alert-danger\">\n          <div [hidden]=\"!title.errors.required\">\n            Title is required.\n          </div>\n      </div>\n    </form>\n  </div>\n  <ul class=\"todo-list\">\n    <li *ngFor=\"let todo of todos\" [class.completed]= \"todo.completed === true\" >\n      <div class=\"todo-row\" *ngIf=\"!editing || editingTodo.id != todo.id\">\n          <a class=\"todo-completed\" (click)=\"toggleCompleted(todo)\">\n            <i class=\"material-icons toggle-completed-checkbox\"></i> \n          </a> \n        \n         <!-- <a class=\"todo-completed\" (click)=\"toggleCompleted(todo)\">Toggle</a>-->\n          <span class=\"todo-title\">\n            {{todo.title}} - {{(todo.completed)?'Completed':'Pending'}}\n          </span>         \n          <span class=\"todo-actions\">\n              <a (click)=\"editTodo(todo)\">\n                <i class=\"material-icons edit\">edit</i>\n              </a>\n              <a (click)=\"deleteTodo(todo.id)\">\n                <i class=\"material-icons delete\">clear</i>\n              </a>\n          </span>\n      </div>\n      <div class=\"todo-edit\" *ngIf=\"editing && editingTodo.id === todo.id\">\n          <input class=\"form-control\" type=\"text\" \n           [(ngModel)]=\"editingTodo.title\" required>\n          <span class=\"edit-actions\">\n              <a (click)=\"updateTodo(editingTodo)\">\n                <i class=\"material-icons\">done</i>\n              </a>\n              <a (click)=\"clearEditing()\">\n                <i class=\"material-icons\">clear</i>\n              </a>\n          </span>\n      </div>\n    </li>\n  </ul>\n  <div class=\"no-todos\" *ngIf=\"todos && todos.length == 0\">\n      <p>No Todos Found!</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/todos/todo-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  font-size: 18px;\n  line-height: 1.58;\n  background: #d53369;\n  background: linear-gradient(to left, #cbad6d, #d53369);\n  color: #333; }\n\nh1 {\n  font-size: 36px; }\n\n* {\n  box-sizing: border-box; }\n\ni {\n  vertical-align: middle;\n  color: #626262; }\n\ninput {\n  border: 1px solid #E8E8E8; }\n\n.page-title {\n  text-align: center; }\n\n.todo-content {\n  max-width: 650px;\n  width: 100%;\n  margin: 0 auto;\n  margin-top: 60px;\n  background-color: #fff;\n  padding: 15px;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28); }\n\n.form-control {\n  font-size: 16px;\n  padding-left: 15px;\n  outline: none;\n  border: 1px solid #E8E8E8; }\n\n.form-control:focus {\n  border: 1px solid #626262; }\n\n.todo-content .form-control {\n  width: 100%;\n  height: 50px; }\n\n.todo-content .todo-create {\n  padding-bottom: 30px;\n  border-bottom: 1px solid #e8e8e8; }\n\n.todo-content .alert-danger {\n  padding-left: 15px;\n  font-size: 14px;\n  color: red;\n  padding-top: 5px; }\n\n.todo-content ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  max-height: 450px;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-left: -15px;\n  margin-right: -15px;\n  overflow-y: scroll; }\n\n.todo-content ul li {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #E8E8E8; }\n\n.todo-content ul li span {\n  display: inline-block;\n  vertical-align: middle; }\n\n.todo-content .todo-title {\n  width: calc(100% - 160px);\n  margin-left: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.todo-content .todo-completed {\n  display: inline-block;\n  text-align: center;\n  width: 35px;\n  height: 35px;\n  cursor: pointer; }\n\n.todo-content .todo-completed i {\n  font-size: 20px; }\n\n.todo-content .todo-actions, .todo-content .edit-actions {\n  float: right; }\n\n.todo-content .todo-actions i, .todo-content .edit-actions i {\n  font-size: 17px; }\n\n.todo-content .todo-actions a, .todo-content .edit-actions a {\n  display: inline-block;\n  text-align: center;\n  width: 35px;\n  height: 35px;\n  cursor: pointer; }\n\n.todo-content .todo-actions a:hover, .todo-content .edit-actions a:hover {\n  background-color: #f4f4f4; }\n\n.todo-content .todo-edit input {\n  width: calc(100% - 80px);\n  height: 35px; }\n\n.todo-content .edit-actions {\n  text-align: right; }\n\n.no-todos {\n  text-align: center; }\n\n.toggle-completed-checkbox:before {\n  content: 'check_box_outline_blank'; }\n\nli.completed .toggle-completed-checkbox:before {\n  content: 'check_box'; }\n\nli.completed .todo-title {\n  text-decoration: line-through;\n  color: #757575; }\n\nli.completed i {\n  color: #757575; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todos/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_todo__ = __webpack_require__("../../../../../src/app/todos/model/todo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_todo_service__ = __webpack_require__("../../../../../src/app/todos/services/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoListComponent = (function () {
    function TodoListComponent(todoService) {
        this.todoService = todoService;
        this.todos = [];
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_1__model_todo__["a" /* Todo */]();
        this.editing = false;
        this.editingTodo = new __WEBPACK_IMPORTED_MODULE_1__model_todo__["a" /* Todo */]();
        this.todoExits = false;
    }
    TodoListComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    TodoListComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getTodos()
            .then(function (todos) { return _this.todos = todos; });
    };
    TodoListComponent.prototype.createTodo = function (todoForm) {
        var _this = this;
        this.todoService.createTodo(this.newTodo)
            .then(function (createTodo) {
            todoForm.reset();
            _this.newTodo = new __WEBPACK_IMPORTED_MODULE_1__model_todo__["a" /* Todo */]();
            _this.todos.unshift(createTodo);
        }).catch(function (error) {
            if (error.status == 404) {
                _this.todoExits = true;
            }
        });
    };
    TodoListComponent.prototype.deleteTodo = function (id) {
        var _this = this;
        this.todoService.deleteTodo(id)
            .then(function () {
            _this.todos = _this.todos.filter(function (todo) { return todo.id != id; });
        });
    };
    TodoListComponent.prototype.updateTodo = function (todoData) {
        var _this = this;
        console.log(todoData);
        this.todoService.updateTodo(todoData)
            .then(function (updatedTodo) {
            var existingTodo = _this.todos.find(function (todo) { return todo.id === updatedTodo.id; });
            Object.assign(existingTodo, updatedTodo);
            _this.clearEditing();
        });
    };
    TodoListComponent.prototype.toggleCompleted = function (todoData) {
        var _this = this;
        todoData.completed = !todoData.completed;
        this.todoService.updateTodo(todoData)
            .then(function (updatedTodo) {
            var existingTodo = _this.todos.find(function (todo) { return todo.id === updatedTodo.id; });
            Object.assign(existingTodo, updatedTodo);
        });
    };
    TodoListComponent.prototype.editTodo = function (todoData) {
        this.editing = true;
        Object.assign(this.editingTodo, todoData);
    };
    TodoListComponent.prototype.clearEditing = function () {
        this.editingTodo = new __WEBPACK_IMPORTED_MODULE_1__model_todo__["a" /* Todo */]();
        this.editing = false;
    };
    TodoListComponent.prototype.resetFlag = function () {
        this.todoExits = false;
    };
    return TodoListComponent;
}());
TodoListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'todo-list',
        template: __webpack_require__("../../../../../src/app/todos/todo-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todos/todo-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* TodoService */]) === "function" && _a || Object])
], TodoListComponent);

var _a;
//# sourceMappingURL=todo-list.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map