import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Login } from 'src/app/shared/models/login.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  getUsers() {
    
  }

  getUser() {

  }

  createUser() {

  }

  updateUser() {

  }

  deleteUser() {

  }
}
