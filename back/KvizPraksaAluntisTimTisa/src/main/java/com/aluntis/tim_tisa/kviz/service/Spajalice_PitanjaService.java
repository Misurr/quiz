package com.aluntis.tim_tisa.kviz.service;
import java.util.List;
import com.aluntis.tim_tisa.kviz.entity.Oblast;
import com.aluntis.tim_tisa.kviz.entity.Spajalica_Pitanja;
import com.aluntis.tim_tisa.kviz.repository.Spajalice_PitanjaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.aluntis.tim_tisa.kviz.repository.OblastRepository;
import org.springframework.transaction.annotation.Transactional;
@Service
public class Spajalice_PitanjaService {
    @Autowired
    Spajalice_PitanjaRepository spajalicePitanjaRepository;
    //Vracanje svih spajalica
    public List<Spajalica_Pitanja> getSpajalice() {
         return spajalicePitanjaRepository.findAll();
    }
    //Pretrazivanje spajalica po id-u oblasti
    public List<Spajalica_Pitanja> pronadji(Integer oblastId) {
        return spajalicePitanjaRepository.findByOblastId(oblastId);
    }
    //Pretrazivanje spajalica po id-u spajalice
    public Spajalica_Pitanja getSpajalicabyId(Integer oblastId, Integer id) {
        Spajalica_Pitanja spajalicaPitanja =spajalicePitanjaRepository.findByOblastIdAndId(oblastId,id);
        return spajalicaPitanja;
        }
    //Brisanje svih spajalica u jednoj oblasti
    @Transactional
    public ResponseEntity<String> brisanje(Integer oblastId) {
         List<Spajalica_Pitanja> spajalice= spajalicePitanjaRepository.findByOblastId(oblastId);
         if(!spajalice.isEmpty()){
             spajalicePitanjaRepository.deleteByOblastId(oblastId);
             return ResponseEntity.ok("Spajalica je uspjesno obrisana");
         }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nema spajalica za brisanje u ovoj oblasti");
    }
    //Metoda za brisanje tacno odredjene spajalice u jednoj oblasti
    @Transactional
    public ResponseEntity<String> brisanje_id(Integer oblastId, Integer id) {
        Spajalica_Pitanja spajalica= spajalicePitanjaRepository.findByOblastIdAndId(oblastId,id);
        if(spajalica!=null){
        spajalicePitanjaRepository.deleteByOblastIdAndId(oblastId,id);
        return ResponseEntity.ok("Spajalica je uspjesno obrisana");}
        else{
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Spajalica koja se zeli obrisati nije pronadjena");
        }
    }
   //Metoda za dodavanje spajalice u oblast
    public void dodavanja(Spajalica_Pitanja spajalicaPitanja) {
        List<Spajalica_Pitanja> lista=spajalicePitanjaRepository.findAll();
        boolean provjera=false;
        if(spajalicaPitanja.getTekstPitanja()==null || spajalicaPitanja.getSpojkaDesna1()==null || spajalicaPitanja.getSpojkaDesna2()==null ||
        spajalicaPitanja.getSpojkaDesna3()==null || spajalicaPitanja.getSpojkaDesna4()==null || spajalicaPitanja.getSpojkaDesna5()==null ||
        spajalicaPitanja.getSpojkaLijeva1()==null || spajalicaPitanja.getSpojkaLijeva2()==null ||
        spajalicaPitanja.getSpojkaLijeva3()==null || spajalicaPitanja.getSpojkaLijeva4()==null || spajalicaPitanja.getSpojkaLijeva5()==null || spajalicaPitanja.getOblast().getId()==null){
            throw new IllegalStateException("Sva polja tabele Spajalica_Pitanja moraju biti popunjena-(ne mogu imati vrijednost null)");
        }
        //Da se pitanja ne ponavljaju
        for(int i=0;i< lista.size();i++){
            if(spajalicaPitanja.getSpojkaLijeva1().equals(lista.get(i).getSpojkaLijeva1()) && spajalicaPitanja.getSpojkaLijeva2().equals(lista.get(i).getSpojkaLijeva2()) && spajalicaPitanja.getSpojkaLijeva3().equals(lista.get(i).getSpojkaLijeva3()) &&
                    spajalicaPitanja.getSpojkaLijeva4().equals(lista.get(i).getSpojkaLijeva4()) && spajalicaPitanja.getSpojkaLijeva5().equals(lista.get(i).getSpojkaLijeva5()) && spajalicaPitanja.getSpojkaDesna1().equals(lista.get(i).getSpojkaDesna1()) &&
                    spajalicaPitanja.getSpojkaDesna2().equals(lista.get(i).getSpojkaDesna2()) && spajalicaPitanja.getSpojkaDesna3().equals(lista.get(i).getSpojkaDesna3()) && spajalicaPitanja.getSpojkaDesna4().equals(lista.get(i).getSpojkaDesna4()) &&
                    spajalicaPitanja.getSpojkaDesna5().equals(lista.get(i).getSpojkaDesna5()) && spajalicaPitanja.getTekstPitanja().equals(lista.get(i).getTekstPitanja())) {
                provjera=true;
                break;
            }
        }
        if(provjera)
            throw new IllegalStateException("Pitanja ne smiju biti ista");
        spajalicePitanjaRepository.save(spajalicaPitanja);
}
   //Metoda za azuriranje odnosno mjenjanje pojedinih polja spajalice
    public ResponseEntity<String> azuriranje(Integer id, Integer oblastId,Spajalica_Pitanja spajalicaPitanja) {
            Spajalica_Pitanja spajalicaPitanja1 = getSpajalicabyId(oblastId,id);
            if(spajalicaPitanja1!=null){
            spajalicaPitanja1.setTekstPitanja(spajalicaPitanja.getTekstPitanja());
            spajalicaPitanja1.setSpojkaLijeva1(spajalicaPitanja.getSpojkaLijeva1());
            spajalicaPitanja1.setSpojkaLijeva2(spajalicaPitanja.getSpojkaLijeva2());
            spajalicaPitanja1.setSpojkaLijeva3(spajalicaPitanja.getSpojkaLijeva3());
            spajalicaPitanja1.setSpojkaLijeva4(spajalicaPitanja.getSpojkaLijeva4());
            spajalicaPitanja1.setSpojkaLijeva5(spajalicaPitanja.getSpojkaLijeva5());
            spajalicaPitanja1.setSpojkaDesna1(spajalicaPitanja.getSpojkaDesna1());
            spajalicaPitanja1.setSpojkaDesna2(spajalicaPitanja.getSpojkaDesna2());
            spajalicaPitanja1.setSpojkaDesna3(spajalicaPitanja.getSpojkaDesna3());
            spajalicaPitanja1.setSpojkaDesna4(spajalicaPitanja.getSpojkaDesna4());
            spajalicaPitanja1.setSpojkaDesna5(spajalicaPitanja.getSpojkaDesna5());
            spajalicePitanjaRepository.save(spajalicaPitanja1);
            return ResponseEntity.ok("Spajalica je uspjesno azurirano");

    }else
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Spajalica nije pronadjena");
}

    public List<Spajalica_Pitanja> pronadji_mode(Integer mode) {
        return spajalicePitanjaRepository.findByMode(mode);
    }

    public List<Spajalica_Pitanja> pronadji_oblast_mode(Integer oblastId, Integer mode) {
        return spajalicePitanjaRepository.findByOblastIdAndMode(oblastId,mode);
    }
}

