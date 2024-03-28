package com.aluntis.tim_tisa.kviz.service;

import java.util.List;

import com.aluntis.tim_tisa.kviz.entity.Spajalica_Pitanja;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.aluntis.tim_tisa.kviz.entity.TrueFalsePitanje;
import com.aluntis.tim_tisa.kviz.repository.TrueFalsePitanjeRepository;

import jakarta.transaction.Transactional;

@Service
public class TrueFalsePitanjeService {
	@Autowired
	TrueFalsePitanjeRepository trueFalsePitanjeRepository;
	
	//za GET metodu u kontroleru
	public List<TrueFalsePitanje> getTrueFalsePitanja(){
		return trueFalsePitanjeRepository.findAll();
	}
	
	public void add(TrueFalsePitanje trueFalsePitanje){
        if(trueFalsePitanje.getTesktPitanja()==null || trueFalsePitanje.getSlika()==null || trueFalsePitanje.getTacanOdgovor()==null ||
                trueFalsePitanje.getMode()==null || trueFalsePitanje.getOblast().getId()==null){
            throw new IllegalStateException("Sva polja tabele TrueFalse moraju biti popunjena-(ne mogu imati vrijednost null)");
        }
        List<TrueFalsePitanje> lista=trueFalsePitanjeRepository.findAll();
        boolean provjera=false;
        for(int i=0;i< lista.size();i++){
            if(trueFalsePitanje.getTesktPitanja().equals(lista.get(i).getTesktPitanja()) && trueFalsePitanje.getSlika().equals(lista.get(i).getSlika()) && trueFalsePitanje.getTacanOdgovor().equals(lista.get(i).getTacanOdgovor())) {
                provjera=true;
                break;
            }
        }
        if(provjera)
            throw new IllegalStateException("Pitanja ne smiju biti ista");
        trueFalsePitanjeRepository.save(trueFalsePitanje);
    }
	
	public boolean delete(Integer id){
        trueFalsePitanjeRepository.delete(trueFalsePitanjeRepository.findById(id).get());
        return true;
    }
	
    public TrueFalsePitanje update(Integer id, TrueFalsePitanje trueFalsePitanje){
        TrueFalsePitanje trueFalsePitanjeById = trueFalsePitanjeRepository.findById(id).get();
        trueFalsePitanjeById.setTesktPitanja(trueFalsePitanje.getTesktPitanja());
        trueFalsePitanjeById.setSlika((trueFalsePitanje).getSlika());
        trueFalsePitanjeById.setTacanOdgovor(trueFalsePitanje.getTacanOdgovor());
        return trueFalsePitanjeRepository.save(trueFalsePitanjeById);
    }
    
    public List<TrueFalsePitanje> getPitanjeByOblastId(Integer id){
        List <TrueFalsePitanje> pitanjeByid = trueFalsePitanjeRepository.findByOblastId(id);
        return pitanjeByid;
    }
    
    public TrueFalsePitanje getPitanjeById(Integer id){
        return trueFalsePitanjeRepository.findPitanjeById(id);
    }
    
    @Transactional
    public ResponseEntity<String> deleteOblastAllById(Integer oblastId){
        List<TrueFalsePitanje> trueFalsePitanjeList = trueFalsePitanjeRepository.findByOblastId(oblastId);
        if(!trueFalsePitanjeList.isEmpty()){
            trueFalsePitanjeRepository.deleteByOblastId(oblastId);
            return ResponseEntity.ok("Pitanja iz date oblasti uspijesno obrisana!");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nema pitanja u ovoj oblasti");
    }


    public List<TrueFalsePitanje> pronadji_mode(Integer mode) {
        return trueFalsePitanjeRepository.findByMode(mode);
    }
    public List<TrueFalsePitanje> pronadji_oblast_mode(Integer oblastId, Integer mode) {
        return trueFalsePitanjeRepository.findByOblastIdAndMode(oblastId,mode);
    }
}