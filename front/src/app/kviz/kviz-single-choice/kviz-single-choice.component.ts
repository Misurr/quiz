import { Component, OnInit } from '@angular/core';
import { SingleChoiceQuestionsServiceService } from '../../single-choice-questions/single-choice-questions-service.service';
import { SingleChoiceQuestion } from '../../single-choice-questions/single-choice-questions.model';
import { firstValueFrom, timer } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-kviz-single-choice',
  templateUrl: './kviz-single-choice.component.html',
  styleUrls: ['./kviz-single-choice.component.css'],
})
export class KvizSingleChoiceComponent implements OnInit {
  options!: SingleChoiceQuestion[];
  currentQuestion: SingleChoiceQuestion = {} as any;
  answered = false;
  minutes: number = 0;
  index : number = 1;
  timerSubscription: any;
  seconds: number = 0;
  selectedAnswer: number | null = null;
  correctAnswer: number | null = null;
  wrongAnswers: number[] = [];
  showCorrectAnswer: boolean = false;
  bodovi: number = 0;
  ime!: string; // dodali da bi kasnije submitali kad kreiramo usera
  questionType!: number; // dodali da bi kasnije submitali kad kreiramo usera
  mode!: number; // dodali da bi kasnije submitali kad kreiramo usera
  area!: number; // dodali da bi kasnije submitali kad kreiramo usera

  constructor(
    private singleChoiceService: SingleChoiceQuestionsServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  async ngOnInit(): Promise<void> {
    const queryParams: any = await firstValueFrom(this.route.queryParams);
    console.log(queryParams);
    this.ime = queryParams.username;
    this.questionType = queryParams.questionType;
    this.mode = queryParams.mode;
    this.area = queryParams.area;
    this.options = await this.singleChoiceService.getKviz(
      queryParams.questionType,
      queryParams.area,
      queryParams.mode
    );
    this.currentQuestion = this.options[0];
    console.log('tekst pitanja je' + this.currentQuestion.tekstPitanja);
    this.timerSubscription = timer(0, 1000).subscribe(() => {
      if (this.seconds === 59) {
        this.minutes++;
        this.seconds = 0;
      } else {
        this.seconds++;
      }
    });
  }
  formatTime(time: number): string {
    return time < 10 ? '0' + time : time.toString();
  }

  isCorrect(id: number): boolean {
    return id === this.currentQuestion.tacanOdgovor;
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

  onSubmit(id: number): void {
    this.answered = true;
    this.selectedAnswer = id;

    if (this.isCorrect(id)) {
      this.correctAnswer = id;
      console.log(
        'Bilo je ' + this.wrongAnswers.length + ' netacnih odgovora!'
      );
      this.showCorrectAnswer = true;

      // Dodavanje bodova u skladu sa pravilima
      if (this.wrongAnswers.length === 0) {
        this.bodovi += 3;
      } else if (this.wrongAnswers.length === 1) {
        this.bodovi += 2;
      } else if (this.wrongAnswers.length === 2) {
        this.bodovi += 1;
      }

      setTimeout(() => {
        this.nextQuestion();
      }, 300);
    } else {
      this.wrongAnswers.push(id);
    }
  }

  async nextQuestion(): Promise<void> {
    const currentIndex = this.options.indexOf(this.currentQuestion);
    if (currentIndex < this.options.length - 1) {
      this.currentQuestion = this.options[currentIndex + 1];
      this.showCorrectAnswer = false; // Resetujemo prikaz tačnog odgovora
      // Resetovanje promjenljivih za novo pitanje
      this.selectedAnswer = null;
      this.correctAnswer = null;
      this.wrongAnswers = [];
      this.answered = false;
      this.index++;
    } else {
      console.log('Kviz je završen!');
      // TODO : 1. dodaj u rang tabelu

      // TODO : 2. transformisati vrijeme u zeljeni oblik
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
