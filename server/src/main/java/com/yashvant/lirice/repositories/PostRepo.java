package com.yashvant.lirice.repositories;

import java.util.List;

import com.yashvant.lirice.entities.Category;
import com.yashvant.lirice.entities.Post;
import com.yashvant.lirice.entities.UserBlog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import org.springframework.stereotype.Repository;

@Repository
public interface PostRepo extends JpaRepository<Post, Integer> {

	List<Post> findByUser(UserBlog userBlog);
	List<Post> findByCategory(Category category);
	
	@Query("select p from Post p where p.title like :key")
	List<Post> searchByTitle(@Param("key") String title);
	

}
