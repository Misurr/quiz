package com.aluntis.tim_tisa.kviz.service;

import com.aluntis.tim_tisa.kviz.entity.Medium;
import com.aluntis.tim_tisa.kviz.entity.Medium;
import com.aluntis.tim_tisa.kviz.repository.MediumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class MediumService {
        @Autowired
        MediumRepository mediumRepository;
        public List<Medium> sortiranje2(Integer tipPitanja) {
            List<Medium> ListaPitanja2=mediumRepository.findByTipPitanjaOrderByBrojBodovaDescVrijemeAsc(tipPitanja);
            return ListaPitanja2;

}}
