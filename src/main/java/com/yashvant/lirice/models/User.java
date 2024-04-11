package com.yashvant.lirice.models;

import jakarta.persistence.*;

@Entity(name = "CUSTOMER")
@Table
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(unique = true)
    private String username;

    private String email;

    private String password;

    private String role;

    private String address;

    private int getId(){
        return id;
    }

    private void setId(int id){
        this.id = id;
    }

    private String getUsername(){
        return username;
    }

    public void setUsername(String username){
        this.username = username;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public String

}
