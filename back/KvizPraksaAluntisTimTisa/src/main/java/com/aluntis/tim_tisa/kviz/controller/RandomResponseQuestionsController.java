package com.aluntis.tim_tisa.kviz.controller;

import com.aluntis.tim_tisa.kviz.service.RandomResponseQuestionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/random-response")
public class RandomResponseQuestionsController {
    @Autowired
    private RandomResponseQuestionsService randomResponseQuestionsService;

    @GetMapping("/questions/{type}/{area}/{mode}")
    public List<?> getRandomQuestions(@PathVariable("type") Integer type, @PathVariable("area") Integer areaId, @PathVariable("mode") Integer mode) {
        return randomResponseQuestionsService.getRandomQuestions(type, areaId, mode);
    }
}
