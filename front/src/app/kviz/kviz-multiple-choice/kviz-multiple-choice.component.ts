import { Component, OnInit } from '@angular/core';
import { MultipleChoiceQuestionsServiceService } from '../../multiple-choice-question/multiple-choice-questions-service.service';
import { MultipleChoiceQuestion } from '../../multiple-choice-question/multiple-choice-questions.model';
import { firstValueFrom, range, timer } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-kviz-multiple-choice',
  templateUrl: './kviz-multiple-choice.component.html',
  styleUrls: ['./kviz-multiple-choice.component.css'],
})
export class KvizMultipleChoiceComponent implements OnInit {
  options!: MultipleChoiceQuestion[];
  currentQuestion!: MultipleChoiceQuestion;
  answered = false;
  wrongAnswers: number[] = [];
  seconds: number = 0;
  bodovi: number = 0;
  timerSubscription: any;
  minutes: number = 0;
  ime!: string; // dodali da bi kasnije submitali kad kreiramo usera
  questionType!: number; // dodali da bi kasnije submitali kad kreiramo usera
  mode!: number; // dodali da bi kasnije submitali kad kreiramo usera
  area!: number; // dodali da bi kasnije submitali kad kreiramo usera
  ukupniBodovi: number = 5;
  index: number = 1;
  selectedAnswer: number | null = null;
  correctAnswer: number | null = null;
  showCorrectAnswer: boolean = false;
  selectedCorrectAnswers: number[] = [];

  constructor(
    private multipleChoiceService: MultipleChoiceQuestionsServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  async ngOnInit(): Promise<void> {
    const queryParams: any = await firstValueFrom(this.route.queryParams);
    this.ime = queryParams.username;
    this.questionType = queryParams.questionType;
    this.mode = queryParams.mode;
    this.area = queryParams.area;
    this.options = await this.multipleChoiceService.getKviz(
      queryParams.questionType,
      queryParams.area,
      queryParams.mode
    );
    this.currentQuestion = this.options[0];
    this.timerSubscription = timer(0, 1000).subscribe(() => {
      if (this.seconds === 59) {
        this.minutes++;
        this.seconds = 0;
      } else {
        this.seconds++;
      }
    });
    console.log(
      'Broj tacnih odgovora je ' + this.currentQuestion.tacanOdgovor.length
    );
    console.log(
      'Broj netacnih je ' + (6 - this.currentQuestion.tacanOdgovor.length)
    );
  }

  formatTime(time: number): string {
    return time < 10 ? '0' + time : time.toString();
  }

  isCorrect(id: number): boolean {
    return this.currentQuestion.tacanOdgovor.includes(id);
  }

  onSubmit(id: number) {
    console.log('ukupni bodovi na pocetku:' + this.ukupniBodovi);
    this.answered = true;
    this.selectedAnswer = id;

    if (this.isCorrect(id)) {
      this.correctAnswer = id;
      this.selectedCorrectAnswers.push(id);
      this.showCorrectAnswer = true;
      console.log(
        'Tacni odgovori duzina: ' + this.currentQuestion.tacanOdgovor.length
      );

      setTimeout(() => {
        this.nextQuestion();
      }, 300);
    } else {
      this.wrongAnswers.push(id);
    }
    console.log(this.wrongAnswers);
  }

  racunajBodove(brNetacnihOdgovora: number, ukupanBrTacnihOdgovora: number) {
    if (brNetacnihOdgovora == 0) {
      return 5;
    }

    switch (ukupanBrTacnihOdgovora) {
      case 4:
        switch (brNetacnihOdgovora) {
          case 1:
            return 3;
          case 2:
            return 0;
        }
    }

    switch (ukupanBrTacnihOdgovora) {
      case 3:
        switch (brNetacnihOdgovora) {
          case 1:
            return 4;
          case 2:
            return 2;
          case 3:
            return 0;
        }
    }

    switch (ukupanBrTacnihOdgovora) {
      case 2:
        switch (brNetacnihOdgovora) {
          case 1:
            return 4;
          case 2:
            return 3;
          case 3:
            return 2;
          case 4:
            return 0;
        }
    }

    return 0;
  }

  async nextQuestion(): Promise<void> {
    if (
      this.selectedCorrectAnswers.length ==
      this.currentQuestion.tacanOdgovor.length
    ) {
      this.bodovi += this.racunajBodove(
        this.wrongAnswers.length,
        this.currentQuestion.tacanOdgovor.length
      );

      const currentIndex = this.options.indexOf(this.currentQuestion);
      if (currentIndex < this.options.length - 1) {
        this.currentQuestion = this.options[currentIndex + 1];
        this.showCorrectAnswer = false; // Resetujemo prikaz tačnog odgovora
        // Resetovanje promjenljivih za novo pitanje
        this.selectedAnswer = null;
        this.correctAnswer = null;
        this.wrongAnswers = [];
        this.selectedCorrectAnswers = [];
        this.answered = false;

        this.index++;
      } else {
        console.log('Kviz je završen!');
        const vrijeme = `00:${this.formatTime(this.minutes)}:${this.formatTime(
          this.seconds
        )}`;

        await this.userService.addUser({
          brojBodova: this.bodovi,
          ime: this.ime,
          tipPitanja: this.questionType,
          mode: this.mode,
          oblast: { id: this.area },
          vrijeme,
        });
        this.router.navigate(['/rang-tabela-kraj'], {
          queryParams: {
            tipPitanja: this.questionType,
            mode: this.mode,
          },
        });
      }
    }
  }
}
