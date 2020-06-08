import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { User } from './user.model';

interface AuthResponseData {
  message: string;
  user: {
    email: string;
    token: string;
    userId: string;
    username: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>('http://localhost:5000/api/users/login', {
        email,
        password,
      })
      .pipe(
        catchError(this.handleError),
        tap((responseData) => {
          this.handleAuthentication(
            responseData.user.email,
            responseData.user.username,
            responseData.user.userId,
            responseData.user.token
          );
        })
      );
  }

  signup(
    email: string,
    name: string,
    password: string,
    passwordConfirm: string
  ) {
    return this.http
      .post<AuthResponseData>('http://localhost:5000/api/users/signup', {
        email,
        name,
        password,
        passwordConfirm,
      })
      .pipe(
        catchError(this.handleError),
        tap((responseData) => {
          this.handleAuthentication(
            responseData.user.email,
            responseData.user.username,
            responseData.user.userId,
            responseData.user.token
          );
        })
      );
  }

  logout() {
    console.log('logout!');
  }

  private handleAuthentication(
    email: string,
    username: string,
    userId: string,
    token: string
  ) {
    const user = new User(email, username, userId, token);
    this.user.next(user);
    const userData = {
      userId,
      token,
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    //TODO: expiration time berechnen
    // und autologout!!
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    if (!errorRes.error || !errorRes.error.message) {
      return throwError(errorMessage);
    }

    errorMessage = errorRes.error.message;
    return throwError(errorMessage);
  }
}
