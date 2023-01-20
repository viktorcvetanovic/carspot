package com.carspot.carspot.service.impl;

import com.carspot.carspot.entity.User;
import com.carspot.carspot.repository.UserRepository;
import com.carspot.carspot.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public User login(String username, String password) {
        User savedUser = userRepository.findByUsername(username)
                .orElse(null);
        if(savedUser == null){
            return null;
        }
        if (!savedUser.getPassword().equals(password)) {
            return null;
        }
        return savedUser;
    }

    @Override
    public User register(User user) {
        return userRepository.save(user);
    }
}
