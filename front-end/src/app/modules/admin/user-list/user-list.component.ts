import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(
        data => this.onGetUsers(data),
        error => this.onError(error)
      );
  }

  onGetUsers(data) {
    this.userList = data;
  }

  onError(error) {
    alert(error);
  }

  OnDestroy() {
    
  }

}
