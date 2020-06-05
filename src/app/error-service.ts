import {  throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { GlobalError } from './global-error';
export function handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      console.log(error.status==404)
      errorMessage = "URL NOT FOUND"
    } else {
      // Server-side errors
      errorMessage = "server error"
    }
    window.alert(errorMessage);
    return throwError(new GlobalError(errorMessage));
  }

