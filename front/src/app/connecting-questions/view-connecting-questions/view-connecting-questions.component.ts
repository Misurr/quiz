import { Component, OnInit } from '@angular/core';
import { ConnectingQuestionsServiceService } from '../connecting-questions-service.service';
import { ConnectingQuestions } from '../connecting-questios.model';

@Component({
  selector: 'app-view-connecting-questions',
  templateUrl: './view-connecting-questions.component.html',
  styleUrls: ['./view-connecting-questions.component.css'],
})
export class ViewConnectingQuestionsComponent implements OnInit {

  connectingQuestionsArray: ConnectingQuestions[] = [];

  constructor(
    private connectingQuestionService: ConnectingQuestionsServiceService
  ) {}

  async ngOnInit() {
    this.connectingQuestionsArray =
      await this.connectingQuestionService.getConnectingQuestions();
  }
}
