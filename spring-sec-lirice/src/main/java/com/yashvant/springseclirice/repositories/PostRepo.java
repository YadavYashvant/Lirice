package com.yashvant.springseclirice.repositories;

import com.yashvant.springseclirice.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepo extends JpaRepository<Post, Long>{
}
