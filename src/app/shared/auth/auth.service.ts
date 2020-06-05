import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
  message: string;
  email: string;
  token: string;
  userId: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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
    );
  }
}
