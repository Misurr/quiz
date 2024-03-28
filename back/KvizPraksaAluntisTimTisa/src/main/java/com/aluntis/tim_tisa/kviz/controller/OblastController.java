package com.aluntis.tim_tisa.kviz.controller;
import java.util.List;
import org.apache.el.util.Validation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity.*;
import com.aluntis.tim_tisa.kviz.entity.Oblast;
import com.aluntis.tim_tisa.kviz.service.OblastService;
@RestController
@RequestMapping(path="/api")
public class OblastController {
	@Autowired
	OblastService oblastService;
	// GET zahtjev
	@GetMapping(path="/oblasti")
	public List<Oblast> sveOblasti() {
		return oblastService.getOblasti();
	}
	//Pretraga studenata po id-iu
	@GetMapping(path="/oblasti/{id}")
	public Oblast pretraga_Oblasti(@PathVariable ("id") Integer id){
		return oblastService.pretraga_ID(id);
	}
	//POST zahtjev
    @PostMapping(path="/oblasti/add")
	public Oblast dodavanje_Oblasti(@RequestBody Oblast oblast){
		return oblastService.dodaj(oblast);
    }
	//DELETE zahtjev
	@DeleteMapping(path="oblasti/delete/{id}")
	@ResponseBody
	public ResponseEntity<String> brisanje_Oblasti(@PathVariable Integer id) {
		return oblastService.brisanje(id);
	}
	//PUT zahtjev
    @PutMapping(path="/oblasti/update/{id}")
	public Oblast azuriranje_Oblasti(@PathVariable ("id") Integer id,@RequestBody Oblast oblast){
		return oblastService.azuriranje(id,oblast);
	}
}


