package com.example.backend.ProductServiceTest;

import com.example.backend.model.Product;
import com.example.backend.repo.ProductRepo;
import com.example.backend.service.ProductService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;

public class ProductServiceTest {

    private ProductRepo product_repo = Mockito.mock(ProductRepo.class);
    private ProductService product_service = Mockito.mock(ProductService.class);

    @Test
    public void getProductsTest(){
        //GIVEN
        when(product_service.getProducts()).thenReturn(List.of(
                new Product("1","gtx1060",6, 4.4),
                new Product("2","rtx2060",8,3.5)

        ));
        //WHEN

        List<Product> result = product_service.getProducts();

        //THEN
        assertThat(result, is(List.of(
                new Product("1","gtx1060",6, 4.4),
                 new Product("2","rtx2060",8,3.5)
        )));
    }
}
