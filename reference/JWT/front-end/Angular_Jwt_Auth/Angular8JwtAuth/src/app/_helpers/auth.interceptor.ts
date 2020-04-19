/*5-->HttpInterceptor has intercept() method to inspect and transform HTTP requests before
they are sent to server.

AuthInterceptor implements HttpInterceptor. We’re gonna add Authorization header
with ‘Bearer’ prefix to the token.

6-->index.html */

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../_services/token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ];

  /*intercept() gets HTTPRequest object, change it and forward to HttpHandler object’s handle() method.
  It transforms HTTPRequest object into an Observable<HttpEvents>.

next: HttpHandler object represents the next interceptor in the chain of interceptors.
The final ‘next’ in the chain is the Angular HttpClient.*/