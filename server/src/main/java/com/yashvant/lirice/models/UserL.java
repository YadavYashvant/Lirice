package com.yashvant.lirice.models;

import jakarta.persistence.*;
import lombok.*;

/*@Component
@Scope("prototype")
@Table
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder

 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserL {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String username;

    private String email;

    /*private String password;

    private String role;

    private String address;*/
}
