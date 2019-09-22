import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    } else {
      this.authService.registerUser(this.registerForm.value)
      .subscribe(
        res => this.onRegisterSuccess(res),
        err => this.onRegisterError(err)
      );
    }
  }

  onRegisterSuccess(res): void {
    alert('You are now registered');
    console.log(res);
  }

  onRegisterError(err: any): void {
    alert(err);
    console.log(err);
  }

  get form() {
    return this.registerForm.controls;
  }

}
