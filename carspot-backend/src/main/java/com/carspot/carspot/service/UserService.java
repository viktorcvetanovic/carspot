package com.carspot.carspot.service;

import com.carspot.carspot.entity.User;

public interface UserService {

    User login(String username, String password);

    User register(User user);
}
