package com.aluntis.tim_tisa.kviz.controller;

import com.aluntis.tim_tisa.kviz.entity.MultipleChoicePitanje;
import com.aluntis.tim_tisa.kviz.entity.Spajalica_Pitanja;
import com.aluntis.tim_tisa.kviz.repository.MultipleChoiceRepository;
import com.aluntis.tim_tisa.kviz.service.MultipleChoiceService;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/oblasti")
public class MultipleChoiceController {

    @Autowired
    MultipleChoiceRepository multipleChoiceRepository;
    @Autowired
    private MultipleChoiceService serviceObject;

    // Endpoint za dodavanje novog pitanja sa vise mogucih odgovora
    @PostMapping("/multiple-choice-pitanje/add")
    public MultipleChoicePitanje addPitanje(@RequestBody MultipleChoicePitanje body){
        return serviceObject.addPitanje(body);
    }

    // Endpoint za azuriranje postojeceg pitanja sa vise mogucih odgovora
    @PutMapping("/multiple-choice-pitanje/update/{id}")
    public ResponseEntity updatePitanje(@PathVariable("id") int id, @RequestBody MultipleChoicePitanje body){
        return serviceObject.updatePitanje(id, body);
    }

    // Endpoint za prikaz svih pitanja sa vise mogucih odgovora
    @GetMapping("/multiple-choice-pitanje/get-all")
    public List<MultipleChoicePitanje> getAllPitanja(){
        return serviceObject.getAllMultipleChoicePitanje();
    }

    // Endpoint za prikaz svih pitanja sa vise mogucih odgovora po ID oblasti
    @GetMapping("/multiple-choice-pitanje/get-by-oblast/{id}")
    public ResponseEntity<List<MultipleChoicePitanje>> getPitanjeByOblastId(@PathVariable("id") Integer oblastId){
        List<MultipleChoicePitanje> multipleChoicePitanjeList = serviceObject.getPitanjeByOblastId(oblastId);
        if(multipleChoicePitanjeList.isEmpty()){
            throw new IllegalStateException("Ne postoje pitanja sa vise tacnih odgovora u ovoj oblasti!");
        }
        return new ResponseEntity<>(multipleChoicePitanjeList, HttpStatus.OK);
    }

    // Endpoint za prikaz pitanja sa vise mogucih odgovora po ID pitanja
    @GetMapping("/multiple-choice-pitanje/get-by-id/{id}")
    public ResponseEntity<MultipleChoicePitanje> getPitanjeById(@PathVariable("id") Integer id){
        MultipleChoicePitanje multipleChoicePitanje = serviceObject.getPitanjeById(id);
        if(multipleChoicePitanje == null)
            throw new IllegalStateException("Ne postoji pitanje sa vise tacnih odgovora ciji je id: " + id);
        return new ResponseEntity<>(multipleChoicePitanje, HttpStatus.OK);
    }

    // Endpoint za brisanje pitanja sa vise mogucih odgovora po ID pitanja
    @DeleteMapping("/multiple-choice-pitanje/delete/{id}")
    public String deletePitanje(@PathVariable("id") int pitanjeId){
        return serviceObject.deletePitanjeById(pitanjeId);
    }

    @DeleteMapping("/multiple-choice-pitanje/delete-oblast-all/{id}")
    public ResponseEntity<String> deleteOblastAll(@PathVariable("id") int oblastId){
        return serviceObject.deleteOblastAllById(oblastId);
    }
    //GET zahtjev za vracanje svih multipleChoice pitanja na osnovu tezine(Moda)
    @GetMapping(path="/multipleChoice/get-by-mode/{mode}")
    public List<MultipleChoicePitanje> Pretraga_Mode(@PathVariable Integer mode) {
        if(mode>3){
            throw new IllegalStateException("Maksimalna tezina multipleChoice pitanja je 3");
        }
        List<MultipleChoicePitanje> multipleChoice =serviceObject.pronadji_mode(mode);
        if(multipleChoice.isEmpty()){
            throw new IllegalStateException("Ne postoje multipleChoice pitanja koje imaju mode:"+mode);}
        return multipleChoice;
    }
    //GET zahtjev za vracanje svih multipleChoice pitanja po odredjenoj oblasti i modu
    @GetMapping(path="/multipleChoice/get-by-oblast-mode/{oblastId}/{mode}")
    public  List<MultipleChoicePitanje> Pretraga_Oblast_Mode(@PathVariable Integer oblastId,@PathVariable Integer mode){
        if(mode>3){
            throw new IllegalStateException("Maksimalna tezina multipleChoice pitanja je 3");
        }
        List<MultipleChoicePitanje> multipleChoice = serviceObject.pronadji_oblast_mode(oblastId,mode);
        if(multipleChoice.isEmpty()){
            throw new IllegalStateException("Ne postoje multipleChoice pitanje sa id-iom oblasti: "+oblastId+" i tezinom: "+mode);}
        return multipleChoice;
    }
}
