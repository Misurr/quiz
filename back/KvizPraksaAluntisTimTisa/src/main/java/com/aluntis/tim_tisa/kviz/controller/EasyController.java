package com.aluntis.tim_tisa.kviz.controller;

import com.aluntis.tim_tisa.kviz.entity.Easy;
import com.aluntis.tim_tisa.kviz.service.EasyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path="/api")
public class EasyController {
    @Autowired
    EasyService easyService;
    //GET zahtjev za sortiranje usera bo broju bodova za tezinu easy i tip pitanja (1-SC,2-MC,3-TrueFalse,4-spojnica)
    @GetMapping(path="/easy/{tipPitanja}")
    public List<Easy> EasyList(@PathVariable Integer tipPitanja){
        return easyService.sortiranje(tipPitanja);
    }



}
