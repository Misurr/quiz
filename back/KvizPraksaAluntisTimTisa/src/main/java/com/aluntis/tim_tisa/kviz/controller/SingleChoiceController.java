package com.aluntis.tim_tisa.kviz.controller;

import java.util.List;

import com.aluntis.tim_tisa.kviz.entity.Spajalica_Pitanja;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.aluntis.tim_tisa.kviz.entity.SingleChoice;
import com.aluntis.tim_tisa.kviz.service.SingleChoiceService;

@RestController
@RequestMapping("/api/oblasti/single-choice-pitanje")
public class SingleChoiceController {
	@Autowired
    SingleChoiceService singleChoiceService;


    // GET metod, izlistaj sva single choice pitanja
	@GetMapping("/get-all")
    public List<SingleChoice> getAllSingleChoicesUser() {
        return singleChoiceService.getAllSingleChoice();
    }

    // GET metod, izlistaj sva single choice pitanja po oblasti
    @GetMapping("/get-by-oblast/{oblastId}")
    public ResponseEntity<List<SingleChoice>> getAllSingleChoicesPoOblastiUser(@PathVariable Integer oblastId) {
        List<SingleChoice> choices = singleChoiceService.getAllSingleChoicePoOblasti(oblastId);
        if (choices.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(choices, HttpStatus.OK);
        }
    }

    // GET metod, prikazi single choice pitanje po ID
    @GetMapping("/get-by-id/{id}")
    public ResponseEntity<SingleChoice> getSingleChoiceById(@PathVariable Integer id) {
        SingleChoice choice = singleChoiceService.getSingleChoiceById(id);
        if (choice == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(choice, HttpStatus.OK);
        }
    }

	//POST metoda za admin, dodaj novo single choice pitanja
    @PostMapping("/add")
    public ResponseEntity<String> addNewSingleChoice(@RequestBody SingleChoice singleChoice) {
        try {
            singleChoiceService.addNewSingleChoice(singleChoice);
            return new ResponseEntity<>("Uspješno ste dodali novo Single Choice pitanje.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Greška prilikom dodavanja pitanja: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // PUT metoda, izmjeni single choice pitanje
    @PutMapping("/update/{id}")
    public ResponseEntity<SingleChoice> updateSingleChoice(@PathVariable Integer id, @RequestBody SingleChoice singleChoice) {
        try {
            SingleChoice updatedChoice = singleChoiceService.updateSingleChoice(id, singleChoice);
            return new ResponseEntity<>(updatedChoice, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // DELETE metoda, obriši single choice pitanje
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteSingleChoiceById(@PathVariable Integer id) {
        try {
            singleChoiceService.deleteSingleChoiceById(id);
            return new ResponseEntity<>("Single Choice pitanje " + id + " obrisano.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Pitanje sa ID-om " + id + " nije pronađeno.", HttpStatus.NOT_FOUND);
        }
    }

    // DELETE metoda, obriši sva single choice pitanja po ID oblasti
    @DeleteMapping("/delete-oblast-all/{oblastId}")
    public ResponseEntity<String> deleteOblastAll(@PathVariable Integer oblastId) {
        try {
            singleChoiceService.deleteOblastAllById(oblastId);
            return new ResponseEntity<>("Sva Single Choice pitanja za oblast " + oblastId + " obrisana.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Greška prilikom brisanja pitanja za oblast: " + e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
    //GET zahtjev za vracanje svih singleChoice pitanja na osnovu tezine(Moda)
    @GetMapping(path="/singleChoice/get-by-mode/{mode}")
    public List<SingleChoice> Pretraga_Mode(@PathVariable Integer mode) {
        if(mode>3){
            throw new IllegalStateException("Maksimalna tezina singleChoice pitanja je 3");
        }
        List<SingleChoice> singleChoice =singleChoiceService.pronadji_mode(mode);
        if(singleChoice.isEmpty()){
            throw new IllegalStateException("Ne postoje singleChoice pitanja koja imaju mode:"+mode);}
        return singleChoice;
    }
    //GET zahtjev za vracanje svih singleChoice pitanja po odredjenoj oblasti i modu
    @GetMapping(path="/singleChoice/get-by-oblast-mode/{oblastId}/{mode}")
    public  List<SingleChoice> Pretraga_Oblast_Mode(@PathVariable Integer oblastId,@PathVariable Integer mode){
        if(mode>3){
            throw new IllegalStateException("Maksimalna tezina singleChoice pitanja je 3");
        }
        List<SingleChoice> singleChoice = singleChoiceService.pronadji_oblast_mode(oblastId,mode);
        if(singleChoice.isEmpty()){
            throw new IllegalStateException("Ne postoje singleChoice sa id-iom oblasti: "+oblastId+" i tezinom: "+mode);}
        return singleChoice;
    }
}
