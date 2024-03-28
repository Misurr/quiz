import { Injectable } from '@angular/core';
import { MultipleChoiceQuestion } from './multiple-choice-questions.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { SingleChoiceQuestion } from '../single-choice-questions/single-choice-questions.model';

@Injectable({
  providedIn: 'root',
})
export class MultipleChoiceQuestionsServiceService {
  multipleChoiceFake: Array<MultipleChoiceQuestion> = [
    {
      id: 1,
      tekstPitanja: 'Ko su glavni likovi u seriji Prijatelji?',
      slika: 'https://24sedam.rs/data/images/2021-01-08/167814_untitled_f.jpg',
      areaId: 2,
      odgovor1: 'Joey',
      odgovor2: 'Hermiona',
      odgovor3: 'Ted Mozbi',
      odgovor4: 'Phoebe',
      odgovor5: 'Barni Stinson',
      odgovor6: 'Monica',
      tacanOdgovor: [1, 4, 6],
      mode: 2,
    },
    {
      id: 2,
      tekstPitanja: 'Ko su glavni likovi u seriji Kako sam upoznao vasu majku?',
      slika: '',
      areaId: 2,
      odgovor1: 'Ted Mozbi',
      odgovor2: 'Robin Šerbacki',
      odgovor3: 'Dobi',
      odgovor4: 'Ned Stark',
      odgovor5: 'Barni Stinson',
      odgovor6: 'Lili Oldrin',
      tacanOdgovor: [1, 2, 5, 6],
      mode: 2,
    },
    {
      id: 3,
      tekstPitanja: 'Koje romane je napisao Fredrik Bakman',
      slika: '',
      areaId: 2,
      odgovor1: 'Covek po imenu Uve',
      odgovor2: 'Sasvim obicna porodica',
      odgovor3: 'Moja baka vam se izvinjava',
      odgovor4: 'Zlocin i kazna',
      odgovor5: 'Medvedgrad',
      odgovor6: 'Dete u tebi mora pronaci svoj zavicaj',
      tacanOdgovor: [1, 3, 5],
      mode: 2,
    },
    {
      id: 4,
      tekstPitanja: 'Ko su glavni likovi filma Heri Poter',
      slika: '',
      areaId: 2,
      odgovor1: 'Sansa Stark',
      odgovor2: 'Gregori Haus',
      odgovor3: 'Heri Poter',
      odgovor4: 'Frodo Bagins',
      odgovor5: 'Hermiona',
      odgovor6: 'Gandalf',
      tacanOdgovor: [3, 5],
      mode: 2,
    },
    {
      id: 5,
      tekstPitanja: 'Koje od navedenih hitova pjeva grupa RHCP?',
      slika: '',
      areaId: 2,
      odgovor1: 'Snow',
      odgovor2: 'Flowers',
      odgovor3: 'Californication',
      odgovor4: `Rock'n roll train`,
      odgovor5: 'One',
      odgovor6: 'Otherside',
      tacanOdgovor: [1, 3, 6],
      mode: 2,
    },
    {
      id: 6,
      tekstPitanja: 'U kojim filmovima je glumio Johny Depp?',
      slika: '',
      areaId: 2,
      odgovor1: 'Pirati sa Kariba',
      odgovor2: 'Gospodar prstenova',
      odgovor3: 'Mracni vitez',
      odgovor4: '10 stvari koje mrzim kod tebe',
      odgovor5: 'Carli i fabrika cokolade',
      odgovor6: 'Alisa u zemlji cuda',
      tacanOdgovor: [1, 5, 6],
      mode: 2,
    },
    {
      id: 7,
      tekstPitanja: 'Koje romane je napisao Branko Copic?',
      slika: '',
      areaId: 2,
      odgovor1: 'Na Drini cuprija',
      odgovor2: 'Seobe',
      odgovor3: 'Orlovi rano lete',
      odgovor4: 'Magarece godine',
      odgovor5: 'Tvrdjava',
      odgovor6: 'Prokleta avlija',
      tacanOdgovor: [3, 4],
      mode: 2,
    },
  ];

  constructor(private http: HttpClient) {}

  getMultipleChoiceQuestionsFake() {
    return this.multipleChoiceFake;
  }

  async getMultipleChoiceQuestions() {
    const response = await firstValueFrom(
      this.http.get(
        '//localhost:8080/api/oblasti/multiple-choice-pitanje/get-all'
      )
    );
    return response as MultipleChoiceQuestion[];
  }

  deleteMultipleChoice(id: number) {
    return firstValueFrom(
      this.http.delete(
        `http://localhost:8080/api/oblasti/multiple-choice-pitanje/delete/${id}`
      )
    );
  }

  newMultipleChoice(multipleChoice: MultipleChoiceQuestion) {
    const id = multipleChoice.id;
    const body = {
      tekstPitanja: multipleChoice.tekstPitanja,
      slika: multipleChoice.slika,
      oblast: { id: multipleChoice.areaId },
      odgovor1: multipleChoice.odgovor1,
      odgovor2: multipleChoice.odgovor2,
      odgovor3: multipleChoice.odgovor3,
      odgovor4: multipleChoice.odgovor4,
      odgovor5: multipleChoice.odgovor5,
      odgovor6: multipleChoice.odgovor6,
      tacanOdgovor: multipleChoice.tacanOdgovor.toString(),
      mode: multipleChoice.mode,
    };
    console.log(body);
    return firstValueFrom(
      this.http.post(
        'http://localhost:8080/api/oblasti/multiple-choice-pitanje/add',
        body
      )
    );
  }

  editMultipleChoice(multipleChoice: MultipleChoiceQuestion) {
    const id = multipleChoice.id;
    const body = {
      tekstPitanja: multipleChoice.tekstPitanja,
      slika: multipleChoice.slika,
      oblast: { id: multipleChoice.areaId },
      odgovor1: multipleChoice.odgovor1,
      odgovor2: multipleChoice.odgovor2,
      odgovor3: multipleChoice.odgovor3,
      odgovor4: multipleChoice.odgovor4,
      odgovor5: multipleChoice.odgovor5,
      odgovor6: multipleChoice.odgovor6,
      tacanOdgovor: multipleChoice.tacanOdgovor.toString(),
      mode: multipleChoice.mode,
    };
    console.log(body);
    return firstValueFrom(
      this.http.put(
        `http://localhost:8080/api/oblasti/multiple-choice-pitanje/update/${id}`,
        body
      )
    );
  }

  async getMultipleChoiceQuestion(id: number) {
    const response = await firstValueFrom(
      this.http.get(
        `http://localhost:8080/api/oblasti/multiple-choice-pitanje/get-by-id/${id}`
      )
    );

    return response as MultipleChoiceQuestion;
  }

  async getKviz(type: number, areaId: number, mode: number) {
    const response: any[] = (await firstValueFrom(
      this.http.get(
        `http://localhost:8080/api/random-response/questions/${type}/${areaId}/${mode}`
      )
    )) as any;

    return response.map((r) => {
      return { ...r, tacanOdgovor: JSON.parse(`[${r.tacanOdgovor}]`) };
    }) as MultipleChoiceQuestion[];
  }
}
