import { Component, OnInit } from '@angular/core';
import { AreaServiceService } from '../area-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-area',
  templateUrl: './new-area.component.html',
  styleUrls: ['./new-area.component.css'],
})
export class NewAreaComponent implements OnInit {
  areaForm: FormGroup;

  constructor(private areaService: AreaServiceService) {
    this.areaForm = new FormGroup({
      areaTitle: new FormControl('', Validators.required),
      areaCaption: new FormControl('', Validators.required),
      image: new FormControl(''),
      activeCheckbox: new FormControl(''),
    });
  }
  ngOnInit(): void {}
  onSubmit() {}
}
