package com.artem.saplin.service;

import com.artem.saplin.model.Car;

import java.util.List;

public interface CarService {
    void add(Car car);

    List<Car> searchByCategory(String category);
    List<Car> searchByBrand(String brand);
    List<Car> searchByModel(String model);
    List<Car> searchByYear(int year);
    List<Car> searchByAvailable(boolean available);
    Car get(long id);
    List<Car> get();
}
