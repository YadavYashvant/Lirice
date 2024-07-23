package com.yashvant.springseclirice.repositories;

import com.yashvant.springseclirice.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

interface CategoryRepo extends JpaRepository<Category, Integer>{

}
