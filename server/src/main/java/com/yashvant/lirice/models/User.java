package com.yashvant.lirice.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("prototype")
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {

    private int id;

    private String username;

    private String email;

    /*private String password;

    private String role;

    private String address;*/
}
