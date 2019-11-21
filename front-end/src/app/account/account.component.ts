import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/shared/models/login.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  account: Login;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAccount();
  }

  getAccount() {
    this.userService.getUser()
      .subscribe(
        data => this.onGetUser(data),
        err => this.onError(err)
      );
  }

  onGetUser(data) {
    this.account = data;
    console.log(this.account);
  }

  onError(err) {
    console.log(err);
  }

}
