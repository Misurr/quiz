package com.aluntis.tim_tisa.kviz.controller;
import java.util.List;
import com.aluntis.tim_tisa.kviz.entity.Oblast;
import com.aluntis.tim_tisa.kviz.service.Spajalice_PitanjaService;
import org.apache.el.util.Validation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity.*;
import com.aluntis.tim_tisa.kviz.entity.Spajalica_Pitanja;

@RestController
@RequestMapping(path="/api/oblasti")
public class Spajalice_PitanjaController {
    @Autowired
    Spajalice_PitanjaService spajalicePitanjaService;
    //GET zahtjev
    @GetMapping(path="/spajalice/get-all")
    public List<Spajalica_Pitanja> Sve_Spojnice() {
        return spajalicePitanjaService.getSpajalice();
    }
    //GET zahtjev za ispisivanje svih spajalica na osnovu id-a oblasti

   @GetMapping("/spajalice/get-by-oblast/{oblastId}")
   public ResponseEntity<List<Spajalica_Pitanja>> Pretraga_Spojnica(@PathVariable Integer oblastId) {
       List<Spajalica_Pitanja> spajalice = spajalicePitanjaService.pronadji(oblastId);
       if(spajalice.isEmpty()){
           throw new IllegalStateException("Ne postoje spajalice koje imaju id oblasti:"+oblastId);}
       return new ResponseEntity<>(spajalice, HttpStatus.OK);
   }
   //GET zahtjev za ispisivanje spajalice za tacno odredjenu oblast i sa tacno odredjenim id-iom spajalice

   @GetMapping(path="/spajalice/get-by-id/{oblastId}/{id}")
    public ResponseEntity<Spajalica_Pitanja> Pretraga_Spojnica_Id(@PathVariable Integer oblastId,@PathVariable Integer id){
        Spajalica_Pitanja spajalicaPitanja = spajalicePitanjaService.getSpajalicabyId(oblastId,id);
        if(spajalicaPitanja==null){
        throw new IllegalStateException("Ne postoji spajalica koja ima id "+id+ " u obasti sa id-iom "+oblastId);}
        return new ResponseEntity<>(spajalicaPitanja,HttpStatus.OK);
   }
   //DELETE zahtjev za brisanje svih spajalica za uneseni id oblasti
   @DeleteMapping(path="/spajalice/delete-oblast-all/{oblastId}")
    public ResponseEntity<String> Brisanje_Spojnice(@PathVariable Integer oblastId){
        return spajalicePitanjaService.brisanje(oblastId);
   }
   //DELETE zahtjev za brisanje spajalice unutar oblasti za uneseni id spajalice
    @DeleteMapping(path=("/spajalice/delete/{oblastId}/{id}"))
    public ResponseEntity<String> Brisanje_Spojnice_Id(@PathVariable Integer oblastId,@PathVariable Integer id){
        return spajalicePitanjaService.brisanje_id(oblastId,id);
    }
    //POST zahtjev (dodavanje spajalice za odredjenu oblast)

    @PostMapping(path="/spajalice/add")
    public String Dodavanje_Spojnice(@RequestBody Spajalica_Pitanja spajalicaPitanja){
        spajalicePitanjaService.dodavanja(spajalicaPitanja);
        return "Uspjesno ste dodali spajalicu";
    }
    //PUT zahtjev (azuriranje spajalica-promjena vrijednosti odredjenih polja spajalice)

    @PutMapping(path="spajalice/update/{oblastId}/{id}")
    public ResponseEntity<String> Azuriranje_Spojnice(@PathVariable Integer id,@PathVariable Integer oblastId, @RequestBody Spajalica_Pitanja spajalicaPitanja){
        return spajalicePitanjaService.azuriranje(id,oblastId,spajalicaPitanja);
    }
    //GET zahtjev za vracanje svih spajalica na osnovu tezine(Moda)
    @GetMapping(path="/spajalice/get-by-mode/{mode}")
    public List<Spajalica_Pitanja> Pretraga_Mode(@PathVariable Integer mode) {
        if(mode>3){
            throw new IllegalStateException("Maksimalna tezina spajalice je 3");
        }
        List<Spajalica_Pitanja> spajalice = spajalicePitanjaService.pronadji_mode(mode);
        if(spajalice.isEmpty()){
            throw new IllegalStateException("Ne postoje spajalice koje imaju mode:"+mode);}
        return spajalice;
    }
    //GET zahtjev za vracanje svih pitanja po odredjenoj oblasti i modu
    @GetMapping(path="/spajalice/get-by-oblast-mode/{oblastId}/{mode}")
    public  List<Spajalica_Pitanja> Pretraga_Oblast_Mode(@PathVariable Integer oblastId,@PathVariable Integer mode){
        if(mode>3){
            throw new IllegalStateException("Maksimalna tezina spajalice je 3");
        }
        List<Spajalica_Pitanja> spajalice = spajalicePitanjaService.pronadji_oblast_mode(oblastId,mode);
        if(spajalice.isEmpty()){
            throw new IllegalStateException("Ne postoje spajalice sa id-iom oblasti: "+oblastId+" i tezinom: "+mode);}
        return spajalice;
    }



}
