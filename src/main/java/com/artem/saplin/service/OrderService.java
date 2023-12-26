package com.artem.saplin.service;

import com.artem.saplin.model.Order;
import org.springframework.security.core.Authentication;

import java.util.List;

public interface OrderService {

    void add(Order order, long carId, Authentication authentication);

    List<Order> getByUserId(long userId);

    List<Order> get();
}
