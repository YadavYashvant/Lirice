package com.yashvant.springseclirice.controllers;


import com.yashvant.springseclirice.entities.Post;
import com.yashvant.springseclirice.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Controller
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/posts")
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }

    @GetMapping("/post/{id}")
    public Post getPostById(Long id) {
        return postService.getPostById(id);
    }

}
