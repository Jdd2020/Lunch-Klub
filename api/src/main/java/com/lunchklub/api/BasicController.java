package com.lunchklub.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class BasicController {

    @GetMapping("/lunch_klub")
    public String lunchKlub() {
        return "Lunch Klub Online!";
    }
}