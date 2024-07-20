package com.yashvant.springseclirice.services;

import com.yashvant.springseclirice.entities.Post;
import com.yashvant.springseclirice.repositories.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepo postRepo;

    public PostService(PostRepo postRepo) {
        this.postRepo = postRepo;
    }

    public List<Post> getAllPosts() {
        return postRepo.findAll();
    }

    public Post getPostById(Long id) {
        return postRepo.findById(id).orElse(null);
    }

    public Post createPost(Post post) {
        return postRepo.save(post);
    }

    public Post updatePost(Post postDto, Long id){
        Post post = postRepo.findById(id).orElse(null);
        if(post != null){
            post.setTitle(postDto.getTitle());
            post.setContent(postDto.getContent());
            post.setImageName(postDto.getImageName());
            postRepo.save(post);
        }
        return post;
    }

}
