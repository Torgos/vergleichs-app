package com.example.backend.repo;

import com.example.backend.model.Product;
import lombok.Data;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface ProductRepo extends PagingAndSortingRepository<Product, String> {

        List<Product> findAll();

  /*    ArrayList<Product>products = new ArrayList<Product>();

    public ProductRepo() {

        products.add(new Product("1","gtx1060",6, 4.4));
        products.add(new Product("2","rtx2060",8,3.5));
        products.add(new Product("3","gtx1080",6,3.5));
        products.add(new Product("4","rtx1080",8,2.8));
        products.add(new Product("5","AMD X450",4,4.4));
        products.add(new Product("6","rtx1070",4,4.2));
        products.add(new Product("7","AMD Ryxen480",12,2.8));
    }

*/

}

