package com.yashvant.lirice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codewithdurgesh.blog.entities.Comment;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepo  extends JpaRepository<Comment	, Integer> {

}
