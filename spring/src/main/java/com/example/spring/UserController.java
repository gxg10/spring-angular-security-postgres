package com.example.spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.sql.DataSource;
import java.security.Principal;
import java.util.*;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    DataSource dataSource;

    @Autowired
    UserRepo userRepo;

    @RequestMapping("/")
    public List<User> getUsers(Pageable pageable) {
        List<User> users = new ArrayList<>();
        userRepo.findAll().forEach(users::add);

        return users;
    }

    @RequestMapping("/login")
    public boolean login(@RequestBody User user) {

        List<User> users = new ArrayList<>();
        userRepo.findAll().forEach(users::add);
        for (User u: users) {
            if ((u.getUserName().equals(user.getUserName())) &&
            (u.getPassword().equals(user.getPassword()))) {
                return true;
            }
        }
        return false;
    }

    @RequestMapping("/user")
    public Principal user(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization").substring("Basic".length()).trim();
        return () -> new String(Base64.getDecoder().decode(authToken)).split(":")[0];
    }

}
