package org.igt.todoapp.controllers;

import java.util.List;

import javax.validation.Valid;

import org.igt.todoapp.controllers.mapper.TodoMapper;
import org.igt.todoapp.controllers.vo.TodoVO;
import org.igt.todoapp.exception.TodoAlreadyExistException;
import org.igt.todoapp.models.Todo;
import org.igt.todoapp.services.ITodoServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class TodoController {

	// logged in user context
	final ILoggedInContext loggedInUserContext = new LoggedInUserImpl();

	@Autowired
	ITodoServices todoServices;

	@GetMapping("/todos")
	public List<Todo> getAllTodos() {
		return todoServices.getAllTodos(loggedInUserContext.getUserId());
	}

	@PostMapping("/todos")
	public ResponseEntity<Todo> createTodo(@Valid @RequestBody TodoVO todoVO) throws TodoAlreadyExistException {
		Todo todo = TodoMapper.tranzform(todoVO);
		// setting the userId
		todo.setUserId(loggedInUserContext.getUserId());
		todo.setCompleted(false);
		Todo todoNew = todoServices.saveTodo(todo);
		return new ResponseEntity<>(todoNew, HttpStatus.OK);

	}

	@GetMapping(value = "/todos/{id}")
	public ResponseEntity<Todo> getTodoById(@PathVariable("id") String id) {
		final Todo todo = todoServices.getTodoById(id, loggedInUserContext.getUserId());
		if (todo == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<>(todo, HttpStatus.OK);
		}
	}

	@PutMapping(value = "/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable("id") String id, @Valid @RequestBody TodoVO todoVO) {
		Todo todo = TodoMapper.tranzform(todoVO);
		Todo todoData = todoServices.updateTodo(id, loggedInUserContext.getUserId(), todo);
		if (todoData == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(todoData, HttpStatus.OK);
	}

	@DeleteMapping(value = "/todos/{id}")
	public void deleteTodo(@PathVariable("id") String id) {
		todoServices.deleteTodo(id, loggedInUserContext.getUserId());
	}
}

interface ILoggedInContext {
	String getUserId();

	String getUserRole();
}

class LoggedInUserImpl implements ILoggedInContext {
	public String getUserId() {
		return "guest";
	}

	public String getUserRole() {
		return "ADMIN";
	}
}