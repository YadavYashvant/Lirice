package com.yashvant.springseclirice.services.impl;

import com.yashvant.springseclirice.entities.Category;
import com.yashvant.springseclirice.repositories.CategoryRepo;
import com.yashvant.springseclirice.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepo categoryRepo;

    public Category createCategory(Category category) {
        return this.categoryRepo.save(category);
    }


    public Category updateCategory(Category category, Integer categoryId) {
        return this.categoryRepo.save(category);
    }

    @Override
    public void deleteCategory(Integer categoryId) {
        // TODO Auto-generated method stub
    }


    public Category getCategory(Integer categoryId) {
        return this.categoryRepo.findById(categoryId).get();
    }


    public List<Category> getCategories() {
        return this.categoryRepo.findAll();
    }
}
