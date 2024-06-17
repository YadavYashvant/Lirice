package com.yashvant.lirice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codewithdurgesh.blog.entities.Role;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepo  extends JpaRepository<Role, Integer>{

}
