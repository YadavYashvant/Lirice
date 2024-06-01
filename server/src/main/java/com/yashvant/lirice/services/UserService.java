package com.yashvant.lirice.services;

import com.yashvant.lirice.models.UserL;

import java.util.List;

public interface UserService {

    UserL saveUser(UserL userL);

    List<UserL> fetchUserList();

    UserL updateUser(UserL userL, Long userId);

    void deleteUserById(Long userId);

}
