import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { HttpErrorReponse } from './HttpErrorResponse';
import { CommonService } from '../Services/common.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(private commonSVC: CommonService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    if (req.url.includes('Login')) {
      return next.handle(req);
    }


    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${this.commonSVC.getSession('token')}`
      }
    })


    return next.handle(req).pipe(
      catchError((err: HttpErrorReponse) => {
        const errorMsg = err.error.message || err.message || err.statusText;
        return throwError(() => errorMsg);
      })
    );

  }
}
