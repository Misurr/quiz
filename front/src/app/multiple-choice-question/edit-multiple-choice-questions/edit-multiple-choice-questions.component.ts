import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MultipleChoiceQuestionsServiceService } from '../multiple-choice-questions-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaServiceService } from '../../area/area-service.service';
import { Area } from '../../area/area.model';

@Component({
  selector: 'app-edit-multiple-choice-questions',
  templateUrl: './edit-multiple-choice-questions.component.html',
  styleUrls: ['./edit-multiple-choice-questions.component.css'],
})
export class EditMultipleChoiceQuestionsComponent implements OnInit {
  multipleChoiceFormEdit: FormGroup;
  multipleChoiceDataFake!: any; //nije dobra praksa stavljati any!!!!!!
  id: any;
  slika: any;
  options: Area[] = [];

  constructor(
    private route: ActivatedRoute,
    private multipleChoiceService: MultipleChoiceQuestionsServiceService,
    private router: Router,
    private areaService: AreaServiceService
  ) {
    this.multipleChoiceFormEdit = new FormGroup({
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
      mode: new FormControl(0, Validators.required),
    });
  }

  async ngOnInit() {
    this.options = await this.areaService.getAreas();

    console.log(this.areaService.getAreas());
    this.id = this.route.snapshot.paramMap.get('id');
    this.multipleChoiceDataFake =
      await this.multipleChoiceService.getMultipleChoiceQuestion(
        parseInt(this.id)
      )!;
    this.populateForm();
    this.slika = this.multipleChoiceDataFake.slika; // TODO: pokusati kasnije na drugi nacin
  }
  populateForm() {
    this.multipleChoiceFormEdit.patchValue({
      id: this.multipleChoiceDataFake.id,
      tekstPitanja: this.multipleChoiceDataFake.tekstPitanja,
      slika: this.multipleChoiceDataFake.slika,
      areaId: this.multipleChoiceDataFake.oblast.id,
      odgovor1: this.multipleChoiceDataFake.odgovor1,
      odgovor2: this.multipleChoiceDataFake.odgovor2,
      odgovor3: this.multipleChoiceDataFake.odgovor3,
      odgovor4: this.multipleChoiceDataFake.odgovor4,
      odgovor5: this.multipleChoiceDataFake.odgovor5,
      odgovor6: this.multipleChoiceDataFake.odgovor6,
      checkbox1: this.multipleChoiceDataFake.tacanOdgovor.includes(1), //TODO: iscupati iz forme
      checkbox2: this.multipleChoiceDataFake.tacanOdgovor.includes(2),
      checkbox3: this.multipleChoiceDataFake.tacanOdgovor.includes(3),
      checkbox4: this.multipleChoiceDataFake.tacanOdgovor.includes(4),
      checkbox5: this.multipleChoiceDataFake.tacanOdgovor.includes(5),
      checkbox6: this.multipleChoiceDataFake.tacanOdgovor.includes(6),
      mode: this.multipleChoiceDataFake.mode.toString(),
    });
  }

  async onSubmit() {
    this.multipleChoiceFormEdit.controls['areaId'].setValue(
      parseInt(this.multipleChoiceFormEdit.value.areaId, 10)
    );
    this.multipleChoiceFormEdit.controls['mode'].setValue(
      parseInt(this.multipleChoiceFormEdit.value.mode, 10)
    );
    const {
      checkbox1,
      checkbox2,
      checkbox3,
      checkbox4,
      checkbox5,
      checkbox6,
      ...formValuesWithoutCheckboxes
    } = this.multipleChoiceFormEdit.value;

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
      id: this.id,
      ...formValuesWithoutCheckboxes,
      tacanOdgovor: correctAnswers,
    };
    console.log(this.multipleChoiceFormEdit.value);
    await this.multipleChoiceService
      .editMultipleChoice(formValuesWithCheckbox)
      .catch((err) => {
        console.error(err);
      });
    await this.router.navigateByUrl('/multiple-choice');
  }

  onOptionsSelected(event: any) {
    console.log(event); //option value will be sent as event
    // console.log(this.optionSelected);
  }
}
