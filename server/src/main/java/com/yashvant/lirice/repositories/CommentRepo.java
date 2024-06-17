package com.yashvant.lirice.repositories;

import com.yashvant.lirice.entities.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepo  extends JpaRepository<Comment, Integer> {

}
