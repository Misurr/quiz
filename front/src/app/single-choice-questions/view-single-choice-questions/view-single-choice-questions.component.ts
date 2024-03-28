import { Component, OnInit } from '@angular/core';
import { SingleChoiceQuestion } from '../single-choice-questions.model';
import { SingleChoiceQuestionsServiceService } from '../single-choice-questions-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-single-choice-questions',
  templateUrl: './view-single-choice-questions.component.html',
  styleUrls: ['./view-single-choice-questions.component.css'],
})

export class ViewSingleChoiceQuestionsComponent implements OnInit {
  
  singleChoiceArray: Array<SingleChoiceQuestion> = [];

  constructor(
    private singleChoiceService: SingleChoiceQuestionsServiceService
  ) {}

  async ngOnInit() {
    this.singleChoiceArray =
      await this.singleChoiceService.getSingleChoiceQuestions();
  }

  deleteSingleChoice(id: number): void {
    this.singleChoiceArray = this.singleChoiceArray.filter(
      (SingleChoiceQuestions) => SingleChoiceQuestions.id !== id
    );

    this.singleChoiceService.deleteSingleChoice(id);
  }
}
