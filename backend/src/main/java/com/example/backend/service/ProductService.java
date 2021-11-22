package com.example.backend.service;

import com.example.backend.model.Product;
import com.example.backend.repo.ProductRepo;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ProductService {
    private ProductRepo product_repo = new ProductRepo();

    public List<Product> getProducts(){

        return product_repo.getProducts();
    }
}
