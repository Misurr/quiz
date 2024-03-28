import { Component, OnInit } from '@angular/core';
import { AreaServiceService } from '../../area/area-service.service';
import { Area } from '../../area/area.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kviz-postavke',
  templateUrl: './kviz-postavke.component.html',
  styleUrls: ['./kviz-postavke.component.css'],
})
export class KvizPostavkeComponent implements OnInit {
  kvizPostavkeForm: FormGroup;
  options: Area[] = [];
  area!: Area;
  selectedType!: QuestionType;
  selectedMode!: number;
  username: string = '';

  async ngOnInit(): Promise<void> {
    this.options = await this.areaService.getAreas();
  }

  constructor(private areaService: AreaServiceService, private router: Router) {
    this.kvizPostavkeForm = new FormGroup({
      username: new FormControl('', Validators.required),
    });
  }

  onModeSubmit(id: number) {
    this.selectedMode = id;
    console.log(id);
  }

  onAreaClick(area: Area) {
    this.area = area;
    console.log(area.id);
  }

  questionTypeSelected(id?: number) {
    switch (id) {
      case 1:
        return '/assets/single-choice.png';
      case 2:
        return '/assets/multiple-choice.png';
      case 3:
        return '/assets/true-false.png';
      case 4:
        return '/assets/connecting.png';
      default:
        return '/assets/image.png';
    }
  }
  questionTypes: QuestionType[] = [
    { id: 1, name: 'Jedan tačan odgovor' },
    { id: 2, name: 'Više tačnih odgovora' },
    { id: 3, name: 'Tačno - netačno' },
    { id: 4, name: 'Spajalice' },
  ];

  onQuestionTypeClick(type: QuestionType) {
    this.selectedType = type;
    console.log(type.id);
  }

  async onSubmit() {
    if (this.selectedType.id == 1) {
      await this.router.navigate(['/kviz-single-choice'], {
        queryParams: {
          questionType: this.selectedType.id,
          mode: this.selectedMode,
          area: this.area.id,
          username: this.kvizPostavkeForm.value.username,
        },
      });
    } else if (this.selectedType.id == 2) {
      await this.router.navigate(['/kviz-multiple-choice'], {
        queryParams: {
          questionType: this.selectedType.id,
          mode: this.selectedMode,
          area: this.area.id,
          username: this.kvizPostavkeForm.value.username,
        },
      });
    } else if (this.selectedType.id == 3) {
      await this.router.navigate(['/kviz-true-false'], {
        queryParams: {
          questionType: this.selectedType.id,
          mode: this.selectedMode,
          area: this.area.id,
          username: this.kvizPostavkeForm.value.username,
        },
      });
    } else if (this.selectedType.id == 4) {
      await this.router.navigate(['/kviz-connecting'], {
        queryParams: {
          questionType: this.selectedType.id,
          mode: this.selectedMode,
          area: this.area.id,
          username: this.kvizPostavkeForm.value.username,
        },
      });
    }
  }
}

type QuestionType = {
  id: number;
  name: string;
};
