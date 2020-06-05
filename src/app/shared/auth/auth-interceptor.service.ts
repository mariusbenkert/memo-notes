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
    const modifiedRequest = request.clone({
      headers: request.headers.append(
        'Authorization',
        'Bearer ' + localStorage.getItem('Token')
      ),
    });
    return next.handle(modifiedRequest);
  }
}
