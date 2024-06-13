package com.yashvant.lirice.dao;


import com.yashvant.lirice.entities.Post;
import org.springframework.data.repository.CrudRepository;
public interface PostRepo extends CrudRepository<Post, Long>{
    
}
