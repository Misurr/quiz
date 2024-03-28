import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleChoiceQuestion } from './single-choice-questions.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SingleChoiceQuestionsServiceService {
  
  singleChoiceFake: Array<SingleChoiceQuestion> = [
    {
      id: 1,
      tekstPitanja: 'Ko je Harry Potter??',
      slika:
        'https://upload.wikimedia.org/wikipedia/hr/4/44/HarryPotter5poster.jpg',
      areaId: 3,
      odgovor1: 'Fudbaler',
      odgovor2: 'Pjevač',
      odgovor3: 'Glumac',
      odgovor4: 'Čarobnjak',
      tacanOdgovor: 4,
      mode: 2,
    },
    {
      id: 2,
      tekstPitanja: 'Koliko je 2 + 2 ?',
      slika: '',
      areaId: 1,
      odgovor1: '4',
      odgovor2: '5',
      odgovor3: '3',
      odgovor4: '2',
      tacanOdgovor: 1,
      mode: 1,
    },
    {
      id: 3,
      tekstPitanja: 'Koliko puta se zenio Ross iz serije prijatelji?',
      slika: '',
      areaId: 3,
      odgovor1: 'Jednom',
      odgovor2: 'Dva puta',
      odgovor3: 'Tri puta',
      odgovor4: 'Cetiri puta',
      tacanOdgovor: 3,
      mode: 1,
    },
    {
      id: 4,
      tekstPitanja: 'Ko je Chandlerova zena u seriji Prijatelji?',
      slika: '',
      areaId: 4,
      odgovor1: 'Monica',
      odgovor2: 'Phoebe',
      odgovor3: 'Rachel',
      odgovor4: 'Emily',
      tacanOdgovor: 1,
      mode: 3,
    },
    {
      id: 5,
      tekstPitanja: 'Koliko ima relikvija smrti?',
      slika: '',
      areaId: 4,
      odgovor1: '4',
      odgovor2: '5',
      odgovor3: '2',
      odgovor4: '3',
      tacanOdgovor: 4,
      mode: 3,
    },
    {
      id: 6,
      tekstPitanja: 'Ko je napisao Harry Potter?',
      slika: '',
      areaId: 4,
      odgovor1: 'J. K. Rowling',
      odgovor2: 'Tolkin',
      odgovor3: 'Fredrik Bakman',
      odgovor4: 'Stephen King',
      tacanOdgovor: 1,
      mode: 3,
    },
    {
      id: 7,
      tekstPitanja: 'Ko glumi glavnu ulogu u filmu Covek po imenu Uve?',
      slika: '',
      areaId: 4,
      odgovor1: 'Johny Depp',
      odgovor2: 'Brad Pitt',
      odgovor3: 'Richard Gere',
      odgovor4: 'Tom Hanks',
      tacanOdgovor: 4,
      mode: 3,
    },
    {
      id: 8,
      tekstPitanja: 'Pitanje 9',
      slika: '',
      areaId: 4,
      odgovor1: 'Odgovor 1',
      odgovor2: 'Odgovor 2',
      odgovor3: 'Odgovor 3',
      odgovor4: 'Odgovor4',
      tacanOdgovor: 1,
      mode: 3,
    },
    {
      id: 9,
      tekstPitanja: 'Pitanje 10',
      slika: '',
      areaId: 4,
      odgovor1: 'Odgovor 1',
      odgovor2: 'Odgovor 2',
      odgovor3: 'Odgovor 3',
      odgovor4: 'Odgovor4',
      tacanOdgovor: 1,
      mode: 3,
    },
  ];
  constructor(private http: HttpClient) {}

  // Dohvatanje iz "fake" niza:

  // getSingleChoiceQuestions() {
  //   return this.singleChoiceFake;
  // }

  async getSingleChoiceQuestions() {
    const response = await firstValueFrom(
      this.http.get(
        'http://localhost:8080/api/oblasti/single-choice-pitanje/get-all'
      )
    );

    return response as SingleChoiceQuestion[];
  }

  deleteSingleChoice(id: number) {
    this.http
      .delete(
        `http://localhost:8080/api/oblasti/single-choice-pitanje/delete/${id}`
      )
      .subscribe();
  }

  async newSingleChoice(singleChoice: SingleChoiceQuestion) {
    const body = {
      tekstPitanja: singleChoice.tekstPitanja,
      odgovor1: singleChoice.odgovor1,
      odgovor2: singleChoice.odgovor2,
      odgovor3: singleChoice.odgovor3,
      odgovor4: singleChoice.odgovor4,
      tacanOdgovor: singleChoice.tacanOdgovor,
      mode: singleChoice.mode,
      oblast: { id: singleChoice.areaId },
      slika: singleChoice.slika,
    };
    console.log(body);
    return firstValueFrom(
      this.http.post(
        'http://localhost:8080/api/oblasti/single-choice-pitanje/add',
        body
      )
    );
  }

  editSingleChoice(singleChoice: SingleChoiceQuestion) {
    const id = singleChoice.id;
    const body = {
      tekstPitanja: singleChoice.tekstPitanja,
      odgovor1: singleChoice.odgovor1,
      odgovor2: singleChoice.odgovor2,
      odgovor3: singleChoice.odgovor3,
      odgovor4: singleChoice.odgovor4,
      tacanOdgovor: singleChoice.tacanOdgovor,
      mode: singleChoice.mode,
      oblast: { id: singleChoice.areaId },
      slika: singleChoice.slika,
    };
    console.log(body);
    return firstValueFrom(
      this.http.put(
        `http://localhost:8080/api/oblasti/single-choice-pitanje/update/${id}`,
        body
      )
    );
  }

  async getSingleChoiceQuestion(id: number) {
    const response = await firstValueFrom(
      this.http.get(
        `http://localhost:8080/api/oblasti/single-choice-pitanje/get-by-id/${id}`
      )
    );

    return response as SingleChoiceQuestion;
  }

  async getKviz(type: number, areaId: number, mode: number) {
    const response = await firstValueFrom(
      this.http.get(
        `http://localhost:8080/api/random-response/questions/${type}/${areaId}/${mode}`
      )
    );
    return response as SingleChoiceQuestion[];
  }
}
