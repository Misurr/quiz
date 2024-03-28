package com.aluntis.tim_tisa.kviz.service;
import com.aluntis.tim_tisa.kviz.entity.Easy;
import com.aluntis.tim_tisa.kviz.entity.Hard;
import com.aluntis.tim_tisa.kviz.repository.HardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HardService {
    @Autowired
    HardRepository hardRepository;
    public List<Hard> sortiranje1(Integer tipPitanja) {
        List<Hard> ListaPitanja1=hardRepository.findByTipPitanjaOrderByBrojBodovaDescVrijemeAsc(tipPitanja);
        return ListaPitanja1;

    }
}
