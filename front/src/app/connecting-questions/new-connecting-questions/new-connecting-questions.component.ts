import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-connecting-questions',
  templateUrl: './new-connecting-questions.component.html',
  styleUrls: ['./new-connecting-questions.component.css']
})
export class NewConnectingQuestionsComponent {
 connectingQuestions: FormGroup;
  imageUrl: string = '';

  constructor(private fb: FormBuilder) {
    this.connectingQuestions = this.fb.group({
      question: ['', Validators.required],
  
      spojkaLijeva1: [''],
      spojkaDesna1: [''],
      spojkaLijeva2: [''],
      spojkaDesna2: [''],
      spojkaLijeva3: [''],
      spojkaDesna3: [''],
      spojkaLijeva4: [''],
      spojkaDesna4: [''],
      spojkaLijeva5: [''],
      spojkaDesna5: [''],
      select: ['', Validators.required],
    });
  }
  

  onSubmit() {
    console.log(this.connectingQuestions.value);
  }
}
