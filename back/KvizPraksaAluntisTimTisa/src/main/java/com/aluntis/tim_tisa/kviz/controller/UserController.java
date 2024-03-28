package com.aluntis.tim_tisa.kviz.controller;
import com.aluntis.tim_tisa.kviz.entity.User;
import com.aluntis.tim_tisa.kviz.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping(path="/api")
public class UserController {
    @Autowired
    UserService userService;
    @PostMapping(path="/user/add")
    public String dodaj_usera(@RequestBody User user){
        userService.dodaj(user);
        return "Uspjesno ste dodali usera-a";
    }
}
