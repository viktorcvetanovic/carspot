package com.carspot.carspot.controller;

import com.carspot.carspot.entity.User;
import com.carspot.carspot.service.UserService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/login")
    @ApiOperation(value = "", nickname = "login")
    public ResponseEntity<User> login(@RequestParam String username, @RequestParam String password) {
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.login(username, password));
    }

    @PostMapping("/register")
    @ApiOperation(value = "", nickname = "register")
    public ResponseEntity<User> login(@RequestBody User user) {
        System.out.println(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.register(user));
    }

}
