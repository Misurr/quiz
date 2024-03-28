import { Component, OnInit } from '@angular/core';
import { ConnectingQuestionsServiceService } from '../../connecting-questions/connecting-questions-service.service';
import { ConnectingQuestions } from '../../connecting-questions/connecting-questios.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { firstValueFrom, timer } from 'rxjs';

@Component({
  selector: 'app-kviz-connecting-questions',
  templateUrl: './kviz-connecting-questions.component.html',
  styleUrls: ['./kviz-connecting-questions.component.css'],
})
export class KvizConnectingQuestionsComponent implements OnInit {
  options!: ConnectingQuestions[];
  currentQuestion!: ConnectingQuestions;

  bodovi: number = 0;
  clipRightArray: string[] = [];
  wrongLeftAnswers: number[] = [];
  wrongRightAnswers: number[] = [];
  correctLeftAnswers: number[] = [];
  correctRightAnswers: number[] = [];
  answered1 = false;
  answered2 = false;
  selectedAnswerId1: number | null = null;
  selectedAnswerId2: number | null = null;
  selectedAnswer2: string | undefined;
  selectedAnswer1: string | undefined;
  showCorrectAnswer: boolean = false;
  minutes: number = 0;
  index: number = 1;
  timerSubscription: any;
  seconds: number = 0;

  ime!: string; // dodali da bi kasnije submitali kad kreiramo usera
  questionType!: number; // dodali da bi kasnije submitali kad kreiramo usera
  mode!: number; // dodali da bi kasnije submitali kad kreiramo usera
  area!: number; // dodali da bi kasnije submitali kad kreiramo usera

  constructor(
    private connectingQuestionService: ConnectingQuestionsServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  shuffledArray: string[] = [];

  shuffleArray(array: string[]) {
    var m = array.length,
      t,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  async ngOnInit(): Promise<void> {
    const queryParams: any = await firstValueFrom(this.route.queryParams);
    console.log(queryParams);
    this.ime = queryParams.username;
    this.questionType = queryParams.questionType;
    this.mode = queryParams.mode;
    this.area = queryParams.area;
    this.options = await this.connectingQuestionService.getKviz(
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
    this.clipRightArray = [
      this.currentQuestion.clipRight1,
      this.currentQuestion.clipRight2,
      this.currentQuestion.clipRight3,
      this.currentQuestion.clipRight4,
      this.currentQuestion.clipRight5,
    ];
    console.log(this.clipRightArray);

    this.shuffledArray = this.shuffleArray(this.clipRightArray);
    console.log(this.shuffledArray);
  }
  formatTime(time: number): string {
    return time < 10 ? '0' + time : time.toString();
  }

  onSubmit1(id: number) {
    this.answered1 = true;
    this.selectedAnswerId1 = id;

    if (id == 1) {
      this.selectedAnswer1 = this.currentQuestion.clipLeft1;
    } else if (id == 2) {
      this.selectedAnswer1 = this.currentQuestion.clipLeft2;
    } else if (id == 3) {
      this.selectedAnswer1 = this.currentQuestion.clipLeft3;
    } else if (id == 4) {
      this.selectedAnswer1 = this.currentQuestion.clipLeft4;
    } else {
      this.selectedAnswer1 = this.currentQuestion.clipLeft5;
    }
  }

  onSubmit2(id: number) {
    this.answered2 = true;
    this.selectedAnswerId2 = id;

    if (id == 1) {
      this.selectedAnswer2 = this.shuffledArray[0];
    } else if (id == 2) {
      this.selectedAnswer2 = this.shuffledArray[1];
    } else if (id == 3) {
      this.selectedAnswer2 = this.shuffledArray[2];
    } else if (id == 4) {
      this.selectedAnswer2 = this.shuffledArray[3];
    } else if (id == 5) {
      this.selectedAnswer2 = this.shuffledArray[4];
    }

    if (
      this.selectedAnswerId1 == 1 &&
      this.selectedAnswer2 === this.currentQuestion.clipRight1
    ) {
      this.correctLeftAnswers.push(1);
      this.correctRightAnswers.push(id);
      this.bodovi += 1;
    } else if (
      this.selectedAnswerId1 == 2 &&
      this.selectedAnswer2 === this.currentQuestion.clipRight2
    ) {
      this.correctLeftAnswers.push(2);
      this.correctRightAnswers.push(id);
      this.bodovi += 1;
    } else if (
      this.selectedAnswerId1 == 3 &&
      this.selectedAnswer2 === this.currentQuestion.clipRight3
    ) {
      this.bodovi += 1;
      this.correctLeftAnswers.push(3);
      this.correctRightAnswers.push(id);
    } else if (
      this.selectedAnswerId1 == 4 &&
      this.selectedAnswer2 === this.currentQuestion.clipRight4
    ) {
      this.bodovi += 1;
      this.correctLeftAnswers.push(4);
      this.correctRightAnswers.push(id);
    } else if (
      this.selectedAnswerId1 == 5 &&
      this.selectedAnswer2 === this.currentQuestion.clipRight5
    ) {
      this.bodovi += 1;
      this.correctLeftAnswers.push(5);
      this.correctRightAnswers.push(id);
    } else {
      this.bodovi += 0;
      this.wrongRightAnswers.push(id);
    }

    if (
      this.selectedAnswerId1 == 1 &&
      this.selectedAnswer2 != this.currentQuestion.clipRight1
    ) {
      this.wrongLeftAnswers.push(1);
    } else if (
      this.selectedAnswerId1 == 2 &&
      this.selectedAnswer2 != this.currentQuestion.clipRight2
    ) {
      this.wrongLeftAnswers.push(2);
    } else if (
      this.selectedAnswerId1 == 3 &&
      this.selectedAnswer2 != this.currentQuestion.clipRight3
    ) {
      this.wrongLeftAnswers.push(3);
    } else if (
      this.selectedAnswerId1 == 4 &&
      this.selectedAnswer2 != this.currentQuestion.clipRight4
    ) {
      this.wrongLeftAnswers.push(4);
    } else if (
      this.selectedAnswerId1 == 5 &&
      this.selectedAnswer2 != this.currentQuestion.clipRight5
    ) {
      this.wrongLeftAnswers.push(5);
    }

    if (this.correctLeftAnswers.length + this.wrongLeftAnswers.length == 5) {
      setTimeout(() => {
        this.nextQuestion();
      }, 600);
    }
  }

  async nextQuestion(): Promise<void> {
    const currentIndex = this.options.indexOf(this.currentQuestion);

    if (currentIndex < this.options.length - 1) {
      this.currentQuestion = this.options[currentIndex + 1];
      this.showCorrectAnswer = false; // Resetujemo prikaz tačnog odgovora
      // Resetovanje promjenljivih za novo pitanje
      this.selectedAnswerId1 = null;
      this.selectedAnswerId2 = null;
      this.wrongLeftAnswers = [];
      this.wrongRightAnswers = [];
      this.correctLeftAnswers = [];
      this.correctRightAnswers = [];
      this.answered1 = false;
      this.answered2 = false; // vratiti i thisClipRightArray na pocetno stanje, jer se ngOnInit izvrsi samo kad se komponenta prvi put pokrene
      this.clipRightArray = [
        this.currentQuestion.clipRight1,
        this.currentQuestion.clipRight2,
        this.currentQuestion.clipRight3,
        this.currentQuestion.clipRight4,
        this.currentQuestion.clipRight5,
      ];
      this.index++;
      this.shuffledArray = this.shuffleArray(this.clipRightArray);
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
