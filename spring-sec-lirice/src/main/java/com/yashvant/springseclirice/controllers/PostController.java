package com.yashvant.springseclirice.controllers;


import com.yashvant.springseclirice.entities.Post;
import com.yashvant.springseclirice.services.FileService;
import com.yashvant.springseclirice.services.PostService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

//@Controller
@RestController
@CrossOrigin("*")
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private FileService fileService;

    @Value("${project.image}")
    private String path;

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

    @PostMapping("/post/image/upload/{postId}")
    public ResponseEntity<Post> uploadPostImage(@RequestParam("image") MultipartFile image,
                                                   @PathVariable Long postId) throws IOException {

        Post postDto = this.postService.getPostById(postId);

        String fileName = this.fileService.uploadImage(path, image);
        postDto.setImageName(fileName);
        Post updatePost = this.postService.updatePost(postDto, postId);
        return new ResponseEntity<Post>(updatePost, HttpStatus.OK);

    }


    //method to serve files
    @GetMapping(value = "/post/image/{imageName}",produces = MediaType.IMAGE_JPEG_VALUE)
    public void downloadImage(
            @PathVariable("imageName") String imageName,
            HttpServletResponse response
    ) throws IOException {

        InputStream resource = this.fileService.getResource(path, imageName);
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(resource,response.getOutputStream());

    }

}
