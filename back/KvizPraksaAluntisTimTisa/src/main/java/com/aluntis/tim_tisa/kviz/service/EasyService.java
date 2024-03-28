package com.aluntis.tim_tisa.kviz.service;

import com.aluntis.tim_tisa.kviz.entity.Easy;
import com.aluntis.tim_tisa.kviz.repository.EasyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EasyService {
    @Autowired
    EasyRepository easyRepository;
    public List<Easy> sortiranje(Integer tipPitanja) {
        List<Easy> ListaPitanja=easyRepository.findByTipPitanjaOrderByBrojBodovaDescVrijemeAsc(tipPitanja);
        return ListaPitanja;

    }
}
