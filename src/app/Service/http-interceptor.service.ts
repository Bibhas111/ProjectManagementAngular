import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { stringify } from 'querystring';
import { finalize, tap } from 'rxjs/operators';
import{ CommonServiceService } from './common-service.service';
@Injectable({
  providedIn: 'root'
})

export class HttpConfigInterceptor implements HttpInterceptor {
  userName:any;
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const startTime = Date.now();
    let status: string;
    
    return next.handle(req).pipe(
        tap(
          event => {
            status = '';
            if (event instanceof HttpResponse) {
              status = 'succeeded';
              this.userName=event.headers.get('UserName');
            }
          },
          error => status = 'failed'
        ),
        finalize(() => {
          const elapsedTime = Date.now() - startTime;
          const message = req.method + " " + req.urlWithParams +" "+ status 
          + " in " + elapsedTime + "ms";
          
          this.logDetails(message);
        })
    );
  }
  private logDetails(msg: string) {
    console.log("Log Messages :===="+msg);
  }
} 