package org.igt.todoapp.services;


import java.util.List;

import org.igt.todoapp.exception.TodoAlreadyExistException;
import org.igt.todoapp.models.Todo;
import org.igt.todoapp.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
public class TodoServices implements ITodoServices{

    @Autowired
    TodoRepository todoRepository;

    @Override
    public List<Todo> getAllTodos(String userId) {
        Sort sortByCreatedAtDesc = new Sort(Sort.Direction.DESC, "createdAt");
        return todoRepository.findAll(sortByCreatedAtDesc);
    }
    @Override
    public Todo saveTodo(Todo todo) throws TodoAlreadyExistException{
    	Todo existingTodo = todoRepository.findByUserIdAndTitle(todo.getUserId(),todo.getTitle());
    	if(existingTodo!=null)
    		throw new TodoAlreadyExistException("Todo Already Exists");
    	
        return todoRepository.save(todo);
    }

    @Override
    public Todo getTodoById(final String id,final String userId) {
        final Todo todo = todoRepository.findByIdAndUserId(id,userId);
        return todo;
    }

    @Override
    public Todo updateTodo(final String id,final String userId,final Todo todo) {
        Todo todoData = getTodoById(id,userId);
        if(todoData == null) {
            return todoData;
        }
		todoData.setUserId(userId);
        todoData.setTitle(todo.getTitle());
        todoData.setCompleted(todo.getCompleted());
        Todo updatedTodo = todoRepository.save(todoData);
        return updatedTodo;
    }

    @Override
    public void deleteTodo(String id,String userId) {
        todoRepository.deleteTodoByIdAndUserId(id,userId);
    }

}
