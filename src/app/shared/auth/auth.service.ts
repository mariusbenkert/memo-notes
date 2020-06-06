import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { User } from './user.model';

interface AuthResponseData {
  message: string;
  user: {
    email: string;
    token: string;
    userId: string;
    username: string;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'http://localhost:5000/api/users/login',
      {
        email,
        password,
      }
    );
  }

  signup(
    email: string,
    name: string,
    password: string,
    passwordConfirm: string
  ) {
    return this.http.post<AuthResponseData>(
      'http://localhost:5000/api/users/signup',
      {
        email,
        name,
        password,
        passwordConfirm,
      }
    ).pipe(tap(responseData => {
      console.log('Tap Response: ', responseData);
      const { user } = responseData;
      this.handleAuthentication(user.email, user.username, user.userId, user.token);
    }));
  }

  private handleAuthentication(email: string, username: string, userId: string, token: string) {
    const user = new User(email, username, userId, token);
    this.user.next(user);
  }
}
