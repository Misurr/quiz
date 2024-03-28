package com.aluntis.tim_tisa.kviz.service;

import com.aluntis.tim_tisa.kviz.entity.MultipleChoicePitanje;
import com.aluntis.tim_tisa.kviz.entity.Oblast;
import com.aluntis.tim_tisa.kviz.entity.Spajalica_Pitanja;
import com.aluntis.tim_tisa.kviz.repository.MultipleChoiceRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import java.util.List;

import java.util.Optional;

@Service
public class MultipleChoiceService {

@Autowired
    MultipleChoiceRepository multipleChoiceRepository;
    OblastService oblastService;

    // Servis za dodavanje novog pitanja sa vise mogucih odgovora
    public MultipleChoicePitanje addPitanje(MultipleChoicePitanje multipleChoicePitanje){
        List<MultipleChoicePitanje> lista=multipleChoiceRepository.findAll();
        boolean provjera=false;
        if(multipleChoicePitanje.getTekstPitanja() == null ||
                multipleChoicePitanje.getSlika() == null ||
                multipleChoicePitanje.getOdgovor1() == null ||
                multipleChoicePitanje.getOdgovor2() == null ||
                multipleChoicePitanje.getOdgovor3() == null ||
                multipleChoicePitanje.getOdgovor4() == null ||
                multipleChoicePitanje.getOdgovor5() == null ||
                multipleChoicePitanje.getOdgovor6() == null ||
                multipleChoicePitanje.getTacanOdgovor() == null ||
                multipleChoicePitanje.getOblast().getId() == null){
            throw new IllegalStateException("Sva polja pitanja sa vise mogucih odgovora moraju biti popunjena!");
        }
        for(int i=0;i< lista.size();i++){
            if(multipleChoicePitanje.getTekstPitanja().equals(lista.get(i).getTekstPitanja()) && multipleChoicePitanje.getSlika().equals(lista.get(i).getSlika()) && multipleChoicePitanje.getOdgovor1().equals(lista.get(i).getOdgovor1()) &&
                    multipleChoicePitanje.getOdgovor2().equals(lista.get(i).getOdgovor2()) && multipleChoicePitanje.getOdgovor3().equals(lista.get(i).getOdgovor3()) && multipleChoicePitanje.getOdgovor4().equals(lista.get(i).getOdgovor4()) &&
                    multipleChoicePitanje.getTacanOdgovor().equals(lista.get(i).getTacanOdgovor())  && multipleChoicePitanje.getOdgovor5().equals(lista.get(i).getOdgovor5())  && multipleChoicePitanje.getOdgovor6().equals(lista.get(i).getOdgovor6())){
                provjera=true;
                break;
            }
        }
        if(provjera)
            throw new IllegalStateException("Pitanja ne smiju biti ista");
//        else {
//            String tekstPitanja = multipleChoicePitanje.getTekstPitanja();
//            String slika = multipleChoicePitanje.getSlika();
//            String odgovor1 = multipleChoicePitanje.getOdgovor1();
//            String odgovor2 = multipleChoicePitanje.getOdgovor2();
//            String odgovor3 = multipleChoicePitanje.getOdgovor3();
//            String odgovor4 = multipleChoicePitanje.getOdgovor4();
//            String odgovor5 = multipleChoicePitanje.getOdgovor5();
//            String odgovor6 = multipleChoicePitanje.getOdgovor6();
//            String tacanOdgovor = multipleChoicePitanje.getTacanOdgovor();
//            Integer oblastId = multipleChoicePitanje.getOblast().getId();
//            Oblast oblast = oblastService.pretraga_ID(oblastId);
//            MultipleChoicePitanje novoPitanje = new MultipleChoicePitanje(tekstPitanja, slika, odgovor1, odgovor2, odgovor3, odgovor4, odgovor5, odgovor6, tacanOdgovor, oblast);
//
//            return multipleChoiceRepository.save(novoPitanje);
//        }

        return multipleChoiceRepository.save(multipleChoicePitanje);
    }

    // Servis za azuriranje postojeceg pitanja sa vise mogucih odgovora
    public ResponseEntity<String> updatePitanje(int id, MultipleChoicePitanje body){

        if(multipleChoiceRepository.existsById(id)){
            MultipleChoicePitanje currentPitanje = multipleChoiceRepository.findById(id).get();

            currentPitanje.setTekstPitanja(body.getTekstPitanja());
            currentPitanje.setSlika(body.getSlika());
            currentPitanje.setOdgovor1(body.getOdgovor1());
            currentPitanje.setOdgovor2(body.getOdgovor2());
            currentPitanje.setOdgovor3(body.getOdgovor3());
            currentPitanje.setOdgovor4(body.getOdgovor4());
            currentPitanje.setOdgovor5(body.getOdgovor5());
            currentPitanje.setOdgovor6(body.getOdgovor6());
            currentPitanje.setTacanOdgovor(body.getTacanOdgovor());
//            currentPitanje.setOblastId(body.getOblastId());

            multipleChoiceRepository.save(currentPitanje);
            return ResponseEntity.ok("Pitanje uspijesno azurirano!");
        }
        else return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pitanje nije pronadjeno!");
    }


    // Servis koji vraca sva pitanja sa vise mogucih odgovora iz baze podataka
    public List<MultipleChoicePitanje> getAllMultipleChoicePitanje(){
        return multipleChoiceRepository.findAll();
    }

    // Servis koji vraca sva pitanja po odredjenoj oblasti
    public List<MultipleChoicePitanje> getPitanjeByOblastId(Integer id){
        List <MultipleChoicePitanje> pitanjeByid = multipleChoiceRepository.findByOblastId(id);
        return pitanjeByid;
    }

    // Servis koji vraca odjerejeno pitanje
    public MultipleChoicePitanje getPitanjeById(Integer id){
        return multipleChoiceRepository.findPitanjeById(id);
    }

    // Servis koji brise odredjeno pitanje i varaca odgovor
    @Transactional
    public String deletePitanjeById(Integer pitanjeId){
        if(!multipleChoiceRepository.findById(pitanjeId).equals(Optional.empty())){
            multipleChoiceRepository.deleteById(pitanjeId);
            return "Pitanje uspijedno obrisano!";
        }
        return "Pitanje sa ID:" + pitanjeId.toString() + " - ne postoji!";
    }

    @Transactional
    public ResponseEntity<String> deleteOblastAllById(Integer oblastId){
        List<MultipleChoicePitanje> multipleChoicePitanjeList = multipleChoiceRepository.findByOblastId(oblastId);
        if(!multipleChoicePitanjeList.isEmpty()){
            multipleChoiceRepository.deleteByOblastId(oblastId);
            return ResponseEntity.ok("Pitanja iz date oblasti uspijesno obrisana!");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nema pitanja u ovoj oblasti");
    }

    public List<MultipleChoicePitanje> pronadji_mode(Integer mode) {
        return multipleChoiceRepository.findByMode(mode);
    }

    public List<MultipleChoicePitanje> pronadji_oblast_mode(Integer oblastId, Integer mode) {
        return multipleChoiceRepository.findByOblastIdAndMode(oblastId,mode);
    }
}
