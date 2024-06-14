package com.yashvant.lirice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(/*exclude = {DataSourceAutoConfiguration.class}*/)
public class LiriceApplication {

    public static void main(String[] args) {
        SpringApplication.run(LiriceApplication.class, args);
    }

}