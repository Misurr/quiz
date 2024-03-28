package com.aluntis.tim_tisa.kviz.repository;

import com.aluntis.tim_tisa.kviz.entity.MultipleChoicePitanje;
import com.aluntis.tim_tisa.kviz.entity.Spajalica_Pitanja;
import org.springframework.data.jpa.repository.JpaRepository;

import com.aluntis.tim_tisa.kviz.entity.SingleChoice;

import java.util.List;

public interface SingleChoiceRepository extends JpaRepository<SingleChoice, Integer> {
    List<SingleChoice> findByOblastIdAndMode(Integer oblastId, Integer mode);
    List<SingleChoice> findByOblastId(Integer oblastId);
    List<SingleChoice> findByMode(Integer mode);
}
