package com.yashvant.springseclirice.controllers;

import com.yashvant.springseclirice.entities.Category;
import com.yashvant.springseclirice.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
@CrossOrigin("https://lirice.vercel.app")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping("/")
    public ResponseEntity<Category> createCategory(@RequestBody Category cateogDto) {
        Category createCategory = this.categoryService.createCategory(cateogDto);
        return new ResponseEntity<Category>(createCategory, HttpStatus.CREATED);
    }

    @PutMapping("/{catId}")
    public ResponseEntity<Category> updateCategory(@RequestBody Category categoryDto,
                                                      @PathVariable Integer catId) {
        Category updatedCategory = this.categoryService.updateCategory(categoryDto, catId);
        return new ResponseEntity<Category>(updatedCategory, HttpStatus.OK);
    }


    /*@DeleteMapping("/{catId}")
    public ResponseEntity<ApiResponse> deleteCategory(@PathVariable Integer catId) {
        this.categoryService.deleteCategory(catId);
        return new ResponseEntity<ApiResponse>(new ApiResponse("category is deleted successfully !!", true),
                HttpStatus.OK);
    }*/


    @GetMapping("/{catId}")
    public ResponseEntity<Category> getCategory(@PathVariable Integer catId) {

        Category categoryDto = this.categoryService.getCategory(catId);

        return new ResponseEntity<Category>(categoryDto, HttpStatus.OK);

    }

    @GetMapping("/")
    public ResponseEntity<List<Category>> getCategories() {
        List<Category> categories = this.categoryService.getCategories();
        return ResponseEntity.ok(categories);
    }
}
