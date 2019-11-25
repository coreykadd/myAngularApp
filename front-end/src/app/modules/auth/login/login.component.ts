import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    formSubmitted = false;
    loginValid: boolean;
    rememberMe = false;

    constructor(private fb: FormBuilder, private router: Router, private authService: AuthService,
                private tokenService: TokenStorageService) { }

    ngOnInit() {
        this.checkUserRole();
        this.createLoginForm();
    }

    createLoginForm() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
        this.formSubmitted = true;

        if (this.loginForm.valid) {
            this.authService.loginUser(this.loginForm.value)
                .subscribe(
                    res => this.onLoginSuccess(res),
                    err => this.onLoginError(err)
                );
        }
    }

    onLoginSuccess(res) {
        this.loginValid = true;
        this.tokenService.saveTokens(res, this.rememberMe);
        this.authService.setIsAuthenticated(true);
        this.authService.getUserRole();
        this.router.navigate(['home']);
    }

    onLoginError(err) {
        this.loginValid = false;
        console.log('error ', err);
    }

    checkUserRole() {
        if (this.authService.getUserRole()) {
            this.authService.setIsAuthenticated(true);
            this.router.navigate(['home']);
        }
    }

    get form() {
        return this.loginForm.controls;
    }

}
