package com.yashvant.lirice.dao;

import com.yashvant.lirice.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepo extends CrudRepository<User, String> {

    public User findByEmail(String email);
    
}
