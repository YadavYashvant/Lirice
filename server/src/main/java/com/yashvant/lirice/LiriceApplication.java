package com.yashvant.lirice;

import com.yashvant.lirice.config.AppConstants;
import com.yashvant.lirice.entities.Role;
import com.yashvant.lirice.entities.UserBlog;
import com.yashvant.lirice.repositories.RoleRepo;
import com.yashvant.lirice.repositories.UserRepo;
import org.h2.command.Command;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication(/*exclude = {DataSourceAutoConfiguration.class}*/)
public class LiriceApplication implements CommandLineRunner {

    @Autowired
    private UserRepo userRepo;

    @Auto

    public static void main(String[] args) {
        SpringApplication.run(LiriceApplication.class, args);
    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Override
    public void run(String... args) throws Exception {
        UserBlog user = new UserBlog();
        user.setName("Yashvant");
        user.setEmail("ds7428418@gmail.com");
        user.setPassword("xyz");
        user.setAbout("I am a software developer");
//        user.setPosts(null);
        user.setId(1);
        this.userRepo.saveAll(List.of(user));

    }
}