package com.aluntis.tim_tisa.kviz.repository;

import com.aluntis.tim_tisa.kviz.entity.Easy;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EasyRepository extends JpaRepository<Easy,Integer> {
   List<Easy> findByTipPitanjaOrderByBrojBodovaDescVrijemeAsc(Integer tipPitanja);
}
