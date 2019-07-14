import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);

    this.formSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    } else {
      this.authService.loginUser(this.loginForm.value)
        .subscribe(
          res => this.onLoginSuccess(res),
          err => this.onLoginError(err)
        );
    }
  }

  onLoginSuccess(res) {
    console.log(res);
  }

  onLoginError(err) {
    console.log(err);
  }

  get form() {
    return this.loginForm.controls;
  }

}
