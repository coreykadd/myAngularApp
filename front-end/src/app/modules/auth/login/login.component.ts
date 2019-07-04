import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private router: Router) { }

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
    }

    alert('Login succesful' + JSON.stringify(this.loginForm.value));
    this.router.navigate(['/home']);
  }

  get form() {
    return this.loginForm.controls;
  }

}
