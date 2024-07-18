package com.yashvant.springseclirice.controllers;


import com.yashvant.springseclirice.entities.Post;
import com.yashvant.springseclirice.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@Controller
@RestController
@CrossOrigin("*")
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
    public Post getPostById(@PathVariable Long id) {
        return postService.getPostById(id);
    }

    @PostMapping("/post")
    public String createPost(@RequestBody Post post) {
        postService.createPost(post);
        return "created posts successfully";
    }

}
