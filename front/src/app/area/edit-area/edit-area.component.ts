import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AreaServiceService } from '../area-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from '../area.model';

@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.css']
})
export class EditAreaComponent implements OnInit{
  areaFormEdit: FormGroup;
  areaDataFake!: Area; 
  id: any;

  constructor(private route: ActivatedRoute, private areaService: AreaServiceService, private router: Router) {
    this.areaFormEdit = new FormGroup({
      id: new FormControl('', Validators.required), // Add an id field to your form
      naziv: new FormControl('', Validators.required),
     opis: new FormControl('', Validators.required),
     aktivno: new FormControl(false, Validators.required)
    });
  }

  ngOnInit() {
    // Dohvatimo id
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam !== null) {
      this.id = +idParam;
      // Dohvatiti podatke za ovu formu iz servisa
      this.loadAreaData();
    } else {
      // Handle the case where idParam is null (e.g., redirect, show an error, etc.)
      console.error('ID parameter is null.');
    }
  }
  loadAreaData() {
    const editAreaData = this.areaFormEdit.value;
    editAreaData.active = editAreaData.active ? 1 : 0;
    this.areaService.editArea(this.id, editAreaData).subscribe(
      (areaData) => {
        if (areaData !== null) {  // Check if areaData is not null
          this.areaDataFake = areaData;
          // Popunite formu
          this.populateForm();
        } else {
          console.error('Area data is null.');
          // Handle the case where areaData is null (e.g., redirect, show an error, etc.)
        }
      },
      (error) => {
        console.error('Error fetching area data:', error);
      }
    );
  }
  

  // Popunjavanje forme vrijednostima
  populateForm() {
    const editAreaData = this.areaFormEdit.value;
      editAreaData.active = editAreaData.active ? 1 : 0;
    this.areaService.editArea(this.id, editAreaData).subscribe(
      (areaData) => {
        this.areaDataFake = areaData;
        this.areaFormEdit.patchValue({
          id: this.areaDataFake.id,
          naziv: this.areaDataFake.title,
          opis: this.areaDataFake.caption,
          active: this.areaDataFake.active,
        });
      },
      (error) => {
        console.error('Error fetching area data:', error);
      }
    );
  }

  // Logika za slanje forme i edit oblasti ide u ovoj metodi, koristiti metodu iz servisa editArea()
  onSubmit() {
    if (this.areaFormEdit.valid) {
      const editAreaData = this.areaFormEdit.value;
      editAreaData.active = editAreaData.active ? 1 : 0;
  
      console.log('Form Data:', editAreaData);
  
      this.areaService.editArea(this.id, editAreaData).subscribe(
        (response) => {
          console.log('Area successfully edited:', response);
          this.router.navigate(['/oblast']);
        },
        (error) => {
          console.error('Error editing area:', error);
        }
      );
    }
  }
}