package com.aluntis.tim_tisa.kviz.repository;

import com.aluntis.tim_tisa.kviz.entity.MultipleChoicePitanje;
import com.aluntis.tim_tisa.kviz.entity.Spajalica_Pitanja;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MultipleChoiceRepository extends JpaRepository<MultipleChoicePitanje, Integer> {
    List<MultipleChoicePitanje> findByOblastId(Integer oblastId);
    List<MultipleChoicePitanje> findByOblastIdAndMode(Integer oblastId, Integer mode);
    MultipleChoicePitanje findPitanjeById(Integer pitanjeId);
    void deleteByOblastId(Integer oblastId);
    List<MultipleChoicePitanje> findByMode(Integer mode);
}
