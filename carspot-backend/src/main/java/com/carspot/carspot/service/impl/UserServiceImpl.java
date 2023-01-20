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
    public boolean login(String username, String password) {
        User savedUser = userRepository.findByUsername(username)
                .orElseThrow(RuntimeException::new);
        if (!savedUser.getPassword().equals(password)) {
            return false;
        }
        return true;
    }

    @Override
    public User register(User user) {
        return userRepository.save(user);
    }
}
