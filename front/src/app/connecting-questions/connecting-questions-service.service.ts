import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConnectingQuestions } from './connecting-questios.model';
import { firstValueFrom } from 'rxjs';

interface ApiConnectingQuestions {
  id: number;
  tekstPitanja: string;
  spojkaLijeva1: string;
  spojkaDesna1: string;
  spojkaLijeva2: string;
  spojkaDesna2: string;
  spojkaLijeva3: string;
  spojkaDesna3: string;
  spojkaLijeva4: string;
  spojkaDesna4: string;
  spojkaLijeva5: string;
  spojkaDesna5: string;
  oblastId: number;
  mode: number;
}
@Injectable({
  providedIn: 'root',
})
export class ConnectingQuestionsServiceService {
  connectingQuestionsFake: Array<ConnectingQuestions> = [
    {
      id: 1,
      area_id: 1,
      question: 'Spoji imena glumaca sa njihovim prezimenima',
      clipLeft1: 'Dragan',
      clipLeft2: 'Milos',
      clipLeft3: 'Nikola',
      clipLeft4: 'Petar',
      clipLeft5: 'Aleksandar',
      clipRight1: 'Bjelogrlic',
      clipRight2: 'Bikovic',
      clipRight3: 'Kojo',
      clipRight4: 'Bencina',
      clipRight5: 'Radojicic',
      mode: 1,
    },
    {
      id: 2,
      area_id: 1,
      question: 'Spoji imena glumica sa njihovim prezimenima',
      clipLeft1: 'Sloboda',
      clipLeft2: 'Anica',
      clipLeft3: 'Neda',
      clipLeft4: 'Milena',
      clipLeft5: 'Dubravka',
      clipRight1: 'Micalovic',
      clipRight2: 'Dobra',
      clipRight3: 'Arneric',
      clipRight4: 'Dravic',
      clipRight5: 'Mijatovic',
      mode: 1,
    },
  ];
  constructor(private http: HttpClient) {}

  async getConnectingQuestions() {
    const response = (await firstValueFrom(
      this.http.get('http://localhost:8080/api/oblasti/spajalice/get-all')
    )) as any[];

    return response.map((connecting) => {
      return {
        id: connecting.id,
        question: connecting.tekstPitanja,
        area_id: connecting.oblastId,
        clipLeft1: connecting.spojkaLijeva1,
        clipRight1: connecting.spojkaDesna1,
        clipLeft2: connecting.spojkaLijeva2,
        clipRight2: connecting.spojkaDesna2,
        clipLeft3: connecting.spojkaLijeva3,
        clipRight3: connecting.spojkaDesna3,
        clipLeft4: connecting.spojkaLijeva4,
        clipRight4: connecting.spojkaDesna4,
        clipLeft5: connecting.spojkaLijeva5,
        clipRight5: connecting.spojkaDesna5,
        mode: connecting.mode,
      };
    });
  }

  async getConnectingQuestion(id: number) {
    const response = await firstValueFrom(
      this.http.get(
        `http://localhost:8080/api/oblasti/spajalice/get-by-id/${id}`
      )
    );

    return response as ConnectingQuestions;
  }

  async getKviz(type: number, areaId: number, mode: number) {
    const response = (await firstValueFrom(
      this.http.get(
        `http://localhost:8080/api/random-response/questions/${type}/${areaId}/${mode}`
      )
    )) as ApiConnectingQuestions[];

    return response.map((connecting) => {
      return {
        id: connecting.id,
        question: connecting.tekstPitanja,
        area_id: connecting.oblastId,
        clipLeft1: connecting.spojkaLijeva1,
        clipRight1: connecting.spojkaDesna1,
        clipLeft2: connecting.spojkaLijeva2,
        clipRight2: connecting.spojkaDesna2,
        clipLeft3: connecting.spojkaLijeva3,
        clipRight3: connecting.spojkaDesna3,
        clipLeft4: connecting.spojkaLijeva4,
        clipRight4: connecting.spojkaDesna4,
        clipLeft5: connecting.spojkaLijeva5,
        clipRight5: connecting.spojkaDesna5,
        mode: connecting.mode,
      };
    });
  }
}
