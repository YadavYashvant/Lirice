package com.yashvant.lirice.helpers;

import java.security.SecureRandom;

import com.yashvant.lirice.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;


@Component
@Lazy
public class MethodsForGen {

    @Autowired
    UserService userService;

    public Long generateUniqueCode() {
        SecureRandom random = new SecureRandom();

        while (true) {
            long code = random.nextLong();
            if (code > 0) { // Ensure the code is positive
                // if (!codeExistsInDatabase(code)) {
                //     return code;
                // }
                return code;
            }
        }
    }

    // Method to check if the generated code already exists in the database
    // private boolean codeExistsInDatabase(Long code) {
    //     return userService.userExistsById(code);
    // }
}
