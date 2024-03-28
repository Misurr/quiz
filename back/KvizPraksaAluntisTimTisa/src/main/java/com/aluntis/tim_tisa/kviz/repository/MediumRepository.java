package com.aluntis.tim_tisa.kviz.repository;

import com.aluntis.tim_tisa.kviz.entity.Easy;
import com.aluntis.tim_tisa.kviz.entity.Medium;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
public interface MediumRepository extends JpaRepository<Medium,Integer> {
    List<Medium> findByTipPitanjaOrderByBrojBodovaDescVrijemeAsc(Integer tipPitanja);
}
