package org.igt.todoapp.controllers.mapper;

import org.igt.todoapp.controllers.vo.TodoVO;
import org.igt.todoapp.models.Todo;

public class TodoMapper {

	
	public static Todo tranzform(TodoVO todoVO) {
		Todo todo = new Todo(todoVO.getTitle());
		todo.setCompleted(todoVO.getCompleted());
		return todo;
		
	}
}
