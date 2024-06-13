package com.yashvant.lirice.auth;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.yashvant.lirice.entities.User;
import com.yashvant.lirice.helpers.Message;
import com.yashvant.lirice.services.UserService;

import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    Message message;

    @Autowired
    UserService userService;

    @GetMapping("/user")
    public String signup(Model model, HttpSession session) {
        System.out.println("\n\n\nAuthController - / user\n\n\n");
        User user = (User) session.getAttribute("user");
        if (user == null) {
            return "redirect:/login"; // Redirect to login if user not logged in
        }
        return "redirect:/index"; // Redirect to index page without the /auth/user URL
    }

}