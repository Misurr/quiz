import { Component, OnInit } from '@angular/core';
import { TrueFalseQuestion } from '../true-false-question.model';
import { TrueFalseQuestionsServiceService } from '../true-false-questions-service.service';

@Component({
  selector: 'app-view-true-false-questions',
  templateUrl: './view-true-false-questions.component.html',
  styleUrls: ['./view-true-false-questions.component.css'],
})
export class ViewTrueFalseQuestionsComponent implements OnInit {
  
  trueFalseQuestionsArray: TrueFalseQuestion[] = [];

  constructor(private trueFalseService: TrueFalseQuestionsServiceService) {}

  async ngOnInit() {
    this.trueFalseQuestionsArray =
      await this.trueFalseService.getTrueFalseQuestions();
  }
}
