package com.yashvant.springseclirice.services;

import com.yashvant.springseclirice.entities.Category;

import java.util.List;

public interface CategoryService {

    // create
    Category createCategory(Category categoryDto);

    // update
    Category updateCategory(Category categoryDto, Integer categoryId);

    // delete
    void deleteCategory(Integer categoryId);

    // get
    Category getCategory(Integer categoryId);

    // get All

    List<Category> getCategories();

}
