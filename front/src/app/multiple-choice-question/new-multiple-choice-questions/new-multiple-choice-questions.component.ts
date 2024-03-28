import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AreaServiceService } from '../../area/area-service.service';
import { Area } from '../../area/area.model';
import { MultipleChoiceQuestionsServiceService } from '../multiple-choice-questions-service.service';

@Component({
  selector: 'app-new-multiple-choice-questions',
  templateUrl: './new-multiple-choice-questions.component.html',
  styleUrls: ['./new-multiple-choice-questions.component.css'],
})
export class NewMultipleChoiceQuestionsComponent implements OnInit {
  multipleChoiceForm: FormGroup;
  imageUrl: string = '';
  options: Area[] = [];
  area_id: any;
  constructor(private router: Router, private areaService: AreaServiceService, private multipleChoiceService: MultipleChoiceQuestionsServiceService) {
    this.multipleChoiceForm = new FormGroup({
      tekstPitanja: new FormControl('', Validators.required),
      slika: new FormControl(''),
      areaId: new FormControl(0, Validators.required),
      odgovor1: new FormControl('', Validators.required),
      odgovor2: new FormControl('', Validators.required),
      odgovor3: new FormControl('', Validators.required),
      odgovor4: new FormControl('', Validators.required),
      odgovor5: new FormControl('', Validators.required),
      odgovor6: new FormControl('', Validators.required),
      checkbox1: new FormControl(false),
      checkbox2: new FormControl(false),
      checkbox3: new FormControl(false),
      checkbox4: new FormControl(false),
      checkbox5: new FormControl(false),
      checkbox6: new FormControl(false),
      mode: new FormControl('', Validators.required),
    });
    this.multipleChoiceForm.valueChanges.subscribe((value) => {
      this.updateCheckboxValidity(value);
    });
  }
  
  async ngOnInit(): Promise<void> {
   this.options = await this.areaService.getAreas();
  }

  updateCheckboxValidity(value: any) {
    const checkboxValues = [
      value.checkbox1,
      value.checkbox2,
      value.checkbox3,
      value.checkbox4,
      value.checkbox5,
      value.checkbox6,
    ];

    const checkedCount = checkboxValues.filter((checked) => checked).length;

    if (checkedCount >= 4) {
      for (let i = 1; i <= 6; i++) {
        const key = `checkbox${i}`;
        if (!value[key]) {
          this.multipleChoiceForm.get(key)?.disable({ emitEvent: false });
        }
      }
    } else {
      for (let i = 1; i <= 6; i++) {
        const key = `checkbox${i}`;
        this.multipleChoiceForm.get(key)?.enable({ emitEvent: false });
      }
    }
  }

  async onSubmit() {
    this.multipleChoiceForm.controls['areaId'].setValue(
      parseInt(this.multipleChoiceForm.value.areaId, 10)
    );
    this.multipleChoiceForm.controls['mode'].setValue(
      parseInt(this.multipleChoiceForm.value.mode, 10)
    );
    const {
      checkbox1,
      checkbox2,
      checkbox3,
      checkbox4,
      checkbox5,
      checkbox6,
      ...formValuesWithoutCheckboxes
    } = this.multipleChoiceForm.value;

    const checkboxValues = [
      checkbox1,
      checkbox2,
      checkbox3,
      checkbox4,
      checkbox5,
      checkbox6,
    ];

    const correctAnswers = checkboxValues
      .map((value, index) => (value ? index + 1 : undefined))
      .filter((index) => index !== undefined);

    const formValuesWithCheckbox = {
      ...formValuesWithoutCheckboxes,
      tacanOdgovor: correctAnswers,
    };

    console.log(formValuesWithCheckbox);
    await this.multipleChoiceService
    .newMultipleChoice(formValuesWithCheckbox)
    .catch((err) => {
      console.error(err);
    });
    await this.router.navigateByUrl('/multiple-choice');
  }
}

