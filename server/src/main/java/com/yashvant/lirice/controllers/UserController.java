package com.yashvant.lirice.controllers;

import com.yashvant.lirice.models.UserL;
import com.yashvant.lirice.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/users")
    public UserL saveUser(
            @RequestBody UserL userL
    ){
        return userService.saveUser(userL);
    }

    @GetMapping("/users")
    public List<UserL> fetchUserList(){
        return userService.fetchUserList();
    }

    @PutMapping("/users/{id}")
    public UserL updateUser(
        @RequestBody UserL userL,
        @PathVariable("id") Long userId
    ){
        return userService.updateUser(
                userL,
                userId
        );
    }

    @DeleteMapping("/users/{id}")
    public String deleteUserById(
            @PathVariable("id") Long userId
    ){
        userService.deleteUserById(userId);
        return "Deleted User Successfully";
    }

}
