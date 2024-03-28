import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Area } from './area.model';
import { Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs';

interface ApiArea {
  id: number;
  naziv: string;
  opis: string;
  aktivno: boolean;
  slika: string;
}


@Injectable({
  providedIn: 'root',
})
export class AreaServiceService {
  private apiAdd = 'http://localhost:8080/api/oblasti/add';

  // areaArrayFake: Array<Area> = [
  //   {
  //     id: 1,
  //     title: 'Geografija',
  //     caption: 'opis oblasti..',
  //     active: true,
  //   },
  //   {
  //     id: 2,
  //     title: 'Istorija',
  //     caption: 'opis oblasti..',
  //     active: true,
  //   },
  //   {
  //     id: 3,
  //     title: 'Film',
  //     caption: 'opis oblasti..',
  //     active: true,
  //   },
  //   {
  //     id: 4,
  //     title: 'Serije',
  //     caption: 'opis oblasti..',
  //     active: true,
  //   },
  // ];

  constructor(private http: HttpClient) {}

 // metoda za dohvatanje oblasti
  // getAreas() {
  //   return this.areaArrayFake;
  // }

  async getAreas() {
    const response = (await firstValueFrom(
      this.http.get('http://localhost:8080/api/oblasti ')
    )) as ApiArea[];

    return response.map((area) => {
      return {
        id: area.id,
        title: area.naziv,
        caption: area.opis,
        active: area.aktivno,
        image: area.slika
      };
    });
  }

  //metoda za pravljenje nove oblasti
  newArea(area: Area): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post(this.apiAdd, area, httpOptions);
  }
 

  //metoda za brisanje oblasti
  deleteArea() {}

  //metoda za edit oblasti, promjenu nekih podataka za oblast
  editArea(id: number, area: Area): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  
    const apiUrl = `http://localhost:8080/api/oblasti/update/${id}`; 
  
    return this.http.put(apiUrl, area, httpOptions);
  
  }
}