import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SingleChoiceQuestionsServiceService } from '../single-choice-questions-service.service';
import { Router } from '@angular/router';
import { AreaServiceService } from '../../area/area-service.service';
import { Area } from '../../area/area.model';

@Component({
  selector: 'app-edit-single-choice-questions',
  templateUrl: './edit-single-choice-questions.component.html',
  styleUrls: ['./edit-single-choice-questions.component.css'],
})
export class EditSingleChoiceQuestionsComponent implements OnInit {
  singleChoiceFormEdit: FormGroup;
  singleChoiceQuestion: any; //nije dobra praksa stavljati any!!!!!!
  id: any;
  options: Area[] = [];
  area_id: any;
  slika: any;

  constructor(
    private route: ActivatedRoute,
    private singleChoiceService: SingleChoiceQuestionsServiceService,
    private router: Router,
    private areaService: AreaServiceService
  ) {
    this.singleChoiceFormEdit = new FormGroup({
      tekstPitanja: new FormControl('', Validators.required),
      slika: new FormControl(''),
      areaId: new FormControl(0, Validators.required),
      odgovor1: new FormControl('', Validators.required),
      odgovor2: new FormControl('', Validators.required),
      odgovor3: new FormControl('', Validators.required),
      odgovor4: new FormControl('', Validators.required),
      tacanOdgovor: new FormControl(1, Validators.required),
      mode: new FormControl(0, Validators.required),
    });
  }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.singleChoiceQuestion =
      await this.singleChoiceService.getSingleChoiceQuestion(parseInt(this.id));
    this.populateForm();
    this.slika = this.singleChoiceQuestion.slika; //to do: pokusati kasnije na drugi nacin
    this.options = await this.areaService.getAreas();
  }

  populateForm() {
    this.singleChoiceFormEdit.patchValue({
      id: this.singleChoiceQuestion.id,
      tekstPitanja: this.singleChoiceQuestion.tekstPitanja,
      slika: this.singleChoiceQuestion.slika,
      areaId: this.singleChoiceQuestion.oblast.id,
      odgovor1: this.singleChoiceQuestion.odgovor1,
      odgovor2: this.singleChoiceQuestion.odgovor2,
      odgovor3: this.singleChoiceQuestion.odgovor3,
      odgovor4: this.singleChoiceQuestion.odgovor4,
      tacanOdgovor: this.singleChoiceQuestion.tacanOdgovor.toString(),
      mode: this.singleChoiceQuestion.mode?.toString(), //popraviti
    });
  }

  async onSubmit() {
    this.singleChoiceFormEdit.controls['tacanOdgovor'].setValue(
      parseInt(this.singleChoiceFormEdit.value.tacanOdgovor, 10)
    );
    this.singleChoiceFormEdit.controls['mode'].setValue(
      parseInt(this.singleChoiceFormEdit.value.mode, 10)
    );
    this.singleChoiceFormEdit.controls['areaId'].setValue(
      parseInt(this.singleChoiceFormEdit.value.areaId, 10)
    );
    await this.singleChoiceService.editSingleChoice({
      ...this.singleChoiceFormEdit.value,
      id: this.id,
    });
    console.log(this.singleChoiceFormEdit.value);
    this.router.navigateByUrl('/single-choice');
  }
}
