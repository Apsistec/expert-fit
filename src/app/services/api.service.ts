import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/users.model';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API path
  BASE_PATH = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }


  // Create a new item
  createItem(item): Observable<User> {
    return this.http
      .post<User>(this.BASE_PATH, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Get single student data by ID
  getItem(id): Observable<User> {
    return this.http
      .get<User>(this.BASE_PATH + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Get students data
  getList(): Observable<User> {
    return this.http
      .get<User>(this.BASE_PATH)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Update item by id
  updateItem(id, item): Observable<User> {
    return this.http
      .put<User>(this.BASE_PATH + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Delete item by id
  deleteItem(id) {
    return this.http
      .delete<User>(this.BASE_PATH + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

}
