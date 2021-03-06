package com.example.backend.model;

public class Product {
    private String name;
    private int gb;
    private double cpu;

    @Override
    public String toString() {
        return "Product{" +
                "name='" + name + '\'' +
                ", gb=" + gb + '\'' +
                ", cpu=" + cpu +
                '}';
    }

    public Product(String name, int gb, double cpu) {
        this.name = name;
        this.gb = gb;
        this.cpu= cpu;
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

    public double getCpu() {return cpu; }

    public void setCpu(double cpu) {this.cpu = cpu; }
}