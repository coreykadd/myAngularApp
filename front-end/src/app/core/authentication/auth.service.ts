import { Injectable } from '@angular/core';
import { Login } from 'src/app/shared/models/login.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    return true;
  }
}
