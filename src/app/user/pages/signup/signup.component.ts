import { Router } from '@angular/router';
import { AuthService } from './../../../shared/auth/auth.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [
    './signup.component.css',
    '../../../../styles/label.css',
    '../../../../styles/button.css',
    '../../../../styles/input.css',
    '../../../../styles/form.css',
  ],
})
export class SignupComponent {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  @ViewChild('password', { static: false}) passwordInput: NgForm;
  @ViewChild('passwordConfirm', { static: false}) passwordConfirmInput: NgForm;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log(this.signupForm.value);

    if (!this.signupForm.valid) {
      return;
    }

    const { email, name, password, passwordConfirm } = this.signupForm.value;

    this.isLoading = true;
    this.error = null;

    this.authService.signup(email, name, password, passwordConfirm).subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/editor']);
      },
      (errorMessage) => {
        this.isLoading = false;
        this.error = errorMessage;
        console.log(errorMessage);
      }
    );
    this.passwordInput.reset();
    this.passwordConfirmInput.reset();
  }
}
