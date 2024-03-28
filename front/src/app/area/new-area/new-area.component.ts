import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AreaServiceService } from '../area-service.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-new-area',
  templateUrl: './new-area.component.html',
  styleUrls: ['./new-area.component.css'],
  encapsulation: ViewEncapsulation.None // Add this line
})
export class NewAreaComponent {
  areaForm: FormGroup;
  imageUrl: string = '';

  constructor(private areaService: AreaServiceService,private router: Router) { 
    this.areaForm = new FormGroup({
      naziv: new FormControl('', Validators.required),
      opis: new FormControl('', Validators.required),
      aktivno: new FormControl(false, Validators.required),
      slika: new FormControl('')
    });
  }


  //Logika za slanje forme i kreiranje nove oblasti ide u ovu metodu, koristiti metodu iz servisa newArea()
  onSubmit() {
    if (this.areaForm.valid) {
      const newAreaData = this.areaForm.value;
      newAreaData.aktivno = newAreaData.aktivno ? 1 : 0;

      console.log('Form Data:', newAreaData);

      this.areaService.newArea(newAreaData).subscribe(
        (response) => {
          console.log('Area successfully created:', response);
          this.router.navigate(['/oblast']);
        },
        (error) => {
          console.error('Error creating area:', error);
        }
      );
    }
  }
}
