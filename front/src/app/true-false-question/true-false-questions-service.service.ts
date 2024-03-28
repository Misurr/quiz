import { Injectable } from '@angular/core';
import { TrueFalseQuestion } from './true-false-question.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface ApiTrueFalseQuestion {
  id: number;
  tesktPitanja: string;
  slika: string;
  tacanOdgovor: number;
  oblastId: number;
  mode: number;
}
@Injectable({
  providedIn: 'root',
})
export class TrueFalseQuestionsServiceService {

  trueFalseFake: Array<TrueFalseQuestion> = [
    {
      id: 1,
      image:
        'https://i.kym-cdn.com/entries/icons/mobile/000/034/809/twotwofive.jpg',
      question: '2 + 2 = 4',
      area_id: 1,
      correctAnswer: 1,
      mode: 1,
    },
    {
      id: 2,
      image:
        'https://www.hellomagazin.rs/data/images/2021-12-05/75467_vera-matovic-youtube-printscreen-2_iff.jpg?t=1680461159',
      question: 'Vera Matovic je glumica',
      area_id: 1,
      correctAnswer: 0,
      mode: 1,
    },
  ];
  constructor(private http: HttpClient) {}

  async getTrueFalseQuestions() {
    const response = (await firstValueFrom(
      this.http.get(
        'http://localhost:8080/api/oblasti/true-false-pitanja/get-all'
      )
    )) as any[];

    return response.map((trueFalse) => {
      return {
        id: trueFalse.id,
        image: trueFalse.slika,
        question: trueFalse.tesktPitanja,
        area_id: trueFalse.oblastId,
        correctAnswer: trueFalse.tacanOdgovor,
        mode: trueFalse.mode,
      };
    });
  }

  async getKviz(type: number, areaId: number, mode: number) {
    const response = (await firstValueFrom(
      this.http.get(
        `http://localhost:8080/api/random-response/questions/${type}/${areaId}/${mode}`
      )
    )) as ApiTrueFalseQuestion[];

    return response.map((trueFalse) => {
      return {
        id: trueFalse.id,
        image: trueFalse.slika,
        question: trueFalse.tesktPitanja,
        area_id: trueFalse.oblastId,
        correctAnswer: trueFalse.tacanOdgovor,
        mode: trueFalse.mode,
      };
    });
  }
}
