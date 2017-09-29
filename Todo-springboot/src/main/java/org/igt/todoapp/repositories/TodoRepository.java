package org.igt.todoapp.repositories;

import java.util.List;

import org.igt.todoapp.models.Todo;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TodoRepository extends MongoRepository<Todo, String> {

    //list of todos for the given user
	List<Todo> findByUserId(final String userId,final Sort sort);

    //todos for the given user Id and id
	Todo findByIdAndUserId(final String id,final String userId);
	
	 //todos for the given user Id and title
	Todo findByUserIdAndTitle(final String userId,final String title);

	//delete todos for the given userId and id
	Long deleteTodoByIdAndUserId(final String id,final String userId);


}