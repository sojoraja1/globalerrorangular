import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import {handleError} from './error-service';
@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  constructor(private http:HttpClient) { }


  fetchdata(){

   return this.http.get('https://reqdsdres.in/api/user/2').pipe(catchError(handleError));

      

  }
 
}
