package com.yashvant.lirice.dao;

import com.yashvant.lirice.models.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class UserDao {

    public void save(User alien){
        System.out.println("User added!!");
    }

    public List<User> findAll(){
        return new ArrayList<User>();
    }

}
