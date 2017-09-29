package org.igt.todoapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND,reason="Todo Already Exists")
public class TodoAlreadyExistException extends Exception{

	/**
	 * 
	 */
	private static final long serialVersionUID = 8963284083138679488L;
	
	public TodoAlreadyExistException(String message) {
		super(message);
	}
	

}
