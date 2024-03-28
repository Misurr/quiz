import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AreaServiceService } from '../../area/area-service.service';
import { Router } from '@angular/router';
import { SingleChoiceQuestionsServiceService } from '../single-choice-questions-service.service';
import { Area } from '../../area/area.model';

@Component({
  selector: 'app-new-single-choice-questions',
  templateUrl: './new-single-choice-questions.component.html',
  styleUrls: ['./new-single-choice-questions.component.css'],
})
export class NewSingleChoiceQuestionsComponent implements OnInit {
  
  singleChoiceForm: FormGroup;
  imageUrl: string = '';
  options: Area[] = [];
  area_id: any;

  constructor(
    private router: Router,
    private areaService: AreaServiceService,
    private singleChoiceService: SingleChoiceQuestionsServiceService
  ) {
    this.singleChoiceForm = new FormGroup({
      tekstPitanja: new FormControl('', Validators.required),
      slika: new FormControl(''),
      areaId: new FormControl(0, Validators.required),
      odgovor1: new FormControl('', Validators.required),
      odgovor2: new FormControl('', Validators.required),
      odgovor3: new FormControl('', Validators.required),
      odgovor4: new FormControl('', Validators.required),
      tacanOdgovor: new FormControl('', Validators.required),
      mode: new FormControl('', Validators.required),
    });
  }
  
  async ngOnInit(): Promise<void> {
    this.options = await this.areaService.getAreas();
  }

  async onSubmit() {
    this.singleChoiceForm.controls['areaId'].setValue(
      parseInt(this.singleChoiceForm.value.areaId, 10)
    );
    this.singleChoiceForm.controls['tacanOdgovor'].setValue(
      parseInt(this.singleChoiceForm.value.tacanOdgovor, 10)
    ); // TODO: pokusati na drugi nacin
    this.singleChoiceForm.controls['mode'].setValue(
      parseInt(this.singleChoiceForm.value.mode, 10)
    );
    console.log(this.singleChoiceForm.value);

    await this.singleChoiceService
      .newSingleChoice(this.singleChoiceForm.value)
      .catch((err) => {
        console.error(err);
      });

    await this.router.navigateByUrl('/single-choice');
  }
}
