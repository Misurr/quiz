import { Component, OnInit } from '@angular/core';
import { MultipleChoiceQuestion } from '../multiple-choice-questions.model';
import { Route, Router } from '@angular/router';
import { MultipleChoiceQuestionsServiceService } from '../multiple-choice-questions-service.service';

@Component({
  selector: 'app-view-multiple-choice-questions',
  templateUrl: './view-multiple-choice-questions.component.html',
  styleUrls: ['./view-multiple-choice-questions.component.css'],
})
export class ViewMultipleChoiceQuestionsComponent implements OnInit {
 
  async deleteMultipleChoice(arg0: number) {
    await this.multipleChoiceService.deleteMultipleChoice(arg0).catch((err) => {
      console.error(err);
    });
    this.multipleChoiceArray =
      await this.multipleChoiceService.getMultipleChoiceQuestions();
  }

  multipleChoiceArray: Array<MultipleChoiceQuestion> = [];
  constructor(
    private router: Router,
    private multipleChoiceService: MultipleChoiceQuestionsServiceService
  ) {}

  async ngOnInit() {
    this.multipleChoiceArray =
      await this.multipleChoiceService.getMultipleChoiceQuestions();
  }
}
