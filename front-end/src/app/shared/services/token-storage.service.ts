import { Injectable } from '@angular/core';
import * as jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  saveTokens(tokens, rememerMe) {
    Object.keys(tokens).forEach((key) => {
      if (rememerMe) {
        localStorage.setItem(key, tokens[key]);
      } else {
        sessionStorage.setItem(key, tokens[key]);
      }
    });
  }

  getToken(type) {
    const token = this.getEncodedToken(type);
    return token ? jwtDecode(token) : null;
  }

  getEncodedToken(type) {
    return localStorage.getItem(type) ? localStorage.getItem(type) : sessionStorage.getItem(type);
  }

  destroyTokens() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refresh_token');
}
}
