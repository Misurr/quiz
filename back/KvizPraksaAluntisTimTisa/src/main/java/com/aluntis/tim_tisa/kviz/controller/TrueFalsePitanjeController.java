package com.aluntis.tim_tisa.kviz.controller;

import java.util.List;

import com.aluntis.tim_tisa.kviz.entity.Spajalica_Pitanja;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aluntis.tim_tisa.kviz.entity.TrueFalsePitanje;
import com.aluntis.tim_tisa.kviz.service.TrueFalsePitanjeService;

@RestController
@RequestMapping("/api/oblasti")
public class TrueFalsePitanjeController {
	@Autowired
	TrueFalsePitanjeService trueFalsePitanjeService;
	@Autowired
    private TrueFalsePitanjeService serviceObject;
	
	//za GET zahtjev
	@GetMapping("/true-false-pitanja/get-all")
	public List<TrueFalsePitanje> svaTrueFalsePitanja() {
		return trueFalsePitanjeService.getTrueFalsePitanja();
	}
	
	@PostMapping("/true-false-pitanja/add")
    public String add(@RequestBody TrueFalsePitanje trueFalsePitanje){
        trueFalsePitanjeService.add(trueFalsePitanje);
        return "Uspjesno dodano pitanje";
    }
	 @DeleteMapping("/true-false-pitanja/delete/{id}")
	    public boolean delete(@PathVariable Integer id){
	        trueFalsePitanjeService.delete(id);
	        return true;
	    }
	 
	 @PutMapping("/true-false-pitanja/update/{id}")
	    public TrueFalsePitanje update(@PathVariable Integer id, @RequestBody TrueFalsePitanje trueFalsePitanje){
	        
	      return trueFalsePitanjeService.update(id, trueFalsePitanje);
	    }
	 
	 @GetMapping("/true-false-pitanja/get-by-oblast/{id}")
	 public ResponseEntity<List<TrueFalsePitanje>> getPitanjeByOblastId(@PathVariable("id") Integer oblastId){
	        List<TrueFalsePitanje> trueFalsePitanjeList = serviceObject.getPitanjeByOblastId(oblastId);
	        if(trueFalsePitanjeList.isEmpty()){
	            throw new IllegalStateException("Ne postoje true/false pitanja u ovoj oblasti!");
	        }
	        return new ResponseEntity<>(trueFalsePitanjeList, HttpStatus.OK);
	    }
	 
	  @GetMapping("/true-false-pitanja/get-by-id/{id}")
	    public ResponseEntity<TrueFalsePitanje> getPitanjeById(@PathVariable("id") Integer id){
	        TrueFalsePitanje trueFalsePitanje = serviceObject.getPitanjeById(id);
	        if(trueFalsePitanje == null)
	            throw new IllegalStateException("Ne postoji true/false pitanje ciji je id: " + id);
	        return new ResponseEntity<>(trueFalsePitanje, HttpStatus.OK);
	    }
	  
	  @DeleteMapping("/true-false-pitanje/delete-oblast-all/{id}")
	    public ResponseEntity<String> deleteOblastAll(@PathVariable("id") int oblastId){
	        return serviceObject.deleteOblastAllById(oblastId);
	    }
	//GET zahtjev za vracanje svih trueFalse pitanja na osnovu tezine(Moda)
	@GetMapping(path="/trueFalse/get-by-mode/{mode}")
	public List<TrueFalsePitanje> Pretraga_Mode(@PathVariable Integer mode) {
		if(mode>3){
			throw new IllegalStateException("Maksimalna tezina trueFalse pitanja je 3");
		}
		List<TrueFalsePitanje> trueFalse = trueFalsePitanjeService.pronadji_mode(mode);
		if(trueFalse.isEmpty()){
			throw new IllegalStateException("Ne postoje trueFalse pitanja koja imaju mode:"+mode);}
		return trueFalse;
	}
	//GET zahtjev za vracanje svih trueFalse pitanja po odredjenoj oblasti i modu
	@GetMapping(path="/trueFalse/get-by-oblast-mode/{oblastId}/{mode}")
	public  List<TrueFalsePitanje> Pretraga_Oblast_Mode(@PathVariable Integer oblastId,@PathVariable Integer mode){
		if(mode>3){
			throw new IllegalStateException("Maksimalna tezina trueFalse pitanja je 3");
		}
		List<TrueFalsePitanje> trueFalse =trueFalsePitanjeService.pronadji_oblast_mode(oblastId,mode);
		if(trueFalse.isEmpty()){
			throw new IllegalStateException("Ne postoje trueFalse pitanja sa id-iom oblasti: "+oblastId+" i tezinom: "+mode);}
		return trueFalse;
	}

	

}

