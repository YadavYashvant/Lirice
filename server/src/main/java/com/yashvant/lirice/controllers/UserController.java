package com.yashvant.lirice.controllers;

import java.util.List;

import com.yashvant.lirice.entities.Post;
import com.yashvant.lirice.entities.User;
import com.yashvant.lirice.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import jakarta.servlet.http.HttpSession;

@Controller
public class UserController {
    @Autowired
    PostService postService;

    @GetMapping("/profile")
    public String showUserprofile(HttpSession session, Model model) {
        User user = (User) session.getAttribute("user");

        if (user != null) {

            List<Post> list = postService.findPostsByUserEmail(user.getEmail());

            model.addAttribute("size", list.size());
            model.addAttribute("list", list);
            model.addAttribute("user", user);
            return "user/profile";
        }

        return "redirect:/login";
    }
}
