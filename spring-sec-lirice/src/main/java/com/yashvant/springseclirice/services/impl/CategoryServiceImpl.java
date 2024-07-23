package com.yashvant.springseclirice.services.impl;

import com.yashvant.springseclirice.entities.Category;
import com.yashvant.springseclirice.services.CategoryService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    public Category createCategory(Category categoryDto) {
        return null;
    }


    public Category updateCategory(Category categoryDto, Integer categoryId) {
        return null;
    }

    @Override
    public void deleteCategory(Integer categoryId) {
        // TODO Auto-generated method stub
    }


    public Category getCategory(Integer categoryId) {
        return null;
    }


    public List<Category> getCategories() {
        return List.of();
    }
}
