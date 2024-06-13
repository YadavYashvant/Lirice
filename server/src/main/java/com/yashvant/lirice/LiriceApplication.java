package com.yashvant.lirice;

import com.yashvant.lirice.services.FileStorageService;
import jakarta.annotation.Resource;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(/*exclude = {DataSourceAutoConfiguration.class}*/)
public class LiriceApplication implements CommandLineRunner {

    @Resource
    FileStorageService storageService;

    public static void main(String[] args) {
        SpringApplication.run(LiriceApplication.class, args);
        /*ConfigurableApplicationContext context = SpringApplication.run(LiriceApplication.class, args);

        User user1 = context.getBean(User.class);

        user1.setId(111);
        user1.setUsername("Yashvant");
        user1.setEmail("yashvantyadav855@gmail.com");

        UserDao userDao = context.getBean(UserDao.class);
        userDao.save(user1);*/
    }

    @Override
    public void run(String... args) throws Exception {
        storageService.init();
    }

}
