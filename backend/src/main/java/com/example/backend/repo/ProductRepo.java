package com.example.backend.repo;

import com.example.backend.model.Product;
import lombok.Data;

import java.util.ArrayList;

@Data
public class ProductRepo {

    ArrayList<Product>products = new ArrayList<Product>();

    public ProductRepo() {

        products.add(new Product("gtx1060",6));
        products.add(new Product("rtx2060",8));
        products.add(new Product("gtx1080",6));
        products.add(new Product("rtx1080",8));
    }



}

