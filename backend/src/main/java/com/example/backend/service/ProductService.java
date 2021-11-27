package com.example.backend.service;

import com.example.backend.model.Product;
import com.example.backend.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ProductService {
   private ProductRepo product_repo;

   @Autowired
    public ProductService(ProductRepo product_repo){
       this.product_repo = product_repo;
   }
    public List<Product> getProducts(){return product_repo.findAll();}

    public Product addProduct(Product product){
        return product_repo.save(product);
    }


    public Product updateProduct(Product product){
        if(product_repo.existsById(product.getId())){
            return product_repo.save(product);
        }else {
            throw new NoSuchElementException("Element existiert nicht");
        }
    }

    public void deleteProduct(String id){ product_repo.deleteById(id);}

    public Product getProduct(String id){
       Optional<Product> optionalProduct = product_repo.findById(id);
       if(optionalProduct.isPresent()){
           return optionalProduct.get();
       } else{
           throw new NoSuchElementException("Element wurde nicht gefunden");
       }


    }
}
