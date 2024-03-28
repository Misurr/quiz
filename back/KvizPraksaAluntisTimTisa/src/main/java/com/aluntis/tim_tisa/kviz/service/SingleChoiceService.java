package com.aluntis.tim_tisa.kviz.service;

import java.util.ArrayList;
import java.util.List;

import com.aluntis.tim_tisa.kviz.entity.TrueFalsePitanje;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aluntis.tim_tisa.kviz.entity.SingleChoice;
import com.aluntis.tim_tisa.kviz.repository.SingleChoiceRepository;

@Service
public class SingleChoiceService {
    @Autowired
    SingleChoiceRepository singleChoiceRepository;

    // za GET metodu u kontroleru izlistaj sve single choice objekte
    public List<SingleChoice> getAllSingleChoice() {
        return singleChoiceRepository.findAll();
    }

    // za GET metodu u kontroleru izlistaj sve single choice objekte po oblasti
    public List<SingleChoice> getAllSingleChoicePoOblasti(Integer oblastId) {
        return singleChoiceRepository.findByOblastId(oblastId);
    }

    // za GET metodu, prikazi single choice pitanje po ID
    public SingleChoice getSingleChoiceById(Integer id) {
        return singleChoiceRepository.findById(id).orElse(null);
    }

    //za POST metodu u kontroleru dodaj novo single choice pitanje
    public void addNewSingleChoice(SingleChoice singleChoice) {
        if(singleChoice.getTekstPitanja()==null || singleChoice.getSlika()==null || singleChoice.getTacanOdgovor()==null || singleChoice.getOdgovor3()==null || singleChoice.getOdgovor3()==null || singleChoice.getOdgovor4()==null || singleChoice.getOdgovor4()==null
                || singleChoice.getMode()==null || singleChoice.getOblast().getId()==null){
            throw new IllegalStateException("Sva polja tabele SingleChoice moraju biti popunjena-(ne mogu imati vrijednost null)");
        }
        List<SingleChoice> lista=singleChoiceRepository.findAll();
        boolean provjera=false;
        for(int i=0;i< lista.size();i++){
            if(singleChoice.getTekstPitanja().equals(lista.get(i).getTekstPitanja()) && singleChoice.getSlika().equals(lista.get(i).getSlika()) && singleChoice.getOdgovor1().equals(lista.get(i).getOdgovor1()) &&
                    singleChoice.getOdgovor2().equals(lista.get(i).getOdgovor2()) && singleChoice.getOdgovor3().equals(lista.get(i).getOdgovor3()) && singleChoice.getOdgovor4().equals(lista.get(i).getOdgovor4()) &&
                    singleChoice.getTacanOdgovor().equals(lista.get(i).getTacanOdgovor())) {
                provjera=true;
                break;
            }
        }
        if(provjera)
            throw new IllegalStateException("Pitanja ne smiju biti ista");
        singleChoiceRepository.save(singleChoice);
    }

    //za PUT metodu u kontroleru update single choice pitanje koristeći id
    public SingleChoice updateSingleChoice(Integer id, SingleChoice singleChoice) {

        if (singleChoiceRepository.existsById(id)) {
            singleChoice.setId(id);
            return singleChoiceRepository.save(singleChoice);
        }
        return null;
    }

    //za DELETE metodu u kontroleru obriši single choice pitanje po id
    public void deleteSingleChoiceById(Integer id) {
        singleChoiceRepository.deleteById(id);
    }

    // za DELETE metodu, obriši sva single choice pitanja po ID oblasti
    public void deleteOblastAllById(Integer oblastId) {
        List<SingleChoice> choices = getAllSingleChoicePoOblasti(oblastId);
        for (SingleChoice choice : choices) {
            deleteSingleChoiceById(choice.getId());
        }
    }

    public List<SingleChoice> pronadji_mode(Integer mode) {
        return singleChoiceRepository.findByMode(mode);
    }

    public List<SingleChoice> pronadji_oblast_mode(Integer oblastId, Integer mode) {
        return singleChoiceRepository.findByOblastIdAndMode(oblastId,mode);
    }
}
