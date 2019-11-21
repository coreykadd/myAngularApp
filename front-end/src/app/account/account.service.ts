import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Login } from 'src/app/shared/models/login.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private apiService: ApiService) { }

  updateAccount(accountDetails: Login) {
    this.apiService.put(environment.users.user, accountDetails);
  }
}
