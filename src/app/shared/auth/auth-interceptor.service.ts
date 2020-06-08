import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData || userData.token) {
      const modifiedRequest = request.clone({
        headers: request.headers.append(
          'Authorization',
          'Bearer ' + userData.token
        ),
      });
      return next.handle(modifiedRequest);
    }

    return next.handle(request);
  }
}
