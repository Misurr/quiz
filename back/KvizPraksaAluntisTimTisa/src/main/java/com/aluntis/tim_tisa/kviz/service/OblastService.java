package com.aluntis.tim_tisa.kviz.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.aluntis.tim_tisa.kviz.entity.Oblast;
import com.aluntis.tim_tisa.kviz.repository.OblastRepository;
@Service
public class OblastService {
	@Autowired
	OblastRepository oblastRepository;
	//Vracanje svih oblasti (metoda za GET zahtjev)
	public List<Oblast> getOblasti(){
		return oblastRepository.findAll();
	}
	//Pretrazivanje oblasti po id-iju
	public Oblast pretraga_ID(Integer id){
		Oblast oblast=oblastRepository.findById(id).orElseThrow(()->new IllegalStateException("Ne postoji oblast sa tim id-iom"));
		return oblast;
	}
	//Dodavanje oblasti (metoda za POST zahtjev)
	public Oblast dodaj(Oblast oblast) {
		if(oblast.getNaziv()==null || oblast.getAktivno()==null || oblast.getSlika()==null){
			throw new IllegalStateException("Polja naziv i aktivno ne mogu biti null");
		}
		return oblastRepository.save(oblast);
	}
	//Brisanje oblaasti i vracanje statusa da li je student uspjesno obrisan ili ne (metoda za DELET zahtjev)
	public ResponseEntity<String> brisanje(Integer id) {
		if (oblastRepository.existsById(id)) {
			oblastRepository.delete(oblastRepository.findById(id).get());
			return ResponseEntity.ok("Oblast je obrisana");
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Oblast nije pronadjena");
		}
	}
    //Azuriranje oblasti i provjera da li su neki parametara pravilno uneseni(polje naziv i aktivno ne smiju biti null)-(metoda za PUT zahtjev)
	public Oblast azuriranje(Integer id, Oblast oblast) {
		Oblast oblastById = oblastRepository.findById(id).get();
		if(oblast.getNaziv()!=null){
		oblastById.setNaziv(oblast.getNaziv());}
		else{
			throw new IllegalStateException("Polje naziv ne moze biti null");
		}
		if(oblast.getAktivno()!=null){
		oblastById.setAktivno(oblast.getAktivno());}
		else{
			throw new IllegalStateException("Polje aktivno ne moze biti null");
		}
		if(oblast.getSlika()!=null){
			oblastById.setSlika(oblast.getSlika());}
		else{
			throw new IllegalStateException("Polje slika ne moze biti null");
		}
		oblastById.setOpis(oblast.getOpis());
		return oblastRepository.save(oblastById);
	}
}

