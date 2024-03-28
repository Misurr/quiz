package com.aluntis.tim_tisa.kviz.controller;
import com.aluntis.tim_tisa.kviz.entity.Easy;
import com.aluntis.tim_tisa.kviz.entity.Hard;
import com.aluntis.tim_tisa.kviz.service.HardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path="/api")
public class HardContoller {
    @Autowired
    HardService hardService;
    //GET zahtjev za sortiranje usera bo broju bodova za tezinu hard i tip pitanja (1-SC,2-MC,3-TrueFalse,4-spojnica)
    @GetMapping(path="/hard/{tipPitanja}")
    public List<Hard> HardList(@PathVariable Integer tipPitanja){
        return hardService.sortiranje1(tipPitanja);
    }

}
