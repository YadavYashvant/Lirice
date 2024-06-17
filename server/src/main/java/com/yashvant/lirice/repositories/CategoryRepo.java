package com.yashvant.lirice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codewithdurgesh.blog.entities.Category;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Integer> {

}
