package com.artem.saplin.service;

import com.artem.saplin.model.User;

import java.util.List;

public interface UserService {
    void add(User user);

    List<User> get();

    User get(long id);
}
