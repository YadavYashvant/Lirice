package com.yashvant.lirice;

import com.yashvant.lirice.dao.UserDao;
import com.yashvant.lirice.models.User;
import org.apache.catalina.core.ApplicationContext;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class LiriceApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(LiriceApplication.class, args);

        User user1 = context.getBean(User.class);
        user1.setId(111);
        user1.setUsername("Yashvant");
        user1.setEmail("yashvantyadav855@gmail.com");

        UserDao userDao = context.getBean(UserDao.class);
        userDao.save(user1);
    }

}
