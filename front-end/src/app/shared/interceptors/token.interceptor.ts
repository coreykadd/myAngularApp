import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    const tokenService = this.injector.get(TokenStorageService);
    const tokenReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${tokenService.getEncodedToken('access_token')}`
      }
    });
    return next.handle(tokenReq);
  }
}
