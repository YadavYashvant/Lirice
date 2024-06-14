package com.yashvant.lirice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(/*exclude = {DataSourceAutoConfiguration.class}*/)
public class LiriceApplication {

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

}