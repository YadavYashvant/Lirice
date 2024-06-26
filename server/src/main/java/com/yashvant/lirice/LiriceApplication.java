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

    /*@Autowired
    private PasswordEncoder passwordEncoder;*/

    /*@Autowired
    private RoleRepo roleRepo;*/

    @Autowired
    private UserRepo userRepo;

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
        user.setEmail("yashvantyadav855@gmail.com");
        user.setPassword("xyz");
        user.setAbout("I am a software developer");
//        user.setPosts(null);
        user.setId(1);
        this.userRepo.saveAll(List.of(user));

    }

    /*@Override
    public void run(String... args) throws Exception {

//        System.out.println(this.passwordEncoder.encode("xyz"));

        try {

            Role role = new Role();
            role.setId(AppConstants.ADMIN_USER);
            role.setName("ROLE_ADMIN");

            Role role1 = new Role();
            role1.setId(AppConstants.NORMAL_USER);
            role1.setName("ROLE_NORMAL");

            List<Role> roles = List.of(role, role1);

            List<Role> result = this.roleRepo.saveAll(roles);

            result.forEach(r -> {
                System.out.println(r.getName());
            });

        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
        }

    }*/

}