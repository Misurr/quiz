package com.aluntis.tim_tisa.kviz.repository;

import java.util.List;

import com.aluntis.tim_tisa.kviz.entity.MultipleChoicePitanje;
import com.aluntis.tim_tisa.kviz.entity.Spajalica_Pitanja;
import org.springframework.data.jpa.repository.JpaRepository;

import com.aluntis.tim_tisa.kviz.entity.TrueFalsePitanje;

public interface TrueFalsePitanjeRepository extends JpaRepository<TrueFalsePitanje, Integer>{
	List<TrueFalsePitanje> findByOblastId(Integer oblastId);
    TrueFalsePitanje findPitanjeById(Integer pitanjeId);
    void deleteByOblastId(Integer oblastId);
    List<TrueFalsePitanje> findByOblastIdAndMode(Integer oblastId, Integer mode);
    List<TrueFalsePitanje> findByMode(Integer mode);

}