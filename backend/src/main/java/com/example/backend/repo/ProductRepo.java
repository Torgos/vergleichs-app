package com.example.backend.repo;

import com.example.backend.model.Product;
import lombok.Data;

import java.util.ArrayList;

@Data
public class ProductRepo {

    ArrayList<Product>products = new ArrayList<Product>();

    public ProductRepo() {

        products.add(new Product("gtx1060",6, 4.4));
        products.add(new Product("rtx2060",8,3.5));
        products.add(new Product("gtx1080",6,3.5));
        products.add(new Product("rtx1080",8,2.8));
        products.add(new Product("AMD X450",4,4.4));
        products.add(new Product("rtx1070",4,4.2));
        products.add(new Product("AMD Ryxen480",12,2.8));
    }



}

