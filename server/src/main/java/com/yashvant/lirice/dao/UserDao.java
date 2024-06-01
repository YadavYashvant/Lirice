package com.yashvant.lirice.dao;

import com.yashvant.lirice.models.UserL;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class UserDao {

    public void save(UserL alien){
        System.out.println("User added!!");
    }

    public List<UserL> findAll(){
        return new ArrayList<UserL>();
    }

}
