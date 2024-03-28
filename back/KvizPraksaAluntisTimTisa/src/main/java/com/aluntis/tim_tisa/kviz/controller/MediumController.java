package com.aluntis.tim_tisa.kviz.controller;
import com.aluntis.tim_tisa.kviz.entity.Medium;
import com.aluntis.tim_tisa.kviz.service.MediumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
@RestController
@RequestMapping(path="/api")
public class MediumController {
    @Autowired
    MediumService mediumService;
    //GET zahtjev za sortiranje usera bo broju bodova za tezinu hard i tip pitanja (1-SC,2-MC,3-TrueFalse,4-spojnica)
    @GetMapping(path="/medium/{tipPitanja}")
    public List<Medium> MediumList(@PathVariable Integer tipPitanja){
        return mediumService.sortiranje2(tipPitanja);
}}
