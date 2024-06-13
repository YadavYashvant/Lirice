package com.yashvant.lirice.services;

import com.yashvant.lirice.dao.UserRepo;
import com.yashvant.lirice.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    @Transactional
    public boolean insertUser(User user) {
        if (!user.isEmpty()) {
            userRepo.save(user);
            return true;
        }

        return false;
    }

    public User getUserByEmail(String email) {
        User userOptional = userRepo.findByEmail(email);
        return userOptional;
    }

}
