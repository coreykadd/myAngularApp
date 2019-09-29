import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private tokenService: TokenStorageService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.getIsAuthenticated()) {
      console.log('Is logged in', this.authService.getIsAuthenticated());
      return true;
    } else {
      console.log('Not logged in', this.authService.getIsAuthenticated());
      return this.router.navigate(['/login']);
    }
  }
}
