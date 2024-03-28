import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../user.service';

@Component({
  selector: 'app-rang-tabela',
  templateUrl: './rang-tabela.component.html',
  styleUrls: ['./rang-tabela.component.css'],
})
export class RangTabelaComponent implements OnInit {
  selectedType!: QuestionType;
  selectedMode!: number;
  users!: User[];

  constructor(private userService: UserService) {}

  async ngOnInit(): Promise<void> {
    this.selectedMode = Mode.Easy;
    this.selectedType = this.questionTypes[0];

    this.users = await this.userService.getUsers({
      mode: this.selectedMode,
      tipPitanja: this.selectedType.id,
    });
  }
  questionTypes: QuestionType[] = [
    { id: 1, name: 'Jedan tačan odgovor' },
    { id: 2, name: 'Više tačnih odgovora' },
    { id: 3, name: 'Tačno - netačno' },
    { id: 4, name: 'Spajalice' },
  ];

  async onQuestionTypeClick(type: QuestionType) {
    this.selectedType = type;
    if (this.selectedMode) {
      this.users = await this.userService.getUsers({
        mode: this.selectedMode,
        tipPitanja: this.selectedType.id,
      });
    }
  }

  async onModeSubmit(id: number) {
    this.selectedMode = id;
    if (this.selectedType) {
      this.users = await this.userService.getUsers({
        mode: this.selectedMode,
        tipPitanja: this.selectedType.id,
      });
    }
  }
}

type QuestionType = {
  id: number;
  name: string;
};

enum Mode {
  Easy = 1,
  Medium = 2, 
  Hard = 3
}