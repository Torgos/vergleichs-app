package com.example.backend.model;

public class Product {
    private String name;
    private int gb;

    @Override
    public String toString() {
        return "Product{" +
                "name='" + name + '\'' +
                ", gb=" + gb +
                '}';
    }

    public Product(String name, int gb) {
        this.name = name;
        this.gb = gb;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getGb() {
        return gb;
    }

    public void setGb(int gb) {
        this.gb = gb;
    }
}
