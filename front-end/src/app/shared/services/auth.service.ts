import { Injectable } from '@angular/core';
import { Login } from 'src/app/shared/models/login.model';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
import { TokenStorageService } from './token-storage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private apiService: ApiService, private tokenService: TokenStorageService) { }

  registerUser(userCredentials: Login) {
    return this.apiService.post(`${environment.users.register}`, userCredentials);
  }

  loginUser(userCredentials: Login) {
    return this.apiService.post(`${environment.users.login}`, userCredentials);
  }

  getUserId() {
    const token = this.getToken('access_token');
    return token ? token.subject : undefined;
  }

  getUserRole() {
    const token = this.getToken('access_token');
    return token ? token.role : undefined;
  }

  getToken(type) {
    const token = this.tokenService.getToken(type);

    if (token && !this.isTokenExpired(token)) {
      return token;
    } else {
      return null;
    }
  }

  isTokenExpired(token) {
    const date = new Date(token.exp * 1000);
    return date ? (date.valueOf() < new Date().valueOf()) : false;
  }

  setIsAuthenticated(isAuthenticated) {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

  getIsAuthenticated() {
    return this.isAuthenticatedSubject.value;
  }

  logoutUser() {
    this.tokenService.destroyTokens();
    this.setIsAuthenticated(false);
  }
}
