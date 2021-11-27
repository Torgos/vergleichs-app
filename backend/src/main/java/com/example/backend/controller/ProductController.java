package com.example.backend.controller;

import com.example.backend.model.Product;
import com.example.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/product")
public class ProductController {
    private final ProductService service ;

    @Autowired
    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping
    public List<Product> getAllProducts(){
        return service.getProducts();
    }
}

