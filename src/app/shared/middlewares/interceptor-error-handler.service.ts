import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorErrorHandlerService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = ''

        if (error.status === 401) {
          // refresh token
          return of(null)
        } 
        else{
         if(error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.message}`;
            
          }else{
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          return throwError(() => new Error(errorMessage));
        }
      })
    );    

}
}
