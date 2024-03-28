package com.aluntis.tim_tisa.kviz.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.aluntis.tim_tisa.kviz.entity.Spajalica_Pitanja;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface Spajalice_PitanjaRepository extends JpaRepository<Spajalica_Pitanja,Integer>{
    List<Spajalica_Pitanja> findByOblastId(Integer oblastId);
    List<Spajalica_Pitanja> findByMode(Integer mode);
    List<Spajalica_Pitanja> findByOblastIdAndMode(Integer oblastId,Integer mode);
    Spajalica_Pitanja findByOblastIdAndId(Integer oblastId,Integer id);
    void deleteByOblastId(Integer oblastId);
    void deleteByOblastIdAndId(Integer oblastId,Integer id);
}
