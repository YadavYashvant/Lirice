package com.yashvant.lirice.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/test/1")
    public String doSomething() {
        return "This is test 1 of API";
    }
}
