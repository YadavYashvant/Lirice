package com.yashvant.lirice;

import com.yashvant.lirice.models.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class LiriceApplication {

    public static void main(String[] args) {
        SpringApplication.run(LiriceApplication.class, args);
    }

}
