import { Injectable } from '@angular/core';
import { Login } from 'src/app/shared/models/login.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser = null;

  constructor(private http: HttpClient) { }

  registerUser(userCredentials) {
    return this.http.post<Login>(`${environment.api_url}${environment.users.register}`, userCredentials);
  }

  loginUser(userCredentials) {
    return this.http.post<Login>(`${environment.api_url}${environment.users.login}`, userCredentials);
  }

  isLoggedIn(): boolean {
    return this.currentUser != null;
  }
}
