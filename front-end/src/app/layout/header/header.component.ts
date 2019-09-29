import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // isLoggedIn = false;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    // this.isLoggedIn = this.authService.isAuthenticated;
  }

  logout() {
    this.authService.logoutUser();
  }


}
