import { Injectable, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, throwError, BehaviorSubject, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { Login } from '../models/login.model';

@Injectable({
    providedIn: 'root'
})
export class UserService implements OnDestroy {

    $userSubscription: Subscription;
    private currentUserSubject = new BehaviorSubject<any>({});
    currentUser = this.currentUserSubject.asObservable();

    constructor(private apiService: ApiService, private authService: AuthService) { }

    // API service should have all http calls
    // Data service should hold the data

    getUsers() {
        return this.apiService.get(`${environment.users.users}`);
    }

    getUser() {
        return this.authService.getUser();
    }

    // getUser() {
    //     this.$userSubscription = this.apiService.get(`${environment.users.user}`, this.authService.getUserId()).subscribe(
    //         res => this.onGetUserSuccess(res),
    //         err => this.onGetUserError(err)
    //     );
    // }

    // onGetUserSuccess(res) {
    //     console.log('Res >> ', res);
    //     this.currentUserSubject.next(res.doc);
    // }

    // onGetUserError(err) {
    //     console.log('Error >> ', err);
    // }

    createUser() {

    }

    updatedUser(userDetails: Login, id: number) {
        return this.apiService.put(`${environment.users.user}${id}`, userDetails);
    }

    deleteUser() {

    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || 'Server error');
    }

    ngOnDestroy() {
        if (this.$userSubscription) {
            this.$userSubscription.unsubscribe();
        }
    }
}
