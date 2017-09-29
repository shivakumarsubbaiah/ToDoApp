package org.igt.todoapp.services;


import java.util.List;

import org.igt.todoapp.exception.TodoAlreadyExistException;
import org.igt.todoapp.models.Todo;

public interface ITodoServices {

    List<Todo> getAllTodos(final String userId);
 
    Todo saveTodo(Todo todo) throws TodoAlreadyExistException;

   
    Todo getTodoById(final String id,final String userId);


    Todo updateTodo(final String id,final String userId,final Todo todo);

    
    void deleteTodo(String id,String userId);
}
