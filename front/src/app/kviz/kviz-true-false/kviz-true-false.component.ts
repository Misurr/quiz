import { Component, OnInit } from '@angular/core';
import { TrueFalseQuestionsServiceService } from '../../true-false-question/true-false-questions-service.service';
import { TrueFalseQuestion } from '../../true-false-question/true-false-question.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { firstValueFrom, timer } from 'rxjs';

@Component({
  selector: 'app-kviz-true-false',
  templateUrl: './kviz-true-false.component.html',
  styleUrls: ['./kviz-true-false.component.css'],
})
export class KvizTrueFalseComponent implements OnInit {
  options!: TrueFalseQuestion[];
  currentQuestion!: TrueFalseQuestion;
  answered = false;
  index: number = 1;
  ime!: string; // dodali da bi kasnije submitali kad kreiramo usera
  questionType!: number; // dodali da bi kasnije submitali kad kreiramo usera
  mode!: number; // dodali da bi kasnije submitali kad kreiramo usera
  area!: number; // dodali da bi kasnije submitali kad kreiramo usera
  timerSubscription: any;
  seconds: number = 0;
  minutes: number = 0;
  selectedAnswer: number | null = null;
  showCorrectAnswer: boolean = false;
  correctAnswer: boolean = false;
  bodovi: number = 0;

  constructor(
    private trueFalseService: TrueFalseQuestionsServiceService,
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
    this.options = await this.trueFalseService.getKviz(
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
  }
  formatTime(time: number): string {
    return time < 10 ? '0' + time : time.toString();
  }

  onSubmit(id: number) {
    this.answered = true;
    this.selectedAnswer = id;

    setTimeout(() => {
      this.nextQuestion();
    }, 600);
    if (
      (this.selectedAnswer === 1 && this.currentQuestion.correctAnswer === 1) ||
      (this.selectedAnswer === 2 && this.currentQuestion.correctAnswer === 0)
    ) {
      this.bodovi += 1;
    }
  }

  async nextQuestion(): Promise<void> {
    const currentIndex = this.options.indexOf(this.currentQuestion);

    if (currentIndex < this.options.length - 1) {
      this.currentQuestion = this.options[currentIndex + 1];
      this.showCorrectAnswer = false; // Resetujemo prikaz tačnog odgovora
      // Resetovanje promjenljivih za novo pitanje
      this.selectedAnswer = null;
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
