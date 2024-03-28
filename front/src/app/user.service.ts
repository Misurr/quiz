import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  addUser(user: User) {
    return firstValueFrom(
      this.http.post('http://localhost:8080/api/user/add', user)
    ).catch((err) => console.log(err));
  }

  getUsers(users: UserQuery): Promise<User[]> {
    let mode: string;
    if (users.mode == 1) {
      mode = 'easy';
    } else if (users.mode == 2) {
      mode = 'medium';
    } else {
      mode = 'hard';
    }

    return firstValueFrom(
      this.http.get(`http://localhost:8080/api/${mode}/${users.tipPitanja}`)
    ) as any;
  }
}

export type User = {
  ime: string;
  tipPitanja: number;
  vrijeme: string;
  brojBodova: number;
  mode: number;
  oblast: { id: number };
};

type UserQuery = {
  tipPitanja: Number;
  mode: number;
};
