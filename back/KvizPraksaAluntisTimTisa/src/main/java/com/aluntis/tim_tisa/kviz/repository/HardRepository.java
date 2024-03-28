package com.aluntis.tim_tisa.kviz.repository;

import com.aluntis.tim_tisa.kviz.entity.Easy;
import com.aluntis.tim_tisa.kviz.entity.Hard;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
public interface HardRepository extends JpaRepository<Hard,Integer> {
    List<Hard> findByTipPitanjaOrderByBrojBodovaDescVrijemeAsc(Integer tipPitanja);
}
