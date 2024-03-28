import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../user.service';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rang-tabela-kraj',
  templateUrl: './rang-tabela-kraj.component.html',
  styleUrls: ['./rang-tabela-kraj.component.css'],
})
export class RangTabelaKrajComponent implements OnInit {
  users!: User[];
  ime!: string;
  vrijeme!: string;
  brojBodova!: number;
  tipPitanja!: number;
  mode!: number;
  odabraniTip!: QuestionType;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    const queryParams: any = await firstValueFrom(this.route.queryParams);
    this.users = await this.userService.getUsers({
      mode: queryParams.mode,
      tipPitanja: queryParams.tipPitanja,
    }); //ovo pozivam
    this.tipPitanja = queryParams.tipPitanja;
    this.mode = queryParams.mode;
    this.odabraniTip = this.questionTypes.find(
      (qT: QuestionType) => qT.id == this.tipPitanja
    )!;
    console.log(queryParams.tipPitanja)
  }

  questionTypes: QuestionType[] = [
    { id: 1, name: 'Jedan tačan odgovor' },
    { id: 2, name: 'Više tačnih odgovora' },
    { id: 3, name: 'Tačno - netačno' },
    { id: 4, name: 'Spajalice' },
  ];
}

type QuestionType = {
  id: number;
  name: string;
};
