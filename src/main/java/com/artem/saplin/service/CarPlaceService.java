package com.artem.saplin.service;

import com.artem.saplin.model.CarPlace;

import java.util.List;

public interface CarPlaceService {
    void add(CarPlace carPlace);

    CarPlace get(long id);

    List<CarPlace> get();
}
