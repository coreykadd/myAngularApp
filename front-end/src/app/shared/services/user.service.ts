import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // API service should have all http calls
  // Data service should hold the data

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.api_url}${environment.users.users}`)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getUser() {

  }

  createUser() {

  }

  updatedUser() {

  }

  deleteUser() {

  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error');
  }
}
