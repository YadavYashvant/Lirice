package com.yashvant.lirice.repositories;

import java.util.Optional;

import com.codewithdurgesh.blog.entities.UserBlog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<UserBlog, Integer>{
		
	
	Optional<UserBlog> findByEmail(String email);
}
